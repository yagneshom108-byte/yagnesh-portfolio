"use client";

import React, { useEffect, useState } from "react";
import { EditorialGlyphTrio } from "./Glyphs";

export function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if visited recently in session
    const hasVisited = sessionStorage.getItem("yagnesh-visited");
    const totalDuration = hasVisited ? 500 : 1300;
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        sessionStorage.setItem("yagnesh-visited", "true");
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            setVisible(false);
            onComplete?.();
          }, 600);
        }, 150);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col justify-between p-6 md:p-12 bg-canvas transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isFinished ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-ink/10 pb-4">
        <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
          YAGNESH CHAVDA • PORTFOLIO 2026
        </span>
        <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
          [ AHMEDABAD, IN ]
        </span>
      </div>

      {/* Center Core Display */}
      <div className="max-w-4xl mx-auto w-full my-auto flex flex-col items-start gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            INITIALIZING SHOWCASE
          </span>
        </div>

        <h1 className="text-display text-6xl sm:text-7xl md:text-9xl tracking-tight leading-[0.85] text-ink">
          EDIT WITH
          <br />
          <span className="text-accent">YAGNESH</span>
        </h1>

        <p className="font-mono text-xs md:text-sm tracking-widest text-ink-secondary uppercase max-w-md mt-2">
          VIDEO EDITOR & MOTION DESIGNER • STORYTELLER
        </p>

        {/* Progress Bar & Number */}
        <div className="w-full mt-8 flex flex-col gap-2">
          <div className="w-full h-[2px] bg-ink/10 overflow-hidden relative">
            <div
              className="h-full bg-accent transition-[width] duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-xs text-ink-muted">
            <span>LOADING ASSETS</span>
            <span className="font-bold text-ink text-sm">{progress.toString().padStart(2, "0")}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between border-t border-ink/10 pt-4">
        <EditorialGlyphTrio />
        <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
          HIGH-RETENTION CREATIVE PIPELINE
        </span>
      </div>
    </div>
  );
}
