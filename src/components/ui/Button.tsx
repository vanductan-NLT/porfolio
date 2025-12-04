import React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "icon";
    size?: "default" | "sm" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:scale-105 hover:shadow-[0_0_20px_rgba(122,242,152,0.4)]",
            secondary: "bg-transparent text-white border border-border hover:bg-surface-highlight hover:border-white",
            icon: "bg-surface text-white hover:bg-primary hover:text-primary-foreground",
        };

        const sizes = {
            default: "h-12 px-8 py-3 text-base",
            sm: "h-9 px-5 py-2 text-sm",
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
