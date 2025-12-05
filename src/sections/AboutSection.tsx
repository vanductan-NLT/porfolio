"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="about" className="relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Image Column (40%) */}
                    <div className="lg:col-span-5 relative">
                        <Reveal width="100%">
                            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-surface-highlight">
                                {/* Placeholder for Profile Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-text-secondary bg-surface-highlight">
                                    <span className="text-lg">Profile Image Placeholder</span>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute inset-0 border-2 border-primary/20 rounded-[32px] translate-x-4 translate-y-4 -z-10" />
                            </div>
                        </Reveal>
                    </div>

                    {/* Content Column (60%) */}
                    <div className="lg:col-span-7">
                        <Reveal width="100%" delay={0.2}>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative inline-block">
                                {t.about.title}
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full" />
                            </h2>
                        </Reveal>

                        <Reveal width="100%" delay={0.3}>
                            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                {t.about.description}
                            </p>
                        </Reveal>

                        <Reveal width="100%" delay={0.4}>
                            <div className="flex items-center gap-2 text-text-secondary mb-8">
                                <MapPin className="text-primary" size={20} />
                                <span>{t.about.location}</span>
                            </div>
                        </Reveal>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <Reveal width="100%" delay={0.5}>
                                <SpotlightCard className="p-6 text-center group h-full">
                                    <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-center">
                                        5+
                                    </h3>
                                    <p className="text-sm text-text-secondary">{t.about.years_exp}</p>
                                </SpotlightCard>
                            </Reveal>

                            <Reveal width="100%" delay={0.6}>
                                <SpotlightCard className="p-6 text-center group h-full">
                                    <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-center">
                                        20+
                                    </h3>
                                    <p className="text-sm text-text-secondary">{t.about.projects_done}</p>
                                </SpotlightCard>
                            </Reveal>

                            <Reveal width="100%" delay={0.7}>
                                <SpotlightCard className="p-6 text-center group h-full">
                                    <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-center">
                                        100%
                                    </h3>
                                    <p className="text-sm text-text-secondary">Satisfaction</p>
                                </SpotlightCard>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
