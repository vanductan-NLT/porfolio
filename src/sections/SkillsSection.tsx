"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
    Code,
    Layout,
    Database,
    Terminal,
    Figma,
    GitBranch,
    Palette,
    Smartphone,
    Globe,
    Zap
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

/**
 * SkillBar Component - HiveArt inspired animated skill bar
 */
interface SkillBarProps {
    name: string;
    percentage: number;
    icon: React.ReactNode;
    delay?: number;
}

const SkillBar = ({ name, percentage, icon, delay = 0 }: SkillBarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="group"
        >
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-surface-highlight text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {icon}
                    </div>
                    <span className="font-heading font-medium text-text-primary">
                        {name}
                    </span>
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: delay + 0.3 }}
                    className="font-heading font-bold text-primary"
                >
                    {percentage}%
                </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-surface-highlight rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.2,
                        delay: delay + 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94] // HiveArt timing
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light relative overflow-hidden"
                >
                    {/* Shine effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "200%" }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5,
                            delay: delay + 1,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

/**
 * SkillsSection Component - HiveArt inspired skills display
 */
const SkillsSection = () => {
    const { t } = useLanguage();

    const technicalSkills = [
        { name: "React / Next.js", icon: <Code size={20} />, level: 90 },
        { name: "TypeScript", icon: <Terminal size={20} />, level: 85 },
        { name: "Tailwind CSS", icon: <Layout size={20} />, level: 95 },
        { name: "Node.js / NestJS", icon: <Database size={20} />, level: 80 },
        { name: "UI/UX Design", icon: <Figma size={20} />, level: 88 },
        { name: "Git / CI/CD", icon: <GitBranch size={20} />, level: 82 },
    ];

    const expertiseAreas = [
        {
            icon: <Palette size={28} />,
            title: "UI Design",
            description: "Creating beautiful, intuitive interfaces with modern aesthetics and attention to detail."
        },
        {
            icon: <Code size={28} />,
            title: "Frontend Development",
            description: "Building responsive, performant web applications with React and Next.js."
        },
        {
            icon: <Smartphone size={28} />,
            title: "Mobile-First",
            description: "Designing and developing with mobile-first approach for optimal user experience."
        },
        {
            icon: <Zap size={28} />,
            title: "Performance",
            description: "Optimizing applications for speed, accessibility, and SEO best practices."
        },
    ];

    const softSkills = [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Leadership",
        "Creativity",
        "Adaptability",
        "Critical Thinking"
    ];

    return (
        <SectionWrapper id="skills" className="relative overflow-hidden">
            {/* Section Header */}
            <div className="container-custom">
                <div className="text-center mb-16">
                    <Reveal width="100%">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            {t.skills.title}
                        </span>
                    </Reveal>
                    <Reveal width="100%" delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                            My Professional Skills
                            <span className="text-primary"> & Expertise</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Combining design thinking with technical expertise to create
                            exceptional digital experiences.
                        </p>
                    </Reveal>
                </div>

                {/* Skills Grid - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Technical Skills with Progress Bars */}
                    <Reveal width="100%" delay={0.3}>
                        <SpotlightCard className="h-full">
                            <h3 className="text-xl font-heading font-bold mb-8 flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                Technical Skills
                            </h3>
                            <div className="space-y-6">
                                {technicalSkills.map((skill, index) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        percentage={skill.level}
                                        icon={skill.icon}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </div>
                        </SpotlightCard>
                    </Reveal>

                    {/* Expertise Areas */}
                    <div className="space-y-6">
                        <Reveal width="100%" delay={0.4}>
                            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                Areas of Expertise
                            </h3>
                        </Reveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {expertiseAreas.map((area, index) => (
                                <Reveal key={area.title} width="100%" delay={0.5 + index * 0.1}>
                                    <SpotlightCard className="h-full group cursor-pointer" hoverLift={true}>
                                        <div className="p-3 rounded-xl bg-surface-highlight text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            {area.icon}
                                        </div>
                                        <h4 className="font-heading font-bold text-lg mb-2">
                                            {area.title}
                                        </h4>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {area.description}
                                        </p>
                                    </SpotlightCard>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Soft Skills & Languages Row */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Soft Skills */}
                    <Reveal width="100%" delay={0.3}>
                        <SpotlightCard className="h-full">
                            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                {t.skills.soft}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 rounded-full bg-surface-highlight text-sm font-medium cursor-default hover:bg-primary/10 hover:text-primary transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </SpotlightCard>
                    </Reveal>

                    {/* Languages */}
                    <Reveal width="100%" delay={0.4}>
                        <SpotlightCard className="h-full">
                            <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 bg-primary rounded-full" />
                                {t.skills.languages}
                            </h3>
                            <div className="space-y-5">
                                {/* Vietnamese */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <Globe size={18} className="text-primary" />
                                            <span className="font-medium">Vietnamese</span>
                                        </div>
                                        <span className="text-text-secondary text-sm">Native</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-highlight rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                                        />
                                    </div>
                                </div>

                                {/* English */}
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <Globe size={18} className="text-primary" />
                                            <span className="font-medium">English</span>
                                        </div>
                                        <span className="text-text-secondary text-sm">Professional</span>
                                    </div>
                                    <div className="h-1.5 bg-surface-highlight rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "85%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                                            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </Reveal>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default SkillsSection;
