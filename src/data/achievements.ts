export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  icon: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "legacygg-growth",
    title: "LegacyGG Community Growth",
    organization: "Legacy Gaming Guild (@Lgc_GG)",
    description: "As Community Manager, spearheaded the expansion of the Legacy Gaming Guild community, fostering engagement in Web3 gaming through events, partnerships, and content initiatives.",
    impact: [
      "Grew Discord membership to over 2,700 active members",
      "Established 75+ partnerships with Web3 projects and protocols",
      "Distributed 600+ whitelists to community members",
      "Built a following of 3,865+ across social networks",
      "Hosted 110+ Game Nights to boost participation and retention",
      "Distributed over US$30,000 in event prizes to reward community involvement"
    ],
    icon: "🏆"
  },
  {
    id: "web3-ambassador",
    title: "Web3 Ambassador Roles",
    organization: "Multiple Web3 Projects",
    description: "Served in key ambassador and creator roles for prominent Web3 protocols and companies, promoting adoption and building bridges between technical and non-technical audiences.",
    impact: [
      "Current Ambassador for Avalanche's Team1 (@AvaxTeam1), driving regional engagement in Brazil",
      "Brazilian Regional Admin & Tester for RedotPay (@RedotPay), managing local operations and community outreach",
      "Previous Ambassador for @moneygoesburr, focusing on promotional campaigns",
      "Content Creator roles for @FarcanaOfficial and @Ronin_Network, producing educational and marketing materials",
      "Leveraged multilingual skills (native Portuguese, proficient English, basic Spanish) to expand reach in diverse markets"
    ],
    icon: "🌐"
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  logo?: string;
}

export const educationData: Education[] = [
  {
    id: "ifpr",
    institution: "Federal Institute of Education, Science and Technology of Paraná (IFPR)",
    degree: "AAS in Software Development",
    duration: "March 2022 - December 2026",
    location: "Foz do Iguaçu, Brazil",
    gpa: "8.7",
  }
];