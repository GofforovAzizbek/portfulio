"use client";

import { motion } from "framer-motion";
import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight, FiZap, FiCode, FiShield } from "react-icons/fi";

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

export default function Collaboration() {
  const highlights = [
    { icon: FiZap, label: "Fast Delivery", text: "Optimized for performance" },
    { icon: FiCode, label: "Clean Code", text: "Scalable architecture" },
    { icon: FiShield, label: "Secure", text: "Production-ready safety" },
  ];

  return (
    <section
      id="collaborate"
      className="relative w-full bg-black py-24 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ASOSIY KONTEYNER - Glassmorphism Effektli */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: LUXURY_EASE }}
          className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#080808] p-8 md:p-16 lg:p-24"
        >
          {/* ORQA FON RANGI (Animated Glow) */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* CHAP TARAF: MATN */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
                  Open for new opportunities
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-8"
              >
                HAVE A PROJECT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  IN MIND?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12"
              >
                Let’s build a digital experience that stands out. I’m ready to
                turn your ideas into high-performance reality.
              </motion.p>

              {/* TUGMALAR (Vibrant Style) */}
              <div className="flex flex-wrap gap-5">
                <a
                  href="mailto:gofforovazizbek2024@gmail.com"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold transition-all duration-300 hover:bg-blue-500 hover:text-white"
                >
                  <FaEnvelope className="text-lg" />
                  Email Me
                  <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform duration-300" />
                </a>

                <a
                  href="https://t.me/Azizbek_Gafforov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-full text-white font-bold transition-all duration-300 hover:bg-white/5 hover:border-blue-500/50"
                >
                  <FaTelegramPlane className="text-lg text-blue-400" />
                  Telegram
                </a>
              </div>
            </div>

            {/* O'NG TARAF: XUSUSIYATLAR (Small Bento Cards) */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="text-2xl text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-tight">
                        {item.label}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* PASTKI DEKORATSIYA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16 flex flex-col items-center gap-4 opacity-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
