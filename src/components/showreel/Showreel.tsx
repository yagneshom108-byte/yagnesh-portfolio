"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Maximize2, Volume2, Sparkles, Film } from "lucide-react";
import { FLAGSHIP_SHOWREEL } from "@/data/projects";
import { playClickSound } from "@/lib/audio";

export function Showreel({ onOpenModal }: { onOpenModal?: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="showreel"
      className="relative py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-surface-subtle border-y border-border overflow-hidden scroll-mt-24"
    >
      {/* Background Subtle Noise / Grid */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest font-semibold mb-2">
              <Film className="w-4 h-4" />
              <span>[ 01 • MASTER SHOWREEL ]</span>
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-none uppercase">
              CINEMATIC SHOWCASE
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-ink-secondary">
            <span className="px-3 py-1 rounded bg-surface border border-border">
              RUNTIME: {FLAGSHIP_SHOWREEL.duration}
            </span>
            <span className="px-3 py-1 rounded bg-surface border border-border text-accent font-semibold">
              4K MASTER
            </span>
          </div>
        </div>

        {/* Cinematic Theater Card with Film Perforations */}
        <div className="relative w-full rounded-2xl bg-black border border-border shadow-2xl overflow-hidden group">
          {/* Top Film Perforation Strip */}
          <div className="h-6 w-full bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-4 overflow-hidden select-none">
            <div className="flex items-center gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3.5 h-2 rounded-[1.5px] bg-zinc-700/60 flex-shrink-0"
                />
              ))}
            </div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest hidden sm:inline">
              35MM FILM EMULATION • TC 00:01:15:00
            </span>
          </div>

          {/* Video / Preview Player Area */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${FLAGSHIP_SHOWREEL.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={FLAGSHIP_SHOWREEL.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <>
                {/* Poster Image */}
                <Image
                   src="/assets/Showreel.png"
                   alt="Yagnesh Chavda Showreel 2026"
                   fill
                   className="object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-trasparent" />

                {/* Center Big Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                  <button
                    onClick={() => {
                      playClickSound();
                      setIsPlaying(true);
                    }}
                    data-cursor-media="PLAY"
                    aria-label="Play showreel video"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_50px_rgba(255,69,0,0.6)] transition-transform duration-300 hover:scale-110 active:scale-95 group/btn"
                  >
                    <Play className="w-8 h-8 fill-current ml-1 transition-transform group-hover/btn:scale-110" />
                    <span className="absolute -inset-2 rounded-full border border-accent/40 animate-ping pointer-events-none" />
                  </button>

                  <div className="text-center">
                    <p className="text-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                      PLAY OFFICIAL SHOWREEL
                    </p>
                    <p className="font-mono text-xs text-white/70 tracking-widest uppercase">
                      FEATURING COMMERCIAL &bull; MOTION &bull; BRAND EDITS
                    </p>
                  </div>
                </div>

                {/* Bottom Left Quick Info */}
                <div className="absolute bottom-6 left-6 z-20 hidden sm:flex items-center gap-3 text-white/90 font-mono text-xs">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>DIRECTOR&apos;S CUT 2026</span>
                </div>

                {/* Bottom Right Expand Button */}
                <button
                  onClick={() => {
                    playClickSound();
                    onOpenModal?.();
                  }}
                  data-cursor-media="EXPAND"
                  className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                  title="Open in Lightbox"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>

          {/* Bottom Film Perforation Strip */}
          <div className="h-6 w-full bg-zinc-900 border-t border-zinc-800 flex items-center justify-between px-4 overflow-hidden select-none">
            <div className="flex items-center gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="w-3.5 h-2 rounded-[1.5px] bg-zinc-700/60 flex-shrink-0"
                />
              ))}
            </div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-widest hidden sm:inline">
              EDITED IN PREMIERE PRO &bull; GRADED IN DAVINCI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
