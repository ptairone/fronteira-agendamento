import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import DemoBadge from "@/components/presentation/DemoBadge";
import SportCard from "@/components/presentation/SportCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";
import { sports as sportsData, sportColors, mockReservations } from "@/data/mockData";
import { PadelClock } from "@/components/PadelClock";
import { PriorityQueueCard } from "@/components/PriorityQueueCard";
import { ReservationTimer } from "@/components/ReservationTimer";

const sports = sportsData.map(s => ({
  id: s.id,
  name: s.name,
  courts: Array.from({ length: s.courts }, (_, i) => `Quadra ${i + 1}`),
  color: s.color,
  textColor: s.textColor,
  icon: s.icon,
}));

const timeSlots = [
  "07:00 - 08:00", "08:00 - 09:00", "09:00 - 10:00", "10:00 - 11:00",
  "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00",
  "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00", "18:00 - 19:00",
  "19:00 - 20:00", "20:00 - 21:00", "21:00 - 22:00"
];

const Associate = () => {
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedCourt, setSelectedCourt] = useState<string>("");
  const [reservedSlots, setReservedSlots] = useState<Set<string>>(new Set());
  
  // Priority queue states
  const [isPriorityTime, setIsPriorityTime] = useState(false);
  const [isInQueue, setIsInQueue] = useState(false);
  const [queuePosition, setQueuePosition] = useState<number | null>(null);
  const [totalInQueue, setTotalInQueue] = useState(0);
  const [hasReservationSlot, setHasReservationSlot] = useState(false);
  const [reservationTimer, setReservationTimer] = useState(60);

  // Check if current time is in priority hours (21:00 - 07:00)
  useEffect(() => {
    const checkPriorityTime = () => {
      const now = new Date();
      // Get UTC time and convert to Brasília time (UTC-3)
      const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
      const brasiliaTime = new Date(utcTime + (-3 * 3600000));
      const hours = brasiliaTime.getUTCHours();
      
      // Priority time: 21:00 to 07:00
      const isPriority = hours >= 21 || hours < 7;
      setIsPriorityTime(isPriority);
    };

    checkPriorityTime();
    const interval = setInterval(checkPriorityTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Simulate queue advancement
  useEffect(() => {
    if (!isInQueue || !queuePosition || hasReservationSlot) return;

    const advanceInterval = setInterval(() => {
      setQueuePosition((prev) => {
        if (prev === null || prev <= 1) {
          // It's your turn!
          setHasReservationSlot(true);
          setReservationTimer(60);
          toast.success("É sua vez! Você tem 60 segundos para fazer sua reserva!", {
            duration: 5000,
          });
          // Play notification sound
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYHGGm98OScTgwOUKXh8bhmHgU7k9nyz3gsBS');
          audio.volume = 0.3;
          audio.play().catch(() => {}); // Ignore errors if audio doesn't play
          return prev;
        }
        return prev - 1;
      });
    }, 12000); // Advance every 12 seconds

    return () => clearInterval(advanceInterval);
  }, [isInQueue, queuePosition, hasReservationSlot]);

  // Countdown reservation timer
  useEffect(() => {
    if (!hasReservationSlot) return;

    if (reservationTimer <= 0) {
      handleTimeout();
      return;
    }

    const countdown = setInterval(() => {
      setReservationTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [hasReservationSlot, reservationTimer]);

  const handleJoinQueue = () => {
    const randomPosition = Math.floor(Math.random() * 5) + 1;
    const randomTotal = randomPosition + Math.floor(Math.random() * 8);
    setQueuePosition(randomPosition);
    setTotalInQueue(randomTotal);
    setIsInQueue(true);
    toast.success(`Você entrou na fila! Posição: ${randomPosition}º`);
  };

  const handleLeaveQueue = () => {
    setIsInQueue(false);
    setQueuePosition(null);
    setHasReservationSlot(false);
    setReservationTimer(60);
    toast.info("Você saiu da fila");
  };

  const handleTimeout = () => {
    toast.error("Tempo esgotado! Você voltou ao final da fila.", {
      duration: 5000,
    });
    setHasReservationSlot(false);
    setReservationTimer(60);
    setQueuePosition((totalInQueue || 5) + 1);
  };

  const handleSlotClick = (slot: string) => {
    if (!selectedSport || !selectedCourt) {
      toast.error("Selecione o esporte e a quadra primeiro");
      return;
    }

    // Check if in priority time and it's Padel
    if (isPriorityTime && selectedSport === "padel" && !hasReservationSlot) {
      toast.error("Durante o horário de pico, você precisa estar na fila para reservar!");
      return;
    }

    const newReserved = new Set(reservedSlots);
    if (newReserved.has(slot)) {
      newReserved.delete(slot);
      toast.info(`Reserva cancelada: ${slot}`);
    } else {
      newReserved.add(slot);
      toast.success(`Horário reservado: ${slot}`);
      
      // If it was a priority time reservation, complete the process
      if (hasReservationSlot && isPriorityTime && selectedSport === "padel") {
        setHasReservationSlot(false);
        setIsInQueue(false);
        setQueuePosition(null);
        toast.success("Reserva concluída com sucesso! ✅", {
          duration: 3000,
        });
      }
    }
    setReservedSlots(newReserved);
  };

  const selectedSportData = sports.find(s => s.id === selectedSport);
  const isPadelSelected = selectedSport === "padel";
  const showPriorityQueue = isPadelSelected && isPriorityTime;
  const estimatedWaitMinutes = queuePosition ? (queuePosition - 1) * 2 : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Painel do Associado</h1>
            <p className="text-muted-foreground mt-2">Reserve suas quadras e horários</p>
          </div>
          <DemoBadge />
        </div>

        {/* Padel Clock - Only show for Padel */}
        {isPadelSelected && (
          <div className="mb-6">
            <PadelClock isPriorityTime={isPriorityTime} />
          </div>
        )}

        {/* Priority Queue Card - Only show during priority time for Padel */}
        {showPriorityQueue && !hasReservationSlot && (
          <div className="mb-6">
            <PriorityQueueCard
              queuePosition={queuePosition}
              totalInQueue={totalInQueue}
              estimatedWaitMinutes={estimatedWaitMinutes}
              onJoinQueue={handleJoinQueue}
              onLeaveQueue={handleLeaveQueue}
              isInQueue={isInQueue}
            />
          </div>
        )}

        {/* Reservation Timer - Only show when it's user's turn */}
        {hasReservationSlot && isPadelSelected && isPriorityTime && (
          <div className="mb-6">
            <ReservationTimer
              timeRemaining={reservationTimer}
              onTimeout={handleTimeout}
            />
          </div>
        )}

        {/* Selection Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Selecione o Esporte
              </CardTitle>
              <CardDescription>Escolha a modalidade desejada</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha um esporte" />
                </SelectTrigger>
                <SelectContent>
                  {sports.map(sport => (
                    <SelectItem key={sport.id} value={sport.id}>
                      {sport.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Selecione a Quadra/Campo
              </CardTitle>
              <CardDescription>
                {selectedSport ? "Escolha a quadra disponível" : "Selecione o esporte primeiro"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select 
                value={selectedCourt} 
                onValueChange={setSelectedCourt}
                disabled={!selectedSport}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha uma quadra" />
                </SelectTrigger>
                <SelectContent>
                  {selectedSportData?.courts.map(court => (
                    <SelectItem key={court} value={court}>
                      {court}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Time Slots */}
        {selectedSport && selectedCourt && (!showPriorityQueue || hasReservationSlot) && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Horários Disponíveis</CardTitle>
              <CardDescription>
                {selectedSportData?.name} - {selectedCourt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {timeSlots.map(slot => {
                  const isReserved = reservedSlots.has(slot);
                  return (
                    <Button
                      key={slot}
                      onClick={() => handleSlotClick(slot)}
                      variant={isReserved ? "default" : "outline"}
                      className={`h-16 transition-all duration-300 ${
                        isReserved 
                          ? "bg-success hover:bg-success/90 text-success-foreground shadow-md" 
                          : "hover:border-primary hover:bg-primary/5"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <Clock className="h-4 w-4 mb-1" />
                        <span className="text-xs font-medium">{slot}</span>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {reservedSlots.size > 0 && (
                <div className="mt-6 p-4 bg-success/10 rounded-lg border border-success/20">
                  <h3 className="font-semibold text-success mb-2">Suas Reservas:</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(reservedSlots).map(slot => (
                      <span key={slot} className="px-3 py-1 bg-success text-success-foreground rounded-full text-sm">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Associate;
