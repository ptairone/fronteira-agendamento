// Dados para gráficos e analytics

export const weeklyOccupation = [
  { day: "Seg", reservas: 45 },
  { day: "Ter", reservas: 52 },
  { day: "Qua", reservas: 48 },
  { day: "Qui", reservas: 61 },
  { day: "Sex", reservas: 78 },
  { day: "Sáb", reservas: 85 },
  { day: "Dom", reservas: 72 },
];

export const reservationsByModality = [
  { sport: "Tênis", reservas: 87, fill: "hsl(0, 70%, 55%)" },
  { sport: "Padel", reservas: 112, fill: "hsl(210, 80%, 55%)" },
  { sport: "Futebol", reservas: 68, fill: "hsl(145, 65%, 45%)" },
  { sport: "Vôlei", reservas: 62, fill: "hsl(30, 85%, 55%)" },
  { sport: "Futevôlei", reservas: 48, fill: "hsl(45, 90%, 60%)" },
  { sport: "Beach Tênis", reservas: 64, fill: "hsl(270, 70%, 60%)" },
];

export const timeDistribution = [
  { period: "Manhã (6h-12h)", value: 25, fill: "hsl(var(--chart-1))" },
  { period: "Tarde (12h-18h)", value: 35, fill: "hsl(var(--chart-2))" },
  { period: "Noite (18h-23h)", value: 40, fill: "hsl(var(--chart-3))" },
];

// Heatmap: 7 dias x 15 horários (6h-21h)
export const heatmapData = [
  // Segunda
  [2, 3, 5, 8, 12, 15, 18, 20, 22, 18, 14, 10, 8, 6, 4],
  // Terça
  [3, 4, 6, 10, 14, 17, 20, 22, 24, 20, 16, 12, 9, 7, 5],
  // Quarta
  [2, 3, 5, 9, 13, 16, 19, 21, 23, 19, 15, 11, 8, 6, 4],
  // Quinta
  [4, 5, 7, 11, 16, 20, 24, 26, 28, 24, 20, 15, 11, 8, 6],
  // Sexta
  [5, 6, 9, 14, 20, 25, 30, 35, 38, 32, 25, 18, 13, 9, 7],
  // Sábado
  [6, 8, 12, 18, 24, 30, 35, 40, 42, 38, 30, 22, 16, 11, 8],
  // Domingo
  [5, 7, 10, 15, 21, 27, 32, 36, 38, 34, 27, 20, 14, 10, 7],
];

export const timeSlots = [
  "6h",
  "7h",
  "8h",
  "9h",
  "10h",
  "11h",
  "12h",
  "13h",
  "14h",
  "15h",
  "16h",
  "17h",
  "18h",
  "19h",
  "20h",
];

export const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

// Top 5 usuários mais ativos
export const topUsers = [
  {
    position: 1,
    name: "Mariana Oliveira",
    reservations: 28,
    favoriteSport: "Padel",
    avatar: "MO",
  },
  {
    position: 2,
    name: "Pedro Almeida",
    reservations: 24,
    favoriteSport: "Tênis",
    avatar: "PA",
  },
  {
    position: 3,
    name: "Julia Fernandes",
    reservations: 22,
    favoriteSport: "Vôlei de Areia",
    avatar: "JF",
  },
  {
    position: 4,
    name: "Fernanda Rocha",
    reservations: 19,
    favoriteSport: "Beach Tênis",
    avatar: "FR",
  },
  {
    position: 5,
    name: "Lucas Pereira",
    reservations: 17,
    favoriteSport: "Padel",
    avatar: "LP",
  },
];

// KPIs principais
export const kpis = {
  totalReservations: 441,
  occupationRate: 78,
  mostPopularSport: "Padel",
  estimatedRevenue: 8820,
};

// Insights automáticos
export const insights = [
  {
    icon: "TrendingUp",
    title: "Horário de Pico",
    description: "Sexta-feira à noite (18h-21h) é o período mais disputado com 95% de ocupação.",
  },
  {
    icon: "Star",
    title: "Crescimento",
    description: "Padel teve crescimento de 25% nas reservas este mês comparado ao anterior.",
  },
  {
    icon: "CheckCircle",
    title: "Taxa de No-Show",
    description: "Apenas 3% de no-show, demonstrando alto comprometimento dos associados.",
  },
  {
    icon: "Users",
    title: "Engajamento",
    description: "85% dos associados fizeram pelo menos uma reserva este mês.",
  },
];
