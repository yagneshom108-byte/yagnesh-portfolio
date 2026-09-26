"use client";

import React, { useEffect } from "react";
import { X, Play, Clock, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import { playModalOpenSound, playClickSound } from "@/lib/audio";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    if (project) {
      playModalOpenSound();
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-surface border border-border shadow-2xl rounded-xl overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-subtle">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold">
              {project.category} • {project.year}
            </span>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-ink/10 text-ink transition-colors flex items-center gap-1.5 font-mono text-xs"
          >
            <span className="hidden sm:inline">ESC</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div
          className={`relative w-full bg-black flex items-center justify-center overflow-hidden ${
            project.aspectRatio === "9:16" ? "max-h-[60vh] py-2" : "aspect-video"
          }`}
        >
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={`w-full ${
                project.aspectRatio === "9:16"
                  ? "max-w-[340px] aspect-[9/16] rounded-lg shadow-2xl"
                  : "h-full"
              }`}
            />
          ) : (
            <div className="text-center p-12 text-white/60 font-mono text-sm">
              <Play className="w-12 h-12 mx-auto mb-3 opacity-40 animate-pulse" />
              Preview Video Loading...
            </div>
          )}
        </div>

        {/* Project Metadata Footer */}
        <div className="p-6 bg-surface overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-ink-secondary mt-2 leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
              <div className="flex items-center gap-2 font-mono text-xs bg-surface-subtle border border-border px-3 py-1.5 rounded">
                <Clock className="w-3.5 h-3.5 text-accent" />
                <span>RUNTIME: {project.duration}</span>
              </div>
              {project.client && (
                <div className="font-mono text-xs text-ink-muted">
                  CLIENT: <span className="text-ink font-medium">{project.client}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tools / Tags */}
          <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[11px] text-ink-muted uppercase">TOOLS:</span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[11px] bg-surface-subtle text-ink px-2.5 py-1 rounded border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.metrics && (
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.metrics}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
