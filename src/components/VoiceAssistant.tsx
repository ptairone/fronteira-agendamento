import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, X, Volume2 } from 'lucide-react';
import { RealtimeChat } from '@/utils/RealtimeAudio';
import { useToast } from '@/hooks/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface VoiceAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VoiceAssistant = ({ open, onOpenChange }: VoiceAssistantProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<RealtimeChat | null>(null);
  const { toast } = useToast();

  const handleMessage = (event: any) => {
    console.log('Event received:', event.type);
    
    switch (event.type) {
      case 'session.created':
        console.log('Session created successfully');
        break;
        
      case 'response.audio.delta':
        setIsSpeaking(true);
        break;
        
      case 'response.audio.done':
        setIsSpeaking(false);
        break;
        
      case 'conversation.item.input_audio_transcription.completed':
        if (event.transcript) {
          setTranscript(prev => [...prev, `Você: ${event.transcript}`]);
        }
        break;
        
      case 'response.audio_transcript.delta':
        if (event.delta) {
          setTranscript(prev => {
            const newTranscript = [...prev];
            const lastIndex = newTranscript.length - 1;
            
            if (lastIndex >= 0 && newTranscript[lastIndex].startsWith('Assistente:')) {
              newTranscript[lastIndex] += event.delta;
            } else {
              newTranscript.push(`Assistente: ${event.delta}`);
            }
            
            return newTranscript;
          });
        }
        break;
        
      case 'input_audio_buffer.speech_started':
        setIsListening(true);
        break;
        
      case 'input_audio_buffer.speech_stopped':
        setIsListening(false);
        break;
        
      case 'error':
        console.error('OpenAI error:', event.error);
        toast({
          title: "Erro",
          description: event.error?.message || "Ocorreu um erro",
          variant: "destructive",
        });
        break;
    }
  };

  const startConversation = async () => {
    try {
      setIsLoading(true);
      
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      chatRef.current = new RealtimeChat(handleMessage);
      await chatRef.current.init();
      
      setIsConnected(true);
      setTranscript(['Assistente: Olá! Sou seu assistente virtual. Como posso demonstrar o sistema para você hoje?']);
      
      toast({
        title: "Conectado",
        description: "Assistente de voz pronto. Pode começar a falar!",
      });
    } catch (error) {
      console.error('Error starting conversation:', error);
      toast({
        title: "Erro ao conectar",
        description: error instanceof Error ? error.message : 'Não foi possível conectar ao assistente',
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const endConversation = () => {
    chatRef.current?.disconnect();
    setIsConnected(false);
    setIsSpeaking(false);
    setIsListening(false);
    setTranscript([]);
  };

  useEffect(() => {
    if (open && !isConnected && !isLoading) {
      startConversation();
    }
    
    return () => {
      if (!open) {
        endConversation();
      }
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 overflow-hidden bg-gradient-to-br from-background to-background/95">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-border/50 bg-background/50 backdrop-blur-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isSpeaking ? 'bg-primary/20 animate-pulse' : 'bg-primary/10'
                }`}>
                  <Volume2 className={`w-6 h-6 ${isSpeaking ? 'text-primary' : 'text-primary/70'}`} />
                </div>
                {isSpeaking && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-lg">Assistente Virtual</h3>
                <p className="text-sm text-muted-foreground">
                  {isLoading ? 'Conectando...' : isConnected ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Transcript Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {transcript.map((message, index) => {
                const isAssistant = message.startsWith('Assistente:');
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        isAssistant
                          ? 'bg-primary/10 text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {message.replace(/^(Assistente:|Você:)\s*/, '')}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Status Bar */}
          <div className="px-6 py-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {isListening ? (
                    <Mic className="w-5 h-5 text-primary animate-pulse" />
                  ) : (
                    <MicOff className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {isListening ? 'Ouvindo...' : isSpeaking ? 'Assistente falando...' : 'Aguardando...'}
                  </span>
                </div>
                
                {/* Audio Visualizer */}
                {(isListening || isSpeaking) && (
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-primary rounded-full"
                        animate={{
                          height: [4, 20, 4],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <Button
                onClick={endConversation}
                variant="destructive"
                size="sm"
                disabled={!isConnected}
              >
                Encerrar Chamada
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
