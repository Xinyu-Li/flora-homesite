import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.floraengine.org"),
  title: {
    default: "FLoRA Engine",
    template: "%s - FLoRA Engine",
  },
  description:
    "Research and platform work that helps learners plan, monitor, and reflect with trustworthy analytics and AI-enabled scaffolds.",
  openGraph: {
    title: "FLoRA Engine",
    description:
      "Human-centered instrumentation, analytics, and AI feedback loops that strengthen self-regulated learning.",
    url: "https://www.floraengine.org",
    siteName: "FLoRA Engine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLoRA Engine",
    description:
      "Human-centered instrumentation, analytics, and AI feedback loops that strengthen self-regulated learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
