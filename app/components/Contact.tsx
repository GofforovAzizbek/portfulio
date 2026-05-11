"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowUpRight, FiUserPlus } from "react-icons/fi";
import { LuFingerprint } from "react-icons/lu";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const contactMethods = [
    {
      icon: HiOutlineMail,
      label: "SEND AN EMAIL",
      value: "gofforovazizbek2024@gmail.com",
      href: "mailto:gofforovazizbek2024@gmail.com",
      color: "from-red-500 to-orange-500",
      iconColor: "text-red-500",
    },
    {
      icon: FaTelegram,
      label: "TEXT ON TELEGRAM",
      value: "@Azizbek_Gafforov",
      href: "https://t.me/@zizbek_Gafforov",
      color: "from-blue-500 to-cyan-400",
      iconColor: "text-blue-400",
    },
    {
      icon: FaGithub,
      label: "VIEW GITHUB",
      value: "github.com/yourusername",
      href: "https://github.com/GofforovAzizbek",
      color: "from-purple-600 to-pink-500",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-black py-32 lg:py-48 px-6 lg:px-12 overflow-hidden"
    >
      {/* 1. BACKGROUND TEXT - Kontekstga mos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[25vw] font-black tracking-tighter uppercase text-white">
          Inquiry
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 2. HEADER - Aniq va lo'nda */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: LUXURY_EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold">
              Available for hire
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.85]"
          >
            CONTACT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 italic">
              ME.
            </span>
          </motion.h2>
        </div>

        {/* 3. BENTO LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: PERSONAL IDENTITY CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: LUXURY_EASE }}
            className="lg:col-span-5 group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000" />
            <div className="relative h-full bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-3xl bg-white/[0.03] flex items-center justify-center border border-white/10">
                  <LuFingerprint className="text-5xl text-white/20 group-hover:text-blue-500 transition-colors duration-500" />
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-[11px] tracking-tight hover:bg-blue-500 hover:text-white transition-all duration-300">
                  <FiUserPlus className="text-sm" /> SAVE CARD
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-white text-3xl font-bold tracking-tight mb-2">
                    Say Hello!
                  </h3>
                  <p className="text-white/50 text-lg leading-snug">
                    I&apos;m always open to discussing new projects, creative
                    ideas or opportunities to be part of your visions.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em] uppercase">
                      Based in
                    </span>
                    <span className="text-white font-medium">
                      Remote / Global
                    </span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[9px] font-mono text-white/30 tracking-[0.3em] uppercase">
                      Response time
                    </span>
                    <span className="text-blue-400 font-medium font-mono tracking-tighter">
                      &lt; 24 Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: DIRECT CONNECT SLOTS */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: LUXURY_EASE,
                  }}
                  className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.2rem] p-8 md:p-10 flex items-center justify-between transition-all duration-500 hover:border-white/20 hover:bg-[#0d0d0d]"
                >
                  <div className="flex items-center gap-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 shadow-2xl">
                      <Icon className={`text-3xl ${method.iconColor}`} />
                    </div>
                    <div>
                      <p
                        className={`text-[9px] font-mono tracking-[0.4em] uppercase mb-1.5 ${method.iconColor} opacity-60`}
                      >
                        {method.label}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter group-hover:text-blue-400 transition-colors">
                        {method.value}
                      </h3>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:scale-110">
                    <FiArrowUpRight className="text-2xl" />
                  </div>

                  {/* Subtle Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
