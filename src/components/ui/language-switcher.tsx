"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-muted/80 backdrop-blur-sm rounded-2xl p-1 border border-border/50 shadow-inner gap-1">
      {/* Português - Brasil */}
      <button
        onClick={() => setLanguage("pt")}
        className={cn(
          "flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-all hover:bg-background/80 group",
          language === "pt"
            ? "bg-background shadow-md ring-1 ring-primary/30 scale-105"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <img
          src="https://flagcdn.com/w40/br.png"
          alt="Bandeira do Brasil"
          className="w-9 h-6 rounded-sm shadow-sm mb-1 object-cover"
        />
        <span className="text-[10px] font-semibold tracking-widest group-hover:text-primary">PT</span>
      </button>

      {/* Inglês - Reino Unido */}
      <button
        onClick={() => setLanguage("en")}
        className={cn(
          "flex flex-col items-center justify-center w-14 h-16 rounded-xl transition-all hover:bg-background/80 group",
          language === "en"
            ? "bg-background shadow-md ring-1 ring-primary/30 scale-105"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="Bandeira do Reino Unido"
          className="w-9 h-6 rounded-sm shadow-sm mb-1 object-cover"
        />
        <span className="text-[10px] font-semibold tracking-widest group-hover:text-primary">EN</span>
      </button>
    </div>
  );
}