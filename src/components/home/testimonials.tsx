"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    id: 1,
    quote: "We are already on our second system being developed by you and the result is always above what we expected.",
    author: "Michel Feldman",
    role: "Owner",
    company: "Business Millenium",
    avatar: "https://res.cloudinary.com/dfawdodax/image/upload/v1765588968/file_2_jdigvu.jpg"
  },
  {
    id: 2,
    quote: "The game looks great on mobile and computer, I even called my friends to use it. Got over 10 friends to play it, we loved it.",
    author: "Salete Aguiar",
    role: "Owner",
    company: "O Poder Estimado",
    avatar: "https://res.cloudinary.com/dfawdodax/image/upload/v1765588899/file_lbxx59.jpg"
  },
  {
    id: 3,
    quote: "Impeccable professionalism. The support is exceptional and always resolves everything quickly.",
    author: "Eden Feldman",
    role: "Owner",
    company: "Action Business",
    avatar: "https://res.cloudinary.com/dfawdodax/image/upload/v1764446480/WhatsApp_Image_2025-11-29_at_16.55.43_voqkm7.jpg"
  },
  {
    id: 4,
    quote: "The site and the bot turned out exactly as we imagined, it brought various user conversions to our events.",
    author: "Lucas Braz",
    role: "Founder",
    company: "LegacyGG",
    avatar: "https://res.cloudinary.com/dfawdodax/image/upload/v1765588967/file_3_rgrxef.jpg"
  },
  {
    id: 5,
    quote: "The AI attendant makes my life much easier, my clients even praised the speed of service in non-commercial hours.",
    author: "Talia Maurer",
    role: "Owner",
    company: "Talia Physiotherapy Studio",
    avatar: "https://res.cloudinary.com/dfawdodax/image/upload/v1765588968/file_1_wz8rni.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recommendations from business owners I&apos;ve worked with
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative">
                <CardContent className="pt-8 pb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
                  <p className="text-muted-foreground mb-6 italic pl-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}{testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
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
