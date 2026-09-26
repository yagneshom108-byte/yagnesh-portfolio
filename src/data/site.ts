export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  deliverables: string[];
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  metrics: string[];
  achievements: string[];
}

export interface SoftwareTool {
  name: string;
  category: string;
  icon: string;
  mastery: string;
  usage: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
}

export const SITE_CONFIG = {
  name: "Yagnesh Chavda",
  brand: "EDIT WITH YAGNESH",
  role: "Video Editor & Motion Designer",
  specialization: "Cinematic Storytelling • High-Retention Short-Form • Motion Design",
  location: "Ahmedabad, Gujarat, India",
  timezone: "Asia/Kolkata (GMT+5:30)",
  email: "yagnesh6650@gmail.com",
  year: "2026",
  status: "AVAILABLE FOR COMMISSIONS",
  stats: [
    { label: "Completed Projects", value: "500+", suffix: "Delivered" },
    { label: "Client Satisfaction", value: "4.9", suffix: "/ 5.0 Rating" },
    { label: "Avg Engagement Boost", value: "+40%", suffix: "Retention" },
    { label: "Production Experience", value: "2+", suffix: "Years Focus" },
  ],
  elevatorPitch:
    "Helping creators and brands dominate social feeds with high-retention cinematic video content, kinetic motion graphics, and precision color science.",
  editorialBio:
    "Based in Ahmedabad, I am a dedicated Video Editor and Motion Designer with a razor-sharp focus on pacing, retention psychology, and cinematic color science. Over the past several years, I have engineered content pipelines for fast-growing creators and commercial brands, taking ideas from rough assembly to polished, broadcast-grade delivery. My workflow combines creative intuition with cutting-edge AI-assisted efficiency. I treat every frame as an intentional canvas to hold attention and communicate authority.",
};

export const SOFTWARE_STACK: SoftwareTool[] = [
  {
    name: "Adobe Premiere Pro",
    category: "Non-Linear Editing",
    icon: "/assets/premiere-pro.png",
    mastery: "Mastery",
    usage: "Multi-Cam, Rhythm Pacing & Master Timeline Assembly",
  },
  {
    name: "Adobe After Effects",
    category: "Motion & Visual FX",
    icon: "/assets/after-effects.png",
    mastery: "Advanced",
    usage: "Kinetic Typography, 2D/3D Tracking & Dynamic Resolves",
  },
  {
    name: "DaVinci Resolve",
    category: "Color Science",
    icon: "/assets/davinci-resolve.png",
    mastery: "Mastery",
    usage: "Primary/Secondary Color Correction & Filmic Looks",
  },
  {
    name: "Adobe Photoshop",
    category: "Asset Preparation",
    icon: "/assets/photoshop.png",
    mastery: "Advanced",
    usage: "Cutout Art Direction, Graphical Plates & Thumbnail Design",
  },
  {
    name: "CapCut Pro",
    category: "High-Velocity Social",
    icon: "/assets/capcut-icon.png",
    mastery: "Expert",
    usage: "Rapid Caption Styling & Sound Effect Layering",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Freelance Video Editor",
    company: "Self-Employed Studio",
    period: "2025 — Present",
    location: "Remote / Worldwide",
    type: "Contract & Client Retainers",
    description:
      "Partnering with forward-thinking creators and commercial brands to deliver cinematic video content optimized for viral retention and brand prestige.",
    metrics: ["100+ Projects Completed", "4.9/5 Average Rating", "AI-Assisted Turnaround"],
    achievements: [
      "Engineered end-to-end post-production pipelines for YouTube creators and D2C brands.",
      "Maintained top-tier client satisfaction across 100+ individual deliverables.",
      "Implemented modular motion graphics templates saving 35% editing turnaround time.",
    ],
  },
  {
    role: "Video Editor & Content Strategist",
    company: "Franchise Insiider",
    period: "2025 — Present",
    location: "Ahmedabad, Gujarat",
    type: "In-House Creative",
    description:
      "Leading video post-production for national franchise brands, focusing on corporate storytelling, product showcases, and high-impact social campaigns.",
    metrics: ["+40% Engagement", "Full Pipeline Ownership", "Multi-Platform Strategy"],
    achievements: [
      "Boosted organic social engagement by 40% through hook-driven short-form editing.",
      "Managed the end-to-end video pipeline from footage ingestion to multi-format delivery.",
      "Collaborated directly with executive marketing teams on campaign visual identity.",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "short-form",
    number: "01",
    title: "Short-Form Content & Reels",
    category: "9:16 Vertical • Social",
    deliverables: ["Hook Optimization", "Kinetic Subtitles", "Sound Design", "Micro-VFX"],
    description:
      "High-retention editing built with retention psychology, dynamic punch-ins, customized captions, and rich Foley that maximizes average view duration.",
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial Ads & Brand Films",
    category: "16:9 Widescreen • Broadcast",
    deliverables: ["Brand Storytelling", "Cinematic Pacing", "Product Highlight", "Conversion Focus"],
    description:
      "Sleek, product-focused commercial edits designed for conversion and brand prestige. Clean typography, premium color grading, and broadcast-ready delivery.",
  },
  {
    id: "motion",
    number: "03",
    title: "Motion Graphics & Kinetic Systems",
    category: "Multi-Format • Visual FX",
    deliverables: ["Title Sequences", "Kinetic Typography", "Logo Resolves", "2D/3D Tracking"],
    description:
      "Bespoke motion systems and kinetic typography that transform static concepts into dynamic, memorable brand assets that command viewer focus.",
  },
  {
    id: "color",
    number: "04",
    title: "Cinematic Color Grading",
    category: "RAW / Log Mastering",
    deliverables: ["Shot Matching", "Skin Tone Purity", "Film Emulation", "Mood Creation"],
    description:
      "End-to-end look development and shot-matching in DaVinci Resolve. Filmic grain, tonal contrast balance, and mood enhancement tailored to your narrative.",
  },
  {
    id: "youtube",
    number: "05",
    title: "YouTube & Long-Form Documentary",
    category: "16:9 Narrative • Editorial",
    deliverables: ["Retention Structuring", "B-Roll Sequencing", "Chaptering", "Soundscapes"],
    description:
      "Engaging narrative pacing for creators and docu-series. Balanced storytelling rhythms that eliminate drop-offs and keep audiences immersed.",
  },
  {
    id: "podcast",
    number: "06",
    title: "Podcast Video & Social Repurposing",
    category: "Multi-Cam Switching",
    deliverables: ["Automated Camera Sync", "Highlight Clipping", "Audio Cleanup", "Viral Slicing"],
    description:
      "Multi-camera podcast cutting with crystal-clear audio enhancement, seamless speaker transitions, and rapid slicing into bite-sized viral clips.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rushin Panchal",
    role: "Creative Director",
    quote:
      "Yagnesh has a unique eye for cinematic storytelling. His edits are clean, powerful, and truly elevate our brand content. Highly recommended for any professional creator or brand seeking distinct visual authority.",
    rating: 5,
  },
  {
    name: "Dhruvin Sathwara",
    role: "Influencer & Host",
    quote:
      "The social media reels Yagnesh edited for me were incredible! He knows exactly how to capture attention in the first few seconds. His workflow is remarkably fast, consistent, and always on point.",
    rating: 5,
  },
];
