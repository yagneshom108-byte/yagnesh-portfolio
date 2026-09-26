"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorState, setCursorState] = useState<"default" | "media" | "link">("default");

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check target or parent for data-cursor attributes
      const target = e.target as HTMLElement | null;
      const mediaEl = target?.closest("[data-cursor-media]");
      const linkEl = target?.closest("a, button, [role='button']");

      if (mediaEl) {
        const text = mediaEl.getAttribute("data-cursor-media") || "PLAY";
        setCursorText(text);
        setCursorState("media");
      } else if (linkEl) {
        setCursorText("");
        setCursorState("link");
      } else {
        setCursorText("");
        setCursorState("default");
      }
    };

    const animate = () => {
      // Lerp for silky smooth follow
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-radius] duration-200 ease-out flex items-center justify-center will-change-transform"
      style={{
        width: cursorState === "media" ? "68px" : cursorState === "link" ? "28px" : "10px",
        height: cursorState === "media" ? "68px" : cursorState === "link" ? "28px" : "10px",
      }}
    >
      <div
        className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-200 ${
          cursorState === "media"
            ? "bg-ink text-canvas border border-ink/20 shadow-2xl scale-100"
            : cursorState === "link"
            ? "bg-accent/30 border border-accent scale-100 backdrop-blur-[1px]"
            : "bg-accent scale-100 shadow-[0_0_8px_rgba(255,69,0,0.6)]"
        }`}
      >
        {cursorState === "media" && (
          <span className="text-[10px] font-mono tracking-widest font-bold uppercase select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
