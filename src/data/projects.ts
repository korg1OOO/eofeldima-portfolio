export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  category: "web" | "mobile" | "blockchain" | "ai";
}

export const projectsLang = {
  pt: [
    {
      id: "automatta",
      title: "Automatta",
      description: "Minha Agência de Automação com IA construindo soluções para mais de 300 empresas brasileiras.",
      longDescription: "Automatta é uma agência de automação com IA especializada em criar soluções personalizadas para empresas brasileiras.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "React Router", "Payment Integration", "TypeScript"],
      features: ["Soluções personalizadas de automação com IA", "Integração seamless com WhatsApp", "Interface amigável", "Capacidades avançadas de automação com N8N", "Infraestrutura segura via Firebase", "Sistemas de pagamento integrados"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
      demoUrl: "https://rcsoftware.site",
      category: "web"
    },
    {
      id: "actioneasy",
      title: "ActionEasy",
      description: "Plataforma de gestão empresarial para empresas brasileiras, simplificando emissão de notas fiscais e administração eficiente.",
      longDescription: "ActionEasy é uma solução de gestão empresarial simplificada projetada para empresas brasileiras.",
      technologies: ["TypeScript", "PHP", "MySQL", "Tailwind CSS", "RESTful APIs", "React Router", "React", "Vite.js", "JSON", "XML"],
      features: ["Emissão fácil de notas fiscais", "Interface intuitiva", "Ferramentas eficientes de administração", "Armazenamento seguro com MySQL", "Escalável com PHP", "Insights em tempo real"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
      demoUrl: "https://actioneasy.com.br/",
      category: "web"
    },
    {
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "Plataforma comunitária Web3 com automação Discord, integrações de wallet, jogo interativo e ferramentas de engajamento.",
      longDescription: "Legacy Guild é uma plataforma Web3 projetada para fomentar engajamento comunitário através de experiências gamificadas.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
      features: ["Sistema de battle pass baseado em tarefas", "Seguimento de usuários e personalização de perfil", "Campanhas de criação de conteúdo com recompensas em USD", "Bot Discord para automação", "Integração de wallet Cartridge Controller", "Jogo de nave espacial cyberpunk"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "web"
    },
    {
      id: "poderestimado",
      title: "Poder Estimado",
      description: "Jogo de cartas multiplayer em tempo real com bots e jogadores reais, leaderboards, chat in-game e versão física disponível.",
      longDescription: "Poder Estimado é um jogo de cartas envolvente em tempo real onde jogadores batalham contra bots inteligentes ou oponentes online.",
      technologies: ["Vite.js", "TypeScript", "Firebase", "WebSockets", "Node.js"],
      features: ["Batalhas multiplayer em tempo real", "Criação gratuita de conta", "Convite de amigos", "Leaderboard global competitivo", "Chat em tempo real", "Painel admin com estatísticas"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765589854/Capturar_khr3ia.png",
      demoUrl: "http://poder-estimado.vercel.app/",
      category: "web"
    },
    {
      id: "ifeduca",
      title: "IF Educa",
      description: "Sistema de Avaliação Docente do IFPR (frontend).",
      longDescription: "Plataforma completa para avaliação de professores do Instituto Federal do Paraná, com interface moderna e intuitiva.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["Avaliação de docentes", "Interface responsiva", "Relatórios em tempo real", "Design moderno"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/ifeduca_zrqptb.png", // substitua por screenshot real depois
      demoUrl: "https://if-educa.vercel.app",
      category: "web"
    },
    {
      id: "creasy",
      title: "Creasy",
      description: "Crie thumbnails profissionais com IA (frontend).",
      longDescription: "Ferramenta de geração de thumbnails para YouTube e redes sociais usando inteligência artificial.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["Geração de thumbnails com IA", "Templates profissionais", "Exportação rápida"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281606/creasy_cxatxv.png",
      demoUrl: "https://creasy-seven.vercel.app",
      category: "web"
    },
    {
      id: "contabilac",
      title: "Contabi",
      description: "Gestão de Propriedade Intelectual com backend completo.",
      longDescription: "Sistema completo de gestão para empresas de propriedade intelectual, com backend e frontend em produção.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Gestão de marcas e patentes", "Dashboard completo", "Relatórios automáticos", "Em produção para clientes reais"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774351859/Capturar_t3mqz2.png",
      demoUrl: "https://contabi-lac.vercel.app",
      category: "web"
    },
    {
      id: "fozcheckin",
      title: "Foz Check-in",
      description: "Sistema de check-in digital para hotéis e pousadas de Foz do Iguaçu.",
      longDescription: "Plataforma completa de check-in digital já em produção.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Check-in online", "Gestão de hóspedes", "Integração com reservas"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/fnrh_ytsy9n.png",
      demoUrl: "https://fozcheckin.vercel.app",
      category: "web"
    },
    {
      id: "polymarket-predictor",
      title: "Polymarket Predictor",
      description: "Preditor de mercados no Polymarket com IA.",
      longDescription: "Ferramenta de previsão e análise para mercados de previsão no Polymarket.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Previsões em tempo real", "Análise de probabilidades", "Interface moderna"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/polymarket_d7lcga.png",
      demoUrl: "https://polymarket-predictor.vercel.app",
      category: "web"
    }
  ],
  en: [
    {
      id: "automatta",
      title: "Automatta",
      description: "My AI Automation Agency building solutions for more than 300 Brazilian companies.",
      longDescription: "Automatta is an AI automation agency specializing in creating tailored solutions for Brazilian companies.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "React Router", "Payment Integration", "TypeScript"],
      features: ["Custom AI automation solutions", "Seamless WhatsApp integration", "User-friendly interface", "Advanced automation with N8N", "Secure Firebase infrastructure", "Integrated payment systems"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
      demoUrl: "https://rcsoftware.site",
      category: "web"
    },
    {
      id: "actioneasy",
      title: "ActionEasy",
      description: "A business management platform for Brazilian companies, simplifying fiscal invoice issuance and efficient administration.",
      longDescription: "ActionEasy is a streamlined business management solution designed specifically for Brazilian enterprises.",
      technologies: ["TypeScript", "PHP", "MySQL", "Tailwind CSS", "RESTful APIs", "React Router", "React", "Vite.js", "JSON", "XML"],
      features: ["Effortless issuance of notas fiscais", "Intuitive interface", "Efficient administration tools", "Secure MySQL storage", "Scalable PHP architecture", "Real-time insights"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
      demoUrl: "https://actioneasy.com.br/",
      category: "web"
    },
    {
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "A Web3 community platform featuring Discord automation, wallet integrations, interactive game, and user engagement tools.",
      longDescription: "Legacy Guild is a Web3 platform designed to foster community engagement through gamified experiences and tools.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
      features: ["Task-based battle pass system", "User following and profile customization", "USD reward campaigns", "Discord bot automation", "Cartridge Controller wallet integration", "Cyberpunk spaceship game"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "web"
    },
    {
      id: "poderestimado",
      title: "Poder Estimado",
      description: "A real-time multiplayer card game with bots and real players, leaderboards, in-game chat, and a physical game version available.",
      longDescription: "Poder Estimado is an engaging real-time card game where players can battle against intelligent bots or compete with real opponents online.",
      technologies: ["Vite.js", "TypeScript", "Firebase", "WebSockets", "Node.js"],
      features: ["Real-time multiplayer card battles", "Free account creation", "Invite friends", "Competitive leaderboard", "In-game real-time chat", "Admin panel with stats"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765589854/Capturar_khr3ia.png",
      demoUrl: "http://poder-estimado.vercel.app/",
      category: "web"
    },
    {
      id: "ifeduca",
      title: "IF Educa",
      description: "Teacher Evaluation System for IFPR (frontend).",
      longDescription: "Complete platform for teacher evaluation at Instituto Federal do Paraná with modern interface.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["Teacher evaluation", "Responsive interface", "Real-time reports", "Modern design"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/ifeduca_zrqptb.png",
      demoUrl: "https://if-educa.vercel.app",
      category: "web"
    },
    {
      id: "creasy",
      title: "Creasy",
      description: "Create professional thumbnails with AI (frontend).",
      longDescription: "AI-powered thumbnail generator for YouTube and social media.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["AI thumbnail generation", "Professional templates", "Fast export"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281606/creasy_cxatxv.png",
      demoUrl: "https://creasy-seven.vercel.app",
      category: "web"
    },
    {
      id: "contabilac",
      title: "Contabi",
      description: "Intellectual Property Management System with full backend.",
      longDescription: "Complete management system for intellectual property companies, with backend and frontend in production.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Brand and patent management", "Full dashboard", "Automatic reports", "In production for real clients"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774351859/Capturar_t3mqz2.png",
      demoUrl: "https://contabi-lac.vercel.app",
      category: "web"
    },
    {
      id: "fozcheckin",
      title: "Foz Check-in",
      description: "Digital check-in system for hotels and inns in Foz do Iguaçu.",
      longDescription: "Complete digital check-in platform already in production.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Online check-in", "Guest management", "Reservation integration"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/fnrh_ytsy9n.png",
      demoUrl: "https://fozcheckin.vercel.app",
      category: "web"
    },
    {
      id: "polymarket-predictor",
      title: "Polymarket Predictor",
      description: "AI predictor for Polymarket prediction markets.",
      longDescription: "Prediction and analysis tool for prediction markets on Polymarket.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Real-time predictions", "Probability analysis", "Modern interface"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/polymarket_d7lcga.png",
      demoUrl: "https://polymarket-predictor.vercel.app",
      category: "web"
    }
  ]
} as const;