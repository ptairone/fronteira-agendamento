import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PadelClockProps {
  isPriorityTime: boolean;
}

export const PadelClock = ({ isPriorityTime }: PadelClockProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time in -03:00 timezone (Brasília)
  const formatTime = (date: Date) => {
    // Get UTC time and subtract 3 hours for Brasília (UTC-3)
    const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
    const brasiliaTime = new Date(utcTime + (-3 * 3600000));

    const hours = brasiliaTime.getUTCHours().toString().padStart(2, '0');
    const minutes = brasiliaTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = brasiliaTime.getUTCSeconds().toString().padStart(2, '0');
    const day = brasiliaTime.getUTCDate().toString().padStart(2, '0');
    const month = (brasiliaTime.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = brasiliaTime.getUTCFullYear();

    return {
      time: `${hours}:${minutes}:${seconds}`,
      date: `${day}/${month}/${year}`
    };
  };

  const { time, date } = formatTime(currentTime);

  return (
    <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary animate-pulse" />
            <div>
              <div className="text-2xl font-bold tracking-tight">{time}</div>
              <div className="text-sm text-muted-foreground">{date} (GMT-03:00)</div>
            </div>
          </div>
          {isPriorityTime && (
            <div className="flex items-center gap-2 px-4 py-2 bg-warning/20 border border-warning/40 rounded-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-warning"></span>
              </span>
              <span className="text-sm font-semibold text-warning-foreground">
                Fila Ativa (21h-07h)
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
