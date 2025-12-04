import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-3xl bg-surface border border-border p-6 md:p-8",
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
