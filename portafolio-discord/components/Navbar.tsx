'use client';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import {
    FaHome,
    FaUserGraduate,
    FaHammer,
    FaCode,
    FaEnvelope
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let current = 'inicio';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
                    if (section.id) current = section.id;
                }
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Inicio', icon: <FaHome />, id: 'inicio' },
        { name: 'Formación', icon: <FaUserGraduate />, id: 'formacion' },
        { name: 'Habilidades', icon: <FaHammer />, id: 'habilidades' },
        { name: 'Proyectos', icon: <FaCode />, id: 'proyectos' },
        { name: 'Contacto', icon: <FaEnvelope />, id: 'contacto' },
    ];

    return (
        <nav className="sticky top-0 z-[1000] w-full bg-sidebar flex justify-between items-center px-[20px] py-[5px] rounded-bl-[20px] rounded-br-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex-wrap gap-2 transition-colors duration-300">

            {/* Logo con Text Shadow exacto y Montserrat */}
            <h1
                className="font-heading font-extrabold text-[2rem] text-primary cursor-default select-none hover:-translate-y-[5px] transition-transform duration-300 py-[5px]"
                style={{ textShadow: '0 0 10px var(--color-Shadow), 0 0 20px var(--color-Shadow)' }}
            >
                Ezequiel Milani
            </h1>

            {/* Links + Toggle */}
            <div className="flex items-center gap-[25px]">
                <div className="flex gap-2">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.id}
                            to={item.id}
                            smooth={true}
                            duration={500}
                            className={`
                flex items-center gap-[10px] p-[1rem] rounded-[20px] cursor-pointer transition-all duration-300 text-subtext font-sans
                ${activeSection === item.id ? 'bg-[#40444B] text-primary' : 'hover:bg-[#40444B] hover:text-primary'}
                `}
                        >
                            <span className="text-[1.2rem] w-[20px] text-center flex justify-center">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                        </ScrollLink>
                    ))}
                </div>

                {/* Toggle Theme (A la derecha) */}
                <ThemeToggle />
            </div>

        </nav>
    );
};

export default Navbar;
