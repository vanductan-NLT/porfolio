"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HeroSection = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as any,
            },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-primary font-medium mb-4 tracking-wide"
                    >
                        {t.hero.greeting}
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6"
                    >
                        Van Duc <span className="text-text-secondary">Tan</span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl md:text-4xl font-heading font-bold text-text-secondary mb-8"
                    >
                        {t.hero.role}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Building digital products, brands, and experiences.
                        <br className="hidden md:block" />
                        Focused on minimalist design and clean code.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Button asChild className="group">
                            <a href="#contact">
                                {t.hero.cta_primary}
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        <Button variant="secondary" asChild>
                            <a href="#projects">
                                {t.hero.cta_secondary}
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
