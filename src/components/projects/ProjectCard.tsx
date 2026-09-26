"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Project } from "@/data/projects";
import { playClickSound } from "@/lib/audio";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  aspectRatio?: "16:9" | "9:16";
  className?: string;
}

export function ProjectCard({
  project,
  onSelect,
  aspectRatio = project.aspectRatio,
  className = "",
}: ProjectCardProps) {
  return (
    <article
      onClick={() => {
        playClickSound();
        onSelect(project);
      }}
      data-cursor-media="WATCH"
      className={`
        group
        relative
        w-full
        min-w-0
        cursor-pointer
        ${className}
      `}
    >
      {/* =====================================================
          VIDEO SHOWCASE
          ONLY IMAGE + HOVER PLAY BUTTON
          
          NO:
          - CATEGORY
          - DURATION
          - CLIENT BADGE
          - TITLE OVERLAY
          - EXTRA TEXT
      ===================================================== */}

      <div
        className={`
          relative
          w-full
          overflow-hidden
          rounded-2xl
          bg-black
          border
          border-border
          ${
            aspectRatio === "9:16"
              ? "aspect-[9/16]"
              : "aspect-video"
          }
        `}
      >
        {/* =====================================================
            THUMBNAIL
        ===================================================== */}

        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 33vw,
            (max-width: 1280px) 25vw,
            20vw
          "
          className="
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* =====================================================
            HOVER DARKEN
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-300
            group-hover:bg-black/15
          "
        />

        {/* =====================================================
            CENTER PLAY BUTTON
        ===================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              w-16
              h-16
              sm:w-20
              sm:h-20
              rounded-full
              bg-black/45
              backdrop-blur-md
              border
              border-white/40
              text-white
              shadow-2xl
              scale-90
              opacity-0
              transition-all
              duration-300
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            <Play
              className="
                w-6
                h-6
                sm:w-7
                sm:h-7
                fill-white
                ml-1
              "
            />
          </div>
        </div>
      </div>

      {/* =====================================================
          BELOW VIDEO
          
          KEEP:
          - CLIENT
          - YEAR
          - PROJECT TITLE
          - DESCRIPTION
          - BOTTOM BORDER
      ===================================================== */}

      <div
        className="
          pt-5
          pb-6
        "
      >
        {/* =====================================================
            CLIENT + YEAR
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            mb-3
          "
        >
          {/* CLIENT */}

          <span
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              uppercase
              tracking-[0.14em]
              font-semibold
              text-accent
              truncate
            "
          >
            {project.client || "CLIENT PROJECT"}
          </span>

          {/* YEAR */}

          <span
            className="
              shrink-0
              font-mono
              text-[9px]
              sm:text-[10px]
              text-ink-muted
            "
          >
            {project.year}
          </span>
        </div>

        {/* =====================================================
            PROJECT TITLE
        ===================================================== */}

        <h4
          className="
            text-ink
            font-semibold
            text-xl
            sm:text-2xl
            tracking-tight
            leading-tight
            line-clamp-2
          "
        >
          {project.title}
        </h4>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}

        <p
          className="
            mt-3
            text-sm
            sm:text-[15px]
            text-ink-secondary
            font-body
            leading-relaxed
            line-clamp-2
            max-w-3xl
          "
        >
          {project.description}
        </p>

        {/* =====================================================
            BOTTOM BORDER
        ===================================================== */}

        <div
          className="
            mt-6
            border-b
            border-border
          "
        />
      </div>
    </article>
  );
}