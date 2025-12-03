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
                    foreground: "var(--primary-foreground)",
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                },
                border: "var(--border)",
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
            },
            borderRadius: {
                sm: "8px",
                md: "12px",
                lg: "16px",
                xl: "24px",
                full: "9999px",
            },
        },
    },
    plugins: [],
};
