"use client";

import { FaGithub, FaTelegram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/GofforovAzizbek",
    hover: "hover:text-gray-200",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/Azizbek_Gafforov",
    hover: "hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    hover: "hover:text-blue-300",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:gofforovazizbek2024@gmail.com",
    hover: "hover:text-red-300",
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Collaborate", href: "#collaborate" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tighter italic"
            >
              Azizbek_<span className="text-blue-600">G'afforov</span>
            </a>
            <p className="mt-3 text-sm text-gray-400 max-w-sm">
              Full-stack developer portfolio focused on modern web apps, secure
              APIs, and clean UI.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500">
              Quick Links
            </div>
            <nav className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:text-right">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-gray-500">
              Connect
            </div>
            <div className="mt-4 flex md:justify-end gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`text-xl text-gray-400 transition-colors ${link.hover}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="mt-6 text-xs text-gray-500">
              <span className="font-mono tracking-widest uppercase">
                Status:
              </span>{" "}
              <span className="text-green-400">Available</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Azizbek G'afforov. All rights reserved.
          </div>
          <div className="font-mono">
            Next.js • React • TypeScript • TailwindCSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
