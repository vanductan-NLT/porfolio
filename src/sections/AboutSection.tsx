"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const AboutSection = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Column (40%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface-highlight">
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-text-secondary bg-surface-highlight">
                                <span className="text-lg">Profile Image Placeholder</span>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl translate-x-4 translate-y-4 -z-10" />
                        </div>
                    </motion.div>

                    {/* Content Column (60%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative inline-block">
                            {t.about.title}
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full" />
                        </h2>

                        <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                            {t.about.description}
                        </p>

                        <div className="flex items-center gap-2 text-text-secondary mb-8">
                            <MapPin className="text-primary" size={20} />
                            <span>{t.about.location}</span>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors group">
                                <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                                    5+
                                </h3>
                                <p className="text-sm text-text-secondary">{t.about.years_exp}</p>
                            </div>

                            <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors group">
                                <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                                    20+
                                </h3>
                                <p className="text-sm text-text-secondary">{t.about.projects_done}</p>
                            </div>

                            <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors group">
                                <h3 className="text-4xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                                    100%
                                </h3>
                                <p className="text-sm text-text-secondary">Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
