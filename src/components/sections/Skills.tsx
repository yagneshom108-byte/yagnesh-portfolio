"use client";

import React from "react";
import Image from "next/image";
import { SOFTWARE_STACK } from "@/data/site";
import { Cpu, Check } from "lucide-react";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-surface border-b border-border scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest font-semibold mb-2">
              <Cpu className="w-4 h-4" />
              <span>[ 03 • PRODUCTION SUITE ]</span>
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-none uppercase">
              SOFTWARE & TOOLS
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-secondary max-w-sm uppercase leading-relaxed">
            INDUSTRY-STANDARD POST-PRODUCTION WORKFLOWS BACKED BY HIGH-PERFORMANCE HARDWARE AND COLOR CALIBRATION.
          </p>
        </div>

        {/* 5-Column / Responsive Software Cards Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SOFTWARE_STACK.map((tool, index) => (
            <div
              key={tool.name}
              className="taped-card rounded-xl p-6 flex flex-col justify-between group hover:border-ink"
            >
              {/* Tape Accent on First & Last */}
              {index === 0 && <div className="tape-strip tape-top-left" />}
              {index === 4 && <div className="tape-strip tape-top-right" />}

              <div>
                {/* Logo & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-surface-subtle border border-border p-2.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-accent px-2.5 py-1 rounded-full bg-accent-tint border border-accent/20 font-bold uppercase tracking-wider">
                    {tool.mastery}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold text-ink tracking-tight">
                  {tool.name}
                </h3>
                <span className="font-mono text-[11px] text-ink-muted uppercase block mt-1">
                  {tool.category}
                </span>

                <p className="text-xs text-ink-secondary mt-3 leading-relaxed font-body">
                  {tool.usage}
                </p>
              </div>

              {/* Bottom Verified Pip */}
              <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 font-mono text-[10px] text-ink-muted">
                <Check className="w-3 h-3 text-accent" />
                <span>ACTIVE WORKFLOW</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
