export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "automatta",
    title: "Automatta",
    description: "My AI Automation Agency building solutions for more than 300 brazilian companies.",
    longDescription: "Automatta is an AI automation agency specializing in creating tailored solutions for Brazilian companies. Leveraging cutting-edge AI and automation technologies, we empower businesses to streamline their operations, enhance customer engagement, and drive growth. Our platform features seamless integrations, allowing companies to transform their workflows and achieve greater efficiency in a user-friendly environment.",
    technologies: ["Vite.js", "Firebase", "React.js", "N8N", "RESTful APIs", "Tailwind CSS", "React Router", "Payment Integration", "TypeScript",],
    features: [
      "Custom AI automation solutions designed for Brazilian businesses",
      "Seamless WhatsApp integration for automated customer interactions",
      "User-friendly interface",
      "Advanced automation capabilities powered by N8N",
      "Secure data handling and infrastructure via Firebase",
      "Integrated payment systems for efficient transactions",
      "Multi-device compatibility for web and mobile access"
    ],
    image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766493062/Capturar_ljnocn.png",
    demoUrl: "https://rcsoftware.site",
    category: "web"
  },
  {
    id: "actioneasy",
    title: "ActionEasy",
    description: "A business management platform for Brazilian companies, simplifying fiscal invoice issuance and efficient administration.",
    longDescription: "ActionEasy is a streamlined business management solution designed specifically for Brazilian enterprises. It empowers companies to manage their operations with simplicity, focusing on key areas such as the issuance of fiscal invoices and overall administrative efficiency. Trusted by over 300 businesses, the platform offers intuitive tools to handle compliance, financial tracking, and overall business management. Built on robust backend technologies like PHP and MySQL, ActionEasy ensures secure, reliable, and scalable performance, allowing users to focus on growth rather than administrative hurdles.",
    technologies: [ "TypeScript", "PHP", "MySQL", "Tailwind CSS", "RESTful APIs", "React Router", "React", "Vite.js", "JSON", "XML",],
    features: [
      "Effortless issuance of notas fiscais for compliance",
      "Intuitive interface for simplified business management",
      "Efficient administration tools to streamline operations",
      "Secure data storage and management with MySQL",
      "Scalable architecture powered by PHP for growing enterprises",
      "Real-time insights and reporting for informed decisions",
      "Trusted by over 300 Brazilian companies"
    ],
    image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765603816/6_vntwwv.png",
    demoUrl: "https://actioneasy.com.br/",
    category: "web"
  },
  {
    id: "legacygg",
    title: "Legacy Gaming Guild",
    description: "A Web3 community platform featuring Discord automation, wallet integrations, interactive game, and user engagement tools.",
    longDescription: "Legacy Guild is a Web3 platform designed to foster community engagement through gamified experiences and tools. Users can participate in tasks to advance on a battle pass system, follow other members, customize their profiles, and join content creation campaigns for USD rewards. The community also has a Discord bot built with Python for automating events and scraping X posts data using Selenium. It integrates Cartridge Controller wallet and Ronin wallet for viewing transactions related to tasks. Additionally, there's a cyberpunk synthwave spaceship game developed with HTML elements and a smart contract in Cairo. Users can subscribe to newsletters and toggle between Portuguese and English languages for multi-language accessibility.",
    technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
    features: [
      "Task-based progression on a battle pass system",
      "User following and profile customization",
      "Content creation campaigns with USD rewards",
      "Discord bot for event automation and data scraping",
      "Cartridge Controller wallet integration for transaction viewing",
      "Cyberpunk synthwave spaceship game with HTML and Cairo contract",
      "Newsletter subscription option",
      "Language toggle between Portuguese and English",
      "Responsive web interface supporting multi-device access"
    ],
    image: "https://res.cloudinary.com/dfawdodax/image/upload/v1766494687/Capturar_o27tco.png",
    demoUrl: "https://legacyguild.xyz/",
    category: "web"
  },
  {
    id: "poderestimado",
    title: "Poder Estimado",
    description: "A real-time multiplayer card game with bots and real players, leaderboards, in-game chat, and a physical game version available.",
    longDescription: "Poder Estimado is an engaging real-time card game where players can battle against intelligent bots or compete with real opponents online. Create a free account to dive into the action, invite friends to your group, or challenge random players. Climb the global leaderboard by securing victories against humans, and communicate seamlessly via in-game chat. An comprehensive admin section provides deep insights into game data, including leaderboards, games played, and various statistics. For those who prefer tangible gameplay, contact the owners via WhatsApp to purchase the physical version of the game. Built with modern technologies for smooth, responsive performance across devices.",
    technologies: ["Vite.js", "TypeScript", "Firebase", "WebSockets", "Node.js"],
    features: [
      "Real-time multiplayer card battles against players or bots",
      "Free account creation for instant online play",
      "Invite friends to private groups or join public matches",
      "Competitive leaderboard climbing with player victories",
      "In-game real-time chat for social interaction",
      "Admin panel with detailed stats: leaderboards, games played, and more",
      "WhatsApp contact for purchasing the physical game version",
      "Smooth, responsive interface"
    ],
    image: "https://res.cloudinary.com/dfawdodax/image/upload/v1765589854/Capturar_khr3ia.png",
    demoUrl: "http://poder-estimado.vercel.app/",
    category: "web"
  }
];