import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    id: "pizzashop",
    titleUz: "PizzaShop AI",
    titleEn: "PizzaShop AI",
    descriptionUz:
      "Men Next.js va React-dan foydalanib ushbu rezonda chatbot platformasini ishlab chiqdim. Tabiiy til qayta ishlash va real vaqt foydalanuvchi yordamini ta'minlaydigan ilg'or AI API-larini integratsiya qildim.",
    descriptionEn:
      "I developed this intelligent chatbot platform using Next.js and React, integrating advanced AI APIs to enable natural language processing and real-time user assistance.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "AI API", "TailwindCSS"],
    githubUrl: "https://github.com/GofforovAzizbek/pizza",
    demoUrl: "https://gofforovazizbek.github.io/pizza",
    category: "fullstack",
    status: "completed",
    year: 2024,
  },
  {
    id: "ecommerce-platform",
    titleUz: "E-Commerce OS",
    titleEn: "E-Commerce OS",
    descriptionUz:
      "Men Node.js va Prisma-dan foydalanib nol asosdan mustahkam raqamli savdo platformasini qurib chiqdim. Xavfsiz Stripe to'lov integratsiyasi bilan sifatli xarid tajribasini taqdim etadi.",
    descriptionEn:
      "I built this robust digital storefront from the ground up using Node.js and Prisma, featuring a seamless shopping experience with secure Stripe payment integration.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Node.js", "React", "PostgreSQL", "Prisma", "Stripe"],
    githubUrl: "https://github.com/GofforovAzizbek/Foodzy_Exam",
    demoUrl: "https://foodzy-exam.vercel.app",
    category: "fullstack",
    status: "completed",
    year: 2024,
  },
  {
    id: "security-scanner",
    titleUz: "Security Scanner Tool",
    titleEn: "Security Scanner Tool",
    descriptionUz:
      "Men Python va Bash skriptlardan foydalanib ushbu tarmoq audit asbobini ishlab chiqdim. Zaiflik aniqlashni avtomatlashtiradigan va tizim xavfsizlik protokollarini yaxshilaydigan.",
    descriptionEn:
      "I engineered this network auditing tool using Python and Bash scripts to automate vulnerability detection and enhance system security protocols.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    technologies: ["Python", "Linux", "Bash", "Network Security", "Scapy"],
    githubUrl: "https://github.com/debian",
    category: "security",
    status: "completed",
    year: 2023,
  },
];
