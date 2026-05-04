import Image from "next/image";
import Reveal from "./ui/Reveal";
import ThemeToggle from "./ui/ThemeToggle";

const PROFILE = {
  name: "Developer",
  role: "Full Stack Engineer",
  location: "Uzbekistan",
  summary:
    "Crafting exceptional digital experiences with modern web technologies. Specialized in building high-performance, visually stunning applications with clean, maintainable code.",
  email: "hello@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  telegram: "https://t.me",
};

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "A high-performance e-commerce platform with real-time inventory, payment integration, and responsive design. Built with Next.js 14, PostgreSQL, and Stripe API.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "PostgreSQL"],
    image: "🛍️",
    links: {
      live: "https://ecommerce-demo.vercel.app",
      github: "https://github.com/yourusername/ecommerce",
    },
  },
  {
    title: "AI Content Dashboard",
    description:
      "Modern dashboard for generating and managing AI-powered content. Features real-time collaboration, markdown editor, and export capabilities.",
    tags: ["React", "TypeScript", "Tailwind", "WebSockets", "Vercel AI"],
    image: "✨",
    links: {
      live: "https://ai-dashboard-demo.vercel.app",
      github: "https://github.com/yourusername/ai-dashboard",
    },
  },
  {
    title: "Analytics & Reporting Tool",
    description:
      "Comprehensive analytics platform with interactive charts, data visualization, and customizable reports. Optimized for performance with 10K+ data points.",
    tags: ["React", "D3.js", "TypeScript", "FastAPI", "GraphQL"],
    image: "📊",
    links: {
      live: "https://analytics-demo.vercel.app",
      github: "https://github.com/yourusername/analytics",
    },
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-900/10 bg-white/60 px-3 py-1 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-100">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {desc ? (
        <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className="noise-bg min-h-screen">
      <header className="sticky top-0 z-40 border-b border-zinc-900/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/30">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            aria-label={`${PROFILE.name} home`}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-900/10 bg-white/60 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={18}
                height={18}
                className="opacity-90 dark:invert"
                priority
              />
            </span>
            <span className="hidden sm:block">{PROFILE.name}</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:flex">
            <a
              className="transition hover:text-zinc-950 dark:hover:text-zinc-50"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="transition hover:text-zinc-950 dark:hover:text-zinc-50"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="transition hover:text-zinc-950 dark:hover:text-zinc-50"
              href="#contact"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-zinc-900/10 bg-white/60 px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10 sm:inline-flex"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main
        id="top"
        className="mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-6 sm:pt-20"
      >
        <section className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <Reveal className="card rounded-3xl p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Pill>{PROFILE.role}</Pill>
              <Pill>{PROFILE.location}</Pill>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
              Exceptional Digital Experiences
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              {PROFILE.summary}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                View projects
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900/10 bg-white/60 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                {PROFILE.email}
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-900/10 bg-white/60 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
              >
                Resume
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <a
                className="underline decoration-zinc-400/50 underline-offset-4 transition hover:text-zinc-950 dark:hover:text-zinc-50"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline decoration-zinc-400/50 underline-offset-4 transition hover:text-zinc-950 dark:hover:text-zinc-50"
                href={PROFILE.telegram}
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                className="underline decoration-zinc-400/50 underline-offset-4 transition hover:text-zinc-950 dark:hover:text-zinc-50"
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal
            delayMs={120}
            className="card relative overflow-hidden rounded-3xl p-7 sm:p-10"
          >
            <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(closest-side,black,transparent)]">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-500/25 blur-2xl" />
              <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-2xl" />
              <div className="absolute bottom-0 left-8 h-56 w-56 rounded-full bg-emerald-500/15 blur-2xl" />
            </div>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-600 dark:text-zinc-400">
                Highlights
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-950/70 dark:bg-white/70" />
                  <span>
                    Professional full-stack development with modern frameworks
                    and best practices.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-950/70 dark:bg-white/70" />
                  <span>
                    High-performance applications optimized for speed, SEO, and
                    user experience.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-950/70 dark:bg-white/70" />
                  <span>
                    Clean, maintainable code following industry standards and
                    design patterns.
                  </span>
                </li>
              </ul>

              <div className="mt-7 rounded-2xl border border-zinc-900/10 bg-white/50 p-4 text-xs text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <p className="font-semibold text-zinc-950 dark:text-zinc-50">
                  Customize Your Portfolio
                </p>
                <p className="mt-1">
                  Edit your name, links, and projects in{" "}
                  <span className="font-mono">app/page.tsx</span>. Update your
                  info and you're ready to showcase!
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="mt-16 sm:mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="Showcase"
              title="Recent Projects"
              desc="Crafted solutions demonstrating expertise in full-stack development, UI/UX design, and modern web technologies."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p, idx) => (
              <Reveal
                key={p.title}
                delayMs={idx * 80}
                className="card group relative overflow-hidden rounded-3xl p-6 transition hover:border-zinc-900/20 dark:hover:border-white/20"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 [background:radial-gradient(closest-side,rgba(59,130,246,0.15),transparent)]" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-5xl">{p.image}</span>
                    <span className="rounded-full border border-zinc-900/10 bg-white/60 px-2 py-1 text-[11px] font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300 flex-grow">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-900/10 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-semibold text-white transition hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                    <a
                      className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-zinc-900/10 bg-white/60 px-4 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16 sm:mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="Stack"
              title="Skills & Expertise"
              desc="A comprehensive overview of technologies, tools, and methodologies used in professional development."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <Reveal className="card rounded-3xl p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Frontend Development
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                React, Next.js 14, TypeScript, Tailwind CSS, responsive design,
                animations, and performance optimization.
              </p>
            </Reveal>
            <Reveal delayMs={80} className="card rounded-3xl p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Backend & Databases
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Node.js, Express, PostgreSQL, MongoDB, GraphQL, REST APIs, and
                real-time WebSocket applications.
              </p>
            </Reveal>
            <Reveal delayMs={160} className="card rounded-3xl p-6">
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Tools & Practices
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Git, Docker, CI/CD, testing frameworks, Vercel deployment, clean
                code principles, and agile methodology.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="mt-16 sm:mt-20">
          <Reveal>
            <SectionTitle
              eyebrow="Get in Touch"
              title="Ready to Collaborate"
              desc="I'm always interested in hearing about new projects and exciting opportunities."
            />
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal className="card rounded-3xl p-7 sm:p-8">
              <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                Let's discuss your project and create something amazing
                together.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-900 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Send Email
                </a>
                <a
                  href={PROFILE.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-zinc-900/10 bg-white/60 px-6 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
                >
                  Telegram
                </a>
              </div>
            </Reveal>

            <Reveal delayMs={120} className="card rounded-3xl p-7 sm:p-8">
              <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Social Links
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  className="rounded-2xl border border-zinc-900/10 bg-white/50 px-4 py-3 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="rounded-2xl border border-zinc-900/10 bg-white/50 px-4 py-3 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-2xl border border-zinc-900/10 bg-white/50 px-4 py-3 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
                  href="#top"
                >
                  ↑ Back to top
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-900/10 pt-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <p className="text-xs">
              Built with Next.js + Tailwind. Deployed on Vercel.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
