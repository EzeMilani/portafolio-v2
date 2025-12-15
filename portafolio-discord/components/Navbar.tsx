'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaUserGraduate, FaHammer, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    const navLinks = [
        { name: 'Inicio', href: '#inicio', icon: <FaHome /> },
        { name: 'Formación', href: '#formacion', icon: <FaUserGraduate /> },
        { name: 'Habilidades', href: '#habilidades', icon: <FaHammer /> },
        { name: 'Proyectos', href: '#proyectos', icon: <FaCode /> },
        { name: 'Contacto', href: '#contacto', icon: <FaEnvelope /> },
    ];

    // Efecto para detectar el scroll y actualizar el link activo
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
        }
    };

    return (
        <nav className="sticky top-0 z-[1000] w-full bg-sidebar px-5 py-[5px] flex justify-between items-center shadow-[0_4px_15px_rgba(0,0,0,0.3)] rounded-b-[20px] flex-wrap gap-2">

            {/* Logo */}
            <h1 className="font-heading font-extrabold text-[2.5rem] tracking-normal text-primary cursor-default whitespace-nowrap transition-transform duration-300 hover:-translate-y-[5px] drop-shadow-[0_0_10px_#3C7DCF]">
                Ezequiel Milani
            </h1>

            <div className="flex gap-2 nav-links flex-wrap justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className={`flex items-center gap-[10px] p-[1rem] rounded-[20px] transition-all duration-300
              ${activeSection === link.href.substring(1)
                                ? 'bg-[#40444B] text-primary'
                                : 'text-subtext hover:bg-[#40444B] hover:text-primary'
                            }`}
                    >
                        <span className="text-[1.2rem] w-[20px] text-center">{link.icon}</span>
                        <span className="hidden sm:inline-block">{link.name}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
