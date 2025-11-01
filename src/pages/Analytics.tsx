import Navigation from "@/components/Navigation";
import DemoBadge from "@/components/presentation/DemoBadge";
import StatCard from "@/components/presentation/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download, TrendingUp, Star, CheckCircle, Users } from "lucide-react";
import { toast } from "sonner";
import {
  kpis,
  weeklyOccupation,
  reservationsByModality,
  timeDistribution,
  heatmapData,
  timeSlots,
  weekDays,
  topUsers,
  insights,
} from "@/data/mockAnalytics";

const Analytics = () => {
  const handleExport = () => {
    toast.success("Relatório exportado com sucesso!", {
      description: "O arquivo PDF foi gerado e está pronto para download.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Dashboard Analytics</h1>
            <p className="text-muted-foreground mt-2">
              Insights e métricas do sistema de agendamento
            </p>
          </div>
          <div className="flex items-center gap-4">
            <DemoBadge />
            <Select defaultValue="30">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">Última semana</SelectItem>
                <SelectItem value="30">Último mês</SelectItem>
                <SelectItem value="90">Últimos 3 meses</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* KPIs Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon="CalendarCheck"
            value={kpis.totalReservations}
            label="Total de Reservas"
            trend={{ value: 15, isPositive: true }}
          />
          <StatCard
            icon="TrendingUp"
            value={`${kpis.occupationRate}%`}
            label="Taxa de Ocupação"
            trend={{ value: 8, isPositive: true }}
          />
          <StatCard
            icon="Trophy"
            value={kpis.mostPopularSport}
            label="Esporte Mais Popular"
          />
          <StatCard
            icon="DollarSign"
            value={`R$ ${kpis.estimatedRevenue.toLocaleString("pt-BR")}`}
            label="Receita Estimada"
            trend={{ value: 12, isPositive: true }}
          />
        </div>

        {/* Gráficos Principais */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ocupação por Dia da Semana */}
          <Card>
            <CardHeader>
              <CardTitle>Ocupação por Dia da Semana</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyOccupation}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="reservas" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Reservas por Modalidade */}
          <Card>
            <CardHeader>
              <CardTitle>Reservas por Modalidade</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reservationsByModality}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="sport" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="reservas" fill="hsl(var(--primary))">
                    {reservationsByModality.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Distribuição por Período */}
          <Card>
            <CardHeader>
              <CardTitle>Distribuição por Período do Dia</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={timeDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ period, value }) => `${period.split(" ")[0]}: ${value}%`}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {timeDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Heatmap */}
          <Card>
            <CardHeader>
              <CardTitle>Mapa de Calor - Horários Populares</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="grid grid-cols-8 gap-1 text-xs">
                  <div></div>
                  {weekDays.map((day) => (
                    <div key={day} className="text-center font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                {heatmapData[0].map((_, hourIndex) => (
                  <div key={hourIndex} className="grid grid-cols-8 gap-1">
                    <div className="text-xs flex items-center">{timeSlots[hourIndex]}</div>
                    {heatmapData.map((dayData, dayIndex) => {
                      const value = dayData[hourIndex];
                      const intensity = Math.min(value / 40, 1);
                      const bgColor = `rgba(34, 197, 94, ${intensity})`;
                      return (
                        <div
                          key={dayIndex}
                          className="h-6 rounded cursor-pointer hover:opacity-75 transition-opacity"
                          style={{ backgroundColor: bgColor }}
                          title={`${weekDays[dayIndex]} ${timeSlots[hourIndex]}: ${value} reservas`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                <span>Baixa</span>
                <div className="w-20 h-3 rounded" style={{ background: "linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 1))" }} />
                <span>Alta</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Usuários */}
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Associados Mais Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Posição</TableHead>
                  <TableHead>Associado</TableHead>
                  <TableHead>Reservas</TableHead>
                  <TableHead>Esporte Favorito</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topUsers.map((user) => (
                  <TableRow key={user.position}>
                    <TableCell className="font-bold">#{user.position}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{user.avatar}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{user.reservations}</TableCell>
                    <TableCell>{user.favoriteSport}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Insights Automáticos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Insights Automáticos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {insights.map((insight, index) => {
              const iconMap = { TrendingUp, Star, CheckCircle, Users };
              const IconComponent = iconMap[insight.icon as keyof typeof iconMap];
              return (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />}
                    <div>
                      <h3 className="font-semibold mb-1">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Botão de Exportação */}
        <div className="flex justify-end">
          <Button size="lg" onClick={handleExport}>
            <Download className="mr-2 h-5 w-5" />
            Exportar Relatório PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
