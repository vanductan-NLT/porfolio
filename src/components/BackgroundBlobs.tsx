"use client";

import { motion } from "framer-motion";

/**
 * BackgroundBlobs - DevSync & HiveArt inspired background blur shapes
 * Creates a dynamic, premium dark mode ambiance with animated gradient blobs
 */
const BackgroundBlobs = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Primary Blob - Top Right (Neon Mint) */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
                className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-15"
                style={{
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                    filter: "blur(100px)",
                }}
            />

            {/* Secondary Blob - Bottom Left (Neon Mint variant) */}
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 5,
                }}
                className="absolute bottom-[20%] -left-[100px] w-[400px] h-[400px] rounded-full opacity-15 dark:opacity-10"
                style={{
                    background: "radial-gradient(circle, var(--primary-light) 0%, transparent 70%)",
                    filter: "blur(120px)",
                }}
            />

            {/* Accent Blob - Center (very subtle) */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, 30, 0],
                    opacity: [0.08, 0.15, 0.08],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 10,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                style={{
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 60%)",
                    filter: "blur(150px)",
                }}
            />

            {/* Small decorative blob - Top Left */}
            <motion.div
                animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 3,
                }}
                className="absolute top-[30%] left-[10%] w-[200px] h-[200px] rounded-full opacity-10 dark:opacity-8"
                style={{
                    background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Grid pattern overlay - subtle tech aesthetic */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(var(--primary) 1px, transparent 1px),
                        linear-gradient(90deg, var(--primary) 1px, transparent 1px)
                    `,
                    backgroundSize: "100px 100px",
                }}
            />
        </div>
    );
};

export default BackgroundBlobs;
