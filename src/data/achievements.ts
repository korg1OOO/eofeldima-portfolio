// src/data/achievements.ts
// ✅ VERSÃO FINAL CORRIGIDA (para json-ld + componente bilíngue)

// === EXPORT FLAT PARA SEO (json-ld.tsx) ===
export const educationData = [
  {
    id: "ifpr",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia do Paraná (IFPR)",
    degree: "Técnico em Desenvolvimento de Sistemas",
    duration: "Março 2022 - Dezembro 2026",
    location: "Foz do Iguaçu, Brasil",
    gpa: "8.7"
  }
];

export const achievementsData = [
  {
    id: "legacygg-growth",
    title: "Crescimento da Comunidade LegacyGG",
    organization: "Legacy Gaming Guild (@Lgc_GG)",
    description: "Como Community Manager, liderei a expansão da comunidade Legacy Gaming Guild, fomentando engajamento em Web3 gaming através de eventos, parcerias e iniciativas de conteúdo.",
    impact: [
      "Crescemos a membresia do Discord para mais de 2.700 membros ativos",
      "Estabelecemos +75 parcerias com projetos e protocolos Web3",
      "Distribuimos 600+ whitelists para membros da comunidade",
      "Construímos um following de 3.865+ em redes sociais",
      "Realizamos +110 Game Nights para aumentar participação e retenção",
      "Distribuimos mais de US$30.000 em prêmios de eventos"
    ],
    icon: "🏆"
  },
  {
    id: "web3-ambassador",
    title: "Cargos de Embaixador Web3",
    organization: "Múltiplos Projetos Web3",
    description: "Atuei em cargos chave de embaixador e criador para protocolos e empresas Web3 proeminentes, promovendo adoção e conectando públicos técnicos e não-técnicos.",
    impact: [
      "Embaixador atual da Avalanche Team1 (@AvaxTeam1) no Brasil",
      "Admin Regional e Tester da RedotPay (@RedotPay) no Brasil",
      "Embaixador anterior da @moneygoesburr",
      "Criador de conteúdo para @FarcanaOfficial e @Ronin_Network",
      "Utilizei habilidades multilíngues (Português nativo, Inglês fluente, Espanhol básico)"
    ],
    icon: "🌐"
  }
];

// === VERSÃO BILÍNGUE PARA COMPONENTES CLIENT (Achievements.tsx + About.tsx) ===
export const achievementsDataLang = {
  pt: [
    {
      id: "legacygg-growth",
      title: "Crescimento da Comunidade LegacyGG",
      organization: "Legacy Gaming Guild (@Lgc_GG)",
      description: "Como Community Manager, liderei a expansão da comunidade Legacy Gaming Guild, fomentando engajamento em Web3 gaming através de eventos, parcerias e iniciativas de conteúdo.",
      impact: [
        "Crescemos a membresia do Discord para mais de 2.700 membros ativos",
      "Estabelecemos +75 parcerias com projetos e protocolos Web3",
      "Distribuimos 600+ whitelists para membros da comunidade",
      "Construímos um following de 3.865+ em redes sociais",
      "Realizamos +110 Game Nights para aumentar participação e retenção",
      "Distribuimos mais de US$30.000 em prêmios de eventos"
      ],
      icon: "🏆"
    },
    {
      id: "web3-ambassador",
      title: "Cargos de Embaixador Web3",
      organization: "Múltiplos Projetos Web3",
      description: "Atuei em cargos chave de embaixador e criador para protocolos e empresas Web3 proeminentes, promovendo adoção e conectando públicos técnicos e não-técnicos.",
      impact: [
        "Embaixador atual da Avalanche Team1 (@AvaxTeam1) no Brasil",
        "Admin Regional e Tester da RedotPay (@RedotPay) no Brasil",
        "Embaixador anterior da @moneygoesburr",
        "Criador de conteúdo para @FarcanaOfficial e @Ronin_Network",
        "Utilizei habilidades multilíngues (Português nativo, Inglês fluente, Espanhol básico)"
      ],
      icon: "🌐"
    }
  ],
  en: [
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
  ]
};

// Versão bilíngue da educação (para About.tsx)
export const educationDataLang = {
  pt: [
    {
      id: "ifpr",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia do Paraná (IFPR)",
      degree: "Técnico em Desenvolvimento de Sistemas",
      duration: "Março 2022 - Dezembro 2026",
      location: "Foz do Iguaçu, Brasil",
      gpa: "8.7"
    }
  ],
  en: [
    {
      id: "ifpr",
      institution: "Federal Institute of Education, Science and Technology of Paraná (IFPR)",
      degree: "AAS in Software Development",
      duration: "March 2022 - December 2026",
      location: "Foz do Iguaçu, Brazil",
      gpa: "8.7"
    }
  ]
};