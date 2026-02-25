import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Learn with IOK",
  description: "Learning english",
};

const inter = localFont({
  src: [
    { path: "/fonts/Inter_24pt-Light.ttf", weight: "300", style: "normal" },

    { path: "/fonts/Inter_24pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Inter_24pt-Italic.ttf", weight: "400", style: "italic" },

    { path: "/fonts/Inter_24pt-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "/fonts/Inter_24pt-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "/fonts/Inter_24pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "/fonts/Inter_24pt-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const outfit = localFont({
  src: [
    {
      path: "/fonts/Outfit-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    { path: "/fonts/Outfit-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} `}>
      <body className="font-sans font-normal">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
