export const NAV_ITEMS = ["about", "skills", "work", "contact"] as const;

export const STATS = [
  { label: "Tajriba (Yil)", value: "2+" },
  { label: "Muvaffaqiyatli Loyihalar", value: "15+" },
  { label: "Mamnun Mijozlar", value: "10+" },
] as const;

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: "Layers",
    items: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand / Redux",
    ],
  },
  {
    title: "Backend & Systems",
    icon: "Terminal",
    items: [
      "Node.js",
      "PostgreSQL",
      "Supabase / Firebase",
      "Prisma ORM",
      "REST / GraphQL API",
      "Docker Basics",
    ],
  },
  {
    title: "Optimization & Tools",
    icon: "Zap",
    items: [
      "SEO Optimization",
      "Web Performance",
      "Git & CI/CD",
      "Responsive UI/UX",
      "Linux Server",
      "Testing (Jest)",
    ],
  },
] as const;

export const PROJECTS = [
  {
    title: "Global E-Commerce Platform",
    category: "Full-Stack System",
    desc: "Stripe integratsiyasi, admin paneli va real-vaqtda savatcha boshqaruvi bilan jihozlangan yuqori tezlikdagi do'kon platformasi.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://foodzy-exam.vercel.app",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Fintech Dashboard",
    category: "Data Visualization",
    desc: "Bank operatsiyalari va tahlillarni real-vaqtda kuzatish uchun dashboard. Murakkab chartlar va qorong'u rejim integratsiyasi.",
    tech: ["React", "Tailwind", "Zustand", "Recharts"],
    github: "https://github.com/GofforovAzizbek",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Automation Bot",
    category: "Backend / Automation",
    desc: "Telegram bot orqali musiqa, video yuklash va ma'lumotlarni qayta ishlashni avtomatlashtiruvchi backend tizimi.",
    tech: ["Node.js", "Telegraf", "OpenAI API", "Redis"],
    github: "https://github.com/GofforovAzizbek",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
  },
] as const;

