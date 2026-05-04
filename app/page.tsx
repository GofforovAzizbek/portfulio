"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Send,
  ExternalLink,
  Mail,
  Smartphone,
  Terminal,
  Layers,
  Zap,
  Download,
} from "lucide-react";

/* ================= ICONS (SAFE FOR TURBOPACK) ================= */
const GitHubIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ================= CUSTOM CURSOR ================= */
function SmartCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setActive(el.closest("a, button, .interactive") !== null);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        scale: active ? 2.5 : 1,
        backgroundColor: active ? "rgba(0,0,0,0.05)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
    >
      <div className="w-6 h-6 border-2 border-black rounded-full" />
    </motion.div>
  );
}

/* ================= CONSTANTS & DATA ================= */
const STATS = [
  { label: "Tajriba (Yil)", value: "2+" },
  { label: "Muvaffaqiyatli Loyihalar", value: "15+" },
  { label: "Mamnun Mijozlar", value: "10+" },
];

const SKILLS_CATEGORIES = [
  {
    title: "Frontend Architecture",
    icon: <Layers size={20} />,
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
    icon: <Terminal size={20} />,
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
    icon: <Zap size={20} />,
    items: [
      "SEO Optimization",
      "Web Performance",
      "Git & CI/CD",
      "Responsive UI/UX",
      "Linux Server",
      "Testing (Jest)",
    ],
  },
];

const PROJECTS = [
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
];

