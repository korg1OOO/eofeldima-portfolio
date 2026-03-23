// src/components/sections/Achievements.tsx
"use client";

import { motion } from "framer-motion";
import { achievementsDataLang } from "@/data/achievements";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Achievements() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentAchievements = achievementsDataLang[language];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t.achievements.title}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.achievements.subtitle}
          </p>
        </motion.div>

        <div className="space-y-6">
          {currentAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary text-2xl">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-primary font-medium mb-3">{achievement.organization}</p>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievement.impact.map((impact, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{impact}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}