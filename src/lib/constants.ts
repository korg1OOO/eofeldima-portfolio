// App constants

export const SITE_CONFIG = {
  name: "Enzo Feldman",
  description: "Full-Stack Developer | Blockchain Developer",
  url: "https://eofeldima.vercel.app",
  links: {
    email: "enzomichelfeldman@gmail.com",
    github: "https://github.com/korg1OOO",
    x: "https://x.com/naoeofeldima",
    phone: "+55 45991096457"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};