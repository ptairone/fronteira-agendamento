export interface TourStep {
  id: string;
  title: string;
  narration: string;
  mockupUrl: string;
  duration: number; // in seconds
  highlights?: {
    x: number;
    y: number;
    width: number;
    height: number;
    label?: string;
  }[];
}

export const tourSteps: TourStep[] = [
  {
    id: "welcome",
    title: "Bem-vindo ao Tour",
    narration: "Olá! Bem-vindo ao tour guiado do nosso sistema de gestão de quadras esportivas. Vou te mostrar como é fácil gerenciar reservas, resolver conflitos e muito mais. Vamos começar!",
    mockupUrl: "/mockups/welcome.jpg",
    duration: 8,
  },
  {
    id: "associate-dashboard",
    title: "Painel do Associado",
    narration: "Esta é a tela inicial do associado. Aqui você pode ver suas próximas reservas, fazer novas marcações e acompanhar tudo de forma simples e intuitiva.",
    mockupUrl: "/mockups/associate-dashboard.jpg",
    duration: 10,
    highlights: [
      { x: 10, y: 20, width: 35, height: 15, label: "Próximas Reservas" },
      { x: 55, y: 20, width: 35, height: 15, label: "Fazer Reserva" },
    ],
  },
  {
    id: "booking-screen",
    title: "Tela de Reserva",
    narration: "Fazer uma reserva é muito simples! Escolha a modalidade, selecione a quadra disponível, escolha o horário e pronto. O sistema mostra apenas os horários realmente disponíveis para evitar conflitos.",
    mockupUrl: "/mockups/booking-screen.jpg",
    duration: 12,
    highlights: [
      { x: 15, y: 25, width: 30, height: 10, label: "Modalidade" },
      { x: 15, y: 40, width: 70, height: 35, label: "Calendário" },
    ],
  },
  {
    id: "calendar-view",
    title: "Calendário de Reservas",
    narration: "O calendário mostra todas as reservas de forma visual. Verde para disponível, vermelho para ocupado. Você pode navegar entre dias e semanas facilmente.",
    mockupUrl: "/mockups/calendar-view.jpg",
    duration: 10,
    highlights: [
      { x: 10, y: 15, width: 80, height: 70, label: "Calendário Interativo" },
    ],
  },
  {
    id: "admin-dashboard",
    title: "Painel do Administrador",
    narration: "Agora vamos ver o lado do administrador. Aqui temos uma visão completa de todas as reservas, estatísticas de uso e ferramentas de gestão.",
    mockupUrl: "/mockups/admin-dashboard.jpg",
    duration: 12,
    highlights: [
      { x: 10, y: 10, width: 25, height: 20, label: "Estatísticas" },
      { x: 40, y: 10, width: 50, height: 20, label: "Reservas Ativas" },
    ],
  },
  {
    id: "conflict-resolution",
    title: "Resolução de Conflitos",
    narration: "Quando há conflitos de horários, o administrador tem ferramentas poderosas para resolver rapidamente. Pode ver todas as partes envolvidas, histórico e tomar decisões justas.",
    mockupUrl: "/mockups/conflict-resolution.jpg",
    duration: 13,
    highlights: [
      { x: 15, y: 25, width: 70, height: 15, label: "Conflito Detectado" },
      { x: 15, y: 50, width: 70, height: 25, label: "Opções de Resolução" },
    ],
  },
  {
    id: "settings-screen",
    title: "Configurações e Regras",
    narration: "O sistema é totalmente configurável. Defina regras específicas para cada modalidade, horários de funcionamento, limites de reserva e muito mais.",
    mockupUrl: "/mockups/settings-screen.jpg",
    duration: 11,
    highlights: [
      { x: 10, y: 20, width: 35, height: 60, label: "Regras por Modalidade" },
      { x: 55, y: 20, width: 35, height: 60, label: "Configurações" },
    ],
  },
  {
    id: "analytics-screen",
    title: "Relatórios e Analytics",
    narration: "Por fim, temos relatórios detalhados com métricas de uso, quadras mais populares, horários de pico e muito mais. Tudo em tempo real!",
    mockupUrl: "/mockups/analytics-screen.jpg",
    duration: 12,
    highlights: [
      { x: 10, y: 15, width: 80, height: 30, label: "Gráficos e Métricas" },
      { x: 10, y: 50, width: 80, height: 35, label: "Relatórios Detalhados" },
    ],
  },
  {
    id: "conclusion",
    title: "Conclusão do Tour",
    narration: "E este foi o tour pelo nosso sistema! Espero que tenha gostado. Você pode fazer perguntas sobre qualquer funcionalidade ou solicitar uma demonstração personalizada. Estou aqui para ajudar!",
    mockupUrl: "/mockups/welcome.jpg",
    duration: 10,
  },
];

export const getTourDuration = () => {
  return tourSteps.reduce((total, step) => total + step.duration, 0);
};
