"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Zap, CalendarCheck } from "lucide-react";

const InterestsSection = () => {
    const { t } = useLanguage();

    const strengths = t.interests.strengths;

    return (
        <section id="interests" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.interests.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-surface border border-border"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">{t.interests.strengthsTitle}</h3>
                        </div>

                        <div className="space-y-4">
                            {strengths.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                    <span className="text-lg font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-surface border border-border"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <CalendarCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">{t.interests.availabilityTitle}</h3>
                        </div>

                        <p className="text-text-secondary text-lg leading-relaxed">
                            {t.interests.availability}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;
