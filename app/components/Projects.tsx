"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { FiArrowRight, FiGithub } from "react-icons/fi";

const LUXURY_EASE = [0.62, 0.05, 0.01, 0.99] as const;

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full bg-black px-6 lg:px-12 py-18 lg:py-22 overflow-hidden"
    >
      {/* AMBIENT BACKGROUND GLOW */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
                Selected Works
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
              CRAFTED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700">
                SOLUTIONS.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl font-light max-w-sm leading-relaxed border-l border-white/10 pl-6"
          >
            A curated selection of projects focusing on security, performance,
            and seamless user experiences.
          </motion.p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: LUXURY_EASE,
                delay: index * 0.15, // Har bir karta ketma-ket chiqadi
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* VIEW MORE CTA - Professional Minimalist Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.5 }}
          className="mt-24 flex justify-center"
        >
          <a
            href="https://github.com/GofforovAzizbek"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#080808] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500"
          >
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <FiGithub className="text-xl text-gray-400 group-hover:text-white transition-colors duration-300" />
            <span className="text-gray-400 group-hover:text-white font-medium tracking-tight transition-colors duration-300">
              Explore Open Source Archive
            </span>
            <FiArrowRight className="text-lg text-gray-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
