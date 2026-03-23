"use client";

import { motion } from "framer-motion";
import { skillsDataLang } from "@/data/skills";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const categoryDescriptions = {
  pt: {
    "Linguagens de Programação": "Proficiente em múltiplos paradigmas incluindo OOP, funcional e procedural",
    "Desenvolvimento Frontend": "Criando interfaces responsivas, interativas e performáticas com frameworks modernos",
    "Backend & Bancos de Dados": "Construindo aplicações server-side escaláveis e gerenciando bancos SQL e NoSQL"
  },
  en: {
    "Programming Languages": "Proficient in multiple paradigms including OOP, functional, and procedural programming",
    "Frontend Development": "Creating responsive, interactive, and performant user interfaces with modern frameworks",
    "Backend & Databases": "Building scalable server-side applications and managing both SQL and NoSQL databases"
  }
};

export function SkillsShowcase() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentSkills = skillsDataLang[language];
  const descriptions = categoryDescriptions[language];

  const showcaseSkills = currentSkills.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "pt" ? "Uma seleção das minhas principais habilidades técnicas" : "A selection of my core technical skills"}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseSkills.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {descriptions[category.title]}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="text-xs">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}