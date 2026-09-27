export interface Project {
  id: string;
  title: string;

  category:
    | "Documentary"
    | "Commercial"
    | "Event & Wedding"
    | "Brand Reels"
    | "Podcast"
    | "Motion Graphics"
    | "Short Content";

  section:
    | "motion"
    | "short-content"
    | "commercial"
    | "youtube"
    | "social"
    | "showreel";

  year: string;
  duration: string;
  description: string;
  thumbnail: string;

  // YouTube VIDEO ID
  youtubeId: string;

  aspectRatio: "16:9" | "9:16";

  client?: string;
  tools: string[];
  featured?: boolean;
  tags?: string[];
  metrics?: string;
}


/* =========================================================
   SHOWREEL
========================================================= */

export const FLAGSHIP_SHOWREEL: Project = {
  id: "showreel-2026",

  title: "Official Motion & Editorial Reel 2026",

  category: "Motion Graphics",

  section: "showreel",

  year: "2026",

  duration: "00:54",

  description:
    "A curated cut of high-impact motion design, commercial campaigns, and viral social edits showcasing rhythmic pacing and cinematic aesthetics.",

  thumbnail: "/assets/motion-1.jpg",

  youtubeId: "LdFZpN9umMg",

  aspectRatio: "16:9",

  client: "Yagnesh Chavda Studio",

  tools: [
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
  ],

  featured: true,

  tags: [
    "Showreel",
    "Motion Graphics",
    "Sound Design",
    "Color Grading",
  ],

  metrics: "Master Cut",
};


/* =========================================================
   ALL PROJECTS
========================================================= */

