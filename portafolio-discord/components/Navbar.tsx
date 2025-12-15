'use client';
import { useState } from 'react';
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

    return (
        // CAMBIO: 'justify-between' y 'max-w-6xl' para dar aire a los lados
        <nav className="sticky top-0 z-50 w-full bg-sidebar/95 backdrop-blur-sm px-6 py-4 flex justify-between items-center shadow-lg border-b border-white/5">

            {/* Logo */}
            <h1 className="font-heading font-extrabold text-2xl md:text-3xl text-primary drop-shadow-[0_0_15px_rgba(74,144,226,0.5)]">
                Ezequiel Milani
            </h1>

            {/* Menú */}
            <div className="flex gap-2 md:gap-4">
                {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveSection(link.href.substring(1))}
                            className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl transition-all duration-300
                ${isActive
                                    ? 'bg-primary/20 text-primary border border-primary/50 shadow-[0_0_10px_rgba(74,144,226,0.2)]' // Activo: Azul brillante
                                    : 'text-gray-400 hover:text-white hover:bg-white/5' // Inactivo: Gris claro (se ve mejor en fondo oscuro)
                                }`}
                        >
                            <span className="text-xl">{link.icon}</span>
                            {/* Texto oculto en móviles para ahorrar espacio */}
                            <span className="hidden md:inline font-medium">{link.name}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
