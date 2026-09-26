"use client";

import React from "react";
import { Project, PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Smartphone, Zap } from "lucide-react";

interface ShortContentProps {
  onSelectProject: (project: Project) => void;
}

export function ShortContent({
  onSelectProject,
}: ShortContentProps) {
  const shortProjects = PROJECTS.filter(
    (project) => project.section === "short-content"
  );

  return (
    <section
      id="short-content"
      className="
        relative
        py-24
        md:py-32
        px-4
        sm:px-6
        md:px-8
        bg-surface-subtle
        border-b
        border-border
        overflow-hidden
        scroll-mt-24
      "
    >
      <div className="max-w-7xl mx-auto w-full">

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
            mb-10
            pb-5
            border-b
            border-border
          "
        >

          {/* LEFT SIDE */}

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
              <Smartphone className="w-3.5 h-3.5" />

              <span>
                [ 07 • RETENTION GALLERY ]
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
              SHORT CONTENT
            </h2>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="
              flex
              flex-col
              md:items-end
              gap-2
              max-w-md
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                text-accent
                font-mono
                text-[10px]
                sm:text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              <Zap className="w-3.5 h-3.5" />

              <span>
                HIGH RETENTION • SHORT-FORM EDITING
              </span>
            </div>


            <p
              className="
                font-mono
                text-[9px]
                sm:text-[10px]
                md:text-xs
                text-ink-muted
                leading-relaxed
                uppercase
                tracking-[0.08em]
                md:text-right
              "
            >
              INSTAGRAM REELS • YOUTUBE SHORTS •
              BRAND CONTENT • SOCIAL CAMPAIGNS
            </p>

          </div>

        </div>


        {/* =====================================================
            SHORT CONTENT GRID
        ===================================================== */}

        {shortProjects.length > 0 ? (

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
              items-start
            "
          >

            {shortProjects.map((project, index) => (

              <div
                key={project.id}
                className="
                  group
                  flex
                  flex-col
                  min-w-0
                "
              >

                {/* =============================================
                    PROJECT NUMBER / META
                ============================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    mb-2
                    px-1
                    font-mono
                    text-[8px]
                    sm:text-[9px]
                    lg:text-[10px]
                    uppercase
                    tracking-wider
                  "
                >

                  <span className="text-ink-muted">
                    0{index + 1}
                  </span>

                  <span
                    className="
                      text-accent
                      font-semibold
                      truncate
                    "
                  >
                    {project.duration}
                  </span>

                </div>


                {/* =============================================
                    PROJECT CARD
                ============================================= */}

                <div
                  className="
                    relative
                    transition-all
                    duration-500
                    ease-out
                    group-hover:-translate-y-1
                    group-hover:drop-shadow-[0_18px_30px_rgba(0,0,0,0.15)]
                  "
                >

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

          /* ===================================================
              EMPTY STATE
          =================================================== */

          <div
            className="
              min-h-[320px]
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

              <Smartphone
                className="
                  w-8
                  h-8
                  text-accent
                  mx-auto
                  mb-4
                "
              />

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-ink-muted
                "
              >
                Short Content Projects Coming Soon
              </p>

            </div>

          </div>

        )}

      </div>
    </section>
  );
}