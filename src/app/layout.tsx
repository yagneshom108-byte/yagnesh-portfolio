import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0D0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://editwithyagnesh-ruby.vercel.app"
  ),

  title:
    "Yagnesh Chavda — Video Editor & Motion Designer | Portfolio 2026",

  description:
    "Official portfolio of Yagnesh Chavda, professional Video Editor & Motion Designer based in Ahmedabad, India. Specializing in high-retention short-form content, commercial brand ads, cinematic storytelling, and kinetic motion graphics.",

  keywords: [
    "Yagnesh Chavda",
    "Video Editor",
    "Motion Designer",
    "After Effects",
    "Premiere Pro",
    "DaVinci Resolve",
    "Short Form Video Editing",
    "Commercial Video Editor",
    "Ahmedabad Video Editor",
    "Portfolio 2026",
  ],

  authors: [
    {
      name: "Yagnesh Chavda",
      url: "https://editwithyagnesh-ruby.vercel.app",
    },
  ],

  creator: "Yagnesh Chavda",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://editwithyagnesh-ruby.vercel.app",
    siteName:
      "Yagnesh Chavda — Video Editor & Motion Designer",

    title:
      "Yagnesh Chavda — Video Editor & Motion Designer",

    description:
      "High-retention video editing, commercial brand ads, kinetic typography, and cinematic color science.",

    images: [
      {
        url: "/assets/motion-1.jpg",
        width: 1200,
        height: 630,
        alt: "Yagnesh Chavda Portfolio 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Yagnesh Chavda — Video Editor & Motion Designer",

    description:
      "High-retention video editing, commercial brand ads, kinetic typography, and cinematic color science.",

    images: ["/assets/motion-1.jpg"],
  },

  // CIRCULAR FAVICON
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-screen bg-canvas text-ink antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}