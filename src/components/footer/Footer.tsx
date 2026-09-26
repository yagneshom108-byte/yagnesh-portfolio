"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Clock, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";
import { playClickSound } from "@/lib/audio";
import { EditorialGlyphTrio } from "../ui/Glyphs";

export function Footer() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();

        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });

        setTimeString(formatter.format(now));
      } catch {
        setTimeString("18:30:00");
      }
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-surface-subtle border-t border-border pt-20 pb-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">

        {/* Massive Editorial Headline */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-border pb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold block mb-3">
              YAGNESH CHAVDA &bull; POST PRODUCTION
            </span>

            <h2 className="text-display text-6xl sm:text-8xl md:text-9xl xl:text-[11rem] text-ink tracking-tight leading-[0.82] uppercase">
              CINEMATIC
              <br />
              <span className="text-accent">PRECISION</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor-media="TOP"
            aria-label="Back to top"
            className="group flex items-center gap-3 px-6 py-4 rounded-full bg-surface border border-border hover:border-ink transition-all duration-300 shadow-paper"
          >
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-ink">
              BACK TO TOP
            </span>

            <div className="w-7 h-7 rounded-full bg-ink text-canvas flex items-center justify-center transition-transform group-hover:-translate-y-1">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Live Clock & Regional Metadata Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs text-ink-muted">

          {/* Location */}
          <div className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-accent" />

            <div>
              <span className="block text-[10px] uppercase">
                LOCATION
              </span>

              <span className="text-ink font-semibold">
                Ahmedabad, Gujarat, IN
              </span>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-accent" />

            <div>
              <span className="block text-[10px] uppercase">
                LOCAL TIME (IST)
              </span>

              <span className="text-ink font-semibold">
                {timeString || "18:30:00"} [UTC +5:30]
              </span>
            </div>
          </div>

          {/* Creative Directory */}
          <div>
            <span className="block text-[10px] uppercase">
              CREATIVE DIRECTORY
            </span>

            <span className="text-ink font-semibold">
              Premiere &bull; AE &bull; DaVinci
            </span>
          </div>

          {/* Email */}
          <div>
            <span className="block text-[10px] uppercase">
              INQUIRIES
            </span>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-accent hover:underline font-semibold"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border font-mono text-xs text-ink-muted">

          {/* Glyphs */}
          <EditorialGlyphTrio />

          {/* Copyright */}
          <p className="text-center sm:text-left">
            &copy; {SITE_CONFIG.year} {SITE_CONFIG.name}. All Rights Reserved.
            Crafted with editorial rigor.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/editwith.yagnesh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              data-cursor-media="SOCIAL"
              className="
                group
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-border
                bg-surface
                transition-all
                duration-300
                hover:border-[#E1306C]
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(225,48,108,0.20)]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  w-[21px]
                  h-[21px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="instagramGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="55%" stopColor="#E1306C" />
                    <stop offset="80%" stopColor="#C13584" />
                    <stop offset="100%" stopColor="#833AB4" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#instagramGradient)"
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yagnesh-chavda-20b027342/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              data-cursor-media="SOCIAL"
              className="
                group
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-full
                border
                border-border
                bg-surface
                transition-all
                duration-300
                hover:border-[#0A66C2]
                hover:-translate-y-1
                hover:shadow-[0_8px_25px_rgba(10,102,194,0.20)]
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="
                  w-[21px]
                  h-[21px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
                aria-hidden="true"
              >
                <path
                  fill="#0A66C2"
                  d="M5.2 3A2.2 2.2 0 1 1 5.2 7.4 2.2 2.2 0 0 1 5.2 3ZM3.4 8.8h3.6V21H3.4V8.8ZM9.2 8.8h3.45v1.67h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54V21h-3.6v-6.08c0-1.45-.03-3.31-2.02-3.31-2.02 0-2.33 1.58-2.33 3.21V21H9.2V8.8Z"
                />
              </svg>
            </a>

            {/* Portfolio Edition */}
            <span className="hidden sm:block ml-1 text-[11px] uppercase tracking-widest text-ink">
              PORTFOLIO 2026 ED.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}