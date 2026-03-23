"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold gradient-text">Enzo Feldman</h3>
            <p className="text-sm text-muted-foreground">{t.footer.about}</p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { href: "/", label: "home" },
                { href: "/about", label: "about" },
                { href: "/experience", label: "experience" },
                { href: "/projects", label: "projects" },
                { href: "/skills", label: "skills" },
                { href: "/achievements", label: "achievements" },
                { href: "/contact", label: "contact" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav[item.label as keyof typeof t.nav]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">{t.footer.connect}</h3>
            <div className="flex flex-col space-y-2">
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.links.phone}`}
                className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Phone</span>
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.links.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="X"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. {t.footer.copyright}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}