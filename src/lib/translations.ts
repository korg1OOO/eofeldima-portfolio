export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      achievements: "Conquistas",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      tagline: "Técnico em Desenvolvimento de Sistemas",
      typewriter: ["Desenvolvedor Full-Stack", "Apps Mobile", "Integrações Blockchain", "Automações com IA"],
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
    },
    about: {
      title: "Sobre",
      gradient: "Mim",
      description: "18 anos, desenvolvedor brasileiro apaixonado por criar soluções e explorar IA e blockchain.",
      intro1: "Oi! Eu sou Enzo Feldman, Técnico em Desenvolvimento de Sistemas pelo IFPR. Com base sólida em full-stack e integrações blockchain, amo criar softwares visualmente incríveis.",
      intro2: "Durante meu trabalho na Action Business, construí um site SAAS para um app desktop e desenvolvi um novo app mobile para o nicho de restaurantes.",
      intro3: "Como Core Team na Legacy Gaming Guild, desenvolvi soluções para gamers e cresci uma comunidade de +2.700 membros no Discord.",
    },
    achievements: {
      title: "Conquistas",
      subtitle: "Marcos importantes e conquistas que mostram inovação técnica e excelência.",
    },
    experience: {
      title: "",
      gradient: "Experience"
    },
    projects: {
      title: "Meus",
      gradient: "Projetos",
      subtitle: "De jogos multiplayer em tempo real até plataformas de gestão empresarial.",
    },
    skills: {
      title: "Habilidades",
      gradient: "Técnicas"
    },
        contact: {
      title: "Entre em",
      gradient: "Contato",
      subtitle: "Tem um projeto em mente ou quer colaborar? Sinta-se à vontade para entrar em contato! Estou sempre aberto a novas oportunidades.",
      letsConnect: "Vamos Conectar",
      seeking: "Sou Técnico em Desenvolvimento de Sistemas pelo IFPR e estou buscando oportunidades em Desenvolvimento Full-Stack, Testes de Software e Tecnologias Emergentes.",
      emailLabel: "Email",
      phoneLabel: "Telefone",
      available: "Disponível para oportunidades",
      openTo: "Aberto a cargos Full-time, Part-time e Freelance",
      name: "Nome",
      email: "Email",
      subject: "Assunto",
      message: "Mensagem",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso! Responderei em breve.",
      error: "Algo deu errado. Tente novamente mais tarde."
    },
    testimonials: {
      title: "O que as pessoas dizem",
      subtitle: "Recomendações de donos de empresas com quem trabalhei"
    },
    footer: {
      about: "Técnico em Desenvolvimento de Sistemas construindo sites full-stack e apps mobile com IA & blockchain.",
      quickLinks: "Links Rápidos",
      connect: "Conectar",
      copyright: "Todos os direitos reservados.",
      builtWith: "Construído com 💜 usando Next.js, TypeScript e Tailwind CSS",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      achievements: "Achievements",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      tagline: "AAS in Software Development",
      typewriter: ["Full-Stack Developer", "Mobile Apps", "Blockchain Integrations", "AI Automations"],
      ctaProjects: "View Projects",
      ctaContact: "Get In Touch",
    },
        about: {
      title: "About",
      gradient: "Me",
      description: "18 year old Brazilian developer passionate about building solutions and exploring AI and blockchain tech.",
      intro1: "Hi! I'm Enzo Feldman, AAS in Software Development from IFPR. With a strong foundation in full-stack development and blockchain integrations, I love creating eye-catching software.",
      intro2: "During my part-time role at Action Business, I built a SAAS website for an existing desktop application and developed a new mobile app for the restaurant niche.",
      intro3: "As a Core Team member at Legacy Gaming Guild, I've developed solutions for gamers, growing a vibrant community of over 2,700 Discord members.",
    },
    achievements: {
      title: "Achievements",
      subtitle: "Key milestones showcasing technical innovation and problem-solving.",
    },
    experience: {
      title: "Work",
      gradient: "Experience"
    },
    projects: {
      title: "My",
      gradient: "Projects",
      subtitle: "From real-time multiplayer card games to company management platforms.",
    },
        skills: {
      title: "Technical",
      gradient: "Skills"
    },
        contact: {
      title: "Get In",
      gradient: "Touch",
      subtitle: "Have a project in mind or want to collaborate? Feel free to reach out! I'm always open to new opportunities.",
      letsConnect: "Let's Connect",
      seeking: "I'm an AAS in Software Development from IFPR and actively seeking opportunities in Full-Stack Development, Software Testing and Emerging Technologies.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      available: "Available for opportunities",
      openTo: "Open to Full-time, Part-time and Freelancing roles",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Something went wrong. Please try again later."
    },
    testimonials: {
      title: "What People Say",
      subtitle: "Recommendations from business owners I've worked with"
    },
    footer: {
      about: "AAS in Software Development building full-stack websites and mobile apps with AI & blockchain integrations.",
      quickLinks: "Quick Links",
      connect: "Connect",
      copyright: "All rights reserved.",
      builtWith: "Built with 💜 using Next.js, TypeScript, and Tailwind CSS",
    },
  },
} as const;