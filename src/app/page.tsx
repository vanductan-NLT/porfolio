"use client";

import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ReviewsSection from "@/sections/ReviewsSection";
import ContactSection from "@/sections/ContactSection";
import EducationSection from "@/sections/EducationSection";
import CertificateSection from "@/sections/CertificateSection";
import InterestsSection from "@/sections/InterestsSection";
import QASection from "@/sections/QASection";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <main className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-primary-foreground">
                    {/* Noise Overlay */}
                    <div className="noise-overlay" />

                    <Header />

                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ExperienceSection />
                    <ProjectsSection />
                    <ReviewsSection />
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
                </main>
            </LanguageProvider>
        </ThemeProvider>
    );
}
