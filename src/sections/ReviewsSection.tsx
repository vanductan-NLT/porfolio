"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
    const { t } = useLanguage();

    const reviews = [
        {
            name: "Client Name 1",
            role: "CEO, Tech Company",
            content: "Working with Tan was an absolute pleasure. His attention to detail and design skills are top-notch. Highly recommended!",
            rating: 5,
        },
        {
            name: "Client Name 2",
            role: "Product Manager",
            content: "The portfolio website he built for us exceeded our expectations. It's fast, responsive, and looks amazing.",
            rating: 5,
        },
        {
            name: "Client Name 3",
            role: "Founder, Startup",
            content: "Professional, communicative, and talented. He delivered the project on time and within budget.",
            rating: 5,
        },
    ];

    return (
        <section id="reviews" className="section-padding relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.reviews.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 relative group"
                        >
                            <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />

                            <div className="flex gap-1 mb-6 text-yellow-400">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-text-secondary mb-8 italic leading-relaxed">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-surface-highlight flex items-center justify-center text-xl font-bold text-primary">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{review.name}</h4>
                                    <p className="text-xs text-text-secondary">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
