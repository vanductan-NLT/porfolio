"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const ProjectsSection = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Application",
            image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20",
            description: "A full-featured e-commerce platform with cart, checkout, and admin dashboard functionality.",
            tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
            links: { demo: "#", github: "#" },
        },
        {
            title: "Task Management App",
            category: "Productivity Tool",
            image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
            description: "A collaborative task management application with real-time updates and team features.",
            tags: ["React", "Firebase", "Redux", "Material UI"],
            links: { demo: "#", github: "#" },
        },
        {
            title: "Portfolio Website",
            category: "Personal Brand",
            image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
            description: "A modern, responsive portfolio website showcasing design and development skills.",
            tags: ["Next.js", "Framer Motion", "Tailwind"],
            links: { demo: "#", github: "#" },
        },
    ];

    return (
        <SectionWrapper id="projects" className="bg-surface/30">
            <div className="container-custom">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {t.projects.title}
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.1} className="h-full">
                            <SpotlightCard className="p-0 overflow-hidden flex flex-col h-full group">
                                {/* Project Image Placeholder */}
                                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-xl">
                                        {project.title} Preview
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <Button size="icon" asChild>
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={20} />
                                            </a>
                                        </Button>
                                        <Button size="icon" variant="secondary" asChild>
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                <Github size={20} />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-primary mb-2 font-medium">
                                        {project.category}
                                    </div>
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
                                                className="px-3 py-1 rounded-full bg-surface-highlight text-xs text-text-secondary"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ProjectsSection;
