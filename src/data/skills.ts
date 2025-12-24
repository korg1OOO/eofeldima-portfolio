
export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PHP", level: 88 },
      { name: "Cairo", level: 70 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 88 },
      { name: "React.js", level: 90 },
      { name: "Vite.js", level: 85 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "REST API", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "Firebase", level: 90 }
    ]
  }
];