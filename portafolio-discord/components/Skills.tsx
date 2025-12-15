'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaLightbulb, FaBrain, FaClock, FaHandshake, FaMedal, FaChartLine } from 'react-icons/fa';

const Skills = () => {
    // Datos de tus habilidades técnicas (Imágenes)
    const techSkills = [
        { name: 'HTML5', img: '/Img/Iconos/html.png' },
        { name: 'CSS3', img: '/Img/Iconos/css-3.png' },
        { name: 'Tailwind CSS', img: '/Img/Iconos/tailwindcss-tailwind-css-logo-blue-wave-symbol-design.png' },
        { name: 'JavaScript', img: '/Img/Iconos/js.png' },
    ];

    // Datos de habilidades blandas (Iconos)
    const softSkills = [
        { name: 'Trabajo en equipo', icon: <FaUsers /> },
        { name: 'Comunicación efectiva', icon: <FaComments /> },
        { name: 'Resolución de problemas', icon: <FaLightbulb /> },
        { name: 'Pensamiento Lógico', icon: <FaBrain /> },
        { name: 'Gestión del tiempo', icon: <FaClock /> },
        { name: 'Adaptabilidad', icon: <FaHandshake /> },
        { name: 'Proactividad', icon: <FaMedal /> },
        { name: 'Aprendizaje continuo', icon: <FaChartLine /> },
    ];

    return (
        <section id="habilidades" className="w-full max-w-[1050px] px-6 py-24 scroll-mt-24">

            {/* Título Principal */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-heading font-bold text-primary mb-4">Mis Habilidades</h2>
                <p className="text-subtext text-lg max-w-2xl mx-auto">
                    Tecnologías y lenguajes con los que trabajo, además de mis habilidades blandas y herramientas.
                </p>
            </motion.div>

            {/* 1. GRID DE HABILIDADES TÉCNICAS (Las tarjetas con imágenes) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 justify-items-center">
                {techSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className="bg-sidebar rounded-2xl p-8 w-40 flex flex-col items-center shadow-lg hover:shadow-[0_10px_25px_var(--color-shadow)] transition-all duration-300 border border-white/5"
                    >
                        {/* Contenedor de imagen oscuro como en tu CSS original */}
                        <div className="bg-[#1e1f22] p-3 rounded-xl mb-4 w-20 h-20 flex items-center justify-center">
                            <Image
                                src={skill.img}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-primary font-bold text-lg text-center">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>

            {/* 2. LISTA DE HABILIDADES BLANDAS */}
            <div className="mb-20">
                <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">Habilidades Blandas</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {softSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-sidebar px-6 py-4 rounded-xl shadow-md flex items-center gap-3 text-subtext hover:text-white hover:shadow-[0_5px_15px_var(--color-shadow)] transition-all cursor-default border border-white/5"
                        >
                            <span className="text-primary text-xl">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. HABILIDADES ADICIONALES (Listas) */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Herramientas */}
                <div className="bg-sidebar p-8 rounded-2xl border-l-4 border-primary shadow-lg">
                    <h4 className="text-2xl font-bold text-primary mb-6">Herramientas y Tecnologías</h4>
                    <ul className="space-y-3 text-subtext text-lg">
                        {['DOM', 'Netlify', 'DNS', 'Terminal', 'Git y GitHub', 'npm', 'Webpack'].map((item) => (
                            <li key={item} className="flex items-center gap-3">
                                <span className="text-primary text-xs">●</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hardware */}
                <div className="bg-sidebar p-8 rounded-2xl border-l-4 border-primary shadow-lg">
                    <h4 className="text-2xl font-bold text-primary mb-6">Hardware</h4>
                    <ul className="space-y-3 text-subtext text-lg">
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xs mt-2">●</span>
                            Ensamblaje, diagnóstico y solución de problemas de PC.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-xs mt-2">●</span>
                            Conocimientos de Almacenamiento y Redes.
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Skills;
