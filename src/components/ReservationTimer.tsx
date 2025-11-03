import { useEffect } from "react";
import { AlertTriangle, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ReservationTimerProps {
  timeRemaining: number;
  onTimeout: () => void;
}

export const ReservationTimer = ({ timeRemaining, onTimeout }: ReservationTimerProps) => {
  const progressPercentage = (timeRemaining / 60) * 100;
  const isUrgent = timeRemaining <= 20;

  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeout();
    }
  }, [timeRemaining, onTimeout]);

  const getColorClass = () => {
    if (timeRemaining > 40) return "text-success";
    if (timeRemaining > 20) return "text-warning";
    return "text-destructive";
  };

  const getProgressColor = () => {
    if (timeRemaining > 40) return "bg-success";
    if (timeRemaining > 20) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <Card className={`border-2 ${isUrgent ? 'border-destructive animate-pulse' : 'border-success'} shadow-lg`}>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className={`h-6 w-6 ${getColorClass()}`} />
            <h3 className="text-xl font-bold">SUA VEZ!</h3>
          </div>
          <div className={`text-4xl font-bold tabular-nums ${getColorClass()}`}>
            {timeRemaining}s
          </div>
        </div>

        <div className="space-y-2">
          <Progress 
            value={progressPercentage} 
            className="h-3"
          />
          <style>{`
            [role="progressbar"] > div {
              ${getProgressColor().replace('bg-', 'background-color: hsl(var(--')}));
            }
          `}</style>
        </div>

        {isUrgent && (
          <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/40 rounded-lg animate-pulse">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <span className="text-sm font-semibold text-destructive-foreground">
              Atenção! Tempo acabando! Selecione quadra e horário rapidamente!
            </span>
          </div>
        )}

        <p className="text-sm text-muted-foreground text-center">
          Você tem 1 minuto para concluir sua reserva
        </p>
      </CardContent>
    </Card>
  );
};
