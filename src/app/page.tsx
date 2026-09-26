"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Showreel } from "@/components/showreel/Showreel";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { MotionGraphics } from "@/components/projects/MotionGraphics";
import { ShortContent } from "@/components/projects/ShortContent";
import { CommercialAds } from "@/components/projects/CommercialAds";
import { YouTubeWork } from "@/components/projects/YouTubeWork";
import { SocialWork } from "@/components/projects/SocialWork";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { VideoModal } from "@/components/ui/VideoModal";
import { Project, FLAGSHIP_SHOWREEL } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-canvas text-ink transition-colors duration-400">
      {/* 01. Kinetic Preloader */}
      <Preloader />

      {/* Hardware-Accelerated Contextual Cursor */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Universal Video Lightbox Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 02. Typographic Hero Poster */}
      <Hero onOpenShowreel={() => setSelectedProject(FLAGSHIP_SHOWREEL)} />

      {/* 03. Master Showreel Theater */}
      <Showreel onOpenModal={() => setSelectedProject(FLAGSHIP_SHOWREEL)} />

      {/* 04. Flagship Selected Work Gallery */}
      <SelectedWork onSelectProject={setSelectedProject} />

      {/* 05. About Me Editorial Profile */}
      <About />

      {/* 06. Skills & Software Matrix */}
      <Skills />

      {/* 07. Experience & Track Record */}
      <Experience />

      {/* 08. Services & Capabilities */}
      <Services />

      {/* 09. Motion Graphics Showcase */}
      <MotionGraphics onSelectProject={setSelectedProject} />

      {/* 10. Short-Form Content & Viral Reels */}
      <ShortContent onSelectProject={setSelectedProject} />

      {/* 11. Commercial Ads & Brand Films */}
      <CommercialAds onSelectProject={setSelectedProject} />

      {/* 12. YouTube Long-Form & Podcasts */}
      <YouTubeWork onSelectProject={setSelectedProject} />

      {/* 13. Social Media Ads & Reels */}
      <SocialWork onSelectProject={setSelectedProject} />

      {/* 14. Client Testimonials */}
      <Testimonials />

      {/* 15. Direct Contact & Collaboration */}
      <Contact />

      {/* 16. Footer & Colophon */}
      <Footer />
    </main>
  );
}
