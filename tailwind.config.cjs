/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: {
                    DEFAULT: "var(--surface)",
                    highlight: "var(--surface-highlight)",
                },
                primary: {
                    DEFAULT: "var(--primary)",
                    light: "var(--primary-light)",
                    dark: "var(--primary-dark)",
                    foreground: "var(--primary-foreground)",
                    glow: "var(--primary-glow)",
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    muted: "var(--text-muted)",
                },
                border: {
                    DEFAULT: "var(--border)",
                    subtle: "var(--border-subtle)",
                    glass: "var(--border-glass)",
                },
            },
            fontFamily: {
                heading: ["var(--font-outfit)", "sans-serif"],
                body: ["var(--font-manrope)", "sans-serif"],
                code: ["var(--font-jetbrains-mono)", "monospace"],
            },
            spacing: {
                xs: "4px",
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "32px",
                "2xl": "48px",
                "3xl": "80px",
                "4xl": "128px",
                "13": "3.25rem",
                "15": "3.75rem",
                "18": "4.5rem",
            },
            borderRadius: {
                sm: "8px",
                md: "12px",
                lg: "16px",
                xl: "24px",
                "2xl": "32px",
                pill: "140px",
                full: "9999px",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            transitionDuration: {
                fast: "150ms",
                normal: "300ms",
                slow: "500ms",
                slower: "800ms",
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
                "skill-fill": "skillFill 1.2s ease-out forwards",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                float: "float 3s ease-in-out infinite",
                marquee: "marquee 25s linear infinite",
                "marquee-reverse": "marquee-reverse 25s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                skillFill: {
                    "0%": { width: "0%" },
                    "100%": { width: "var(--skill-percentage)" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 20px var(--primary-glow)" },
                    "50%": { boxShadow: "0 0 40px var(--primary-glow)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - 2rem))" },
                },
                "marquee-reverse": {
                    from: { transform: "translateX(calc(-100% - 2rem))" },
                    to: { transform: "translateX(0)" },
                },
            },
            boxShadow: {
                glow: "0 0 30px var(--primary-glow)",
                "glow-lg": "0 0 60px var(--primary-glow)",
                soft: "rgba(0, 0, 0, 0.11) 0px 0.6px 1.3px -0.94px, rgba(0, 0, 0, 0.1) 0px 1.8px 4px -1.88px, rgba(0, 0, 0, 0.09) 0px 4.8px 10.5px -2.81px, rgba(0, 0, 0, 0.04) 0px 15px 33px -3.75px",
                "card-hover": "rgba(142, 142, 142, 0.25) 10px 4px 60px 0px",
            },
            backdropBlur: {
                xs: "4px",
                "2xl": "40px",
                "3xl": "64px",
            },
        },
    },
    plugins: [],
};
