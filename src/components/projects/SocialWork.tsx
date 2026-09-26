"use client";

import React from "react";
import { Project, PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Flame } from "lucide-react";

function InstagramIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
      />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}

interface SocialWorkProps {
  onSelectProject: (project: Project) => void;
}

export function SocialWork({
  onSelectProject,
}: SocialWorkProps) {
  const socialProjects = PROJECTS.filter(
    (project) => project.section === "social"
  );

  return (
    <section
      id="social-work"
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
      <div className="max-w-7xl mx-auto w-full">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-10
            pb-5
            border-b
            border-border
          "
        >
          {/* LEFT */}

          <div>
            <div
              className="
                flex
                items-center
                gap-2
                mb-2
                font-mono
                text-[10px]
                sm:text-xs
                text-accent
                uppercase
                tracking-[0.18em]
                font-semibold
              "
            >
              <InstagramIcon className="w-3.5 h-3.5" />

              <span>[ 10 • VIRAL MOMENTS ]</span>
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
              SOCIAL MEDIA ADS & REELS
            </h2>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              flex-col
              md:items-end
              gap-1.5
              font-mono
              text-[9px]
              sm:text-[10px]
              md:text-xs
              text-ink-muted
              uppercase
              tracking-[0.08em]
            "
          >
            <div
              className="
                flex
                items-center
                gap-1.5
                text-accent
                font-semibold
              "
            >
              <Flame className="w-3.5 h-3.5 fill-current" />

              <span>
                100K+ AGGREGATE SOCIAL VIEWS
              </span>
            </div>

            <span>
              FAST-PACED • BEAT-SYNCED • COLOR-GRADED
            </span>
          </div>
        </div>

        {/* =========================================
            VERTICAL REELS GRID
        ========================================= */}

        {socialProjects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-4
              sm:gap-5
              lg:gap-6
            "
          >
            {socialProjects.map((project, index) => (
              <div
                key={project.id}
                className="
                  flex
                  flex-col
                  min-w-0
                "
              >

                {/* =====================================
                    REEL META
                ===================================== */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-2
                    px-1
                    font-mono
                    text-[8px]
                    sm:text-[9px]
                    uppercase
                    tracking-wider
                  "
                >
                  <span className="text-ink-muted">
                    REEL #{String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-accent font-semibold truncate ml-2">
                    {project.metrics || project.duration}
                  </span>
                </div>

                {/* =====================================
                    VERTICAL PROJECT CARD
                ===================================== */}

                <div className="w-full">
                  <ProjectCard
                    project={project}
                    onSelect={onSelectProject}
                    aspectRatio="9:16"
                  />
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* =========================================
             EMPTY STATE
          ========================================= */

          <div
            className="
              min-h-[300px]
              rounded-2xl
              border
              border-dashed
              border-border
              bg-surface
              flex
              items-center
              justify-center
            "
          >
            <div className="text-center">

              <InstagramIcon className="w-8 h-8 text-accent mx-auto mb-4" />

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-ink-muted
                "
              >
                Social Projects Coming Soon
              </p>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}