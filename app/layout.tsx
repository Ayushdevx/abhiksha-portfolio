import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { ModernNavbar } from "@/components/modern/modern-navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { ModernLoader } from "@/components/effects/modern-loader";
import { ScrollIndicator } from "@/components/effects/scroll-indicator";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <ModernLoader />
        <StarsCanvas />
        <ModernNavbar />
        <ScrollIndicator />
        {children}
        <Footer />
      </body>
    </html>
  );
}
