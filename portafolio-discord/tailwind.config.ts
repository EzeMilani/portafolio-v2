import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // TUS COLORES ORIGINALES (Copiados de styles.css)
                bg: "#1A1A2E",             // var(--color-bg)
                sidebar: "#282A36",        // var(--color-sidebar)
                primary: "#4A90E2",        // var(--color-primary)
                "primary-hover": "#2763ad",// var(--color-hover)
                text: "#FFFFFF",           // var(--color-text)
                subtext: "#B0B3BC",        // var(--color-subtext)
                shadow: "#3C7DCF",         // var(--color-Shadow)
            },
            fontFamily: {
                sans: ['var(--font-inter)'],      // Para todo el texto
                heading: ['var(--font-montserrat)'], // Para el Logo "Ezequiel Milani"
            },
        },
    },
    plugins: [],
};
export default config;
