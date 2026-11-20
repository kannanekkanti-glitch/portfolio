import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanush — Full-Stack Developer, UI/UX Designer & AI Specialist",
  description:
    "Explore the portfolio of Tanush. Engineering high-performance web applications, autonomous AI agent pipelines, and refined human-centered digital experiences.",
  keywords: [
    "Tanush",
    "Full-Stack Developer",
    "UI/UX Designer",
    "AI Specialist",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Workflow Automation",
    "Python AI",
    "Tailwind CSS",
  ],
  authors: [{ name: "Tanush" }],
  creator: "Tanush",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanush.dev",
    title: "Tanush — Full-Stack Developer, UI/UX Designer & AI Specialist",
    description:
      "Modern portfolio showcasing high-performance web applications, autonomous AI workflows, and bespoke UI design.",
    siteName: "Tanush Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanush — Full-Stack Developer, UI/UX Designer & AI Specialist",
    description:
      "Engineering high-performance web applications, autonomous AI agent pipelines, and refined digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#09090b] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
