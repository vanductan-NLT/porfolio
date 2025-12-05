"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
    Home,
    User,
    Code2,
    Briefcase,
    FolderOpen,
    Mail,
    Sun,
    Moon,
    Globe,
    Menu,
    X,
    Github,
    Linkedin,
    Twitter
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { useLenis } from "@/components/SmoothScroll";

const Sidebar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState("hero");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lenis = useLenis();

    const navLinks = [
        { href: "#hero", label: "Home", icon: <Home size={20} /> },
        { href: "#about", label: t.nav.about, icon: <User size={20} /> },
        { href: "#skills", label: t.nav.skills, icon: <Code2 size={20} /> },
        { href: "#experience", label: t.nav.experience, icon: <Briefcase size={20} /> },
        { href: "#projects", label: t.nav.projects, icon: <FolderOpen size={20} /> },
        { href: "#contact", label: t.nav.contact, icon: <Mail size={20} /> },
    ];

    // Handle scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 300; // Offset for better triggering

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navLinks]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(href);
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-heading font-bold">
                    Tan<span className="text-primary">.dev</span>
                </Link>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed inset-0 z-40 bg-background pt-20 px-6"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={cn(
                                        "text-lg font-medium flex items-center gap-4 p-2 rounded-xl transition-colors",
                                        activeSection === link.href.substring(1)
                                            ? "text-primary bg-primary/10"
                                            : "text-text-secondary hover:text-text-primary"
                                    )}
                                >
                                    {link.icon}
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Floating Sidebar */}
            <aside className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-6">
                {/* Main Navigation Pill */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-surface/60 backdrop-blur-xl border border-white/10 p-3 rounded-[32px] shadow-2xl flex flex-col items-center gap-4"
                >
                    {/* Profile / Logo */}
                    <Link href="/" className="w-12 h-12 rounded-full bg-surface-highlight flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                        <span className="font-heading font-bold text-primary">T</span>
                    </Link>

                    {/* Nav Items */}
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 relative z-10",
                                        activeSection === link.href.substring(1)
                                            ? "text-primary-foreground"
                                            : "text-text-secondary hover:text-text-primary"
                                    )}
                                >
                                    {activeSection === link.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_15px_rgba(122,242,152,0.4)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {link.icon}
                                </a>

                                {/* Tooltip */}
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-surface border border-border rounded-lg text-sm font-medium opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap z-0">
                                    {link.label}
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Separator */}
                    <div className="w-8 h-px bg-border my-1" />

                    {/* Settings Toggles */}
                    <div className="flex flex-col gap-3">
                        <button
                            onClick={toggleTheme}
                            className="w-12 h-12 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface-highlight hover:text-text-primary transition-colors"
                            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="w-12 h-12 rounded-full flex items-center justify-center text-text-secondary hover:bg-surface-highlight hover:text-text-primary transition-colors"
                            title="Switch Language"
                        >
                            <Globe size={20} />
                        </button>
                    </div>
                </motion.div>
            </aside>
        </>
    );
};

export default Sidebar;
