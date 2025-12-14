import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

/**
 * Button Component - HiveArt inspired styling
 * Features:
 * - Pill-shaped buttons (rounded-full)
 * - Neon Mint primary with glow effect on hover
 * - Scale + shadow transitions
 * - Active state with scale down
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "icon";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = cn(
            "inline-flex items-center justify-center font-semibold",
            "transition-all duration-300 ease-smooth",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:pointer-events-none disabled:opacity-50",
            "active:scale-95"
        );

        const variants = {
            primary: cn(
                "bg-primary text-primary-foreground rounded-[10px]",
                "border border-primary",
                "hover:shadow-[0_0_30px_var(--primary-glow)]",
                "hover:scale-[1.02]"
            ),
            secondary: cn(
                "bg-transparent text-text-primary rounded-[10px]",
                "border border-border",
                "hover:bg-surface-highlight hover:border-primary",
                "hover:text-primary"
            ),
            ghost: cn(
                "bg-transparent text-text-secondary rounded-[10px]",
                "hover:bg-surface-highlight hover:text-text-primary"
            ),
            icon: cn(
                "bg-surface-highlight text-text-secondary rounded-full",
                "border border-transparent",
                "hover:bg-primary hover:text-primary-foreground",
                "hover:border-primary hover:shadow-glow"
            ),
        };

        const sizes = {
            default: "h-12 px-6 py-3 text-base gap-2",
            sm: "h-9 px-4 py-2 text-sm gap-1.5",
            lg: "h-14 px-8 py-4 text-lg gap-2",
            icon: "h-12 w-12 p-3",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
