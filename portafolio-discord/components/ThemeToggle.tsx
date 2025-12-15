'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? 'dark' : theme;

    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center justify-center p-2 rounded-full bg-sidebar border border-subtext/20 shadow-md hover:shadow-[0_0_15px_var(--primary)] transition-all duration-300 ml-4 group"
            aria-label="Cambiar tema"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: currentTheme === 'dark' ? 0 : 180,
                    scale: currentTheme === 'dark' ? 1 : 0,
                    opacity: currentTheme === 'dark' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="absolute text-primary text-[1.2rem]"
            >
                <FaMoon />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: currentTheme === 'light' ? 0 : -180,
                    scale: currentTheme === 'light' ? 1 : 0,
                    opacity: currentTheme === 'light' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="text-[#F59E0B] text-[1.4rem]" // Amarillo solar para el sol
            >
                <FaSun />
            </motion.div>

            {/* Spacer invisible para mantener el tamaño del botón */}
            <span className="w-[1.4rem] h-[1.4rem] opacity-0 pointer-events-none"></span>
        </button>
    );
};

export default ThemeToggle;
