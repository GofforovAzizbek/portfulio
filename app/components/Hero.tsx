"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaCode, FaServer, FaShieldAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKalilinux,
} from "react-icons/si";

const banners = [
  {
    id: "frontend",
    title: "Ideal Frontend Architecture",
    role: "FRONTEND DEVELOPER",
    desc: "I specialize in building high-performance web applications with seamless API integration, delivering pixel-perfect UI/UX and fluid user experiences.",
    icon: <FaCode />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    icons: [
      <SiJavascript />,
      <SiTypescript />,
      <SiReact />,
      <SiNextdotjs />,
      <SiTailwindcss />,
    ],
  },
  {
    id: "backend",
    title: "Robust Systems & Data Processing",
    role: "BACKEND ENGINEER",
    desc: "Expert in architecting RESTful/GraphQL APIs and handling complex data processing. I build scalable server-side solutions that solve real-world problems with maximum efficiency.",
    icon: <FaServer />,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    icons: [
      <SiTypescript />,
      <SiNodedotjs />,
      <SiPython />,
      <SiPostgresql />,
      <SiDocker />,
    ],
  },
  {
    id: "security",
    title: "Absolute Security Culture",
    role: "CYBERSECURITY ENTHUSIAST",
    desc: "I implement deep security layers for every application. From data encryption to API protection, I ensure your products are shielded against modern cyber threats.",
    icon: <FaShieldAlt />,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    icons: [<SiKalilinux />],
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    const loadTimer = setTimeout(() => setLoading(false), 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(loadTimer);
    };
  }, []);

  const currentBanner = banners[currentIndex];

  const handleBannerChange = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCurrentIndex(index);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
  };

  return (
    // Section paddinglari mobil uchun pt-32 (yuqoridan joy), desktop uchun md:pt-0 qilib sozlandi
    <section className="min-h-screen flex flex-col items-center justify-start md:justify-center bg-black text-white relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-0 md:pb-0">
      {/* BACKGROUND IMAGE ANIMATION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentBanner.id}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentBanner.image}
            alt={currentBanner.id}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {loading ? (
          <div className="z-10 flex flex-col items-center mt-20">
            <div className="h-32 w-[300px] md:w-[600px] bg-gray-800/20 rounded-xl animate-pulse" />
          </div>
        ) : (
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="text-center z-10 max-w-6xl flex flex-col items-center w-full"
          >
            {/* ROLE TAG */}
            <div className="flex items-center gap-3 text-blue-400 font-mono text-[10px] sm:text-xs mb-6 uppercase tracking-[0.3em]">
              <span className="p-1.5 bg-white/5 rounded-lg border border-white/10">
                {currentBanner.icon}
              </span>
              {currentBanner.role}
            </div>

            {/* TITLE */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tighter">
              {currentBanner.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i === 1 ? "text-blue-500" : "text-white"}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mb-10 md:mb-12 font-light px-4 leading-relaxed">
              {currentBanner.desc}
            </p>

            {/* ICONS */}
            <div className="flex items-center gap-6 sm:gap-10 text-3xl sm:text-5xl md:text-6xl text-gray-500 mb-12 md:mb-16 overflow-x-auto py-6 md:py-10 px-6 no-scrollbar w-full justify-center">
              {currentBanner.icons.map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -20, color: "#fff", scale: 1.15 }}
                  className="flex-shrink-0 cursor-pointer transition-colors"
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center px-4">
              <motion.a
                href="/Resumes.pdf"
                download="Resumes.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black text-sm md:text-base font-bold rounded-xl flex items-center gap-3 transition-all shadow-xl cursor-pointer"
              >
                <FaDownload /> Download Resume
              </motion.a>

              <div className="flex gap-4 sm:ml-auto">
                {banners.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleBannerChange(i)}
                    className={`h-2.5 rounded-full transition-all ${currentIndex === i ? "bg-blue-500 w-10" : "bg-gray-700 w-2.5 hover:bg-gray-500"}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
