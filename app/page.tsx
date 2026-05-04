"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Send } from "lucide-react";

/* ================= CURSOR ================= */
function SmartCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement;
      setActive(el.closest("a, button") !== null);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: pos.x - 10, y: pos.y - 10, scale: active ? 1.6 : 1 }}
    >
      <div className="w-5 h-5 border border-black rounded-full" />
    </motion.div>
  );
}

/* ================= DATA ================= */

const SKILLS = [
  "Next.js (App Router, SSR, ISR)",
  "React (Hooks, Performance)",
  "TypeScript",
  "Tailwind CSS",
  "Zustand / Redux",
  "Node.js (API)",
  "Supabase / Firebase",
  "PostgreSQL",
  "REST API Integration",
  "SEO Optimization",
  "VueJS / PHP",
  "Git & GitHub",
];

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    desc: "Full stack online store with authentication, payments (Stripe), admin dashboard and SEO optimization.",
    link: "#",
  },
  {
    title: "SaaS Dashboard",
    desc: "Advanced analytics dashboard with charts, real-time data and role-based access.",
    link: "#",
  },
  {
    title: "Telegram Music Bot",
    desc: "Bot system for searching and downloading music using APIs and automation.",
    link: "#",
  },
];

/* ================= MAIN ================= */

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  return (
    <div className="bg-white text-black">
      <SmartCursor />

      {/* SCROLL LINE */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-50"
        style={{ scaleX }}
      />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur border-b">
        <h1 className="font-black">G'AFFOROV</h1>
        <nav className="flex gap-6 text-sm font-bold">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-black mb-6">
          Frontend Engineer
        </h1>

        <p className="max-w-xl text-zinc-500">
          2+ years of experience building scalable, fast and modern web
          applications using Next.js, React and modern technologies.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-black font-bold"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-black text-white font-bold"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-zinc-600 leading-7 mb-4">
          I am a passionate Frontend Developer with over 2 years of real-world
          experience building production-ready web applications.
        </p>

        <p className="text-zinc-600 leading-7 mb-4">
          I specialize in building high-performance applications using Next.js
          and React.
        </p>

        <p className="text-zinc-600 leading-7">
          I have worked on eCommerce platforms, dashboards and automation tools.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 bg-black text-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {SKILLS.map((s, i) => (
            <span key={i} className="px-4 py-2 border text-sm">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="space-y-10">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="border p-6 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-zinc-500 mb-3">{p.desc}</p>

              <a href={p.link} className="underline font-semibold">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FINAL */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-2xl mb-4 font-bold">Contact</h2>

        <p className="text-zinc-500 mb-10">
          Have a project or want to collaborate?
        </p>

        {/* EMAIL FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const message = (
              form.elements.namedItem("message") as HTMLTextAreaElement
            ).value;

            window.location.href = `mailto:azizbek@example.com?subject=Portfolio Contact&body=From: ${email}%0A%0A${message}`;
          }}
          className="max-w-xl mx-auto space-y-4 mb-10"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full border px-4 py-3 rounded-lg outline-none focus:border-black"
          />

          <textarea
            name="message"
            required
            placeholder="Your message..."
            rows={4}
            className="w-full border px-4 py-3 rounded-lg outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-bold hover:opacity-80 transition"
          >
            Send Message
          </button>
        </form>

        {/* TELEGRAM */}
        <div className="flex justify-center">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            className="flex items-center gap-3 px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition"
          >
            <Send size={20} />
            <span className="font-semibold">Telegram</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-zinc-400">
        © 2026 AZIZBEK G'AFFOROV
      </footer>
    </div>
  );
}
