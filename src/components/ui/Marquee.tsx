"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
    pauseOnHover?: boolean;
}

const Marquee = ({
    children,
    direction = "left",
    speed = 20,
    className,
    pauseOnHover = true,
}: MarqueeProps) => {
    return (
        <div className={cn("flex overflow-hidden w-full", className)}>
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: direction === "left" ? "-50%" : "50%" }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className={cn(
                    "flex flex-shrink-0 gap-8 py-4 items-center",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            // Framer motion doesn't support CSS animation-play-state directly via props easily for hover
            // so we rely on the parent container's hover state if needed, or just keep it simple.
            // Actually, for a true continuous loop with pause on hover, CSS animation is often smoother/easier than Framer Motion's JS loop for this specific case.
            // Let's use a dual-copy approach.
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

// Re-implementing with CSS for better control over infinite loop + pause
const MarqueeCSS = ({
    children,
    direction = "left",
    speed = 30,
    className,
    pauseOnHover = true,
}: MarqueeProps) => {
    return (
        <div className={cn("group flex overflow-hidden p-2", className)}>
            <div
                className={cn(
                    "flex min-w-full shrink-0 gap-8 justify-around items-center",
                    "animate-marquee",
                    direction === "right" && "animate-marquee-reverse",
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {children}
            </div>
            <div
                aria-hidden="true"
                className={cn(
                    "flex min-w-full shrink-0 gap-8 justify-around items-center",
                    "animate-marquee",
                    direction === "right" && "animate-marquee-reverse",
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
                style={{
                    animationDuration: `${speed}s`,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default MarqueeCSS;
