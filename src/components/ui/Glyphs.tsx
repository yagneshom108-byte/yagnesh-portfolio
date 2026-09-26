import React from "react";

interface GlyphProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

/** 8-Point Spiky Star from Reference 1 */
export function SpikyStar({ className = "w-6 h-6", size, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon points="50,0 60,35 95,20 70,50 95,80 60,65 50,100 40,65 5,80 30,50 5,20 40,35" />
    </svg>
  );
}

/** 4-Point Concave Sparkle Diamond from Reference 1 */
export function SparkleDiamond({ className = "w-6 h-6", size, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M50 0 C50 32 68 50 100 50 C68 50 50 68 50 100 C50 68 32 50 0 50 C32 50 50 32 50 0 Z" />
    </svg>
  );
}

/** 4-Leaf Clover / Club Mark from Reference 1 */
export function CloverClub({ className = "w-6 h-6", size, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Top circle */}
      <circle cx="50" cy="30" r="22" />
      {/* Bottom circle */}
      <circle cx="50" cy="70" r="22" />
      {/* Left circle */}
      <circle cx="30" cy="50" r="22" />
      {/* Right circle */}
      <circle cx="70" cy="50" r="22" />
      {/* Center fill */}
      <rect x="35" y="35" width="30" height="30" />
    </svg>
  );
}

/** Asterisk Star from Reference 2 Floating Tab */
export function AsteriskStar({ className = "w-5 h-5", size, ...props }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3.34" y1="7" x2="20.66" y2="17" />
      <line x1="3.34" y1="17" x2="20.66" y2="7" />
    </svg>
  );
}

/** Trio of Reference 1 Editorial Marks */
export function EditorialGlyphTrio({ className = "flex items-center gap-4 text-ink" }: { className?: string }) {
  return (
    <div className={className}>
      <SpikyStar className="w-5 h-5 transition-transform hover:rotate-45 duration-300" />
      <SparkleDiamond className="w-5 h-5 transition-transform hover:scale-125 duration-300" />
      <CloverClub className="w-5 h-5 transition-transform hover:rotate-90 duration-300" />
    </div>
  );
}
