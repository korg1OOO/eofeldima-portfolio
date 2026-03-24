export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "web" | "mobile" | "blockchain" | "ai";
}

export const projectsLang = {
  pt: [
    {
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "Plataforma comunitária Web3 com automação Discord, integrações de wallet, jogo interativo e ferramentas de engajamento.",
      longDescription: "Problema: Comunidade Web3 precisava de engajamento real e recompensas on-chain. Solução: Criei plataforma completa com battle pass, Discord bot avançado, integração de wallets (Starknet/Ronin/Avax) e mini-jogo cyberpunk. Resultado: +2700 membros no Discord, +75 parcerias, mais de 2300 transações EVM e mais de US$30.000 em prêmios distribuídos.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
      features: ["Sistema de battle pass baseado em tarefas", "Bot Discord avançado", "Integração de wallets", "Jogo cyberpunk"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "blockchain"
    },
    {
      id: "automatta",
      title: "Automatta",
      description: "Minha Agência de Automação com IA construindo soluções para mais de 300 empresas brasileiras.",
      longDescription: "Problema: Empresas brasileiras perdiam tempo com tarefas repetitivas. Solução: Criei uma agência completa de automação com IA usando N8N + Firebase. Resultado: Mais de 5 empresas já utilizam o sistema em produção, reduzindo drasticamente tempo operacional.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "TypeScript"],
      features: ["Soluções personalizadas de automação com IA", "Integração seamless com WhatsApp", "Interface amigável", "Capacidades avançadas de automação com N8N", "Infraestrutura segura via Firebase", "Sistemas de pagamento integrados"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
      demoUrl: "https://rcsoftware.site",
      category: "web"
    },
    {
      id: "actioneasy",
      title: "ActionEasy",
      description: "Plataforma de gestão empresarial usada por mais de 350 empresas brasileiras.",
      longDescription: "Problema: Emissão de notas fiscais e gestão administrativa eram lentas e complicadas. Solução: Desenvolvi uma plataforma completa com PHP + MySQL + React. Resultado: Mais de 350 empresas utilizam diariamente, simplificando compliance fiscal e administração.",
      technologies: ["TypeScript", "PHP", "MySQL", "Tailwind CSS", "React", "Vite.js"],
      features: ["Emissão fácil de notas fiscais", "Interface intuitiva", "Ferramentas eficientes de administração", "Insights em tempo real"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
      demoUrl: "https://actioneasy.com.br/",
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
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/ifeduca_zrqptb.png",
      demoUrl: "https://if-educa.vercel.app",
      githubUrl: "https://github.com/korg1OOO/IFEduca",
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
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "A Web3 community platform featuring Discord automation, wallet integrations, interactive game, and user engagement tools.",
      longDescription: "Problem: Web3 communities needed real engagement and on-chain rewards. Solution: Built a complete platform including battle pass, advanced Discord bot, wallet integration (Starknet/Ronin/Avax) and cyberpunk mini-game. Result: +2700 Discord members, +75 partnerships, over 2300 EVM transactions and more than US$30,000 in prizes distributed.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
      features: ["Task-based battle pass", "Advanced Discord bot", "Wallet integration", "Cyberpunk game"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "blockchain"
    },
    {
      id: "automatta",
      title: "Automatta",
      description: "My AI Automation Agency building solutions for more than 300 Brazilian companies.",
      longDescription: "Problem: Brazilian companies wasted time on repetitive tasks. Solution: Created a complete AI automation agency using N8N + Firebase. Result: More than 5 companies already running the system in production, drastically reducing operational time.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "TypeScript"],
      features: ["Custom AI automation solutions", "Seamless WhatsApp integration", "User-friendly interface", "Advanced automation with N8N", "Secure Firebase infrastructure", "Integrated payment systems"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
      demoUrl: "https://rcsoftware.site",
      category: "web"
    },
    {
      id: "actioneasy",
      title: "ActionEasy",
      description: "A business management platform for Brazilian companies, simplifying fiscal invoice issuance and efficient administration.",
      longDescription: "Problem: Brazilian companies struggled with slow fiscal invoice issuance and administrative tasks. Solution: Developed a full business management platform using PHP + MySQL + React. Result: More than 350 companies using it daily, simplifying tax compliance and operations.",
      technologies: ["TypeScript", "PHP", "MySQL", "Tailwind CSS", "React", "Vite.js"],
      features: ["Effortless issuance of notas fiscais", "Intuitive interface", "Efficient administration tools", "Real-time insights"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
      demoUrl: "https://actioneasy.com.br/",
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
      githubUrl: "https://github.com/korg1OOO/IFEduca",
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