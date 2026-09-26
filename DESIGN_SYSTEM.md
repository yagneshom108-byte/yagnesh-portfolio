# DESIGN SYSTEM & VISUAL SPECIFICATION

**Project:** Premium Portfolio for Yagnesh Chavda — Video Editor & Motion Designer  
**Design Direction:** Architectural Graph Paper • Editorial Haute-Brutalism • Tactile Scrapbook • Cinematic Dark/Light System  

---

## 1. Design Philosophy

The visual language marries the precision of an architectural drafting table with the raw, tactile energy of a film editing cutting room. Rather than generic gradients and floating cards, the design system utilizes:
- **Physical Paper Textures & Architectural Grids:** A subtle, mathematically spaced graph-paper grid evoking storyboard sketches.
- **Extreme Typographic Contrast:** Ultra-condensed display headlines paired with modern grotesk editorial titles and monospace timecode stamps.
- **Physical & Tactile Motifs:** Translucent masking tape strips, torn edge accents, film perfs, index numbers `(01)`, and iconic brutalist vector glyphs.
- **Cinematic Media Hierarchy:** Video > Image > Text. Generous aspect ratios (16:9 for cinematic pieces, 9:16 for vertical reels) that let the editing craft speak.
- **True Art-Directed Dual Themes:** Light Mode (warm tactile drafting paper) and Dark Mode (nocturnal obsidian film room) each with their own meticulously tuned token values.

---

## 2. CSS Design Tokens & Theme Specification

### Light Mode (`:root` / `.light`)
```css
:root {
  /* Canvas & Surfaces */
  --bg-canvas: #F4F3EE;              /* Warm newsprint / drafting paper */
  --bg-surface: #FFFFFF;             /* Crisp paper white for raised cards */
  --bg-surface-subtle: #EBEAE4;      /* Recessed tone for tags & secondary surfaces */
  --bg-surface-muted: #E2E1DA;       /* Border fills, skeleton loaders */

  /* Foregrounds & Typography */
  --fg-primary: #121212;             /* Deep ink black */
  --fg-secondary: #4A4944;           /* Warm dark charcoal */
  --fg-muted: #828079;               /* Drafting graphite grey */
  --fg-subtle: #A3A199;              /* Index numbers, timecode stamps */

  /* Grid & Architectural Lines */
  --grid-line: rgba(18, 18, 18, 0.055);
  --grid-major: rgba(18, 18, 18, 0.12);
  --border-subtle: #E0DED7;
  --border-strong: #121212;

  /* Accent Palette */
  --accent-primary: #FF4500;         /* Editorial Safety Orange / Vermilion */
  --accent-primary-hover: #E03D00;
  --accent-secondary: #D99518;       /* Amber Ochre */
  --accent-tertiary: #2D68C4;        /* Blueprint Cobalt */
  --accent-tint: rgba(255, 69, 0, 0.08);

  /* Tactile & Craft Tokens */
  --tape-bg: rgba(238, 230, 205, 0.72);
  --tape-border: rgba(205, 195, 165, 0.4);
  --shadow-paper: 0 4px 20px -2px rgba(18, 18, 18, 0.06), 0 2px 6px -1px rgba(18, 18, 18, 0.04);
  --shadow-lift: 0 12px 36px -4px rgba(18, 18, 18, 0.12);

  /* Badge & Status */
  --badge-bg: #121212;
  --badge-fg: #F4F3EE;
}
```

### Dark Mode (`.dark`)
```css
.dark {
  /* Canvas & Surfaces */
  --bg-canvas: #0C0D0E;              /* Deep obsidian / cutting room black */
  --bg-surface: #141518;             /* Elevated matte charcoal */
  --bg-surface-subtle: #1C1E22;      /* Secondary panels & pill badges */
  --bg-surface-muted: #25282E;       /* Inset containers */

  /* Foregrounds & Typography */
  --fg-primary: #F3F2EB;             /* Warm bone white */
  --fg-secondary: #A8A7A0;           /* Soft mist grey */
  --fg-muted: #6C6B66;               /* Subdued technical grey */
  --fg-subtle: #4D4C48;              /* Faint markers */

  /* Grid & Architectural Lines */
  --grid-line: rgba(255, 255, 255, 0.045);
  --grid-major: rgba(255, 255, 255, 0.09);
  --border-subtle: #23252A;
  --border-strong: #F3F2EB;

  /* Accent Palette */
  --accent-primary: #FF5E28;         /* Incandescent Neon Orange */
  --accent-primary-hover: #FF7547;
  --accent-secondary: #FFB800;       /* Luminous Amber */
  --accent-tertiary: #4A90E2;        /* Cyan Glow */
  --accent-tint: rgba(255, 94, 40, 0.12);

  /* Tactile & Craft Tokens */
  --tape-bg: rgba(45, 48, 54, 0.65);
  --tape-border: rgba(80, 85, 95, 0.3);
  --shadow-paper: 0 4px 24px -2px rgba(0, 0, 0, 0.5);
  --shadow-lift: 0 16px 40px -4px rgba(0, 0, 0, 0.7);

  /* Badge & Status */
  --badge-bg: #F3F2EB;
  --badge-fg: #0C0D0E;
}
```

