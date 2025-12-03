"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Header = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#about", label: t.nav.about },
        { href: "#skills", label: t.nav.skills },
        { href: "#experience", label: t.nav.experience },
        { href: "#projects", label: t.nav.projects },
        { href: "#contact", label: t.nav.contact },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-heading font-bold tracking-tight">
                    Tan<span className="text-primary">.dev</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-surface-highlight transition-colors flex items-center gap-2 text-sm font-medium"
                        aria-label="Toggle Language"
                    >
                        <Globe size={18} />
                        <span>{language.toUpperCase()}</span>
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-surface-highlight transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-border overflow-hidden"
                    >
                        <div className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium py-2 hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium">Language</span>
                                <button
                                    onClick={toggleLanguage}
                                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight"
                                >
                                    <Globe size={16} />
                                    {language.toUpperCase()}
                                </button>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-sm font-medium">Theme</span>
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-highlight"
                                >
                                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
