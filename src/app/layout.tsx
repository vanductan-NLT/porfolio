import type { Metadata } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CustomCursor from "@/components/CustomCursor";
import AgentationHelper from "@/components/AgentationHelper";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin", "vietnamese"],
    variable: "--font-manrope",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin", "vietnamese"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Van Duc Tan | Full-Stack Developer & AI Automation Engineer",
    description: "Portfolio of Van Duc Tan — a developer who builds internal tools, automates workflows, and integrates AI into real products. Based in Vietnam.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${outfit.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
            <body className="antialiased bg-background text-text-primary relative">
                <div className="noise-overlay" />
                <BackgroundBlobs />
                <CustomCursor />
                <AgentationHelper />
                <LanguageProvider>
                    <SmoothScroll>
                        {children}
                        <ScrollToTop />
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
