"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";

/**
 * HeroSection - HiveArt inspired hero with modern animations
 */
const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-40"
        >
            {/* Background Elements - Enhanced with HiveArt style */}
            <div className="absolute inset-0 z-0">
                {/* Primary Gradient Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.15, 0.25, 0.15],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Secondary Orb */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, var(--primary-light) 0%, transparent 60%)",
                        filter: "blur(100px)",
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Greeting Badge */}
                    <Reveal width="100%">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border-subtle mb-6"
                        >
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-sm font-medium text-text-secondary">
                                {t.hero.greeting}
                            </span>
                        </motion.div>
                    </Reveal>

                    {/* Name - Large Display Text */}
                    <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6">
                        <TextReveal text="Van Duc" />
                        <TextReveal
                            text="Tan"
                            className="text-primary"
                            delay={0.5}
                        />
                    </div>

                    {/* Role */}
                    <Reveal width="100%" delay={0.4}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-secondary mb-8 text-center">
                            {t.hero.role}
                        </h2>
                    </Reveal>

                    {/* Description */}
                    <Reveal width="100%" delay={0.5}>
                        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed text-center px-4">
                            Building digital products, brands, and experiences.
                            <br className="hidden md:block" />
                            Focused on minimalist design and clean code.
                        </p>
                    </Reveal>

                    {/* CTA Buttons */}
                    <Reveal width="100%" delay={0.6}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                            <Button asChild className="group w-full sm:w-auto">
                                <a href="#contact">
                                    {t.hero.cta_primary}
                                    <ArrowRight
                                        size={18}
                                        className="ml-2 group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                            </Button>

                            <Button variant="secondary" asChild className="w-full sm:w-auto">
                                <a href="#projects">
                                    {t.hero.cta_secondary}
                                </a>
                            </Button>
                        </div>
                    </Reveal>

                    {/* Stats Row */}
                    <Reveal width="100%" delay={0.8}>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-border-subtle">
                            <div className="text-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, type: "spring" }}
                                    className="block text-3xl md:text-4xl font-heading font-bold text-primary"
                                >
                                    5+
                                </motion.span>
                                <span className="text-sm text-text-muted">Years Experience</span>
                            </div>
                            <div className="text-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.1, type: "spring" }}
                                    className="block text-3xl md:text-4xl font-heading font-bold text-primary"
                                >
                                    20+
                                </motion.span>
                                <span className="text-sm text-text-muted">Projects Done</span>
                            </div>
                            <div className="text-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring" }}
                                    className="block text-3xl md:text-4xl font-heading font-bold text-primary"
                                >
                                    100%
                                </motion.span>
                                <span className="text-sm text-text-muted">Satisfaction</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-3 pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    className="flex flex-col items-center gap-2 text-text-muted"
                >
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                    <ArrowDown size={20} className="text-primary" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
