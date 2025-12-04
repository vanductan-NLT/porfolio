import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileTap={hoverEffect ? { scale: 0.98 } : undefined}
                className={cn(
                    "rounded-[32px] bg-surface border border-border p-6 md:p-8",
                    hoverEffect && "transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
