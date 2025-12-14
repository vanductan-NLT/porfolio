"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard - HiveArt inspired card with mouse-following spotlight effect
 * Features:
 * - Radial gradient spotlight follows cursor
 * - Smooth border color transition on hover
 * - Press/tap scale effect
 * - Hover lift with shadow
 */
interface SpotlightCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    spotlightSize?: number;
    hoverLift?: boolean;
}

const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(153, 229, 183, 0.12)", // #99E5B7 with opacity
    spotlightSize = 600,
    hoverLift = true,
    ...props
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }, []);

    const handleMouseEnter = useCallback(() => {
        setOpacity(1);
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOpacity(0);
        setIsHovered(false);
    }, []);

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileTap={{ scale: 0.98 }}
            animate={{
                y: hoverLift && isHovered ? -8 : 0,
            }}
            transition={{
                y: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className={cn(
                "relative overflow-hidden",
                "rounded-[24px] bg-surface",
                "border border-border-subtle",
                "p-6 md:p-8",
                "transition-all duration-300 ease-smooth",
                "hover:border-primary/40",
                "hover:shadow-card-hover",
                className
            )}
            {...props}
        >
            {/* Spotlight Effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[24px] transition-opacity duration-500"
                style={{
                    opacity,
                    background: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                }}
            />

            {/* Gradient border effect on hover */}
            <div
                className="pointer-events-none absolute inset-0 rounded-[24px] transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 0.5 : 0,
                    background: `radial-gradient(${spotlightSize * 0.8}px circle at ${position.x}px ${position.y}px, var(--primary), transparent 50%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
};

export default SpotlightCard;
