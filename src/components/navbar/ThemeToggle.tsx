"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full border border-border flex items-center justify-center opacity-50 ${className}`}>
        <Sun className="w-4 h-4 text-ink-muted" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface hover:border-ink transition-all duration-300 ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-accent-secondary transition-transform duration-300 rotate-0 group-hover:rotate-45" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-accent transition-transform duration-300 rotate-0 group-hover:rotate-90" />
        )}
      </div>
      <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink">
        {isDark ? "DARK" : "LIGHT"}
      </span>
    </button>
  );
}
