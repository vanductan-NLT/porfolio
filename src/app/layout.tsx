import type { Metadata } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
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
        <html lang="en" className="scroll-smooth">
            <body
                className={`${outfit.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
