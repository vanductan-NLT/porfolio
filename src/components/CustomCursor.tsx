"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * CustomCursor - DevSync inspired custom cursor with trailing ring
 * Features:
 * - Main dot that follows cursor precisely
 * - Trailing ring with spring animation
 * - Scale effect when hovering interactive elements
 * - Click pulse effect
 * - Hidden on mobile/touch devices
 */
const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Check for touch device
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(
                "ontouchstart" in window || navigator.maxTouchPoints > 0
            );
        };
        checkTouch();
        window.addEventListener("resize", checkTouch);
        return () => window.removeEventListener("resize", checkTouch);
    }, []);

    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive =
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.tagName === "INPUT" ||
            target.tagName === "TEXTAREA" ||
            target.tagName === "SELECT" ||
            target.closest("button") ||
            target.closest("a") ||
            target.closest("[role='button']") ||
            target.classList.contains("cursor-pointer") ||
            target.closest(".cursor-pointer") ||
            window.getComputedStyle(target).cursor === "pointer";

        setIsHovering(!!isInteractive);
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsClicking(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsClicking(false);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsVisible(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [
        isTouchDevice,
        updateMousePosition,
        handleMouseOver,
        handleMouseDown,
        handleMouseUp,
        handleMouseEnter,
        handleMouseLeave,
    ]);

    // Don't render on touch devices
    if (isTouchDevice) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Main Dot - Fast response */}
                    <motion.div
                        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            x: mousePosition.x - 6,
                            y: mousePosition.y - 6,
                            scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 28,
                            mass: 0.3,
                            scale: {
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            },
                        }}
                    />

                    {/* Trailing Ring - Delayed follow */}
                    <motion.div
                        className="fixed top-0 left-0 w-10 h-10 border-2 rounded-full pointer-events-none z-[9998]"
                        style={{
                            borderColor: "var(--primary)",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: isHovering ? 0.8 : 0.4,
                            x: mousePosition.x - 20,
                            y: mousePosition.y - 20,
                            scale: isClicking ? 0.9 : isHovering ? 1.8 : 1,
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            mass: 0.8,
                            opacity: { duration: 0.2 },
                        }}
                    />

                    {/* Click Pulse Effect */}
                    <AnimatePresence>
                        {isClicking && (
                            <motion.div
                                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997]"
                                style={{
                                    backgroundColor: "var(--primary)",
                                    x: mousePosition.x - 20,
                                    y: mousePosition.y - 20,
                                }}
                                initial={{ opacity: 0.5, scale: 0.5 }}
                                animate={{ opacity: 0, scale: 2 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            />
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor;
