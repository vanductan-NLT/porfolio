"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code, Layout, Database, Terminal, Figma, GitBranch } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const SkillsSection = () => {
    const { t } = useLanguage();

    const skills = [
        { name: "React / Next.js", icon: <Code size={24} />, level: 90 },
        { name: "TypeScript", icon: <Terminal size={24} />, level: 85 },
        { name: "Tailwind CSS", icon: <Layout size={24} />, level: 95 },
        { name: "Node.js", icon: <Database size={24} />, level: 80 },
        { name: "UI/UX Design", icon: <Figma size={24} />, level: 85 },
        { name: "Git / CI/CD", icon: <GitBranch size={24} />, level: 80 },
    ];

    return (
        <SectionWrapper id="skills" className="bg-surface/30">
            <div className="container-custom">
                <div className="text-center mb-16 flex flex-col items-center">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            {t.skills.title}
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <Reveal key={index} width="100%" delay={index * 0.1}>
                            <SpotlightCard className="group cursor-default h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-surface-highlight text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-bold">{skill.name}</h3>
                                </div>

                                <div className="w-full h-2 bg-surface-highlight rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-primary rounded-full"
                                    />
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Soft Skills */}
                    <Reveal width="100%" delay={0.3}>
                        <SpotlightCard className="p-8 h-full">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                {t.skills.soft}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Communication", "Teamwork", "Problem Solving", "Time Management", "Leadership"].map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full bg-surface-highlight text-sm font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </SpotlightCard>
                    </Reveal>

                    {/* Languages */}
                    <Reveal width="100%" delay={0.4}>
                        <SpotlightCard className="p-8 h-full">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-primary rounded-full" />
                                {t.skills.languages}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Vietnamese</span>
                                    <span className="text-text-secondary">Native</span>
                                </div>
                                <div className="w-full h-1 bg-surface-highlight rounded-full">
                                    <div className="w-full h-full bg-primary rounded-full" />
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <span>English</span>
                                    <span className="text-text-secondary">Professional Working</span>
                                </div>
                                <div className="w-full h-1 bg-surface-highlight rounded-full">
                                    <div className="w-[80%] h-full bg-primary rounded-full" />
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
