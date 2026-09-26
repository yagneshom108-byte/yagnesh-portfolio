"use client";

import React, { useState, useEffect } from "react";
import { Play, ArrowDown, Disc, Sparkles } from "lucide-react";
import {
  SpikyStar,
  SparkleDiamond,
  CloverClub,
} from "../ui/Glyphs";
import { SITE_CONFIG } from "@/data/site";
import { playClickSound } from "@/lib/audio";
import { formatTimecode } from "@/lib/utils";

export function Hero({
  onOpenShowreel,
}: {
  onOpenShowreel?: () => void;
}) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 0.0416);
    }, 41.6);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="
        cinematic-background
        relative
        min-h-screen
        pt-28
        pb-16
        md:py-36
        px-4
        sm:px-6
        md:px-8
        flex
        flex-col
        justify-between
        overflow-hidden
      "
    >
      {/* =====================================================
          TOP METADATA HEADER
          ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          flex
          flex-col
          sm:flex-row
          items-start
          sm:items-center
          justify-between
          gap-4
          border-b
          border-border
          pb-4
          z-10
        "
      >
        {/* Left Metadata */}

        <div className="flex items-center gap-3">
          <div
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-accent
              animate-ping
            "
          />

          <span
            className="
              font-mono
              text-xs
              uppercase
              tracking-widest
              text-ink
              font-semibold
            "
          >
            {SITE_CONFIG.role}
          </span>
        </div>

        {/* Right Metadata */}

        <div
          className="
            flex
            items-center
            gap-6
            font-mono
            text-xs
            text-ink-muted
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-red-600
                animate-pulse
              "
            />

            <span
              className="
                text-ink
                font-medium
                tracking-wider
              "
            >
              REC {formatTimecode(seconds)}
            </span>
          </div>

          <span className="hidden md:inline">
            AHMEDABAD, INDIA [GMT+5:30]
          </span>

          <span className="font-bold text-ink">
            {SITE_CONFIG.year} ED.
          </span>
        </div>
      </div>


      {/* =====================================================
          MAIN HERO COMPOSITION
          CHARACTER REMOVED
          ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          my-auto
          py-12
          md:py-16
          z-10
        "
      >
        {/* ===================================================
            MAIN TYPOGRAPHY
            FULL WIDTH
            =================================================== */}

        <div
          className="
            w-full
            flex
            flex-col
            items-start
          "
        >
          {/* Category Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-surface
              border
              border-border
              shadow-sm
              mb-4
            "
          >
            <Sparkles
              className="
                w-3.5
                h-3.5
                text-accent
              "
            />

            <span
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-widest
                text-ink
                font-semibold
              "
            >
              CINEMATIC • MOTION • RETENTION
            </span>
          </div>


          {/* =================================================
              MAIN NAME
              ================================================= */}

          <h1
            className="
              text-display
              text-7xl
              sm:text-8xl
              md:text-9xl
              xl:text-[10.5rem]
              tracking-tight
              leading-[0.82]
              text-ink
              uppercase
            "
          >
            YAGNESH
            <br />

            <span
              className="
                text-accent
                inline-block
                transition-transform
                hover:translate-x-2
                duration-300
              "
            >
              CHAVDA
            </span>
          </h1>


          {/* Description */}

          <p
            className="
              text-base
              sm:text-lg
              text-ink-secondary
              mt-6
              max-w-2xl
              font-body
              leading-relaxed
            "
          >
            {SITE_CONFIG.elevatorPitch}
          </p>


          {/* =================================================
              CTA BUTTONS
              ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            {/* Watch Showreel */}

            <button
              onClick={() => {
                playClickSound();
                onOpenShowreel?.();
              }}
              data-cursor-media="WATCH"
              className="
                group
                flex
                items-center
                gap-3
                px-6
                py-3.5
                rounded-full
                bg-ink
                text-canvas
                font-mono
                text-xs
                uppercase
                tracking-widest
                font-bold
                hover:bg-accent
                transition-all
                duration-300
                shadow-lift
              "
            >
              <div
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-canvas
                  text-ink
                  flex
                  items-center
                  justify-center
                  transition-transform
                  group-hover:scale-110
                "
              >
                <Play
                  className="
                    w-3
                    h-3
                    fill-current
                    ml-0.5
                  "
                />
              </div>

              <span>
                WATCH SHOWREEL
              </span>
            </button>


            {/* Explore Work */}

            <a
              href="#work"
              onClick={playClickSound}
              className="
                flex
                items-center
                gap-2
                px-6
                py-3.5
                rounded-full
                border
                border-border
                bg-surface
                hover:border-ink
                font-mono
                text-xs
                uppercase
                tracking-widest
                font-bold
                text-ink
                transition-colors
                duration-200
              "
            >
              <span>
                EXPLORE WORK
              </span>

              <ArrowDown
                className="
                  w-3.5
                  h-3.5
                "
              />
            </a>
          </div>


          {/* =================================================
              STATS
              ================================================= */}

          <div
            className="
              mt-10
              grid
              grid-cols-2
              sm:grid-cols-4
              gap-4
              w-full
              pt-8
              border-t
              border-border
            "
          >
            {SITE_CONFIG.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col"
              >
                <span
                  className="
                    text-display
                    text-3xl
                    sm:text-4xl
                    text-ink
                    leading-none
                  "
                >
                  {stat.value}
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-ink-muted
                    uppercase
                    tracking-wider
                    mt-1
                  "
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>


          {/* =================================================
              DECORATIVE GLYPHS
              ================================================= */}

          <div
            className="
              mt-10
              flex
              items-center
              gap-6
              text-ink/70
            "
          >
            <SpikyStar
              className="
                w-6
                h-6
                text-accent
                hover:rotate-45
                transition-transform
                duration-300
                cursor-pointer
              "
            />

            <SparkleDiamond
              className="
                w-6
                h-6
                text-ink
                hover:scale-125
                transition-transform
                duration-300
                cursor-pointer
              "
            />

            <CloverClub
              className="
                w-6
                h-6
                text-accent
                hover:rotate-90
                transition-transform
                duration-300
                cursor-pointer
              "
            />
          </div>
        </div>
      </div>


      {/* =====================================================
          BOTTOM TICKER
          ===================================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          pt-4
          border-t
          border-border
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
          font-mono
          text-xs
          text-ink-muted
          z-10
        "
      >
        <div className="flex items-center gap-2">
          <Disc
            className="
              w-4
              h-4
              text-accent
              animate-spin-slow
            "
          />

          <span>
            EDITING SUITE • PREMIERE PRO • AFTER EFFECTS • CAPCUT
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span>
            HIGH RETENTION • 2026
          </span>

          <a
            href="#about"
            onClick={playClickSound}
            className="
              text-ink
              hover:text-accent
              font-semibold
              underline
              underline-offset-4
            "
          >
            DISCOVER STORY ↓
          </a>
        </div>
      </div>
    </section>
  );
}