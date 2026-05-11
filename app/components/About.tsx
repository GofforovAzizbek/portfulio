"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaShieldAlt, FaBolt, FaFingerprint } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const LUXURY_EASE = [0.62, 0.05, 0.01, 0.99] as const;

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const stats = [
    {
      label: "ELITE PROJECTS",
      val: "5+",
      icon: FaBolt,
      color: "text-yellow-400",
    },
    { label: "MODERN STACK", val: "3+", icon: FaCode, color: "text-blue-500" },
    {
      label: "SECURITY FIRST",
      val: "100%",
      icon: FaShieldAlt,
      color: "text-emerald-500",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-black text-white py-24 lg:py-40 overflow-hidden px-6 lg:px-8"
    >
      {/* AMBIENT BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* TOP SECTION: BEYOND BOUNDARIES (Siz xohlagan sarlavha qismi) */}
        <div className="flex flex-col mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: LUXURY_EASE }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-blue-500" />
            <span className="text-blue-500 font-mono tracking-[0.4em] text-[10px] uppercase">
              Core Identity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.1 }}
            className="text-[12vw] md:text-[9.5rem] font-bold tracking-tighter leading-[0.8] mb-4"
          >
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">
              BOUNDARIES.
            </span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.2 }}
            className="text-[12vw] md:text-[9.5rem] font-bold tracking-tighter leading-[0.8] text-right"
          >
            CRAFTING{" "}
            <span className="italic font-serif text-blue-600">FLOW.</span>
          </motion.h2>
        </div>

        {/* BENTO GRID AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* MASTER CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.3 }}
            className="lg:col-span-8 bg-[#080808] border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group hover:border-white/10 transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-12">
                  <FaFingerprint className="text-4xl text-blue-500/40" />
                  <FiArrowUpRight className="text-2xl text-gray-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8 text-gray-100">
                  Building{" "}
                  <span className="text-white font-medium underline underline-offset-[12px] decoration-white/10">
                    future-proof
                  </span>{" "}
                  digital ecosystems with absolute precision.
                </h3>
                <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
                  Hello, I am a fullstack developer with 1.5 years of
                  experience. I love to draw ui designs and create websites.
                  This is my hobby. It is not difficult for me to solve problems
                  in the backend. Ensuring security is also one of my simple
                  solutions. I have participated in many real projects and they
                  are also working.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {["Engineering", "Security", "Scalability", "UX Mastery"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-mono tracking-widest text-gray-400 uppercase"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* STATS COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  ease: LUXURY_EASE,
                  delay: 0.4 + i * 0.1,
                }}
                className="flex-1 bg-[#080808] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center items-start group hover:border-white/10 transition-all duration-300"
              >
                <stat.icon
                  className={`${stat.color} text-2xl mb-4 group-hover:scale-110 transition-transform`}
                />
                <div className="text-5xl font-bold tracking-tighter mb-1">
                  {stat.val}
                </div>
                <div className="text-gray-600 font-mono text-[9px] tracking-[0.3em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer qismi olib tashlandi, faqat bo'sh joy qoldi */}
        <div className="mt-20" />
      </motion.div>
    </section>
  );
}
