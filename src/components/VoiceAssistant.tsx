import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Loader2, Play, Pause, SkipForward, SkipBack, MessageCircle } from "lucide-react";
import { RealtimeChat } from "@/utils/RealtimeAudio";
import { motion, AnimatePresence } from "framer-motion";
import { MockupViewer } from "@/components/tour/MockupViewer";
import { tourSteps, getTourDuration } from "@/utils/tourSteps";
import { Progress } from "@/components/ui/progress";

interface VoiceAssistantProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode?: "tour" | "chat";
}

export const VoiceAssistant = ({ open, onOpenChange, mode = "chat" }: VoiceAssistantProps) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ role: 'user' | 'assistant', text: string }>>([]);
  const chatRef = useRef<RealtimeChat | null>(null);
  
  // Tour mode states
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(mode === "tour");
  const [tourProgress, setTourProgress] = useState(0);
  const [currentMode, setCurrentMode] = useState<"tour" | "chat">(mode);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMessage = (event: any) => {
    console.log('Received message:', event);
    
    if (event.type === 'response.audio_transcript.delta') {
      const delta = event.delta || '';
      setTranscript(prev => {
        const newTranscript = [...prev];
        if (newTranscript.length > 0 && newTranscript[newTranscript.length - 1].role === 'assistant') {
          newTranscript[newTranscript.length - 1].text += delta;
        } else {
          newTranscript.push({ role: 'assistant', text: delta });
        }
        return newTranscript;
      });
    } else if (event.type === 'conversation.item.input_audio_transcription.completed') {
      const userText = event.transcript || '';
      if (userText.trim()) {
        setTranscript(prev => [...prev, { role: 'user', text: userText }]);
      }
    } else if (event.type === 'response.audio.delta') {
      setIsSpeaking(true);
    } else if (event.type === 'response.audio.done') {
      setIsSpeaking(false);
      
      // Auto advance tour if playing
      if (currentMode === "tour" && isPlaying) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          handleNextStep();
        }, 1500);
      }
    } else if (event.type === 'input_audio_buffer.speech_started') {
      setIsListening(true);
    } else if (event.type === 'input_audio_buffer.speech_stopped') {
      setIsListening(false);
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex < tourSteps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const switchToChat = () => {
    setCurrentMode("chat");
    setIsPlaying(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Auto-send tour step narration when step changes
  useEffect(() => {
    if (currentMode === "tour" && isConnected && isPlaying && chatRef.current) {
      const currentStep = tourSteps[currentStepIndex];
      console.log('Sending tour step narration:', currentStep.narration);
      chatRef.current.sendMessage(currentStep.narration);
    }
  }, [currentStepIndex, currentMode, isConnected, isPlaying]);

  // Update progress
  useEffect(() => {
    if (currentMode === "tour") {
      const progress = ((currentStepIndex + 1) / tourSteps.length) * 100;
      setTourProgress(progress);
    }
  }, [currentStepIndex, currentMode]);

  const startConversation = async () => {
    try {
      setIsLoading(true);
      
      // Request microphone permission first
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      chatRef.current = new RealtimeChat(handleMessage);
      await chatRef.current.init();
      
      setIsConnected(true);
    } catch (error) {
      console.error('Error starting conversation:', error);
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
    if (open) {
      startConversation();
    } else {
      endConversation();
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [open]);

  const currentStep = tourSteps[currentStepIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="flex items-center justify-between">
            <span>
              {currentMode === "tour" ? "Tour Guiado Interativo" : "Assistente Virtual de IA"}
            </span>
            <div className="flex items-center gap-2">
              {currentMode === "tour" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={switchToChat}
                  className="text-xs"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Modo Livre
                </Button>
              )}
              {isConnected && (
                <span className="text-sm text-green-500 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Conectado
                </span>
              )}
              {isLoading && (
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Iniciando...
                </span>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className={`${currentMode === "tour" ? "grid grid-cols-2 gap-6 p-6" : "space-y-4 p-6"}`}>
          {/* Tour Mode: Mockup Viewer */}
          {currentMode === "tour" && (
            <div className="h-[500px]">
              <MockupViewer
                currentStep={currentStepIndex}
                mockupUrl={currentStep.mockupUrl}
                highlights={currentStep.highlights}
              />
              
              {/* Tour Progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Passo {currentStepIndex + 1} de {tourSteps.length}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {currentStep.title}
                  </span>
                </div>
                <Progress value={tourProgress} className="h-2" />
              </div>
            </div>
          )}

          {/* Transcript */}
          <div className={`${currentMode === "tour" ? "h-[500px]" : "min-h-[300px] max-h-[400px]"} overflow-y-auto p-4 border rounded-lg bg-muted/30`}>
            <AnimatePresence mode="popLayout">
              {transcript.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-3 ${
                    message.role === 'user' 
                      ? 'text-right' 
                      : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">
                      {message.role === 'user' ? 'Você' : 'Assistente'}
                    </p>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {transcript.length === 0 && !isLoading && (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p className="text-center">
                  {currentMode === "tour" 
                    ? "Iniciando o tour guiado... Prepare-se para conhecer todas as funcionalidades!"
                    : "Fale comigo! Estou aqui para demonstrar o aplicativo de gestão de clubes esportivos."
                  }
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Tour Controls */}
        {currentMode === "tour" && (
          <div className="px-6 pb-4">
            <div className="flex items-center justify-center gap-2">
              <Button
                onClick={handlePreviousStep}
                variant="outline"
                size="icon"
                disabled={currentStepIndex === 0}
              >
                <SkipBack className="h-4 w-4" />
              </Button>
              
              <Button
                onClick={togglePlayPause}
                variant="default"
                size="icon"
                className="h-12 w-12"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Button>
              
              <Button
                onClick={handleNextStep}
                variant="outline"
                size="icon"
                disabled={currentStepIndex === tourSteps.length - 1}
              >
                <SkipForward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Status Bar */}
        <div className="flex items-center justify-between p-4 mx-6 mb-6 border rounded-lg bg-background">
          <div className="flex items-center gap-4">
            {isListening && (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-primary rounded-full"
                      animate={{
                        height: [10, 20, 10],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-primary font-medium">Ouvindo...</span>
              </div>
            )}
            {isSpeaking && (
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-secondary rounded-full"
                      animate={{
                        height: [10, 20, 10],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-secondary-foreground font-medium">Falando...</span>
              </div>
            )}
            {!isListening && !isSpeaking && isConnected && (
              <span className="text-sm text-muted-foreground">Aguardando...</span>
            )}
          </div>
          
          <Button
            onClick={endConversation}
            variant="destructive"
            size="sm"
          >
            <PhoneOff className="h-4 w-4 mr-2" />
            Encerrar {currentMode === "tour" ? "Tour" : "Chamada"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
