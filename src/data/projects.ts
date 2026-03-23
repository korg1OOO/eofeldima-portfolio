// src/data/projects.ts

// === VERSÃO FLAT PARA SEO / COMPONENTES QUE NÃO USAM IDIOMA (se precisar) ===
export const projects = [
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
  }
];

// === VERSÃO BILÍNGUE PARA COMPONENTES CLIENT (FeaturedProjects + Projects page) ===
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
    }
  ]
};