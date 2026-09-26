"use client";

import React from "react";
import { SERVICES } from "@/data/site";
import { ArrowUpRight, Layers } from "lucide-react";
import { playClickSound } from "@/lib/audio";

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-surface-subtle border-b border-border scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest font-semibold mb-2">
              <Layers className="w-4 h-4" />
              <span>[ 05 • CAPABILITIES ]</span>
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-none uppercase">
              SERVICES & EXPERTISE
            </h2>
          </div>

          <p className="font-mono text-xs text-ink-secondary max-w-md uppercase leading-relaxed">
            END-TO-END POST-PRODUCTION SOLUTIONS TAILORED FOR HIGH RETENTION, CONVERSION, AND CINEMATIC POLISH.
          </p>
        </div>

        {/* 6-Card Editorial Services Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="taped-card rounded-2xl p-8 bg-surface border border-border flex flex-col justify-between group hover:border-ink"
            >
              {idx % 2 === 0 ? (
                <div className="tape-strip tape-top-left" />
              ) : (
                <div className="tape-strip tape-top-right" />
              )}

              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-display text-4xl text-accent font-bold">
                    {srv.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted bg-surface-subtle border border-border px-3 py-1 rounded-full">
                    {srv.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-ink tracking-tight mt-2">
                  {srv.title}
                </h3>

                <p className="text-sm text-ink-secondary mt-3 leading-relaxed font-body">
                  {srv.description}
                </p>

                {/* Deliverables Tags */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {srv.deliverables.map((del) => (
                    <span
                      key={del}
                      className="font-mono text-[10px] bg-surface-subtle text-ink px-2.5 py-1 rounded border border-border"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-ink-muted">CUSTOM COMMISSION</span>
                <a
                  href="#contact"
                  onClick={playClickSound}
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-bold text-ink hover:text-accent transition-colors"
                >
                  <span>INQUIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
