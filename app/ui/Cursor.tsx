"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const ring = useRef<Point>({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isFinePointer =
      typeof window !== "undefined" &&
      window.matchMedia?.("(pointer:fine)").matches;
    if (!isFinePointer) return;

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      const dot = dotRef.current;
      if (dot) dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const tick = () => {
      const t = target.current;
      const r = ring.current;
      const dx = t.x - r.x;
      const dy = t.y - r.y;
      const next = {
        x: r.x + dx * 0.14,
        y: r.y + dy * 0.14,
      };
      ring.current = next;
      const ringEl = ringRef.current;
      if (ringEl) {
        const x = clamp(next.x, 0, window.innerWidth);
        const y = clamp(next.y, 0, window.innerHeight);
        ringEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf.current) window.cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}

