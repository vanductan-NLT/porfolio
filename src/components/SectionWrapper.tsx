"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

const SectionWrapper = ({ children, className, id, delay = 0 }: SectionWrapperProps) => {
    return (
        <section id={id} className={cn("section-padding", className)}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
