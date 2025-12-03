"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Heart, Zap, Coffee, Music, Camera, Book, Plane, Gamepad } from "lucide-react";

const InterestsSection = () => {
    const { t } = useLanguage();

    const interests = [
        { name: "Photography", icon: <Camera size={18} /> },
        { name: "Traveling", icon: <Plane size={18} /> },
        { name: "Gaming", icon: <Gamepad size={18} /> },
        { name: "Reading", icon: <Book size={18} /> },
        { name: "Music", icon: <Music size={18} /> },
        { name: "Coffee", icon: <Coffee size={18} /> },
    ];

    const strengths = [
        "Attention to Detail",
        "Creative Thinking",
        "Quick Learner",
        "Adaptability",
        "Empathy",
    ];

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
                    {/* Interests */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-surface border border-border"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-pink-500/10 text-pink-500">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Interests</h3>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {interests.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 3 }}
                                    className="px-5 py-3 rounded-full bg-surface-highlight border border-border flex items-center gap-2 cursor-default hover:border-pink-500/50 hover:text-pink-500 transition-colors"
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-surface border border-border"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 rounded-full bg-yellow-500/10 text-yellow-500">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Strengths</h3>
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
                </div>
            </div>
        </section>
    );
};

export default InterestsSection;
