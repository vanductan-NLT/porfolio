"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

/**
 * ExperienceSection - HiveArt inspired timeline with enhanced styling
 */
const ExperienceSection = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            role: "Senior UI/UX Designer",
            company: "Tech Solutions Inc.",
            location: "Ho Chi Minh City",
            period: "2022 - Present",
            description: "Leading the design team, creating user-centered designs for enterprise applications. Implementing design systems and mentoring junior designers.",
            highlights: ["Design System", "Team Lead", "Enterprise Apps"],
        },
        {
            role: "UI/UX Designer",
            company: "Creative Agency",
            location: "Ho Chi Minh City",
            period: "2020 - 2022",
            description: "Designed websites and mobile apps for various clients, focusing on visual aesthetics and usability. Collaborated closely with developers.",
            highlights: ["Web Design", "Mobile Apps", "Client Projects"],
        },
        {
            role: "Junior Web Designer",
            company: "StartUp Hub",
            location: "Ho Chi Minh City",
            period: "2018 - 2020",
            description: "Assisted in designing and developing landing pages and marketing materials. Learned UX principles and design tools.",
            highlights: ["Landing Pages", "Marketing", "UX Research"],
        },
    ];

    return (
        <SectionWrapper id="experience" className="relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            {t.experience.title}
                        </span>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                            Work <span className="text-primary">Experience</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            My professional journey in design and development
                        </p>
                    </Reveal>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line - Animated gradient */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-[28px] md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2"
                    />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <Reveal key={index} width="100%" delay={index * 0.15}>
                                <div
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Dot with pulse effect */}
                                    <div className="absolute left-0 md:left-1/2 w-14 h-14 flex items-center justify-center -translate-x-1/2 z-10">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2, type: "spring" }}
                                            className="relative"
                                        >
                                            <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-surface shadow-glow" />
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.5, 1],
                                                    opacity: [0.5, 0, 0.5]
                                                }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 2,
                                                    delay: index * 0.3
                                                }}
                                                className="absolute inset-0 bg-primary rounded-full"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="ml-16 md:ml-0 md:w-1/2">
                                        <SpotlightCard className="p-6 group" hoverLift={true}>
                                            {/* Period Badge */}
                                            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-3">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>

                                            {/* Role */}
                                            <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>

                                            {/* Company & Location */}
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-secondary mb-4">
                                                <span className="flex items-center gap-1">
                                                    <Building2 size={14} />
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin size={14} />
                                                    {exp.location}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {exp.description}
                                            </p>

                                            {/* Highlights Tags */}
                                            <div className="flex flex-wrap gap-2">
                                                {exp.highlights.map((highlight, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-surface-highlight text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                                                    >
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </SpotlightCard>
                                    </div>

                                    {/* Empty space for the alternating layout */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExperienceSection;
