// Paleta de cores por modalidade
export const sportColors = {
  padel: { bg: "hsl(210, 80%, 55%)", text: "hsl(210, 80%, 95%)" },
  futebol: { bg: "hsl(145, 65%, 45%)", text: "hsl(145, 65%, 95%)" },
  volei: { bg: "hsl(30, 85%, 55%)", text: "hsl(30, 85%, 95%)" },
  futevolei: { bg: "hsl(45, 90%, 60%)", text: "hsl(45, 90%, 20%)" },
  beachTenis: { bg: "hsl(270, 70%, 60%)", text: "hsl(270, 70%, 95%)" },
};

export const sportIcons = {
  padel: "Racquet",
  futebol: "Goal",
  volei: "CircleDot",
  futevolei: "Waves",
  beachTenis: "Trophy",
};

// Tipos de usuários
export type UserRole = "super_admin" | "modality_admin" | "associate" | "dependent" | "visitor";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  modality?: string;
  status: "active" | "inactive";
  avatar?: string;
}

export interface Reservation {
  id: string;
  userId: string;
  userName: string;
  sport: string;
  court: string;
  date: string;
  time: string;
  status: "confirmed" | "cancelled" | "completed";
}

// Usuários simulados
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Carlos Silva",
    email: "carlos.silva@email.com",
    role: "super_admin",
    status: "active",
  },
  {
    id: "2",
    name: "Ana Costa",
    email: "ana.costa@email.com",
    role: "modality_admin",
    modality: "Padel",
    status: "active",
  },
  {
    id: "3",
    name: "Roberto Santos",
    email: "roberto.santos@email.com",
    role: "modality_admin",
    modality: "Futebol Society",
    status: "active",
  },
  {
    id: "4",
    name: "Mariana Oliveira",
    email: "mariana.oliveira@email.com",
    role: "associate",
    status: "active",
  },
  {
    id: "5",
    name: "Pedro Almeida",
    email: "pedro.almeida@email.com",
    role: "associate",
    status: "active",
  },
  {
    id: "6",
    name: "Julia Fernandes",
    email: "julia.fernandes@email.com",
    role: "associate",
    status: "active",
  },
  {
    id: "7",
    name: "Lucas Pereira",
    email: "lucas.pereira@email.com",
    role: "dependent",
    status: "active",
  },
  {
    id: "8",
    name: "Beatriz Lima",
    email: "beatriz.lima@email.com",
    role: "dependent",
    status: "active",
  },
  {
    id: "9",
    name: "Rafael Gomes",
    email: "rafael.gomes@email.com",
    role: "visitor",
    status: "active",
  },
  {
    id: "10",
    name: "Fernanda Rocha",
    email: "fernanda.rocha@email.com",
    role: "associate",
    status: "active",
  },
];

// Reservas simuladas dos últimos 30 dias
export const mockReservations: Reservation[] = [
  {
    id: "r1",
    userId: "4",
    userName: "Mariana Oliveira",
    sport: "Padel",
    court: "Quadra 1",
    date: "2025-11-05",
    time: "18:00",
    status: "confirmed",
  },
  {
    id: "r2",
    userId: "5",
    userName: "Pedro Almeida",
    sport: "Futebol Society",
    court: "Campo 1",
    date: "2025-11-05",
    time: "19:00",
    status: "confirmed",
  },
  {
    id: "r3",
    userId: "6",
    userName: "Julia Fernandes",
    sport: "Vôlei de Areia",
    court: "Quadra 1",
    date: "2025-11-05",
    time: "17:00",
    status: "confirmed",
  },
  {
    id: "r4",
    userId: "10",
    userName: "Fernanda Rocha",
    sport: "Beach Tênis",
    court: "Quadra 1",
    date: "2025-11-06",
    time: "09:00",
    status: "confirmed",
  },
];

// Depoimentos de clientes
export const testimonials = [
  {
    id: 1,
    name: "João Mendes",
    role: "Diretor Clube Esportivo",
    content:
      "O sistema revolucionou nossa gestão de quadras. Reduzimos os conflitos de agendamento em 80% e a satisfação dos associados aumentou significativamente.",
    avatar: "JM",
  },
  {
    id: 2,
    name: "Carla Rodrigues",
    role: "Síndica Condomínio Premium",
    content:
      "Implementamos o sistema há 3 meses e já economizamos mais de 5 horas por semana em gestão manual. A transparência dos horários agradou todos os moradores.",
    avatar: "CR",
  },
  {
    id: 3,
    name: "Marcos Teixeira",
    role: "Gestor Centro Esportivo Municipal",
    content:
      "A flexibilidade das regras personalizáveis permitiu que ajustássemos o sistema perfeitamente às nossas necessidades. Relatórios claros e gestão eficiente.",
    avatar: "MT",
  },
];

// Estatísticas para apresentação
export const stats = {
  totalCourts: 20,
  totalModalities: 5,
  availability: "24/7",
  occupationRate: 78,
  conflictReduction: 80,
  timeSaved: 5,
  satisfaction: 95,
  phoneCallReduction: 70,
};

