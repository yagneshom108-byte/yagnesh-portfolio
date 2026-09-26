"use client";

import React from "react";
import { Video } from "lucide-react";
import { Project, PROJECTS } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

interface YouTubeWorkProps {
  onSelectProject: (project: Project) => void;
}

export function YouTubeWork({
  onSelectProject,
}: YouTubeWorkProps) {
  const youtubeProjects = PROJECTS.filter(
    (project) => project.section === "youtube"
  ).slice(0, 2);

  return (
    <section
      id="youtube-work"
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

        {/* SECTION HEADER */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
            mb-12
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
              <Video className="w-3.5 h-3.5" />

              <span>
                [ 09 • LONG-FORM & PODCAST ]
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
              YOUTUBE & PODCASTS
            </h2>
          </div>

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
            BALANCING DIALOGUE PURITY,
            DYNAMIC B-ROLL RHYTHMS,
            AND AUDIENCE ENGAGEMENT ARCS.
          </p>
        </div>

        {/* YOUTUBE / PODCAST GRID */}

        {youtubeProjects.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-7
              lg:gap-8
            "
          >
            {youtubeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                aspectRatio="16:9"
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
              <Video
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
                YouTube & Podcast Projects Coming Soon
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}