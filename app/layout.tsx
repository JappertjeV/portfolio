import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // only used in code blocks — no need to preload
});

const SITE_URL = "https://jasperveldhuizen.nl";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jasper Veldhuizen — Developer & Automation Engineer",
    template: "%s | Jasper Veldhuizen",
  },
  description:
    "19-year-old HBO-ICT student and process improvement engineer. I build automations and tools that make workflows faster. Based in the Netherlands, open to remote freelance work.",
  keywords: [
    "Jasper Veldhuizen",
    "developer",
    "automation engineer",
    "workflow automation",
    "Enfocus Switch",
    "API development",
    "JavaScript",
    "TypeScript",
    "Python",
    "Docker",
    "n8n",
    "freelance developer",
    "Netherlands",
    "Barneveld",
    "Windesheim",
  ],
  authors: [{ name: "Jasper Veldhuizen", url: SITE_URL }],
  creator: "Jasper Veldhuizen",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Jasper Veldhuizen — Developer & Automation Engineer",
    description:
      "I build automations and tools that make workflows faster.",
    siteName: "Jasper Veldhuizen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasper Veldhuizen — Developer & Automation Engineer",
    description: "I build automations and tools that make workflows faster.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jasper Veldhuizen",
  url: SITE_URL,
  jobTitle: "Process Improvement Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Veldhuizen Grafisch Effect BV",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Windesheim University of Applied Sciences",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Workflow Automation",
    "API Development",
    "Docker",
    "Linux",
    "n8n",
    "Enfocus Switch",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barneveld",
    addressCountry: "NL",
  },
  sameAs: [
    "https://github.com/JappertjeV",
    "https://www.linkedin.com/in/jasper-veldhuizen-bb10a3278/",
  ],
};

const CURRENT_YEAR = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50 min-h-screen`}
      >
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
          <p>
            © {CURRENT_YEAR} Jasper Veldhuizen · Built with Next.js &amp; Tailwind CSS
          </p>
        </footer>
      </body>
    </html>
  );
}
