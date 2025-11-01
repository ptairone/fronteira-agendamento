import { useState } from "react";
import Navigation from "@/components/Navigation";
import DemoBadge from "@/components/presentation/DemoBadge";
import SportCard from "@/components/presentation/SportCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";
import { sports as sportsData, sportColors, mockReservations } from "@/data/mockData";

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

  const handleSlotClick = (slot: string) => {
    if (!selectedSport || !selectedCourt) {
      toast.error("Selecione o esporte e a quadra primeiro");
      return;
    }

    const newReserved = new Set(reservedSlots);
    if (newReserved.has(slot)) {
      newReserved.delete(slot);
      toast.info(`Reserva cancelada: ${slot}`);
    } else {
      newReserved.add(slot);
      toast.success(`Horário reservado: ${slot}`);
    }
    setReservedSlots(newReserved);
  };

  const selectedSportData = sports.find(s => s.id === selectedSport);

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
        {selectedSport && selectedCourt && (
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
