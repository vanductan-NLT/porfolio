"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Download, Sparkles, Award, Users, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * AboutSection - HiveArt inspired about section with enhanced styling
 */
const AboutSection = () => {
    const { t } = useLanguage();

    const stats = [
        {
            value: "5+",
            label: t.about.years_exp,
            icon: <Clock size={20} />,
        },
        {
            value: "20+",
            label: t.about.projects_done,
            icon: <Award size={20} />,
        },
        {
            value: "100%",
            label: "Satisfaction",
            icon: <Users size={20} />,
        },
    ];

    return (
        <SectionWrapper id="about" className="relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header - Mobile */}
                <div className="text-center mb-12 lg:hidden">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            About Me
                        </span>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className="lg:col-span-5 relative">
                        <Reveal width="100%">
                            <div className="relative">
                                {/* Main Image Container */}
                                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-surface-highlight group">
                                    {/* Placeholder - Replace with actual image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                                                <span className="text-5xl font-heading font-bold text-primary-foreground">T</span>
                                            </div>
                                            <p className="text-text-muted text-sm">Profile Image</p>
                                        </div>
                                    </div>

                                    {/* Hover overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Decorative Elements */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, type: "spring" }}
                                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-[24px] -z-10"
                                />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4, type: "spring" }}
                                    className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary/30 rounded-[16px] -z-10"
                                />

                                {/* Experience Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="absolute -right-4 top-1/4 bg-surface border border-border-subtle rounded-2xl p-4 shadow-soft"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-primary/10">
                                            <Sparkles size={20} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-2xl font-heading font-bold text-primary">5+</p>
                                            <p className="text-xs text-text-muted">Years Exp.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7">
                        {/* Section Badge - Desktop */}
                        <Reveal width="100%" delay={0.1}>
                            <span className="hidden lg:inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                About Me
                            </span>
                        </Reveal>

                        <Reveal width="100%" delay={0.2}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                                {t.about.title}
                                <span className="text-primary">.</span>
                            </h2>
                        </Reveal>

                        <Reveal width="100%" delay={0.3}>
                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                {t.about.description}
                            </p>
                        </Reveal>

                        <Reveal width="100%" delay={0.35}>
                            <p className="text-text-secondary mb-8 leading-relaxed">
                                I specialize in creating user-centered designs that balance aesthetics with functionality.
                                My approach combines creative problem-solving with technical expertise to deliver
                                exceptional digital experiences.
                            </p>
                        </Reveal>

                        {/* Location */}
                        <Reveal width="100%" delay={0.4}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <MapPin className="text-primary" size={18} />
                                </div>
                                <span className="text-text-secondary">{t.about.location}</span>
                            </div>
                        </Reveal>

                        {/* CTA Buttons */}
                        <Reveal width="100%" delay={0.45}>
                            <div className="flex flex-wrap gap-4 mb-10">
                                <Button asChild>
                                    <a href="#contact">
                                        Let's Talk
                                    </a>
                                </Button>
                                <Button variant="secondary" asChild className="group">
                                    <a href="/resume.pdf" download>
                                        <Download size={18} className="mr-2 group-hover:-translate-y-0.5 transition-transform" />
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </Reveal>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat, index) => (
                                <Reveal key={stat.label} width="100%" delay={0.5 + index * 0.1}>
                                    <SpotlightCard className="p-4 md:p-6 text-center group" hoverLift={true}>
                                        <div className="flex justify-center mb-3">
                                            <div className="p-2 rounded-lg bg-surface-highlight text-text-muted group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                                {stat.icon}
                                            </div>
                                        </div>
                                        <motion.h3
                                            initial={{ scale: 0.5 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                                            className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1"
                                        >
                                            {stat.value}
                                        </motion.h3>
                                        <p className="text-xs md:text-sm text-text-muted">{stat.label}</p>
                                    </SpotlightCard>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
