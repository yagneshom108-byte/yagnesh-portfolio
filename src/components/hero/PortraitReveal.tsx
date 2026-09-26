"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface PortraitRevealProps {
  videoSrc?: string;
  alt?: string;
  className?: string;
}

export function PortraitReveal({
  videoSrc = "/assets/Yagnesh-Cartoon.mp4",
  alt = "Yagnesh Chavda — 360 Character",
  className = "",
}: PortraitRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const animationRef = useRef<number | null>(null);
  const frameCallbackRef = useRef<number | null>(null);

  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  /* =========================================================
     GREEN SCREEN SETTINGS
     ========================================================= */

  const MAX_PROCESS_WIDTH = 720;

  /* =========================================================
     DRAW / PROCESS VIDEO FRAME
     ========================================================= */

  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    if (
      video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA ||
      !video.videoWidth ||
      !video.videoHeight
    ) {
      return;
    }

    let ctx = ctxRef.current;

    /* Create context only once */

    if (!ctx) {
      ctx = canvas.getContext("2d", {
        willReadFrequently: true,
        alpha: true,
      });

      if (!ctx) return;

      ctxRef.current = ctx;
    }

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    /*
      Process video at a smaller resolution.

      This is the biggest performance improvement.
      720px max width is enough for a web Hero character.
    */

    const scale = Math.min(
      1,
      MAX_PROCESS_WIDTH / videoWidth
    );

    const width = Math.max(
      1,
      Math.round(videoWidth * scale)
    );

    const height = Math.max(
      1,
      Math.round(videoHeight * scale)
    );

    /* Resize canvas only when necessary */

    if (
      canvas.width !== width ||
      canvas.height !== height
    ) {
      canvas.width = width;
      canvas.height = height;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }

    /* Draw current video frame */

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    ctx.drawImage(
      video,
      0,
      0,
      width,
      height
    );

    /* Read pixels */

    const imageData = ctx.getImageData(
      0,
      0,
      width,
      height
    );

    const pixels = imageData.data;

    /*
      Optimized chroma key.

      Removes strong green and soft green edges.
    */

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const maxRB = r > b ? r : b;
      const greenDifference = g - maxRB;

      /* Strong green */

      if (
        g > 80 &&
        greenDifference > 30 &&
        g > r * 1.15 &&
        g > b * 1.15
      ) {
        pixels[i + 3] = 0;
        continue;
      }

      /* Soft green edge */

      if (
        g > 70 &&
        greenDifference > 18 &&
        g > r * 1.08 &&
        g > b * 1.08
      ) {
        const alpha = Math.max(
          0,
          Math.min(
            255,
            255 -
              (greenDifference - 18) * 12
          )
        );

        pixels[i + 3] = alpha;
      }
    }

    ctx.putImageData(
      imageData,
      0,
      0
    );

    /*
      First successfully rendered frame.
    */

    if (!videoReady) {
      setVideoReady(true);
    }
  }, [videoReady]);

  /* =========================================================
     VIDEO FRAME LOOP
     ========================================================= */

  const processFrame = useCallback(() => {
    const video = videoRef.current;

    if (!video) return;

    drawFrame();

    /*
      Modern browsers:
      render only when a new video frame is actually available.
    */

    if (
      "requestVideoFrameCallback" in video
    ) {
      frameCallbackRef.current =
        video.requestVideoFrameCallback(() => {
          processFrame();
        });
    } else {
      /*
        Fallback for older browsers.
      */

      animationRef.current =
        requestAnimationFrame(
          processFrame
        );
    }
  }, [drawFrame]);

  /* =========================================================
     VIDEO SETUP
     ========================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let cancelled = false;

    const startVideo = async () => {
      if (cancelled) return;

      try {
        /*
          Start playback immediately.
        */

        await video.play();
      } catch {
        /*
          Browser may block autoplay.
          Video is muted so this should normally work.
        */
      }

      if (cancelled) return;

      /*
        Start frame processing.
      */

      processFrame();
    };

    const handleLoadedData = () => {
      startVideo();
    };

    const handleCanPlay = () => {
      startVideo();
    };

    video.addEventListener(
      "loadeddata",
      handleLoadedData
    );

    video.addEventListener(
      "canplay",
      handleCanPlay
    );

    /*
      If video is already cached/loaded.
    */

    if (
      video.readyState >=
      HTMLMediaElement.HAVE_CURRENT_DATA
    ) {
      startVideo();
    }

    return () => {
      cancelled = true;

      video.removeEventListener(
        "loadeddata",
        handleLoadedData
      );

      video.removeEventListener(
        "canplay",
        handleCanPlay
      );

      if (
        animationRef.current !== null
      ) {
        cancelAnimationFrame(
          animationRef.current
        );

        animationRef.current = null;
      }

      if (
        frameCallbackRef.current !== null &&
        "cancelVideoFrameCallback" in video
      ) {
        video.cancelVideoFrameCallback(
          frameCallbackRef.current
        );

        frameCallbackRef.current = null;
      }

      ctxRef.current = null;
    };
  }, [processFrame]);

  /* =========================================================
     MOUSE TILT
     ========================================================= */

  const handleMouseMove = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      const container =
        containerRef.current;

      if (!container) return;

      const rect =
        container.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -4;

      const rotateY =
        ((x - centerX) / centerX) * 4;

      container.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.015)
      `;
    },
    []
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

    const container =
      containerRef.current;

    if (!container) return;

    container.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  /* =========================================================
     RENDER
     ========================================================= */

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor-media="CREATOR"
      aria-label={alt}
      className={`
        relative
        w-full
        h-full
        select-none
        will-change-transform
        transition-transform
        duration-300
        ease-out
        ${className}
      `}
    >
      {/* =====================================================
          SOURCE VIDEO
          ===================================================== */}

      <video
        ref={videoRef}
        src={videoSrc}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="
          absolute
          w-px
          h-px
          opacity-0
          pointer-events-none
        "
        aria-hidden="true"
      />

      {/* =====================================================
          AMBIENT GOLD GLOW
          ===================================================== */}

      <div
        className={`
          absolute
          left-1/2
          bottom-10
          -translate-x-1/2
          w-64
          h-64
          rounded-full
          bg-accent/10
          blur-3xl
          pointer-events-none
          transition-opacity
          duration-500
          ${
            isHovered
              ? "opacity-100"
              : "opacity-50"
          }
        `}
      />

      {/* =====================================================
          CHARACTER CANVAS
          ===================================================== */}

      <div
        className="
          relative
          w-full
          h-full
          flex
          items-end
          justify-center
        "
      >
        <canvas
          ref={canvasRef}
          className="
            block
            h-full
            w-auto
            max-w-full
            object-contain
            drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]
          "
        />
      </div>

      {/* =====================================================
          LOADING
          ===================================================== */}

      {!videoReady && (
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            pointer-events-none
          "
        >
          <div
            className="
              w-8
              h-8
              rounded-full
              border-2
              border-border
              border-t-accent
              animate-spin
            "
          />
        </div>
      )}
    </div>
  );
}