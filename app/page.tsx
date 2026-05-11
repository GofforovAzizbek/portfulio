"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 z-[110] origin-left"
        style={{
          transform: `scaleX(${scrollProgress / 100})`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <Header />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <About />

      <Projects />

      <Contact />

      <Collaboration />
      <Footer />
    </main>
  );
}
