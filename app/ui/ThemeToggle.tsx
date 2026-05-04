"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="group inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/60 px-3 py-1.5 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title={`Theme: ${theme}`}
      suppressHydrationWarning
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900/5 text-zinc-900 transition group-hover:bg-zinc-900/10 dark:bg-white/10 dark:text-zinc-100 dark:group-hover:bg-white/15">
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="hidden sm:block">{theme}</span>
    </button>
  );
}
