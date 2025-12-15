import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                sidebar: 'var(--sidebar)',
                primary: 'var(--primary)',
                'primary-hover': 'var(--primary)', // Usamos la misma variable por ahora, o podríamos definir una --primary-hover
                text: 'var(--text)',
                subtext: 'var(--subtext)',
                shadow: 'var(--shadow)', // Mapeamos shadow a la variable
            },
            fontFamily: {
                heading: ['var(--font-rubik)', 'sans-serif'],
                sans: ['var(--font-nunito)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
