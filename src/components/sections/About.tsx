"use client";

import React from "react";
import Image from "next/image";
import { AsteriskStar, SpikyStar } from "../ui/Glyphs";
import { SITE_CONFIG } from "@/data/site";
import { MapPin, Mail, Calendar, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 px-4 sm:px-6 md:px-8 bg-canvas border-b border-border overflow-hidden scroll-mt-24"
    >
      {/* Floating Vertical Right Edge Badge inspired by Reference 2 */}
      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-30 flex-col items-center bg-ink text-canvas py-4 px-2 rounded-l-xl border-l border-t border-b border-border shadow-2xl pointer-events-none">
        <AsteriskStar className="w-4 h-4 text-accent animate-spin-slow mb-3" />
        <span
          className="font-mono text-[10px] tracking-[0.25em] uppercase font-bold text-canvas whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          YAGNESH &bull; PORTFOLIO 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
          <span className="font-mono text-xs text-accent font-semibold tracking-widest uppercase">
            [ 02 &bull; BIOGRAPHY & STORY ]
          </span>
          <span className="text-ink-muted text-xs font-mono">/ EDITORIAL PROFILE</span>
        </div>

        {/* 2-Column Editorial Magazine Layout inspired by Reference 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Human Cutout Portrait with bottom gradient fade */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[420px] aspect-[3.8/5] rounded-2xl bg-surface-subtle border border-border overflow-hidden shadow-paper p-4 flex flex-col justify-end">
              {/* Tape detail top-left */}
              <div className="tape-strip tape-top-left" />

              {/* Cutout Portrait with delicate gradient fade into container */}
              <div
                className="relative w-full h-full flex items-end justify-center"
                style={{
                  maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                }}
              >
                <Image
                  src="/assets/yagnesh-portrait.jpg"
                  alt="Yagnesh Chavda — Portrait"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md border border-border p-3 rounded-xl flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-ink">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span className="font-medium">Ahmedabad, Gujarat</span>
                </div>
                <span className="text-accent font-semibold">REMOTE / ONSITE</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Typographic Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-mono text-sm font-bold text-accent tracking-widest uppercase">
              (02) About me
            </span>

            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink tracking-tight leading-[0.88] mt-2 uppercase">
              Yagnesh
              <br />
              <span className="text-accent">Chavda</span>
            </h2>

            {/* Editorial Bio with bold weight key phrases */}
            <div className="mt-8 space-y-4 text-ink-secondary font-body text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                A passionate creator specializing in the high-stakes disciplines of{" "}
                <strong className="text-ink font-semibold">Video Editing, Motion Graphics, and Cinematic Color Grading</strong>. With extensive experience delivering for commercial brands, YouTube creators, and media franchises, I transform raw footage into captivating visual narratives that command audience retention.
              </p>
              <p>
                My philosophy balances <strong className="text-ink font-semibold">rhythmic pacing</strong> with <strong className="text-ink font-semibold">data-driven audience retention psychology</strong>. Whether cutting 15-second viral hooks or grading 4K documentary ads, I treat every frame as an intentional canvas.
              </p>
            </div>

            {/* Structured Tabular Metadata at bottom inspired by Reference 2 */}
            <div className="w-full mt-10 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
              <div>
                <span className="text-ink-muted uppercase block mb-1">LOCATION & BASE</span>
                <span className="text-ink font-semibold text-sm">Ahmedabad, India</span>
                <span className="text-ink-muted block text-[11px] mt-0.5">Available Globally</span>
              </div>

              <div>
                <span className="text-ink-muted uppercase block mb-1">FOCUS DISCIPLINES</span>
                <span className="text-ink font-semibold text-sm">Short-Form &bull; Motion</span>
                <span className="text-ink-muted block text-[11px] mt-0.5">Commercial Brand Ads</span>
              </div>

              <div>
                <span className="text-ink-muted uppercase block mb-1">DIRECT INQUIRIES</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-accent hover:underline font-semibold text-sm block truncate"
                >
                  {SITE_CONFIG.email}
                </a>
                <span className="text-ink-muted block text-[11px] mt-0.5">Fast Response</span>
              </div>
            </div>

            {/* Production Guarantee Chips */}
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-ink font-medium">100+ Verified Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-ink font-medium">4.9 / 5.0 Client Rating</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span className="text-ink font-medium">AI-Accelerated Post Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
