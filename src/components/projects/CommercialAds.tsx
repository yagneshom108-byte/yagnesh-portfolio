"use client";

import React from "react";
import { Tv } from "lucide-react";
import { Project, PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface CommercialAdsProps {
  onSelectProject: (project: Project) => void;
}

export function CommercialAds({
  onSelectProject,
}: CommercialAdsProps) {
  const commercialProjects = PROJECTS.filter(
    (project) => project.section === "commercial"
  ).slice(0, 5);

  return (
    <section
      id="commercial-work"
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

        {/* SECTION HEADER */}

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
              <Tv className="w-3.5 h-3.5" />

              <span>
                [ 08 • BRAND CAMPAIGNS ]
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
              COMMERCIAL ADS
            </h2>
          </div>

          <div
            className="
              max-w-md
              font-mono
              text-[9px]
              sm:text-[10px]
              md:text-xs
              text-ink-muted
              uppercase
              tracking-[0.1em]
              leading-relaxed
              md:text-right
            "
          >
            BROADCAST CLARITY
            <span className="mx-2 text-accent">•</span>
            CONVERSION PACING
            <span className="mx-2 text-accent">•</span>
            COLOR PURITY
          </div>
        </div>

        {/* COMMERCIAL GRID */}

        {commercialProjects.length > 0 ? (
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
            {commercialProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                aspectRatio="9:16"
              />
            ))}
          </div>
        ) : (
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
              <Tv
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
                Commercial Projects Coming Soon
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}