---

## 3. Typography Hierarchy

### Font Families
- **Display Condensed:** `Bebas Neue`, `Anton`, or `Syne` (Oversized poster typography, section titles, giant numbers).
- **Primary Grotesk:** `Plus Jakarta Sans` or `Space Grotesk` (Headings, author names, prominent bio callouts, button labels).
- **Body & Editorial:** `Inter` (Body paragraphs, testimonials, service descriptions).
- **Monospace Technical:** `JetBrains Mono` or `Space Mono` (Timecodes `00:14:28:12`, durations, technical metadata, category tags).

### Scale & Rhythms
| Level | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Display Condensed | 8.5rem – 14rem | 4.5rem – 6.5rem | 0.88 | -0.01em | 800 / 900 |
| **Section Title (Large)**| Display Condensed | 4.5rem – 6.5rem | 2.75rem – 3.75rem| 0.95 | +0.02em | 800 |
| **Editorial Headline (H2)**| Primary Grotesk | 2.5rem – 3.5rem | 1.75rem – 2.25rem| 1.10 | -0.035em | 700 / 800 |
| **Project / Subhead (H3)**| Primary Grotesk | 1.5rem – 1.85rem | 1.25rem – 1.4rem | 1.25 | -0.02em | 600 / 700 |
| **Body Large** | Body Editorial | 1.125rem – 1.25rem| 1.0rem – 1.05rem | 1.60 | -0.01em | 400 / 500 |
| **Body Standard** | Body Editorial | 0.95rem – 1.0rem | 0.875rem – 0.925rem| 1.55 | 0.00em | 400 |
| **Technical Metadata** | Monospace | 0.75rem – 0.85rem | 0.70rem – 0.75rem | 1.40 | +0.08em | 500 / 600 |

---

## 4. Architectural Grid & Background Pattern

The graph-paper grid is rendered via pure CSS with hardware acceleration:
```css
.editorial-grid {
  background-size: 32px 32px;
  background-image: 
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
}

.editorial-grid-major {
  background-size: 160px 160px;
  background-image: 
    linear-gradient(to right, var(--grid-major) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-major) 1px, transparent 1px);
}
```

---

## 5. Signature Graphic Components & Vector Motifs

### A. Taped-Paper Component (`.taped-card`)
Adds a realistic translucent masking tape strip across an angle of the card:
- Skew: `-3deg` to `+4deg`
- Backdrop blur: `4px`
- Subtle torn ends via CSS mask or SVG jagged edge.

### B. Brutalist Graphic Glyphs (SVG)
- **8-Point Spiky Star:** 8 acute spikes radiating symmetrically, symbolizing kinetic direction.
- **4-Point Diamond Sparkle:** Sleek curved concave star, denoting fine craftsmanship and color brilliance.
- **4-Leaf Clover / Floral Club:** Geometric 4-circle intersection, functioning as typographic bullets and stamps.

### C. The Floating Vertical Badge
- Positioned fixed or pinned on the viewport right margin:
  - Black pill container (`32px` wide)
  - Centered icon (asterisk / star glyph)
  - Vertical rotated text (90deg) `YAGNESH • REEL 2026`

### D. Timecode Ticker & Film Perforations
- Timecode badge: `[ REC • 00:02:18:24 ]` with an animated pulsing red dot (`#FF0000`).
- Top and bottom film perforations on showreel frames (alternating transparent rectangles mimicking 35mm film stock).

---

## 6. Spacing, Layout & Responsive Breakpoints

### Modular Spacing Scale
- `space-xs`: 0.25rem (4px)
- `space-sm`: 0.5rem (8px)
- `space-md`: 1.0rem (16px)
- `space-lg`: 1.5rem (24px)
- `space-xl`: 2.5rem (40px)
- `space-2xl`: 4.0rem (64px)
- `space-3xl`: 6.0rem (96px)
- `space-4xl`: 8.0rem – 10.0rem (128px – 160px section gap)

### Responsive Breakpoints
- **Mobile Small (375px – 430px):** Single-column stacked layout, reduced typography scale, horizontal scrolling project carousel or stacked 1-col grid, touch-friendly tap targets (minimum 44x44px).
- **Tablet (768px – 1023px):** 2-column asymmetric layout, sticky navigation bar, visible theme & sound toggles.
- **Desktop (1024px – 1439px):** Full 12-column editorial grid, custom cursor enabled, magnetic hover effects, multi-column staggered video cards.
- **Large Desktop (1440px+):** Max container width `1400px` with generous side margins, oversized display headlines, cinematic theater player.
