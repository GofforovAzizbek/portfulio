"use client";

import { useEffect, useRef } from "react";
import ThemeToggle from "./ui/ThemeToggle";

const PROFILE = {
  name: "Your Name",
  role: "Frontend Developer",
  subtitle: "REACT · NEXT.JS · TYPESCRIPT",
  location: "Tashkent, UZ",
  age: "21",
  languages: "UZ · RU · EN",
  status: "● Open to work",
  summary: "Frontend developer from Tashkent. Building beautiful interfaces with React.",
  email: "your@email.com",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  telegram: "https://t.me/yourname",
};

const PROJECTS = [
  {
    number: "01",
    type: "E-COMMERCE",
    year: "2025",
    title: "Market Platform",
    description: "High-performance e-commerce with catalog, filters, cart. Built with React, Zustand, and Supabase backend.",
    tags: ["React", "Zustand", "Supabase", "Tailwind"],
  },
  {
    number: "02",
    type: "DELIVERY",
    year: "2025",
    title: "Food Delivery App",
    description: "Food delivery startup project. Real-time order tracking, restaurant management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    number: "03",
    type: "NEWS PLATFORM",
    year: "2025",
    title: "Sport News",
    description: "Real-time sports news aggregator with filtering, search, and personalized feeds.",
    tags: ["React", "TypeScript", "API", "Tailwind"],
  },
];

const INTERESTS = [
  "Clean Code",
  "Professional Approach",
  "Problem Solving",
  "Sports & Fitness",
  "Traveling",
  "Learning New Things",
];

function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 2;
    let position = 0;

    const animate = () => {
      position -= speed;
      if (position < -container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={containerRef} className="flex gap-8">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <span key={i} className="text-sm font-bold tracking-wider opacity-30">
              {text}
            </span>
          ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            {PROFILE.name.split(" ")[0].toUpperCase()}.
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#about" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition">
                ABOUT
              </a>
              <a href="#projects" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition">
                WORK
              </a>
              <a href="#contact" className="hover:text-zinc-950 dark:hover:text-zinc-50 transition">
                CONTACT
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-5 sm:px-6 py-24 sm:py-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
                {PROFILE.status}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                I build interfaces,<br />
                that are <span className="italic">pleasant</span><br />
                to use.
              </h1>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {PROFILE.summary}
            </p>

            <div className="flex items-center gap-4 text-sm pt-8">
              <a
                href="#projects"
                className="font-semibold hover:underline"
              >
                SCROLL ↓
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-6 py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-24">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {idx % 2 === 0 ? (
                  <>
                    <div className="space-y-6 order-2 md:order-1">
                      <div className="space-y-2">
                        <p className="text-xs font-mono tracking-widest text-zinc-600 dark:text-zinc-400">
                          {project.type} · {project.year}
                        </p>
                        <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono border border-zinc-300 dark:border-zinc-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="order-1 md:order-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl h-80 flex items-center justify-center text-6xl">
                      📱
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl h-80 flex items-center justify-center text-6xl">
                      🛍️
                    </div>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <p className="text-xs font-mono tracking-widest text-zinc-600 dark:text-zinc-400">
                          {project.type} · {project.year}
                        </p>
                        <h3 className="text-3xl sm:text-4xl font-bold">{project.title}</h3>
                      </div>
                      <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-mono border border-zinc-300 dark:border-zinc-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mx-auto max-w-6xl px-5 sm:px-6 py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">About</h2>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Frontend developer from {PROFILE.location}. Learning React and building beautiful interfaces. Interested in tasks where UX and clean code matter.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wider">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">Location</span>
                    <span className="font-mono">{PROFILE.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">Age</span>
                    <span className="font-mono">{PROFILE.age}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">Languages</span>
                    <span className="font-mono">{PROFILE.languages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400">Status</span>
                    <span className="font-mono text-green-600">{PROFILE.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-semibold text-sm uppercase tracking-wider">What I Like</h3>
              <div className="flex flex-wrap gap-3">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-mono font-semibold">Frontend</span>
                    {" · "}
                    <span className="text-zinc-600 dark:text-zinc-400">React, Next.js, TypeScript, Tailwind</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-semibold">Backend</span>
                    {" · "}
                    <span className="text-zinc-600 dark:text-zinc-400">Node.js, Express, PostgreSQL</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-mono font-semibold">Tools</span>
                    {" · "}
                    <span className="text-zinc-600 dark:text-zinc-400">Git, Docker, Vercel</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Text Section */}
        <section className="py-16 border-t border-zinc-200 dark:border-zinc-800">
          <AnimatedText text="LET'S BUILD SOMETHING TOGETHER — " className="text-zinc-300 dark:text-zinc-700" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-6 py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">Open to opportunities.</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Send a message — I respond quickly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold rounded-lg hover:opacity-80 transition"
              >
                ✉ EMAIL {PROFILE.email}
              </a>
              <a
                href={PROFILE.telegram}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 font-semibold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                ✈ TELEGRAM
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 font-semibold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                ⚈ GITHUB
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-6xl px-5 sm:px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 mt-24">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <p>© 2026 {PROFILE.name}. All rights reserved.</p>
            <p>Built with Next.js + Tailwind. Deployed on Vercel.</p>
            <a href="#top" className="hover:text-zinc-950 dark:hover:text-zinc-50">
              ↑ Back to top
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
