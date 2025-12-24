"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { 
  ScrollReveal, 
  GradientText
} from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1} width="100%">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={ANIMATION_VARIANTS.fadeUp}
className="flex flex-col items-center text-center mb-12"
>
<h2 className="text-4xl md:text-5xl font-display font-bold mb-4 max-w-2xl mx-auto">
About <GradientText>Me</GradientText>
</h2>
<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
18 year old brazilian developer passionate about building solutions and exploring AI and blockchain tech.
</p>
</motion.div>
</ScrollReveal>

        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Hi! I&apos;m Enzo Feldman, a AAS in Software Development from IFPR. With a strong foundation in full-stack development and blockchain integrations,
                I love creating eye-catching software.
              </p>
              <p className="text-lg leading-relaxed">
  During my part-time role at Action Business, I built a SAAS website for an existing desktop application and developed a new mobile app for the restaurant niche, enhancing user accessibility and performance through modern technologies.
</p>
<p className="text-lg leading-relaxed">
  As a Core Team member at Legacy Gaming Guild, I&apos;ve developed solutions for gamers, growing a vibrant community of over 2,700 Discord members, establishing 75+ partnerships, and distributing over US$30,000 in event prizes to enable web2 and web3 players to earn while playing.
</p>
              {/* Education Cards */}
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={ANIMATION_VARIANTS.fadeUp}
                  transition={{ delay: index * 0.1 + 0.4 }} // Slight delay after image
                  className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>
                      {edu.gpa && (
                        <p className="mt-2 text-sm font-medium">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Personal Image */}
            <div className="flex flex-col">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ delay: 0.3 }}
                className="flex-grow relative rounded-lg overflow-hidden"
              >
                <Image
                  src="https://res.cloudinary.com/dfawdodax/image/upload/v1765564284/Capturar_mzvqzj.png" // Replace with your actual image path
                  alt="Enzo Feldman"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}