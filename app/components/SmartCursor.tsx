"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SmartCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setActive(
        target instanceof Element &&
          target.closest("a, button, .interactive") !== null,
      );
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        scale: active ? 2.5 : 1,
        backgroundColor: active ? "rgba(0,0,0,0.05)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      data-testid="smart-cursor"
    >
      <div
        className="w-6 h-6 border-2 border-black rounded-full"
        data-testid="cursor-ring"
      />
    </motion.div>
  );
}

