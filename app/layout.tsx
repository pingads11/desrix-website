import "./css/style.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://desrix.lv"),
  title: {
    default: "DesRIX | DevOps, Cloud, AI & BPO Services",
    template: "%s | DesRIX",
  },
  description:
    "Enterprise IT partner for DevOps, cloud computing, call center operations, agentic AI, and white-label software delivery across the EU.",
  openGraph: {
    title: "DesRIX | DevOps, Cloud, AI & BPO Services",
    description:
      "Empowering businesses with cloud, AI, and scalable IT solutions for the European market.",
    url: "https://desrix.lv",
    siteName: "DesRIX",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(80rem_40rem_at_top_right,rgba(37,99,235,0.12),transparent_60%),radial-gradient(60rem_30rem_at_bottom_left,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
