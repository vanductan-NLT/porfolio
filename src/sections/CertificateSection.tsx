"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CertificateSection = () => {
    const { t } = useLanguage();

    // Real GitHub achievement badges earned on @vanductan-NLT.
    const certificates = [
        {
            name: "Pull Shark",
            issuer: "Opened pull requests that have been merged",
            year: "×3",
            link: "https://github.com/vanductan-NLT",
        },
        {
            name: "Pair Extraordinaire",
            issuer: "Coauthored commits on merged pull requests",
            year: "×2",
            link: "https://github.com/vanductan-NLT",
        },
        {
            name: "YOLO",
            issuer: "Merged a pull request without a review",
            year: "×1",
            link: "https://github.com/vanductan-NLT",
        },
        {
            name: "Quickdraw",
            issuer: "Closed an issue or pull request within 5 minutes",
            year: "×1",
            link: "https://github.com/vanductan-NLT",
        },
    ];

    return (
        <section id="certificates" className="section-padding bg-surface/30">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        {t.certificates.title}
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex items-start gap-4 p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-all group"
                        >
                            <div className="p-3 rounded-full bg-surface-highlight text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Award size={20} />
                            </div>

                            <div className="flex-grow">
                                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-sm text-text-secondary mb-2">{cert.issuer}</p>
                                <span className="text-xs font-medium px-2 py-1 rounded bg-surface-highlight text-text-secondary">
                                    {cert.year}
                                </span>
                            </div>

                            <ExternalLink size={16} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificateSection;
