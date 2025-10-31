import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Settings, Plus, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import logo from "@/assets/logo.jpeg";

interface Sport {
  id: string;
  name: string;
  maxReservations: number;
  gameDuration: number;
  courts: string[];
}

const initialSports: Sport[] = [
  { id: "padel", name: "Padel", maxReservations: 2, gameDuration: 60, courts: ["Quadra 1", "Quadra 2"] },
  { id: "futebol", name: "Futebol Society 7", maxReservations: 1, gameDuration: 90, courts: ["Campo 1"] },
  { id: "volei", name: "Vôlei de Areia", maxReservations: 2, gameDuration: 60, courts: ["Quadra A", "Quadra B"] },
  { id: "futevolei", name: "Futevôlei", maxReservations: 2, gameDuration: 60, courts: ["Quadra A"] },
  { id: "beach-tenis", name: "Beach Tênis", maxReservations: 2, gameDuration: 60, courts: ["Quadra 1", "Quadra 2", "Quadra 3"] },
];

const Admin = () => {
  const navigate = useNavigate();
  const [sports, setSports] = useState<Sport[]>(initialSports);
  const [editingSport, setEditingSport] = useState<Sport | null>(null);
  const [newCourtName, setNewCourtName] = useState("");

  const handleUpdateSport = (updatedSport: Sport) => {
    setSports(sports.map(s => s.id === updatedSport.id ? updatedSport : s));
    toast.success("Configurações atualizadas!");
    setEditingSport(null);
  };

  const handleAddCourt = () => {
    if (!editingSport || !newCourtName.trim()) return;
    
    const updated = {
      ...editingSport,
      courts: [...editingSport.courts, newCourtName.trim()]
    };
    setEditingSport(updated);
    setNewCourtName("");
    toast.success("Quadra adicionada!");
  };

  const handleRemoveCourt = (courtName: string) => {
    if (!editingSport) return;
    
    const updated = {
      ...editingSport,
      courts: editingSport.courts.filter(c => c !== courtName)
    };
    setEditingSport(updated);
    toast.info("Quadra removida");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-16 rounded-full shadow-md" />
            <div>
              <h1 className="text-3xl font-bold text-primary">Administração do Clube</h1>
              <p className="text-muted-foreground">Gerencie esportes, quadras e configurações</p>
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Button>
        </div>

        {/* Sports Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sports.map(sport => (
            <Card key={sport.id} className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-xl">{sport.name}</CardTitle>
                <CardDescription>
                  {sport.courts.length} quadra{sport.courts.length !== 1 ? 's' : ''} disponível{sport.courts.length !== 1 ? 'is' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reservas por associado:</span>
                    <span className="font-semibold">{sport.maxReservations}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duração do jogo:</span>
                    <span className="font-semibold">{sport.gameDuration} min</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-1">Quadras:</span>
                    <div className="flex flex-wrap gap-1">
                      {sport.courts.map(court => (
                        <span key={court} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {court}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full gap-2"
                      onClick={() => setEditingSport(sport)}
                    >
                      <Settings className="h-4 w-4" />
                      Configurar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Configurar {editingSport?.name}</DialogTitle>
                      <DialogDescription>
                        Ajuste os limites e gerencie as quadras
                      </DialogDescription>
                    </DialogHeader>

                    {editingSport && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Reservas por Associado</Label>
                            <Input
                              type="number"
                              value={editingSport.maxReservations}
                              onChange={(e) => setEditingSport({
                                ...editingSport,
                                maxReservations: parseInt(e.target.value) || 0
                              })}
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Duração do Jogo (minutos)</Label>
                            <Input
                              type="number"
                              value={editingSport.gameDuration}
                              onChange={(e) => setEditingSport({
                                ...editingSport,
                                gameDuration: parseInt(e.target.value) || 0
                              })}
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label>Quadras</Label>
                          <div className="space-y-2">
                            {editingSport.courts.map(court => (
                              <div key={court} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <span className="font-medium">{court}</span>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => handleRemoveCourt(court)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>

                          <div className="flex gap-2">
                            <Input
                              placeholder="Nome da nova quadra"
                              value={newCourtName}
                              onChange={(e) => setNewCourtName(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleAddCourt()}
                            />
                            <Button onClick={handleAddCourt}>
                              <Plus className="h-4 w-4 mr-1" />
                              Adicionar
                            </Button>
                          </div>
                        </div>

                        <Button 
                          className="w-full"
                          onClick={() => handleUpdateSport(editingSport)}
                        >
                          Salvar Alterações
                        </Button>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}

          {/* Create New Sport Card */}
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-dashed border-2">
            <CardHeader>
              <CardTitle className="text-xl text-muted-foreground">Novo Esporte</CardTitle>
              <CardDescription>Adicionar nova modalidade</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full gap-2" 
                variant="secondary"
                onClick={() => toast.info("Funcionalidade em desenvolvimento")}
              >
                <Plus className="h-4 w-4" />
                Criar Novo Esporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
