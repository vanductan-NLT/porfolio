"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/**
 * Reveal Component - HiveArt inspired scroll reveal animation
 * Features:
 * - Fade up animation on viewport entry
 * - Customizable delay, duration, and movement
 * - Smooth easing matching HiveArt's timing
 */
interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
    scale?: number;
    className?: string;
    once?: boolean;
}

export const Reveal = ({
    children,
    width = "fit-content",
    delay = 0.15,
    duration = 0.6,
    y = 50,
    x = 0,
    scale = 1,
    className = "",
    once = true,
}: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else if (!once) {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls, once]);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                width,
                overflow: "hidden"
            }}
            className={className}
        >
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: y,
                        x: x,
                        scale: scale < 1 ? scale : 1
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1
                    },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.25, 0.46, 0.45, 0.94] // HiveArt smooth easing
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

/**
 * StaggerReveal - For staggered children animations
 */
interface StaggerRevealProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    containerDelay?: number;
}

export const StaggerReveal = ({
    children,
    className = "",
    staggerDelay = 0.1,
    containerDelay = 0.2,
}: StaggerRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: containerDelay,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};
