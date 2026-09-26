"use client";

import React from "react";
import Image from "next/image";
import { playClickSound } from "@/lib/audio";

const BRANDS = [
  {
    name: "Euro Foods Gujarat",

    // IMPORTANT:
    // Your actual Euro Foods logo is inside franchise-insider.png
    logo: "/assets/franchise-insider.png",

    instagram: "https://www.instagram.com/eurofoodsgujarat/",

    // Euro Foods yellow
    logoBg: "bg-[#F9D000]",
  },

  {
    name: "The Franchise Insider",

    // IMPORTANT:
    // Your actual Franchise Insider logo is inside euro-foods.png
    logo: "/assets/euro-foods.png",

    instagram: "https://www.instagram.com/thefranchiseinsiider/",

    // Franchise Insider white
    logoBg: "bg-[#FFFFFF]",
  },

  {
    name: "Daur Diamonds",

    logo: "/assets/daur-diamond.png",

    instagram: "https://www.instagram.com/daur.diamonds/",

    // Daur Diamonds maroon
    logoBg: "bg-[#6E090A]",
  },

  {
    name: "Balista",

    logo: "/assets/balista.png",

    instagram: "https://www.instagram.com/balista.ind/",

    // Balista white
    logoBg: "bg-[#FFFFFF]",
  },
];

export function Testimonials() {
  return (
    <section
      id="brands"
      className="
        relative
        py-24
        md:py-32
        px-4
        sm:px-6
        md:px-8
        bg-canvas
        border-b
        border-border
        overflow-hidden
        scroll-mt-24
      "
    >

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-accent/5
          blur-[120px]
        "
      />


      <div className="relative max-w-7xl mx-auto w-full">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-14
            pb-5
            border-b
            border-border
          "
        >

          <div>

            <div
              className="
                flex
                items-center
                gap-2
                mb-3
                font-mono
                text-[10px]
                sm:text-xs
                text-accent
                uppercase
                tracking-[0.18em]
                font-semibold
              "
            >
              <span>
                [ 14 • CLIENTS & COLLABORATIONS ]
              </span>
            </div>


            <h2
              className="
                text-display
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                text-ink
                tracking-tight
                leading-[0.88]
                uppercase
              "
            >
              BRANDS
              <br />

              <span className="text-accent">
                I&apos;VE WORKED WITH
              </span>
            </h2>

          </div>


          {/* Description */}

          <p
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              md:text-xs
              text-ink-secondary
              max-w-sm
              uppercase
              leading-relaxed
              tracking-[0.08em]
              md:text-right
            "
          >
            SELECTED CLIENTS

            <span className="mx-2 text-accent">
              •
            </span>

            CREATIVE PARTNERSHIPS

            <span className="mx-2 text-accent">
              •
            </span>

            VISUAL STORYTELLING
          </p>

        </div>


        {/* =====================================================
            BRAND LOGOS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-5
            sm:gap-6
            md:gap-8
          "
        >

          {BRANDS.map((brand, index) => (

            <a
              key={brand.name}
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              aria-label={`Open ${brand.name} Instagram`}
              className="
                group
                relative
                flex
                flex-col
                items-center
                justify-center
                min-h-[250px]
                sm:min-h-[280px]
                md:min-h-[320px]
                rounded-2xl
                border
                border-border
                bg-surface
                overflow-hidden
                transition-all
                duration-500
                hover:border-accent/60
                hover:bg-surface-subtle
              "
            >


              {/* =================================================
                  NUMBER
              ================================================= */}

              <div
                className="
                  absolute
                  top-5
                  left-5
                  font-mono
                  text-[9px]
                  tracking-[0.15em]
                  text-ink-muted
                  uppercase
                "
              >
                0{index + 1}
              </div>


              {/* =================================================
                  INSTAGRAM
              ================================================= */}

              <div
                className="
                  absolute
                  top-5
                  right-5
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.12em]
                  text-ink-muted
                  transition-colors
                  duration-300
                  group-hover:text-accent
                "
              >
                INSTAGRAM
              </div>


              {/* =================================================
                  CIRCULAR LOGO
              ================================================= */}

              <div
                className={`
                  relative
                  w-32
                  h-32
                  sm:w-36
                  sm:h-36
                  md:w-40
                  md:h-40
                  rounded-full
                  ${brand.logoBg}
                  border
                  border-border
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  shadow-lg
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:border-accent
                  group-hover:shadow-[0_0_45px_rgba(255,216,77,0.18)]
                `}
              >

                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="
                    (max-width: 640px) 128px,
                    (max-width: 768px) 144px,
                    160px
                  "
                  className="
                    object-contain
                    p-5
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>


              {/* =================================================
                  BRAND NAME
              ================================================= */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[0.14em]
                  text-ink
                  font-semibold
                  text-center
                "
              >

                <span>
                  {brand.name}
                </span>

                <span
                  className="
                    text-accent
                    opacity-0
                    translate-x-[-4px]
                    transition-all
                    duration-300
                    group-hover:opacity-100
                    group-hover:translate-x-0
                  "
                >
                  ↗
                </span>

              </div>


              {/* =================================================
                  BOTTOM HOVER LINE
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  w-0
                  h-[2px]
                  bg-accent
                  transition-all
                  duration-500
                  group-hover:w-1/2
                "
              />

            </a>

          ))}

        </div>


        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div
          className="
            mt-10
            pt-5
            border-t
            border-border
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-3
          "
        >

          <span
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.14em]
              text-ink-muted
            "
          >
            CLICK ANY BRAND TO VISIT INSTAGRAM
          </span>


          <span
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.14em]
              text-accent
            "
          >
            04 SELECTED CLIENTS
          </span>

        </div>

      </div>

    </section>
  );
}