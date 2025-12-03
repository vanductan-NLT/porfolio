"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "Project Name 1",
            description: "A comprehensive e-commerce platform built with Next.js and Stripe integration.",
            tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
            image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "Project Name 2",
            description: "Real-time dashboard for data visualization using D3.js and WebSocket.",
            tags: ["React", "D3.js", "Socket.io", "Node.js"],
            image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
            demoLink: "#",
            repoLink: "#",
        },
        {
            title: "Project Name 3",
            description: "Social media application with real-time chat and media sharing features.",
            tags: ["Vue.js", "Firebase", "Pinia", "Sass"],
            image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
            demoLink: "#",
            repoLink: "#",
        },
    ];

    return (
        <section id="projects" className="section-padding bg-surface/30">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {t.projects.title}
                        </h2>
                        <div className="w-20 h-1 bg-primary rounded-full" />
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        href="https://github.com/vanductan-NLT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                        View all projects
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group rounded-2xl bg-surface border border-border overflow-hidden hover:border-primary transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`aspect-video w-full ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a
                                        href={project.demoLink}
                                        className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform"
                                        title={t.projects.view_demo}
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.repoLink}
                                        className="p-3 rounded-full bg-surface text-white border border-white/20 hover:scale-110 transition-transform"
                                        title={t.projects.view_code}
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center text-text-secondary/50 font-heading text-xl font-bold group-hover:opacity-0 transition-opacity">
                                    {project.title} Image
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-surface-highlight text-text-secondary border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
