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
      id: "automatta",
      title: "Automatta",
      description: "Agência de automação com IA que atende mais de 5 empresas brasileiras.",
      longDescription: "Problema: Empresas brasileiras perdiam tempo com tarefas repetitivas. Solução: Criei uma agência completa de automação com IA usando N8N + Firebase. Resultado: Mais de 5 empresas já utilizam o sistema em produção, reduzindo drasticamente tempo operacional.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "TypeScript"],
      features: ["Soluções personalizadas de automação com IA", "Integração WhatsApp", "Interface amigável", "Infraestrutura segura via Firebase"],
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
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "Plataforma Web3 que gerou mais de 2300 transações EVM e +2700 membros no Discord.",
      longDescription: "Problema: Comunidade Web3 precisava de engajamento real e recompensas. Solução: Criei plataforma completa com battle pass, Discord bot, wallet integration e jogo cyberpunk. Resultado: +2700 membros, +75 parcerias, +2300 transações EVM e mais de US$30.000 em prêmios distribuídos.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "Tailwind CSS"],
      features: ["Battle pass com tarefas", "Bot Discord avançado", "Integração de wallets", "Jogo cyberpunk"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "web"
    },
    {
      id: "poderestimado",
      title: "Poder Estimado",
      description: "Jogo de cartas multiplayer em tempo real com bots e leaderboard global.",
      longDescription: "Problema: Faltava um jogo de cartas competitivo acessível no Brasil. Solução: Desenvolvi jogo multiplayer com WebSockets, bots inteligentes e chat em tempo real. Resultado: Comunidade ativa com leaderboard competitivo e versão física disponível.",
      technologies: ["Vite.js", "TypeScript", "Firebase", "WebSockets", "Node.js"],
      features: ["Batalhas multiplayer em tempo real", "Bots inteligentes", "Leaderboard global", "Chat in-game"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765589854/Capturar_khr3ia.png",
      demoUrl: "http://poder-estimado.vercel.app/",
      category: "web"
    },
    {
      id: "ifeduca",
      title: "IF Educa",
      description: "Sistema oficial de avaliação docente do IFPR.",
      longDescription: "Problema: Avaliação de professores era manual e ineficiente. Solução: Desenvolvi plataforma completa com interface moderna e responsiva. Resultado: Sistema apresentado ao IFPR com feedback positivo de alunos e professores.",
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
      description: "Gerador de thumbnails profissionais com IA.",
      longDescription: "Problema: Criadores de conteúdo perdiam tempo fazendo thumbnails. Solução: Criei frontend para ferramenta com IA que gera thumbnails profissionais em segundos. Resultado: Aguardando oportunidade futura para continuar o desenvolvimento e iniciar o backend.",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["Geração de thumbnails com IA", "Templates profissionais", "Exportação rápida"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281606/creasy_cxatxv.png",
      demoUrl: "https://creasy-seven.vercel.app",
      category: "web"
    },
    {
      id: "contabilac",
      title: "Contabi",
      description: "Gestão completa de Propriedade Intelectual (backend + frontend).",
      longDescription: "Problema: Empresas de propriedade intelectual precisavam de um sistema organizado. Solução: Desenvolvi plataforma full-stack em produção. Resultado: Sistema ativo atendendo clientes reais de PI.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Gestão de marcas e patentes", "Dashboard completo", "Relatórios automáticos"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774351859/Capturar_t3mqz2.png",
      demoUrl: "https://contabi-lac.vercel.app",
      category: "web"
    },
    {
      id: "fozcheckin",
      title: "Foz Check-in",
      description: "Sistema de check-in digital para hotéis e pousadas.",
      longDescription: "Problema: Check-in manual era lento e gerava filas. Solução: Plataforma digital completa já em produção. Resultado: Procurando hotéis e pousadas para fazer uso da plataforma.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Check-in online", "Gestão de hóspedes", "Integração com reservas"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/fnrh_ytsy9n.png",
      demoUrl: "https://fozcheckin.vercel.app",
      category: "web"
    },
    {
      id: "polymarket-predictor",
      title: "Polymarket Predictor",
      description: "Preditor de mercados com IA no Polymarket.",
      longDescription: "Problema: Mercado de previsão precisava de ferramentas para análise. Solução: Ferramenta de leitura e análise em tempo real. Resultado: Ferramenta finalizada e funcional.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Previsões em tempo real", "Análise de probabilidades", "Interface moderna"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/polymarket_d7lcga.png",
      demoUrl: "https://polymarket-predictor.vercel.app",
      category: "web"
    }
  ],
  en: [
    // (Versão em inglês equivalente - mantida completa)
    {
      id: "automatta",
      title: "Automatta",
      description: "AI Automation Agency serving more than 5 Brazilian companies.",
      longDescription: "Problem: Brazilian companies lost time on repetitive tasks. Solution: Built a complete AI automation agency using N8N + Firebase. Result: More than 5 companies already using the system in production.",
      technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "TypeScript"],
      features: ["Custom AI automation solutions", "WhatsApp integration", "User-friendly interface", "Secure Firebase infrastructure"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
      demoUrl: "https://rcsoftware.site",
      category: "web"
    },
    {
      id: "actioneasy",
      title: "ActionEasy",
      description: "Business management platform used by more than 350 Brazilian companies.",
      longDescription: "Problem: Fiscal invoice issuance and administration were slow. Solution: Developed a complete platform with PHP + MySQL + React. Result: Over 350 companies using it daily.",
      technologies: ["TypeScript", "PHP", "MySQL", "Tailwind CSS", "React", "Vite.js"],
      features: ["Easy fiscal invoice issuance", "Intuitive interface", "Efficient administration tools", "Real-time insights"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
      demoUrl: "https://actioneasy.com.br/",
      category: "web"
    },
    {
      id: "legacygg",
      title: "Legacy Gaming Guild",
      description: "Web3 platform with over 2300 EVM transactions and +2700 Discord members.",
      longDescription: "Problem: Web3 community needed real engagement. Solution: Built full platform with battle pass, Discord bot and wallet integration. Result: +2700 members, +2300 EVM transactions and +US$30k in prizes.",
      technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "Tailwind CSS"],
      features: ["Task-based battle pass", "Advanced Discord bot", "Wallet integration", "Cyberpunk game"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
      demoUrl: "https://legacyguild.xyz/",
      category: "web"
    },
    {
      id: "poderestimado",
      title: "Poder Estimado",
      description: "Real-time multiplayer card game with bots and global leaderboard.",
      longDescription: "Problem: Lack of competitive card games in Brazil. Solution: Built real-time multiplayer game with WebSockets and smart bots. Result: Active community with competitive leaderboard.",
      technologies: ["Vite.js", "TypeScript", "Firebase", "WebSockets", "Node.js"],
      features: ["Real-time multiplayer battles", "Smart bots", "Global leaderboard", "In-game chat"],
      image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765589854/Capturar_khr3ia.png",
      demoUrl: "http://poder-estimado.vercel.app/",
      category: "web"
    },
    {
      id: "ifeduca",
      title: "IF Educa",
      description: "Official teacher evaluation system for IFPR.",
      longDescription: "Problem: Teacher evaluation was manual and inefficient. Solution: Built a modern, responsive platform. Result: System shared to IFPR with positive feedback from teachers.",
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
      description: "AI-powered professional thumbnail generator.",
      longDescription: "Problem: Content creators wasted time making thumbnails. Solution: Built frontend for AI tool that generates thumbnails in seconds. Result: Trained design but still waiting for an opportunity to finish this project (build backend).",
      technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      features: ["AI thumbnail generation", "Professional templates", "Fast export"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281606/creasy_cxatxv.png",
      demoUrl: "https://creasy-seven.vercel.app",
      category: "web"
    },
    {
      id: "contabilac",
      title: "Contabi",
      description: "Full Intellectual Property Management System.",
      longDescription: "Problem: IP companies needed organized management. Solution: Built complete full-stack system in production. Result: Currently serving real IP clients.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      features: ["Brand and patent management", "Full dashboard", "Automatic reports"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774351859/Capturar_t3mqz2.png",
      demoUrl: "https://contabi-lac.vercel.app",
      category: "web"
    },
    {
      id: "fozcheckin",
      title: "Foz Check-in",
      description: "Digital check-in system for hotels in Foz do Iguaçu.",
      longDescription: "Problem: Manual check-in caused delays and queues. Solution: Complete digital platform already in production. Result: Searching for hotels and inns to use it.",
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
      longDescription: "Problem: Prediction markets needed tool for better analysis. Solution: Built real-time analysis tool. Result: Completed and fully functional.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      features: ["Real-time predictions", "Probability analysis", "Modern interface"],
      image: "https://res.cloudinary.com/dpwwr4fym/image/upload/v1774281378/polymarket_d7lcga.png",
      demoUrl: "https://polymarket-predictor.vercel.app",
      category: "web"
    }
  ]
} as const;