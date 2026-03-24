"use client";

import { motion } from "framer-motion";
import { projectsLang } from "@/data/projects";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/project-card";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentProjects = projectsLang[language];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t.projects.title} <span className="gradient-text">{t.projects.gradient}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-md"
            >
              <ProjectCard project={project} detailed={true} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}