/* ================= MAIN COMPONENT ================= */
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#fafafa] text-black selection:bg-black selection:text-white cursor-none">
      <SmartCursor />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-white/70 backdrop-blur-xl border-b border-zinc-100">
        <div className="flex flex-col leading-none">
          <span className="font-black text-xl tracking-tighter">
            G'AFFOROV.
          </span>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
            Full Stack Engineer
          </span>
        </div>

        <nav className="hidden md:flex gap-10 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
          {["about", "skills", "work", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-black transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/GofforovAzizbek"
          target="_blank"
          className="p-2.5 bg-black text-white rounded-full hover:scale-110 transition-transform"
        >
          <GitHubIcon size={18} />
        </a>
      </header>

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="min-h-[95vh] flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h1 className="text-7xl md:text-[9.5vw] font-black leading-[0.85] tracking-tighter mb-8">
              DIGITAL <br />{" "}
              <span className="text-zinc-300 italic">ARCHITECT.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10">
              Next.js ekotizimida yuqori sifatli, tezkor va foydalanuvchiga
              yo'naltirilgan zamonaviy veb-yechimlarni noldan quraman.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a
                href="#work"
                className="w-full md:w-auto px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-zinc-800 transition-all text-xs tracking-widest uppercase"
              >
                Loyihalarni Ko'rish
              </a>

              {/* RESUME DOWNLOAD BUTTON */}
              <a
                href="/resume.pdf"
                download="Azizbek_Gafforov_Resume.pdf"
                className="w-full md:w-auto px-10 py-5 border-2 border-zinc-200 text-zinc-600 font-bold rounded-full hover:border-black hover:text-black transition-all text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Download size={16} /> Resume Yuklash
              </a>

              <a
                href="mailto:azizbekgofforov2007@gmail.com"
                className="w-full md:w-auto px-10 py-5 border-2 border-black font-bold rounded-full hover:bg-black hover:text-white transition-all text-xs tracking-widest uppercase"
              >
                Bog'lanish
              </a>
            </div>
          </motion.div>

          {/* Background Text */}
          <div className="absolute -bottom-10 left-0 right-0 pointer-events-none opacity-[0.03] select-none">
            <h2 className="text-[25vw] font-black whitespace-nowrap tracking-tighter">
              ENGINEER
            </h2>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 border-y border-zinc-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {STATS.map((stat, i) => (
              <div key={i}>
                <h3 className="text-6xl font-black mb-2">{stat.value}</h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT & SKILLS */}
        <section
          id="about"
          className="py-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start"
        >
          <div className="space-y-8 sticky top-32">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">
              About Me
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-medium">
              <p>
                Men, Azizbek G'afforov, murakkab veb-tizimlarni qurishda 2
                yillik amaliy tajribaga ega dasturchiman.
              </p>
              <p>
                Har bir loyihada kod tozaligi, foydalanuvchi tajribasi (UX) va
                tizim xavfsizligiga alohida e'tibor qarataman. Men uchun
                dasturlash nafaqat ish, balki muammolarga kreativ yechim topish
                san'atidir.
              </p>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-4 text-black font-bold">
                <div className="w-12 h-[2px] bg-black"></div>
                <span className="uppercase tracking-widest text-sm">
                  Skills & Stack
                </span>
              </div>
            </div>
          </div>

          <div id="skills" className="grid gap-6">
            {SKILLS_CATEGORIES.map((cat, i) => (
              <div
                key={i}
                className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:shadow-2xl hover:shadow-zinc-200/50 transition-all group"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-zinc-50 text-black rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h4 className="font-black text-2xl tracking-tight">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-5 py-2.5 bg-zinc-50 border border-zinc-100 rounded-xl text-xs font-extrabold uppercase tracking-wider hover:border-black transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="work"
          className="py-32 px-6 bg-black text-white rounded-[4rem] mx-4"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] mb-0">
                Selected <br /> <span className="text-zinc-700">Works.</span>
              </h2>
              <p className="max-w-xs text-zinc-500 font-bold uppercase text-[10px] tracking-[0.3em] leading-loose">
                Mening eng so'nggi va texnik jihatdan murakkab loyihalarim
                jamlanmasi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -15 }}
                  className="group bg-[#111] rounded-[3rem] overflow-hidden border border-zinc-800 flex flex-col h-full"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a
                        href={p.github}
                        target="_blank"
                        className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      >
                        <GitHubIcon size={22} />
                      </a>
                      <a
                        href={p.link}
                        className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                  <div className="p-10 space-y-5 flex-grow">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
                      {p.category}
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-bold text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-40 px-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
                Let's <br /> Build.
              </h2>
              <div className="space-y-8">
                <div className="flex items-center gap-8 group">
                  <div className="p-6 bg-zinc-100 rounded-3xl group-hover:bg-black group-hover:text-white transition-all">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="font-bold text-2xl break-all">
                      azizbekgofforov2007@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="p-6 bg-zinc-100 rounded-3xl group-hover:bg-black group-hover:text-white transition-all">
                    <Smartphone size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
                      Telegram
                    </p>
                    <p className="font-bold text-2xl">@azizbek_gofforov</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                const msg = (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value;
                window.location.href = `mailto:azizbekgofforov2007@gmail.com?subject=Portfolio Message&body=From: ${email}%0A%0A${msg}`;
              }}
              className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-zinc-100 shadow-2xl shadow-zinc-100 space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">
                  Sizning Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                  required
                  className="w-full bg-zinc-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-black transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-2">
                  Xabar
                </label>
                <textarea
                  name="message"
                  placeholder="Loyiha haqida qisqacha..."
                  rows={4}
                  required
                  className="w-full bg-zinc-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-black transition-all font-medium resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white p-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4"
              >
                XABARNI YUBORISH <Send size={20} />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 border-t border-zinc-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <span className="font-black text-4xl tracking-tighter">
              G'AFFOROV.
            </span>
            <p className="text-zinc-400 text-[10px] font-bold tracking-[0.4em] uppercase mt-3">
              Digital Architect & Full Stack Developer
            </p>
          </div>

          <div className="flex gap-12 text-[11px] font-black uppercase tracking-widest text-zinc-500">
            <a
              href="https://github.com/GofforovAzizbek"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://t.me/Azizbek_Gafforov"
              target="_blank"
              className="hover:text-black transition-colors"
            >
              Telegram
            </a>
            <a href="#" className="hover:text-black transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="text-[10px] font-bold text-zinc-300 tracking-widest">
            © 2026 DESIGNED BY AZIZBEK — UZ
          </div>
        </div>
      </footer>
    </div>
  );
}
