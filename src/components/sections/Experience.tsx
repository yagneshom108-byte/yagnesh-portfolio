"use client";

import React from "react";
import { EXPERIENCE } from "@/data/site";
import { Briefcase, TrendingUp, CheckCircle } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-canvas border-b border-border editorial-grid scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest font-semibold mb-2">
              <Briefcase className="w-4 h-4" />
              <span>[ 04 • TRACK RECORD ]</span>
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-none uppercase">
              PROFESSIONAL TIMELINE
            </h2>
          </div>

          <span className="font-mono text-xs text-ink-muted uppercase">
            COMMERCIAL PRODUCTION &bull; CREATOR PIPELINES
          </span>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE.map((item, idx) => (
            <div
              key={item.role + item.company}
              className="taped-card rounded-2xl p-8 bg-surface border border-border shadow-paper flex flex-col justify-between group hover:border-ink"
            >
              <div className={`tape-strip ${idx === 0 ? "tape-top-left" : "tape-top-right"}`} />

              <div>
                {/* Header Tag Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-accent-tint border border-accent/20">
                    {item.period}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {item.location} &bull; {item.type}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                  {item.role}
                </h3>
                <h4 className="text-base font-mono text-ink-secondary mt-1 font-semibold uppercase">
                  {item.company}
                </h4>

                <p className="text-sm text-ink-secondary mt-4 leading-relaxed font-body">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="mt-6 space-y-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink font-bold block mb-2">
                    CORE DELIVERABLES & IMPACT:
                  </span>
                  {item.achievements.map((ach) => (
                    <div key={ach} className="flex items-start gap-2.5 text-xs text-ink-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Pill Grid */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-2">
                {item.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="p-2.5 rounded-lg bg-surface-subtle border border-border text-center flex flex-col items-center justify-center"
                  >
                    <TrendingUp className="w-3 h-3 text-accent mb-1" />
                    <span className="font-mono text-[11px] font-bold text-ink leading-tight">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
