"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiTailwindcss,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiPrisma,
  SiKalilinux,
  SiNginx,
  SiWireshark,
  SiLinux,
  SiMetasploit,
} from "react-icons/si";
import { FaServer, FaShieldAlt, FaCode } from "react-icons/fa";

const sections = [
  {
    title: "Frontend Architecture",
    icon: <FaCode />,
    color: "text-blue-500",
    glow: "shadow-[0_0_50px_rgba(59,130,246,0.2)]",
    branches: [
      {
        name: "Styling & UI",
        leafs: [
          { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
          { name: "SASS", icon: <SiSass />, color: "text-pink-500" },
          { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        ],
      },
      {
        name: "Logic & Frameworks",
        leafs: [
          {
            name: "TypeScript",
            icon: <SiTypescript />,
            color: "text-blue-600",
          },
          { name: "React", icon: <SiReact />, color: "text-blue-400" },
          { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        ],
      },
    ],
  },
  {
    title: "Backend Infrastructure",
    icon: <FaServer />,
    color: "text-green-500",
    glow: "shadow-[0_0_50px_rgba(16,185,129,0.2)]",
    branches: [
      {
        name: "Runtime & Lang",
        leafs: [
          { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
          { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
        ],
      },
      {
        name: "Database & DevOps",
        leafs: [
          {
            name: "PostgreSQL",
            icon: <SiPostgresql />,
            color: "text-blue-400",
          },
          { name: "Prisma", icon: <SiPrisma />, color: "text-white" },
          { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
        ],
      },
    ],
  },
  {
    title: "Cyber Security",
    icon: <FaShieldAlt />,
    color: "text-red-500",
    glow: "shadow-[0_0_50px_rgba(239,68,68,0.2)]",
    branches: [
      {
        name: "OS & Kernel",
        leafs: [
          { name: "Kali Linux", icon: <SiKalilinux />, color: "text-blue-400" },
          { name: "Linux", icon: <SiLinux />, color: "text-white" },
        ],
      },
      {
        name: "Net & Pentest",
        leafs: [
          { name: "Nginx", icon: <SiNginx />, color: "text-green-500" },
          { name: "Wireshark", icon: <SiWireshark />, color: "text-blue-300" },
        ],
      },
    ],
  },
];

export default function TechTree() {
  return (
    <section className="py-20 md:py-28 bg-[#050505] w-full px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Skill <span className="text-blue-600">Stack</span>
          </h2>
          <div className="h-1 w-20 sm:w-24 md:w-32 bg-blue-600 mx-auto mt-3 sm:mt-4 rounded-full" />
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A quick overview of the tools I use to build modern frontends,
            scalable backends, and security-aware systems.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-24 md:space-y-28">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="relative">
              {/* Central Category Node */}
              <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`p-4 sm:p-6 md:p-10 bg-gray-900 border-2 border-gray-800 rounded-2xl sm:rounded-3xl text-4xl sm:text-5xl md:text-7xl ${section.color} ${section.glow} z-30`}
                >
                  {section.icon}
                </motion.div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-mono font-bold tracking-widest uppercase text-white text-center">
                  {section.title}
                </h3>
              </div>

              {/* Grid of Branches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-32">
                {section.branches.map((branch, bIdx) => (
                  <div
                    key={bIdx}
                    className="relative flex flex-col items-center"
                  >
                    {/* Branch Title */}
                    <div className="mb-8 sm:mb-10 px-4 sm:px-6 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
                      <span className="text-[10px] sm:text-xs font-mono text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        {branch.name}
                      </span>
                    </div>

                    {/* Leafs (Tech Icons) */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 relative">
                      {branch.leafs.map((leaf, lIdx) => (
                        <motion.div
                          key={lIdx}
                          whileHover={{
                            y: -10,
                            scale: 1.1,
                            backgroundColor: "#0a0a0a",
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: lIdx * 0.1 }}
                          className="p-3 sm:p-4 md:p-6 bg-gray-900/30 border border-gray-800 rounded-lg sm:rounded-2xl flex flex-col items-center gap-2 sm:gap-3 w-24 sm:w-28 md:w-32 group hover:border-blue-500/50 transition-all"
                        >
                          <div
                            className={`text-2xl sm:text-3xl md:text-4xl ${leaf.color} transition-transform group-hover:rotate-12`}
                          >
                            {leaf.icon}
                          </div>
                          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono font-bold text-gray-500 group-hover:text-white uppercase tracking-tighter text-center">
                            {leaf.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connecting SVG Path (Curved) */}
                    <svg className="absolute -top-24 sm:-top-32 w-full h-24 sm:h-32 -z-10 pointer-events-none overflow-visible">
                      <motion.path
                        d={
                          bIdx === 0
                            ? "M 50% 0 Q 50% 50%, 80% 100%"
                            : "M 50% 0 Q 50% 50%, 20% 100%"
                        }
                        stroke="#1f2937"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1 }}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