export const PROJECTS: Project[] = [

  /* =======================================================
     01 — MOTION GRAPHICS
     5 VERTICAL VIDEOS
  ======================================================= */

  {
    id: "motion-1",
    title: "Motion Graphics Project 01",
    category: "Motion Graphics",
    section: "motion",
    year: "2026",
    duration: "0:32",

    description:
      "Euro Foods India - Diwali 2025 Reel",

    thumbnail: "/assets/Motion 1.jpg",

    youtubeId: "Bt1ULc90W1c",

    aspectRatio: "9:16",

    client: "Motion Graphics",

    tools: [
      "After Effects",
      "Premiere Pro",
    ],

    featured: true,

    tags: [
      "Motion Graphics",
      "Visual FX",
      "Animation",
    ],

    metrics: "Featured Work",
  },


  {
    id: "motion-2",
    title: "Motion Graphics Project 02",
    category: "Motion Graphics",
    section: "motion",
    year: "2026",
    duration: "0:32",

    description:
      "Euro Foods India - Navratri 2025 Reel",

    thumbnail: "/assets/Motion 2.jpg",

    youtubeId: "eB0LeMK-W5w",

    aspectRatio: "9:16",

    client: "Motion Graphics",

    tools: [
      "After Effects",
      "Premiere Pro",
    ],

    featured: true,

    tags: [
      "Motion Graphics",
      "Visual FX",
      "Animation",
    ],

    metrics: "Featured Work",
  },


  {
    id: "motion-3",
    title: "Motion Graphics Project 03",
    category: "Motion Graphics",
    section: "motion",
    year: "2026",
    duration: "0:32",

    description:
      "Balista Bistro Ahmedabad - Diwali 2025 Reel",

    thumbnail: "/assets/Motion 3.jpg",

    youtubeId: "pdw-C0KuG1c",

    aspectRatio: "9:16",

    client: "Motion Graphics",

    tools: [
      "After Effects",
      "Premiere Pro",
    ],

    featured: true,

    tags: [
      "Motion Graphics",
      "Visual FX",
      "Animation",
    ],

    metrics: "Featured Work",
  },


  {
    id: "motion-4",
    title: "Motion Graphics Project 04",
    category: "Motion Graphics",
    section: "motion",
    year: "2026",
    duration: "0:32",

    description:
      "Balista Bistro Ahmedabad - Burger Day 2026 Reel",

    thumbnail: "/assets/Motion 4.jpg",

    youtubeId: "xNsdXgKmprU",

    aspectRatio: "9:16",

    client: "Motion Graphics",

    tools: [
      "After Effects",
      "Premiere Pro",
    ],

    featured: true,

    tags: [
      "Motion Graphics",
      "Visual FX",
      "Animation",
    ],

    metrics: "Featured Work",
  },


  {
    id: "motion-5",
    title: "Motion Graphics Project 05",
    category: "Motion Graphics",
    section: "motion",
    year: "2026",
    duration: "0:32",

    description:
      "Euro Foods India - Farali Product 2026 Reel",

    thumbnail: "/assets/Motion 5.jpg",

    youtubeId: "ddurWZFgphs",

    aspectRatio: "9:16",

    client: "Motion Graphics",

    tools: [
      "After Effects",
      "Premiere Pro",
    ],

    featured: true,

    tags: [
      "Motion Graphics",
      "Visual FX",
      "Animation",
    ],

    metrics: "Featured Work",
  },


  /* =======================================================
     02 — SHORT CONTENT
     5 VERTICAL VIDEOS
  ======================================================= */

  {
    id: "brand-1",
    title: "Short Content Project 01",
    category: "Brand Reels",
    section: "short-content",
    year: "2026",
    duration: "0:51",

    description:
      "Euro Foods India - Jeera Factory Process 2025 Reel",

    thumbnail: "/assets/Brand 1.jpg",

    youtubeId: "QQSsIql5pE0",

    aspectRatio: "9:16",

    client: "Short Content",

    tools: [
      "Premiere Pro",
      "CapCut",
      "After Effects",
    ],

    featured: true,

    tags: [
      "Shorts",
      "Viral Hook",
      "Social Media",
    ],

    metrics: "Featured Work",
  },


  {
    id: "brand-2",
    title: "Short Content Project 02",
    category: "Brand Reels",
    section: "short-content",
    year: "2026",
    duration: "0:13",

    description:
      "Daur Diamond - Ring Shoot 2026 Reel",

    thumbnail: "/assets/Brand 2.jpg",

    youtubeId: "zohp5z2RrF8",

    aspectRatio: "9:16",

    client: "Short Content",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: true,

    tags: [
      "Shorts",
      "Editing",
      "Retention",
    ],

    metrics: "Featured Work",
  },


  {
    id: "brand-3",
    title: "Short Content Project 03",
    category: "Brand Reels",
    section: "short-content",
    year: "2026",
    duration: "0:44",

    description:
      "Gandhinagar University - Seminar 2026 Reel",

    thumbnail: "/assets/Brand 3.jpg",

    youtubeId: "Qib09H55csc",

    aspectRatio: "9:16",

    client: "Short Content",

    tools: [
      "Premiere Pro",
      "CapCut",
    ],

    featured: true,

    tags: [
      "Shorts",
      "Retention",
      "Social",
    ],

    metrics: "Featured Work",
  },


  {
    id: "brand-4",
    title: "Short Content Project 04",
    category: "Brand Reels",
    section: "short-content",
    year: "2026",
    duration: "0:25",

    description:
      "Balista Bistro Ahmedabad - Recap 2025 Reel",

    thumbnail: "/assets/Brand 4.jpg",

    youtubeId: "XMpiacCbVWU",

    aspectRatio: "9:16",

    client: "Short Content",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: false,

    tags: [
      "Product",
      "Launch",
      "Social",
    ],

    metrics: "New Work",
  },


  {
    id: "brand-5",
    title: "Short Content Project 05",
    category: "Short Content",
    section: "short-content",
    year: "2026",
    duration: "0:49",

    description:
      "Euro Foods India - Production Showcase 2026 Reel",

    thumbnail: "/assets/Brand 5.jpg",

    youtubeId: "KZbUXG0xgw0",

    aspectRatio: "9:16",

    client: "Short Content",

    tools: [
      "Premiere Pro",
      "CapCut",
    ],

    featured: false,

    tags: [
      "Retention",
      "Hook",
      "Short Form",
    ],

    metrics: "New Work",
  },


  /* =======================================================
     03 — COMMERCIAL ADS
     5 VERTICAL VIDEOS
  ======================================================= */

  {
    id: "commercial-1",
    title: "Commercial Ad Project 01",
    category: "Commercial",
    section: "commercial",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Success Stories 2026 Reel",

    thumbnail: "/assets/ADS 1.jpg",

    youtubeId: "OnhW0NdTMAI",

    aspectRatio: "9:16",

    client: "Commercial Ads",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: true,

    tags: [
      "Commercial",
      "Color Grading",
      "Advertising",
    ],

    metrics: "Featured Work",
  },


  {
    id: "commercial-2",
    title: "Commercial Ad Project 02",
    category: "Commercial",
    section: "commercial",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Success Stories 2026 Reel",

    thumbnail: "/assets/ADS 2.jpg",

    youtubeId: "TWJDiMW_hoc",

    aspectRatio: "9:16",

    client: "Commercial Ads",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: true,

    tags: [
      "Commercial",
      "Sound Design",
      "Fast Cuts",
    ],

    metrics: "Featured Work",
  },


  {
    id: "commercial-3",
    title: "Commercial Ad Project 03",
    category: "Commercial",
    section: "commercial",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Polpat Shakahari 2025 Reel",

    thumbnail: "/assets/ADS 3.jpg",

    youtubeId: "rlXpsCngDTg",

    aspectRatio: "9:16",

    client: "Commercial Ads",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: false,

    tags: [
      "Brand Film",
      "Commercial",
      "Color",
    ],

    metrics: "New Work",
  },


  {
    id: "commercial-4",
    title: "Commercial Ad Project 04",
    category: "Commercial",
    section: "commercial",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Beyrut 2026 Reel",

    thumbnail: "/assets/ADS 4.jpg",

    youtubeId: "hHpQ4ueZFYE",

    aspectRatio: "9:16",

    client: "Commercial Ads",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: false,

    tags: [
      "Product Film",
      "Advertising",
      "Motion",
    ],

    metrics: "New Work",
  },


  {
    id: "commercial-5",
    title: "Commercial Ad Project 05",
    category: "Commercial",
    section: "commercial",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Mortantra 2026 Reel",

    thumbnail: "/assets/ADS 5.jpg",

    youtubeId: "reBNdt5A5Zw",

    aspectRatio: "9:16",

    client: "Commercial Ads",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: false,

    tags: [
      "Corporate",
      "Storytelling",
      "B-Roll",
    ],

    metrics: "New Work",
  },


  /* =======================================================
     04 — YOUTUBE & PODCASTS
     ONLY 2 HORIZONTAL VIDEOS
  ======================================================= */

  {
    id: "youtube-1",
    title: "YouTube Project 01",
    category: "Documentary",
    section: "youtube",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider X Euro Foods India | Case Study",

    thumbnail: "/assets/Youtube Video 1.jpg",

    youtubeId: "sqli6KPLaiU",

    aspectRatio: "16:9",

    client: "YouTube & Podcasts",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: true,

    tags: [
      "YouTube",
      "Documentary",
      "Storytelling",
    ],

    metrics: "Featured Work",
  },


  {
    id: "youtube-2",
    title: "Podcast Project 02",
    category: "Podcast",
    section: "youtube",
    year: "2026",
    duration: "0:32",

    description:
      "The Franchise Insiider - Sales Team Podcast 2026",

    thumbnail: "/assets/Podcast 1.jpg",

    youtubeId: "HQSd7ZlMB_0",

    aspectRatio: "16:9",

    client: "YouTube & Podcasts",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: false,

    tags: [
      "Podcast",
      "Multi-Cam",
      "Subtitles",
    ],

    metrics: "Featured Work",
  },


  /* =======================================================
     05 — SOCIAL MEDIA ADS & REELS
     5 VERTICAL VIDEOS
  ======================================================= */

  {
    id: "social-1",
    title: "Social Media Reel 01",
    category: "Event & Wedding",
    section: "social",
    year: "2026",
    duration: "0:32",

    description:
      "Balista Bistro Ahmedabad - Juice 2026 Reel",

    thumbnail: "/assets/AI 1.jpg",

    youtubeId: "lXhtfCateEc",

    aspectRatio: "9:16",

    client: "Social Media",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: true,

    tags: [
      "Social",
      "Reels",
      "Cinematic",
    ],

    metrics: "Featured Work",
  },


  {
    id: "social-2",
    title: "Social Media Reel 02",
    category: "Event & Wedding",
    section: "social",
    year: "2026",
    duration: "0:32",

    description:
      "Euro Foods India - GTA 5 Store Reveal Reel",

    thumbnail: "/assets/AI 2.jpg",

    youtubeId: "69yuTNygCP0",

    aspectRatio: "9:16",

    client: "Social Media",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: true,

    tags: [
      "Reels",
      "Beat Sync",
      "Social Ads",
    ],

    metrics: "Featured Work",
  },


  {
    id: "social-3",
    title: "Social Media Reel 03",
    category: "Event & Wedding",
    section: "social",
    year: "2026",
    duration: "0:32",

    description:
      "Daur Diamond - Janmashtami 2026 Reel",

    thumbnail: "/assets/AI 3.jpg",

    youtubeId: "6XzmHv-RvuA",

    aspectRatio: "9:16",

    client: "Social Media",

    tools: [
      "Premiere Pro",
      "DaVinci Resolve",
    ],

    featured: false,

    tags: [
      "Cinematic",
      "Color Grade",
      "Social",
    ],

    metrics: "Featured Work",
  },


  {
    id: "social-4",
    title: "Social Media Reel 04",
    category: "Brand Reels",
    section: "social",
    year: "2026",
    duration: "0:32",

    description:
      "Balista Bistro Ahmedabad - Penguin Store Reveal 2026 Reel",

    thumbnail: "/assets/AI 4.jpg",

    youtubeId: "SC4g4PnrjMo",

    aspectRatio: "9:16",

    client: "Social Media",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: false,

    tags: [
      "Social Ads",
      "Beat Sync",
      "Color Grade",
    ],

    metrics: "New Work",
  },


  {
    id: "social-5",
    title: "Social Media Reel 05",
    category: "Brand Reels",
    section: "social",
    year: "2026",
    duration: "0:32",

    description:
      "Euro Foods India - Chips Product 2026 Reel",

    thumbnail: "/assets/AI 5.jpg",

    youtubeId: "jrlFV1IeeVs",

    aspectRatio: "9:16",

    client: "Social Media",

    tools: [
      "Premiere Pro",
      "After Effects",
    ],

    featured: false,

    tags: [
      "Product",
      "Social Ad",
      "Motion Graphics",
    ],

    metrics: "New Work",
  },

];