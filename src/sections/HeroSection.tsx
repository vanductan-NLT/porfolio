"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";

const HeroSection = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[128px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <Reveal width="100%">
                        <p className="text-primary font-medium mb-4 tracking-wide text-center text-sm md:text-base">
                            {t.hero.greeting}
                        </p>
                    </Reveal>

                    <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6">
                        <TextReveal text="Van Duc" />
                        <TextReveal text="Tan" className="text-text-secondary" delay={0.5} />
                    </div>

                    <Reveal width="100%" delay={0.4}>
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-bold text-text-secondary mb-8 text-center">
                            {t.hero.role}
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.5}>
                        <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed text-center px-4">
                            Building digital products, brands, and experiences.
                            <br className="hidden md:block" />
                            Focused on minimalist design and clean code.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.6}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
                            <Button asChild className="group w-full sm:w-auto">
                                <a href="#contact">
                                    {t.hero.cta_primary}
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>

                            <Button variant="secondary" asChild className="w-full sm:w-auto">
                                <a href="#projects">
                                    {t.hero.cta_secondary}
                                </a>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-10 left-0 w-full flex flex-col items-center gap-2 text-text-secondary pointer-events-none"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-text-secondary to-transparent" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
