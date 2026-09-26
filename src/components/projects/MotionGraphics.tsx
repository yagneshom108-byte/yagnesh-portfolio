"use client";

import React from "react";
import { Wand2 } from "lucide-react";
import { Project, PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { playClickSound } from "@/lib/audio";

interface MotionGraphicsProps {
  onSelectProject: (project: Project) => void;
}

export function MotionGraphics({
  onSelectProject,
}: MotionGraphicsProps) {

  // Get all motion graphics projects
  const motionProjects = PROJECTS.filter(
    (project) => project.section === "motion"
  );

  return (
    <section
      id="motion-work"
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
            gap-5
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
                font-mono
                text-[10px]
                sm:text-xs
                text-accent
                uppercase
                tracking-[0.18em]
                font-semibold
                mb-2
              "
            >

              <Wand2 className="w-3.5 h-3.5" />

              <span>
                [ 06 • KINETIC LAB ]
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
              MOTION GRAPHICS
            </h2>

          </div>


          {/* RIGHT */}

          <div
            className="
              font-mono
              text-[9px]
              sm:text-[10px]
              md:text-xs
              text-ink-muted
              uppercase
              tracking-[0.12em]
              md:text-right
            "
          >

            AFTER EFFECTS

            <span className="mx-2 text-accent">
              •
            </span>

            2D/3D TRACKING

            <span className="mx-2 text-accent">
              •
            </span>

            KINETIC TYPE

          </div>

        </div>


        {/* =====================================================
            MOTION GRAPHICS GRID
        ===================================================== */}

        {motionProjects.length > 0 ? (

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

            {motionProjects.map((project) => (

              <div
                key={project.id}
                className="
                  min-w-0
                  group
                  transition-transform
                  duration-500
                  hover:-translate-y-1
                "
                onClick={() => {
                  playClickSound();
                  onSelectProject(project);
                }}
              >

                <ProjectCard
                  project={project}
                  onSelect={onSelectProject}
                  aspectRatio="9:16"
                />

              </div>

            ))}

          </div>

        ) : (

          /* ===================================================
             EMPTY STATE
          =================================================== */

          <div
            className="
              min-h-[300px]
              flex
              items-center
              justify-center
              border
              border-dashed
              border-border
              rounded-2xl
              bg-surface
            "
          >

            <div className="text-center">

              <Wand2
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
                  text-xs
                  uppercase
                  tracking-widest
                  text-ink-muted
                "
              >
                Motion Graphics Projects Coming Soon
              </p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}