// Benefícios
export const benefits = [
  {
    icon: "TrendingDown",
    metric: "80%",
    title: "Menos Conflitos",
    description: "Redução drástica em conflitos de agendamento",
  },
  {
    icon: "Clock",
    metric: "5h/semana",
    title: "Tempo Economizado",
    description: "Gestão automatizada elimina trabalho manual",
  },
  {
    icon: "Eye",
    metric: "100%",
    title: "Transparência Total",
    description: "Todos veem os horários disponíveis em tempo real",
  },
  {
    icon: "ThumbsUp",
    metric: "95%",
    title: "Satisfação",
    description: "Índice de satisfação dos associados",
  },
  {
    icon: "PhoneOff",
    metric: "70%",
    title: "Menos Chamadas",
    description: "Redução em chamadas telefônicas para agendamento",
  },
  {
    icon: "LayoutDashboard",
    metric: "Centralizado",
    title: "Gestão Unificada",
    description: "Todas as modalidades em um só lugar",
  },
];

// Casos de uso
export const useCases = [
  {
    icon: "Trophy",
    title: "Clubes Esportivos",
    description:
      "Gestão completa de múltiplas quadras e modalidades com controle de associados e dependentes.",
  },
  {
    icon: "Dumbbell",
    title: "Academias com Quadras",
    description:
      "Integre o agendamento de quadras ao seu sistema de gestão de academia existente.",
  },
  {
    icon: "Building2",
    title: "Condomínios Residenciais",
    description:
      "Permita que moradores reservem quadras de forma organizada e transparente.",
  },
  {
    icon: "Landmark",
    title: "Centros Esportivos Municipais",
    description:
      "Gestão de espaços públicos com controle de acesso e relatórios detalhados.",
  },
];

// Features principais
export const features = [
  {
    icon: "LayoutDashboard",
    title: "Gestão Centralizada",
    description:
      "Todas as modalidades, quadras e agendamentos em uma única plataforma intuitiva.",
  },
  {
    icon: "Clock",
    title: "Disponibilidade 24/7",
    description:
      "Associados podem fazer reservas a qualquer hora, de qualquer dispositivo.",
  },
  {
    icon: "Settings",
    title: "Regras Personalizáveis",
    description:
      "Configure limites, durações e permissões específicas para cada modalidade.",
  },
  {
    icon: "BarChart3",
    title: "Relatórios Inteligentes",
    description:
      "Dashboard completo com insights sobre ocupação, tendências e uso.",
  },
  {
    icon: "Users",
    title: "Múltiplos Perfis",
    description:
      "Hierarquia de acesso: Super Admin, Admin de Modalidade, Associados e mais.",
  },
];

// Funcionalidades por perfil
export const associateFeatures = [
  {
    icon: "Smartphone",
    title: "Agendamento Online 24/7",
    description: "Reserve quadras a qualquer hora, de qualquer lugar.",
  },
  {
    icon: "Eye",
    title: "Disponibilidade em Tempo Real",
    description: "Veja quais horários estão livres instantaneamente.",
  },
  {
    icon: "History",
    title: "Histórico Completo",
    description: "Acesse todas as suas reservas passadas e futuras.",
  },
  {
    icon: "X",
    title: "Cancelamento Fácil",
    description: "Cancele reservas de forma simples e rápida.",
  },
  {
    icon: "Bell",
    title: "Notificações Automáticas",
    description: "Receba lembretes sobre suas reservas.",
  },
];

export const adminFeatures = [
  {
    icon: "BarChart3",
    title: "Dashboard Completo",
    description: "Visualize todas as métricas importantes em um só lugar.",
  },
  {
    icon: "Sliders",
    title: "Configuração Flexível",
    description: "Ajuste regras, limites e permissões facilmente.",
  },
  {
    icon: "LayoutGrid",
    title: "Gestão de Quadras",
    description: "Controle status, horários e manutenção de cada quadra.",
  },
  {
    icon: "FileText",
    title: "Relatórios Detalhados",
    description: "Exporte relatórios de ocupação, uso e receita.",
  },
  {
    icon: "Shield",
    title: "Controle de Limites",
    description: "Defina limites por associado, categoria ou período.",
  },
  {
    icon: "Lock",
    title: "Gestão de Permissões",
    description: "Configure quem pode fazer o quê no sistema.",
  },
];

// Modalidades suportadas
export const sports = [
  {
    id: "padel",
    name: "Padel",
    icon: "Racquet",
    color: sportColors.padel.bg,
    textColor: sportColors.padel.text,
    courts: 4,
  },
  {
    id: "futebol",
    name: "Futebol Society",
    icon: "Goal",
    color: sportColors.futebol.bg,
    textColor: sportColors.futebol.text,
    courts: 3,
  },
  {
    id: "volei",
    name: "Vôlei de Areia",
    icon: "CircleDot",
    color: sportColors.volei.bg,
    textColor: sportColors.volei.text,
    courts: 2,
  },
  {
    id: "futevolei",
    name: "Futevôlei",
    icon: "Waves",
    color: sportColors.futevolei.bg,
    textColor: sportColors.futevolei.text,
    courts: 2,
  },
  {
    id: "beachTenis",
    name: "Beach Tênis",
    icon: "Trophy",
    color: sportColors.beachTenis.bg,
    textColor: sportColors.beachTenis.text,
    courts: 3,
  },
];
