"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LavenderBadge } from "@/components/ui/lavender-badge";
import { TiltCard } from "@/components/animations";
import { useLanguage } from "@/app/contexts/LanguageContext";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
}

export function ProjectCard({ project, detailed = false }: ProjectCardProps) {
  const { language } = useLanguage();
  const [showAllTech, setShowAllTech] = useState(false);
  const techToShow = showAllTech ? project.technologies : project.technologies.slice(0, 4);
  const hasMoreTech = project.technologies.length > 4;

  return (
    <TiltCard className="h-full">
      <Card className="project-card group h-full flex flex-col hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/50">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              onError={(e) => {
                console.error(`Failed to load image: ${project.image}`);
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl opacity-20">💻</span>
            </div>
          )}
        </div>
        
        <CardHeader className="pb-3">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors text-left">
            {project.title}
          </h3>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col">
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 text-left">
            {project.description}
          </p>
          
          {detailed && project.features && (
            <div className="mb-4 space-y-1">
              {project.features.slice(0, 2).map((feature, i) => (
                <p key={i} className="text-xs text-muted-foreground/80 flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="line-clamp-2">{feature}</span>
                </p>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techToShow.map((tech) => (
              <LavenderBadge key={tech}>
                {tech}
              </LavenderBadge>
            ))}
            {hasMoreTech && (
              <button
                onClick={() => setShowAllTech(!showAllTech)}
                className="inline-flex items-center"
              >
                <LavenderBadge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  {showAllTech 
                    ? (language === "pt" ? "Mostrar menos" : "Show less")
                    : `+${project.technologies.length - 4} ${language === "pt" ? "mais" : "more"}`
                  }
                </LavenderBadge>
              </button>
            )}
          </div>
          
          <div className="mt-auto flex gap-2 pt-4 border-t border-border/50">
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  {language === "pt" ? "Ver no ar" : "Deployed"}
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </TiltCard>
  );
}