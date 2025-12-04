"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";

const ExperienceSection = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            role: "Senior UI/UX Designer",
            company: "Tech Solutions Inc.",
            period: "2022 - Present",
            description: "Leading the design team, creating user-centered designs for enterprise applications.",
        },
        {
            role: "UI/UX Designer",
            company: "Creative Agency",
            period: "2020 - 2022",
            description: "Designed websites and mobile apps for various clients, focusing on visual aesthetics and usability.",
        },
        {
            role: "Junior Web Designer",
            company: "StartUp Hub",
            period: "2018 - 2020",
            description: "Assisted in designing and developing landing pages and marketing materials.",
        },
    ];

    return (
        <SectionWrapper id="experience" className="relative">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-[56px] h-[56px] flex items-center justify-center -translate-x-1/2 z-10">
                                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-surface" />
                                </div>

                                {/* Content */}
                                <div className="ml-16 md:ml-0 md:w-1/2">
                                    <SpotlightCard className="p-6 group">
                                        <div className="flex items-center gap-2 text-primary mb-2">
                                            <Briefcase size={18} />
                                            <span className="font-bold">{exp.role}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{exp.company}</h3>
                                        <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <p className="text-text-secondary">{exp.description}</p>
                                    </SpotlightCard>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ExperienceSection;
