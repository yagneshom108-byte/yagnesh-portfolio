"use client";

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export function SoundToggle({ className = "" }: { className?: string }) {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      aria-label={soundEnabled ? "Mute audio" : "Enable UI sound"}
      title={soundEnabled ? "Sound: ON" : "Sound: OFF (Default)"}
      className={`relative group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface hover:border-ink transition-all duration-300 ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {soundEnabled ? (
          <Volume2 className="w-3.5 h-3.5 text-accent animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
        )}
      </div>
      <span className="font-mono text-xs uppercase tracking-wider font-semibold text-ink">
        {soundEnabled ? "SOUND ON" : "SOUND OFF"}
      </span>
    </button>
  );
}
