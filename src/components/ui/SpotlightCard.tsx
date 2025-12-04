"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(122, 242, 152, 0.15)", // Neon Mint default
    ...props
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative overflow-hidden rounded-[32px] bg-surface border border-border p-6 md:p-8 transition-colors duration-300 hover:border-primary/50",
                className
            )}
            {...props}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default SpotlightCard;
