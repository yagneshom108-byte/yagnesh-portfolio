"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SoundToggle } from "./SoundToggle";
import { playClickSound } from "@/lib/audio";
import { SITE_CONFIG } from "@/data/site";
import { SpikyStar } from "../ui/Glyphs";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("motion-work");

  /* =========================================================
     NAVIGATION LINKS
  ========================================================= */

  const navLinks = [
    {
      label: "WORK",
      href: "#motion-work",
      id: "motion-work",
    },
    {
      label: "SHOWREEL",
      href: "#showreel",
      id: "showreel",
    },
    {
      label: "ABOUT",
      href: "#about",
      id: "about",
    },
    {
      label: "SERVICES",
      href: "#services",
      id: "services",
    },
    {
      label: "BRANDS",
      href: "#brands",
      id: "brands",
    },
    {
      label: "CONTACT",
      href: "#contact",
      id: "contact",
    },
  ];

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    const sections = navLinks
      .map((link) =>
        document.getElementById(link.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter(
            (entry) =>
              entry.isIntersecting
          )
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        rootMargin:
          "-25% 0px -55% 0px",
        threshold: [
          0.1,
          0.25,
          0.5,
        ],
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =========================================================
     LINK CLICK
  ========================================================= */

  const handleLinkClick = (
    sectionId: string
  ) => {
    playClickSound();

    setActiveSection(sectionId);

    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ease-out
          ${
            isScrolled
              ? "py-3"
              : "py-5 md:py-6"
          }
        `}
      >
        <div
          className="
            max-w-[1440px]
            mx-auto
            px-4
            sm:px-6
            md:px-8
            flex
            items-center
            justify-between
            gap-6
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="#motion-work"
            onClick={() =>
              handleLinkClick(
                "motion-work"
              )
            }
            aria-label="Yagnesh Chavda Work"
            className="
              group
              flex
              items-center
              shrink-0
            "
          >
            <div
              className="
                relative
                w-10
                h-10
                md:w-11
                md:h-11
                rounded-full
                overflow-hidden
                border
                border-border
                bg-black
                shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:border-accent
                group-hover:shadow-[0_0_18px_rgba(245,196,0,0.35)]
              "
            >
              <Image
                src="/assets/Logo.png"
                alt="Yagnesh Chavda Logo"
                fill
                sizes="44px"
                priority
                className="
                  object-cover
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          </Link>

          {/* =================================================
              CENTER NAVIGATION
          ================================================= */}

          <nav
            className={`
              hidden
              lg:flex
              items-center
              p-1
              rounded-full
              border
              backdrop-blur-xl
              transition-all
              duration-500
              ${
                isScrolled
                  ? `
                    bg-surface/80
                    border-border/80
                    shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                  `
                  : `
                    bg-black/[0.04]
                    dark:bg-white/[0.04]
                    border-border/70
                  `
              }
            `}
          >
            {navLinks.map((link) => {
              const isActive =
                activeSection ===
                link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() =>
                    handleLinkClick(
                      link.id
                    )
                  }
                  className={`
                    relative
                    flex
                    items-center
                    justify-center
                    px-3.5
                    xl:px-4.5
                    py-[7px]
                    rounded-full
                    font-mono
                    text-[9px]
                    xl:text-[10px]
                    uppercase
                    tracking-[0.14em]
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? `
                          bg-[#F5F4EF]
                          text-[#101112]
                          shadow-[0_2px_10px_rgba(0,0,0,0.14)]
                        `
                        : `
                          text-ink-secondary
                          hover:text-accent
                          hover:bg-accent/5
                        `
                    }
                  `}
                >
                  {link.label}

                  {!isActive && (
                    <span
                      className="
                        absolute
                        bottom-[3px]
                        left-1/2
                        -translate-x-1/2
                        w-0
                        h-[1px]
                        bg-accent
                        transition-all
                        duration-300
                      "
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT CONTROLS
          ================================================= */}

          <div
            className="
              hidden
              sm:flex
              items-center
              gap-2
              shrink-0
            "
          >
            <SoundToggle />

            <ThemeToggle />

            <a
              href="#contact"
              onClick={() =>
                handleLinkClick(
                  "contact"
                )
              }
              className="
                group
                relative
                inline-flex
                items-center
                gap-2
                ml-1
                px-4
                py-2
                rounded-full
                bg-ink
                text-canvas
                font-mono
                text-[10px]
                uppercase
                tracking-[0.15em]
                font-bold
                overflow-hidden
                transition-all
                duration-300
                hover:bg-accent
                hover:text-[#080909]
                hover:-translate-y-[1px]
                shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              "
            >
              <span className="relative z-10">
                LET&apos;S TALK
              </span>

              <ArrowUpRight
                className="
                  relative
                  z-10
                  w-3.5
                  h-3.5
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>
          </div>

          {/* =================================================
              MOBILE CONTROLS
          ================================================= */}

          <div
            className="
              flex
              sm:hidden
              items-center
              gap-2
            "
          >
            <ThemeToggle />

            <button
              onClick={() => {
                playClickSound();

                setMobileMenuOpen(
                  !mobileMenuOpen
                );
              }}
              aria-label="Toggle Navigation Menu"
              aria-expanded={
                mobileMenuOpen
              }
              className="
                w-9
                h-9
                rounded-full
                border
                border-border
                bg-surface/80
                backdrop-blur-md
                text-ink
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:border-accent
                hover:text-accent
              "
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          sm:hidden
          bg-canvas/95
          backdrop-blur-2xl
          flex
          flex-col
          justify-between
          px-6
          pt-28
          pb-8
          transition-all
          duration-500
          ease-out
          ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >

        {/* =================================================
            MOBILE NAVIGATION
        ================================================= */}

        <div className="flex flex-col">

          {/* Mobile Logo */}

          <div
            className="
              flex
              items-center
              justify-between
              mb-8
              pb-4
              border-b
              border-border
            "
          >
            <div
              className="
                relative
                w-10
                h-10
                rounded-full
                overflow-hidden
                border
                border-border
                bg-black
                shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
              "
            >
              <Image
                src="/assets/Logo.png"
                alt="Yagnesh Chavda Logo"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            <span
              className="
                font-mono
                text-[9px]
                text-accent
                tracking-[0.2em]
              "
            >
              2026
            </span>
          </div>

          {/* Navigation Links */}

          <div className="flex flex-col">

            {navLinks.map(
              (link, index) => {

                const isActive =
                  activeSection ===
                  link.id;

                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() =>
                      handleLinkClick(
                        link.id
                      )
                    }
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      py-5
                      border-b
                      border-border
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <span
                        className="
                          font-mono
                          text-[9px]
                          text-accent
                          w-5
                        "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`
                          text-display
                          text-4xl
                          tracking-wide
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-accent"
                              : "text-ink"
                          }
                        `}
                      >
                        {link.label}
                      </span>
                    </div>

                    <ArrowUpRight
                      className="
                        w-5
                        h-5
                        text-ink-muted
                        transition-all
                        duration-300
                        group-hover:text-accent
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </a>
                );
              }
            )}

          </div>

        </div>

        {/* =================================================
            MOBILE BOTTOM
        ================================================= */}

        <div
          className="
            border-t
            border-border
            pt-6
            flex
            flex-col
            gap-5
          "
        >

          {/* Audio */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-accent
                  animate-pulse
                "
              />

              <span
                className="
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-widest
                  text-ink-muted
                "
              >
                AUDIO EXPERIENCE
              </span>
            </div>

            <SoundToggle />

          </div>

          {/* Status */}

          <div
            className="
              flex
              items-center
              gap-2
              text-[10px]
              font-mono
              text-ink-muted
            "
          >
            <SpikyStar
              className="
                w-4
                h-4
                text-accent
              "
            />

            <span>
              {SITE_CONFIG.status}
            </span>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            onClick={() => {
              playClickSound();

              setActiveSection(
                "contact"
              );

              setMobileMenuOpen(
                false
              );
            }}
            className="
              group
              w-full
              flex
              items-center
              justify-center
              gap-2
              py-3.5
              rounded-full
              bg-ink
              text-canvas
              font-mono
              text-[10px]
              uppercase
              tracking-[0.16em]
              font-bold
              transition-all
              duration-300
              hover:bg-accent
              hover:text-[#080909]
            "
          >
            LET&apos;S WORK TOGETHER

            <ArrowUpRight
              className="
                w-4
                h-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </a>

        </div>

      </div>
    </>
  );
}