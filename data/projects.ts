import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    id: "pizzashop",
    titleEn: "PizzaShop AI",
    descriptionEn:
      "I developed this intelligent chatbot platform using Next.js and React, integrating advanced AI APIs to enable natural language processing and real-time user assistance.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop", // Pizza va AI muhitiga mos rasm
    technologies: ["Next.js", "React", "TypeScript", "AI API", "TailwindCSS"],
    githubUrl: "https://github.com/GofforovAzizbek/pizza",
    demoUrl: "https://gofforovazizbek.github.io/pizza",
  },
  {
    id: "ecommerce-platform",
    titleEn: "E-Commerce OS",
    descriptionEn:
      "I built this robust digital storefront from the ground up using Node.js and Prisma, featuring a seamless shopping experience with secure Stripe payment integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", // Online savdo va dashboard muhiti
    technologies: ["Node.js", "React", "PostgreSQL", "Prisma", "Stripe"],
    githubUrl: "https://github.com/GofforovAzizbek/Foodzy_Exam",
    demoUrl: "https://foodzy-exam.vercel.app",
  },
  {
    id: "security-scanner",
    titleEn: "Security Scanner Tool",
    descriptionEn:
      "I engineered this network auditing tool using Python and Bash scripts to automate vulnerability detection and enhance system security protocols.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop", // Kiberxavfsizlik va kod muhiti
    technologies: ["Python", "Linux", "Bash", "Network Security", "Scapy"],
    githubUrl: "https://gofforovazizbek.github.io/CarStore",
  },
];
