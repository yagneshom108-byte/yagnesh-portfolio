"use client";

import { useEffect, useState, useCallback } from "react";
import { setSoundEnabled, isSoundEnabled, playClickSound } from "@/lib/audio";

export function useSound() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("yagnesh-sound");
    if (saved === "true") {
      setEnabled(true);
      setSoundEnabled(true);
    }
  }, []);

  const toggleSound = useCallback(() => {
    const next = !enabled;
    setEnabled(next);
    setSoundEnabled(next);
    localStorage.setItem("yagnesh-sound", next.toString());
    if (next) {
      playClickSound();
    }
  }, [enabled]);

  return { soundEnabled: enabled, toggleSound };
}
