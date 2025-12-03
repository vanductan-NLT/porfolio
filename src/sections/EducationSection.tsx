"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
    const { t } = useLanguage();

    const education = [
        {
            school: "University Name Placeholder",
            degree: "Bachelor of Science in Computer Science",
            year: "2015 - 2019",
            description: "Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction.",
        },
        {
            school: "High School Name",
            degree: "High School Diploma",
            year: "2012 - 2015",
            description: "Focus on Mathematics and Physics. Participation in Computer Science Club.",
        },
    ];

    return (
        <section id="education" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.education.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-surface-highlight flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <GraduationCap size={24} />
                            </div>

                            <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                                <Calendar size={14} />
                                <span>{edu.year}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{edu.school}</h3>
                            <h4 className="text-text-secondary font-medium mb-4">{edu.degree}</h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
