"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
// import ReviewsSection from "@/sections/ReviewsSection"; // Re-enable once real testimonials are provided
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import CertificateSection from "@/sections/CertificateSection";
import InterestsSection from "@/sections/InterestsSection";
import QASection from "@/sections/QASection";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import MarqueeCSS from "@/components/ui/Marquee";
import { Github } from "lucide-react";

export default function Home() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-primary-foreground">
                    {/* Noise Overlay */}
                    <div className="noise-overlay" />

                    <Sidebar />

                    {/* Main Content Area */}
                    <div className="w-full">
                        <HeroSection />

                        {/* Brand Marquee */}
                        <div className="py-10 border-y border-border bg-surface/30 backdrop-blur-sm">
                            <MarqueeCSS speed={40}>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">TypeScript</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">React</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">Next.js</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">Node.js</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">Python</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">Supabase</span>
                                <span className="text-2xl font-bold text-text-secondary opacity-50">n8n</span>
                                <Github size={40} className="text-text-secondary opacity-50 hover:opacity-100 transition-opacity" />
                                <span className="text-2xl font-bold text-text-secondary opacity-50">Vercel</span>
                            </MarqueeCSS>
                        </div>

                        <AboutSection />
                        <SkillsSection />
                        <ExperienceSection />
                        <ProjectsSection />
                        {/* <ReviewsSection /> Re-enable once real testimonials are provided */}
                        <EducationSection />
                        <CertificateSection />
                        <InterestsSection />
                        <QASection />
                        <ContactSection />

                        {/* Footer */}
                        <footer className="py-8 text-center text-text-secondary text-sm border-t border-border bg-surface/30">
                            <div className="container-custom">
                                <p>© {new Date().getFullYear()} Van Duc Tan. All rights reserved.</p>
                                <p className="mt-2">Designed & Built with ❤️ using Next.js & Tailwind CSS</p>
                            </div>
                        </footer>
                    </div>
                </main>
            </LanguageProvider>
        </ThemeProvider>
    );
}
