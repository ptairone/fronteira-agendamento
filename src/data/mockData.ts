// Paleta de cores por modalidade
export const sportColors = {
  tenis: { bg: "hsl(0, 70%, 55%)", text: "hsl(0, 70%, 95%)" },
  padel: { bg: "hsl(210, 80%, 55%)", text: "hsl(210, 80%, 95%)" },
  futebol: { bg: "hsl(145, 65%, 45%)", text: "hsl(145, 65%, 95%)" },
  volei: { bg: "hsl(30, 85%, 55%)", text: "hsl(30, 85%, 95%)" },
  futevolei: { bg: "hsl(45, 90%, 60%)", text: "hsl(45, 90%, 20%)" },
  beachTenis: { bg: "hsl(270, 70%, 60%)", text: "hsl(270, 70%, 95%)" },
};

export const sportIcons = {
  tenis: "Racquet",
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
  totalCourts: 15,
  totalModalities: 6,
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
  {
    icon: "Smartphone",
    metric: "3 Plataformas",
    title: "Acesso Multiplataforma",
    description: "iOS, Android e Web com sincronização em tempo real",
  },
  {
    icon: "MessageSquare",
    metric: "100% Automático",
    title: "Integração WhatsApp",
    description: "Notificações automáticas nos grupos de cada modalidade",
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
  {
    icon: "Smartphone",
    title: "Acesso Multiplataforma",
    description: "Use no app iOS/Android ou acesse pelo navegador - você escolhe.",
  },
  {
    icon: "MessageSquare",
    title: "Notificações no WhatsApp",
    description: "Fique informado sobre novas reservas no grupo da sua modalidade.",
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
  {
    icon: "Settings",
    title: "Gerenciar Grupos WhatsApp",
    description: "Conecte grupos de WhatsApp para cada modalidade e personalize notificações.",
  },
];

// Modalidades suportadas
export const sports = [
  {
    id: "tenis",
    name: "Tênis",
    icon: "Racquet",
    color: sportColors.tenis.bg,
    textColor: sportColors.tenis.text,
    courts: 2,
    courtsDetail: "1 coberta + 1 externa",
    sharedCourts: false,
  },
  {
    id: "padel",
    name: "Padel",
    icon: "Racquet",
    color: sportColors.padel.bg,
    textColor: sportColors.padel.text,
    courts: 2,
    courtsDetail: "1 coberta + 1 externa",
    sharedCourts: false,
  },
  {
    id: "futebol",
    name: "Futebol Society",
    icon: "Goal",
    color: sportColors.futebol.bg,
    textColor: sportColors.futebol.text,
    courts: 1,
    courtsDetail: "1 quadra exclusiva",
    sharedCourts: false,
  },
  {
    id: "volei",
    name: "Vôlei de Areia",
    icon: "CircleDot",
    color: sportColors.volei.bg,
    textColor: sportColors.volei.text,
    courts: 10,
    courtsDetail: "10 quadras de areia compartilhadas",
    sharedCourts: true,
    sharedWith: ["futevolei", "beachTenis"],
  },
  {
    id: "futevolei",
    name: "Futevôlei",
    icon: "Waves",
    color: sportColors.futevolei.bg,
    textColor: sportColors.futevolei.text,
    courts: 10,
    courtsDetail: "10 quadras de areia compartilhadas",
    sharedCourts: true,
    sharedWith: ["volei", "beachTenis"],
  },
  {
    id: "beachTenis",
    name: "Beach Tênis",
    icon: "Trophy",
    color: sportColors.beachTenis.bg,
    textColor: sportColors.beachTenis.text,
    courts: 10,
    courtsDetail: "10 quadras de areia compartilhadas",
    sharedCourts: true,
    sharedWith: ["volei", "futevolei"],
  },
];

// Plataformas disponíveis
export const platforms = [
  {
    id: "ios",
    name: "App iOS",
    icon: "Smartphone",
    description: "Disponível na App Store para iPhone e iPad",
    badge: "Disponível",
    features: [
      "Notificações push em tempo real",
      "Funciona offline",
      "Face ID / Touch ID",
      "Widgets na tela inicial"
    ]
  },
  {
    id: "android",
    name: "App Android",
    icon: "Smartphone",
    description: "Disponível na Google Play Store",
    badge: "Disponível",
    features: [
      "Notificações push em tempo real",
      "Funciona offline",
      "Biometria integrada",
      "Widgets personalizáveis"
    ]
  },
  {
    id: "web",
    name: "Versão Web",
    icon: "Globe",
    description: "Acesse de qualquer navegador",
    badge: "Disponível",
    features: [
      "Sem instalação necessária",
      "Funciona em qualquer dispositivo",
      "Atualização automática",
      "Acesso universal"
    ]
  }
];

// Integração WhatsApp
export const whatsappIntegration = {
  title: "Integração Inteligente com WhatsApp",
  subtitle: "Notificações automáticas nos grupos de cada modalidade",
  badge: "FUNCIONALIDADE PREMIUM",
  description: "Sistema envia automaticamente notificações nos grupos do WhatsApp quando novas reservas são feitas, facilitando a organização e aumentando o engajamento.",
  
  steps: [
    {
      number: 1,
      title: "Reserva Realizada",
      description: "Associado faz reserva de quadra pelo app ou navegador",
      icon: "Calendar"
    },
    {
      number: 2,
      title: "Notificação Automática",
      description: "Sistema detecta a reserva e prepara mensagem personalizada",
      icon: "Bell"
    },
    {
      number: 3,
      title: "Grupo Informado",
      description: "Mensagem é enviada ao grupo do WhatsApp da modalidade",
      icon: "MessageSquare"
    }
  ],
  
  benefits: [
    {
      icon: "Zap",
      title: "Comunicação Instantânea",
      description: "Todos ficam sabendo imediatamente sobre novas reservas"
    },
    {
      icon: "Users",
      title: "Organização de Peladas",
      description: "Facilita encontrar parceiros para completar o time"
    },
    {
      icon: "TrendingUp",
      title: "Aumento do Engajamento",
      description: "Reduz quadras vazias e aumenta participação"
    },
    {
      icon: "Settings",
      title: "Flexibilidade Total",
      description: "Configure um grupo diferente para cada modalidade"
    }
  ],
  
  exampleMessage: `🎾 Nova Reserva - Padel

📅 Quinta-feira, 25 Jan
⏰ 19h00 - 20h30
🏟️ Quadra 1
👤 João Silva

Vaga disponível para mais 3 jogadores!`
};

// Critérios específicos por modalidade
export const modalityCriteria = {
  title: "Critérios Personalizados por Modalidade",
  subtitle: "Cada esporte tem suas regras e limites específicos já praticados no clube",
  description: "O sistema permite configurar critérios únicos para cada modalidade, respeitando as regras atuais do clube e garantindo organização e transparência.",
  
  examples: [
    {
      sport: "Tênis",
      icon: "Racquet",
      color: sportColors.tenis.bg,
      criteria: [
        "2 quadras (1 coberta, 1 externa)",
        "Duração: 1 hora por reserva",
        "Limite: 3 reservas por semana por associado",
        "Prioridade para titulares em horários de pico",
        "Cancelamento com 4h de antecedência"
      ]
    },
    {
      sport: "Padel",
      icon: "Racquet",
      color: sportColors.padel.bg,
      criteria: [
        "2 quadras (1 coberta, 1 externa)",
        "Duração: 1 hora por reserva",
        "Marcação por ordem de chegada",
        "Limite: 2 marcações por associado",
        "Sistema de lista de espera automática",
        "Notificações no grupo WhatsApp do Padel"
      ]
    },
    {
      sport: "Futebol Society",
      icon: "Goal",
      color: sportColors.futebol.bg,
      criteria: [
        "1 quadra exclusiva",
        "Duração: 1h por reserva",
        "Reserva mínima de 10 jogadores",
        "Limite: 2 reservas por semana por grupo",
        "Preferência para peladas organizadas"
      ]
    },
    {
      sport: "Quadras de Areia (Compartilhadas)",
      icon: "CircleDot",
      color: sportColors.volei.bg,
      criteria: [
        "10 quadras polivalentes",
        "Uso para Vôlei, Futevôlei e Beach Tênis",
        "Sistema de rotatividade entre modalidades",
        "Duração variável: 1h a 2h conforme modalidade",
        "Critérios específicos de marcação por esporte",
        "Limite de reservas por modalidade"
      ]
    }
  ],
  
  benefits: [
    {
      icon: "Settings",
      title: "Configuração Individual",
      description: "Cada modalidade tem suas próprias regras e limites"
    },
    {
      icon: "RefreshCw",
      title: "Rotatividade Inteligente",
      description: "Sistema gerencia automaticamente o compartilhamento das quadras de areia"
    },
    {
      icon: "Shield",
      title: "Respeita Regras Atuais",
      description: "Implementamos exatamente os critérios já praticados no clube"
    },
    {
      icon: "Users",
      title: "Prioridades por Categoria",
      description: "Titulares, dependentes e visitantes com níveis de acesso diferentes"
    }
  ]
};

// Investment and Budget Information
export const investment = {
  title: "Investimento e Condições Comerciais",
  subtitle: "Transparência total sobre valores, prazos e condições de pagamento",
  
  pricing: {
    total: "R$ 15.000,00",
    totalNumeric: 15000,
    downPayment: {
      percentage: 50,
      value: "R$ 7.500,00",
      valueNumeric: 7500,
      description: "Entrada para início do projeto"
    },
    installments: {
      quantity: 4,
      value: "R$ 1.875,00",
      valueNumeric: 1875,
      description: "Parcelamento do saldo no cartão de crédito",
      total: "R$ 7.500,00"
    }
  },
  
  monthlyServer: {
    title: "Mensalidade do Servidor",
    value: "R$ 400,00",
    valueNumeric: 400,
    description: "Custo mensal para manter o servidor funcionando",
    frequency: "mensal",
    icon: "Server",
    included: [
      "Hospedagem do sistema",
      "Banco de dados",
      "Backup automático diário",
      "Certificado SSL (segurança)",
      "Monitoramento 24/7",
      "Atualizações de segurança"
    ]
  },
  
  timeline: {
    title: "Cronograma de Entrega",
    total: "35 dias úteis",
    phases: [
      {
        name: "Desenvolvimento",
        duration: "30 dias",
        description: "Implementação completa do sistema com todas as funcionalidades",
        icon: "Code"
      },
      {
        name: "Fase de Testes",
        duration: "5 dias",
        description: "Testes práticos com o setor de esporte do clube",
        icon: "TestTube"
      },
      {
        name: "Go Live",
        duration: "1 dia",
        description: "Lançamento oficial e início das operações",
        icon: "Rocket"
      }
    ]
  },
  
  included: {
    title: "O que está incluído no investimento",
    items: [
      {
        icon: "Code",
        title: "Desenvolvimento Completo",
        description: "Sistema web responsivo com todas as funcionalidades apresentadas"
      },
      {
        icon: "Smartphone",
        title: "Versão Mobile-First",
        description: "Interface otimizada para uso em smartphones e tablets"
      },
      {
        icon: "MessageCircle",
        title: "Integração WhatsApp",
        description: "Notificações automáticas via WhatsApp Business API"
      },
      {
        icon: "Database",
        title: "Banco de Dados",
        description: "Estrutura completa para gestão de dados e relatórios"
      },
      {
        icon: "Users",
        title: "Gestão Multi-Perfil",
        description: "Sistema para associados, administradores e diferentes níveis de acesso"
      },
      {
        icon: "BarChart",
        title: "Dashboard Analítico",
        description: "Painel de controle com estatísticas e métricas em tempo real"
      },
      {
        icon: "Headphones",
        title: "Suporte Técnico",
        description: "Acompanhamento durante implementação e período de testes"
      },
      {
        icon: "GraduationCap",
        title: "Treinamento da Equipe",
        description: "Capacitação do setor de esporte para usar o sistema"
      }
    ]
  },
  
  additionalCosts: {
    title: "Investimentos Adicionais (Valores à Parte)",
    description: "Para disponibilizar aplicativos nativos nas lojas oficiais",
    items: [
      {
        platform: "Apple App Store (iOS)",
        value: "~R$ 650/ano",
        type: "Assinatura anual",
        icon: "Apple",
        note: "Taxa cobrada pela Apple para publicar apps na App Store"
      },
      {
        platform: "Google Play Store (Android)",
        value: "~R$ 150",
        type: "Pagamento único",
        icon: "Smartphone",
        note: "Taxa única cobrada pelo Google para publicar apps na Play Store"
      }
    ],
    observation: "Estes valores são pagos diretamente às plataformas Apple e Google. O sistema web funciona perfeitamente em todos os dispositivos sem estes custos."
  },
  
  benefits: [
    {
      icon: "TrendingDown",
      title: "Redução de 70% em Ligações",
      description: "Menos tempo da equipe ao telefone"
    },
    {
      icon: "Clock",
      title: "5 Horas Economizadas/Semana",
      description: "Gestão automatizada libera a equipe"
    },
    {
      icon: "AlertCircle",
      title: "80% Menos Conflitos",
      description: "Sistema elimina duplas reservas"
    },
    {
      icon: "ThumbsUp",
      title: "95% de Satisfação",
      description: "Associados aprovam a transparência"
    }
  ],
  
  guarantee: {
    title: "Garantias e Compromissos",
    items: [
      "Suporte técnico durante todo o período de implementação",
      "Correção de bugs e ajustes durante a fase de testes",
      "Documentação completa do sistema",
      "Código-fonte limpo e bem documentado",
      "Treinamento presencial ou remoto da equipe"
    ]
  }
};
