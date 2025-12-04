import type { Metadata } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin", "vietnamese"],
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
    title: "Van Duc Tan | Senior UI/UX Designer",
    description: "Portfolio of Van Duc Tan, a Senior UI/UX Designer based in Vietnam.",
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
                <LanguageProvider>
                    <SmoothScroll />
                    {children}
                    <ScrollToTop />
                </LanguageProvider>
            </body>
        </html>
    );
}
