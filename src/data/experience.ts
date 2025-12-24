
export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type?: "internship" | "part-time" | "full-time";
}

export const experienceData: Experience[] = [
  {
    id: "action",
    company: "Action Business",
    role: "Software Development",
    duration: "Jun 2025 - Today",
    location: "Foz do Iguaçu, Brazil",
    description: "Built a SAAS website for an existing desktop application and working on a new mobile app implementation for a new niche",
    achievements: [

    ],
    technologies: ["Vite.js", "Typescript", "React.js", "PHP", "MySQL", "JSON", "XML", "Tailwind CSS"],
    type: "part-time"
  },
  {
    id: "legacygg",
    company: "Legacy Gaming Guild",
    role: "Core Team",
    duration: "December 2024 - Today",
    location: "Remote",
    description: "Built many solutions for gamers, creating a great community for both web2 and web3 players and allowing gamers to get paid playing.",
    achievements: [
      
    ],
    technologies: ["Vite.js", "TypeScript", "MongoDB", "Node.js", "Python", "Selenium", "Cairo", "HTML", "Tailwind CSS", "FormFacade"],
    type: "part-time"
  }
];