"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
    { label: "COLLABORATE", href: "#collaborate" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl py-3 md:py-4 border-b border-white/10"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl sm:text-2xl font-black tracking-tighter italic hover:text-blue-500 transition-colors"
        >
          Azizbek <span className="text-blue-600"> _G'afforov</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-mono font-bold tracking-widest text-gray-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-500 transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:block px-5 md:px-6 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-2xl text-gray-400 hover:text-blue-500 transition-colors"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/90 border-t border-white/10"
      >
        <nav className="flex flex-col gap-0 px-4 sm:px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="px-4 py-3 text-sm font-mono font-bold tracking-widest text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 rounded transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="px-4 py-3 mt-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-mono font-bold tracking-widest text-white transition-colors uppercase text-center"
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
