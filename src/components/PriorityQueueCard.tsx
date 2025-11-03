import { Users, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PriorityQueueCardProps {
  queuePosition: number | null;
  totalInQueue: number;
  estimatedWaitMinutes: number;
  onJoinQueue: () => void;
  onLeaveQueue: () => void;
  isInQueue: boolean;
}

export const PriorityQueueCard = ({
  queuePosition,
  totalInQueue,
  estimatedWaitMinutes,
  onJoinQueue,
  onLeaveQueue,
  isInQueue,
}: PriorityQueueCardProps) => {
  return (
    <Card className="border-warning/40 bg-warning/5 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-warning-foreground">
          <Users className="h-5 w-5" />
          Fila de Prioridade Ativa
        </CardTitle>
        <CardDescription>
          Sistema de reserva por ordem de chegada durante horário de pico
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isInQueue ? (
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Durante o horário de pico (21:00-07:00), as reservas funcionam por fila de prioridade.
              Entre na fila para garantir sua vez!
            </p>
            <Button 
              onClick={onJoinQueue}
              className="w-full"
              size="lg"
            >
              Entrar na Fila de Prioridade
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-background rounded-lg">
                <TrendingUp className="h-5 w-5 mx-auto mb-1 text-primary" />
                <div className="text-2xl font-bold">{queuePosition}º</div>
                <div className="text-xs text-muted-foreground">Sua Posição</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <Users className="h-5 w-5 mx-auto mb-1 text-secondary" />
                <div className="text-2xl font-bold">{totalInQueue}</div>
                <div className="text-xs text-muted-foreground">Na Fila</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <Clock className="h-5 w-5 mx-auto mb-1 text-accent" />
                <div className="text-2xl font-bold">~{estimatedWaitMinutes}m</div>
                <div className="text-xs text-muted-foreground">Estimativa</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 bg-primary/10 rounded-lg">
              <div className="animate-pulse h-2 w-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">
                {queuePosition === 1 
                  ? "Preparando sua vez..." 
                  : `${queuePosition - 1} pessoa(s) à sua frente`}
              </span>
            </div>

            <Button 
              onClick={onLeaveQueue}
              variant="outline"
              className="w-full"
            >
              Sair da Fila
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
