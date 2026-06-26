"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, FolderOpen, Code2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

/**
 * ProjectsSection - HiveArt inspired project showcase
 */
const ProjectsSection = () => {
    const { t } = useLanguage();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const projects = [
        {
            title: "agent-action-guardian",
            category: "Dev Tool",
            gradient: "from-[#99e5b7] to-[#7af298]",
            description: "Real-time guardrail for AI coding agents — intercept, explain, and confirm before damage is done.",
            tags: ["Python", "AI Agents", "Safety"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/agent-action-guardian" },
            featured: true,
        },
        {
            title: "the-blind-eye",
            category: "AI",
            gradient: "from-[#83af95] to-[#99e5b7]",
            description: "An application built on Google AI Studio — a friend for blind people, using AI to describe the world around them.",
            tags: ["TypeScript", "Google AI Studio", "Accessibility"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/the-blind-eye" },
            featured: true,
        },
        {
            title: "tanflow",
            category: "Web App",
            gradient: "from-[#7af298] to-[#bbeecf]",
            description: "A beautiful Pomodoro timer with health reminders and background music to boost your productivity.",
            tags: ["TypeScript", "React", "Productivity"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/tanflow" },
            featured: true,
        },
        {
            title: "meeting-to-notion-page",
            category: "Automation",
            gradient: "from-[#bbeecf] to-[#99e5b7]",
            description: "Converts meeting audio and related documents into organized Notion pages, automatically.",
            tags: ["Python", "Automation", "Notion API"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/meeting-to-notion-page" },
            featured: false,
        },
        {
            title: "database-to-text",
            category: "AI",
            gradient: "from-[#99e5b7] to-[#83af95]",
            description: "A natural-language-to-SQL AI agent built with LangChain, Supabase Postgres, and a Telegram bot.",
            tags: ["Python", "LangChain", "Supabase"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/database-to-text" },
            featured: false,
        },
        {
            title: "uit-hub",
            category: "Web App",
            gradient: "from-[#bbeecf] to-[#7af298]",
            description: "A hub customized for each UIT student, bringing the tools and info they need into one place.",
            tags: ["TypeScript", "Next.js", "Supabase"],
            links: { demo: "", github: "https://github.com/vanductan-NLT/uit-hub" },
            featured: false,
        },
    ];

    const categories = ["All", "AI", "Automation", "Web App", "Dev Tool"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <SectionWrapper id="projects" className="relative overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            {t.projects.title}
                        </span>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            A selection of real projects I've built — AI tools, automation, and full-stack apps
                        </p>
                    </Reveal>
                </div>

                {/* Category Filter */}
                <Reveal width="100%" delay={0.3}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? "bg-primary text-primary-foreground shadow-glow"
                                        : "bg-surface-highlight text-text-secondary hover:bg-surface hover:text-text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <SpotlightCard
                                    className="p-0 overflow-hidden flex flex-col h-full group cursor-pointer"
                                    hoverLift={true}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Project Image/Preview */}
                                    <div className={`h-56 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                        {/* Pattern Overlay */}
                                        <div
                                            className="absolute inset-0 opacity-10"
                                            style={{
                                                backgroundImage: `
                                                    linear-gradient(45deg, #000 25%, transparent 25%),
                                                    linear-gradient(-45deg, #000 25%, transparent 25%),
                                                    linear-gradient(45deg, transparent 75%, #000 75%),
                                                    linear-gradient(-45deg, transparent 75%, #000 75%)
                                                `,
                                                backgroundSize: "20px 20px",
                                                backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                                            }}
                                        />

                                        {/* Project Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.div
                                                animate={{
                                                    scale: hoveredIndex === index ? 1.1 : 1,
                                                    rotate: hoveredIndex === index ? 5 : 0,
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                className="w-20 h-20 rounded-2xl bg-black/20 backdrop-blur-sm flex items-center justify-center"
                                            >
                                                <FolderOpen size={40} className="text-white/80" />
                                            </motion.div>
                                        </div>

                                        {/* Hover Overlay with Actions */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                                        >
                                            {project.links.demo && (
                                                <Button size="icon" asChild>
                                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink size={20} />
                                                    </a>
                                                </Button>
                                            )}
                                            <Button size="icon" variant="secondary" asChild>
                                                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                    <Github size={20} />
                                                </a>
                                            </Button>
                                        </motion.div>

                                        {/* Featured Badge */}
                                        {project.featured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        {/* Category */}
                                        <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                                            <Code2 size={14} />
                                            <span>{project.category}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {project.title}
                                            <ArrowUpRight
                                                size={18}
                                                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                            />
                                        </h3>

                                        {/* Description */}
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 rounded-full bg-surface-highlight text-xs font-medium text-text-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <Reveal width="100%" delay={0.5}>
                    <div className="flex justify-center mt-12">
                        <Button variant="secondary" className="group" asChild>
                            <a href="https://github.com/vanductan-NLT?tab=repositories" target="_blank" rel="noopener noreferrer">
                                View All Projects on GitHub
                                <ArrowUpRight
                                    size={18}
                                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                            </a>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </SectionWrapper>
    );
};

export default ProjectsSection;
