import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Analytics } from "@vercel/analytics/next"
import { Testimonials } from "@/components/home/testimonials";
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Testimonials />
      <SkillsShowcase />
    </>
  );
}