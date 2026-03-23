"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm as useFormspree } from "@formspree/react";
import { ANIMATION_VARIANTS, SITE_CONFIG } from "@/lib/constants";
import { Mail, Phone, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Por favor, insira um email válido"),
  subject: z.string().min(5, "O assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(20, "A mensagem deve ter pelo menos 20 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const [formspreeState, submitToFormspree] = useFormspree("mrezjnnd");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitToFormspree(data);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    }
  };

  useEffect(() => {
    if (formspreeState.succeeded) {
      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else if (formspreeState.errors && Object.keys(formspreeState.errors).length > 0) {
      setSubmitStatus("error");
    }
  }, [formspreeState.succeeded, formspreeState.errors, reset]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t.contact.title} <span className="gradient-text">{t.contact.gradient}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">{t.contact.letsConnect}</h3>
              <p className="text-muted-foreground mb-8">
                {t.contact.seeking}
              </p>
            </div>

            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{t.contact.emailLabel}</p>
                  <a href={`mailto:${SITE_CONFIG.links.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {SITE_CONFIG.links.email}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{t.contact.phoneLabel}</p>
                  <a href={`tel:${SITE_CONFIG.links.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {SITE_CONFIG.links.phone}
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">{t.contact.available}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t.contact.openTo}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.name}</label>
                <input {...register("name")} type="text" id="name" className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder={t.contact.name} />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.email}</label>
                <input {...register("email")} type="email" id="email" className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="seu.email@exemplo.com" />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">{t.contact.subject}</label>
                <input {...register("subject")} type="text" id="subject" className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Sobre o que é?" />
                {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.message}</label>
                <textarea {...register("message")} id="message" rows={5} className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Conte-me sobre seu projeto ou ideia..." />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <Button type="submit" disabled={formspreeState.submitting} className="w-full" size="lg">
                {formspreeState.submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t.contact.send}
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <p>{t.contact.success}</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <p>{t.contact.error}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}