"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            company: "Company Name Placeholder",
            role: "Senior UI/UX Designer",
            duration: "2023 - Present",
            description: "Led the design team in creating user-centric digital products. Collaborated with developers to ensure high-quality implementation.",
        },
        {
            company: "Previous Company",
            role: "UI Designer",
            duration: "2021 - 2023",
            description: "Designed responsive websites and mobile applications. Conducted user research and usability testing.",
        },
        {
            company: "Startup Name",
            role: "Frontend Developer",
            duration: "2019 - 2021",
            description: "Developed interactive user interfaces using React and Tailwind CSS. Optimized performance and accessibility.",
        },
    ];

    return (
        <section id="experience" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:hidden" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(122,242,152,0.5)]" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2">
                                    <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors group">
                                        <div className="flex items-center gap-2 mb-2 text-primary text-sm font-medium">
                                            <Briefcase size={16} />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-text-secondary font-medium mb-4">
                                            {exp.company}
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
