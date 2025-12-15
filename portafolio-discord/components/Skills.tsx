'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUsers, FaComments, FaLightbulb, FaBrain, FaClock, FaHandshake, FaMedal, FaChartLine } from 'react-icons/fa';

const Skills = () => {
    const techSkills = [
        { name: 'HTML5', img: '/Img/Iconos/html.png' },
        { name: 'CSS3', img: '/Img/Iconos/css-3.png' },
        { name: 'Tailwind CSS', img: '/Img/Iconos/tailwindcss-tailwind-css-logo-blue-wave-symbol-design.png' },
        { name: 'JavaScript', img: '/Img/Iconos/js.png' },
    ];

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
        <section id="habilidades" className="w-full max-w-[1050px] px-[20px] py-[80px] scroll-mt-[85px] text-center">

            {/* Título Principal */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-[2.8rem] font-sans font-bold text-primary mb-[25px]">Mis Habilidades</h2>
                <p className="text-[1.25rem] text-subtext leading-[1.8] mb-[40px] max-w-[1000px] mx-auto font-sans">
                    Aquí puedes ver las tecnologías y lenguajes con los que trabajo y estoy aprendiendo, mis habilidades blandas y conocimientos adicionales.
                </p>
            </motion.div>

            {/* 1. CARDS DE HABILIDADES TÉCNICAS */}
            <div className="habilidades-grid flex flex-wrap justify-center gap-[30px] mb-[60px] max-w-[1000px] mx-auto">
                {techSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -8, boxShadow: "0 10px 25px var(--color-Shadow)" }}
                        className="habilidad-card bg-sidebar rounded-[15px] p-[30px] w-[200px] flex flex-col items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-default"
                    >
                        <div className="mb-[15px] bg-[#1e1f22] p-[5px] rounded-[10px] w-[80px] h-[80px] flex items-center justify-center">
                            <Image
                                src={skill.img}
                                alt={skill.name}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-primary font-sans font-semibold text-[1.5rem] m-0 mb-0">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>

            {/* 2. LISTAS (Herramientas y Hardware) */}
            <div className="flex flex-col items-start w-full max-w-[1000px] mx-auto">

                {/* Herramientas */}
                <div className="additional-skills-category w-full text-left mb-[20px]">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[1.6rem] font-sans text-primary mb-[10px] pl-[20px]">Herramientas y Tecnologías:</h4>
                        <ul className="list-none p-0 mb-[20px]">
                            {['DOM', 'Netlify', 'DNS', 'Terminal (línea de comandos)', 'Git y GitHub', 'npm', 'Webpack'].map((item) => (
                                <li key={item} className="relative text-[1.25rem] text-subtext mb-[8px] pl-[40px] font-sans before:content-['●'] before:text-primary before:absolute before:left-[20px] before:text-[0.8em] before:top-[5px]">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Hardware */}
                <div className="additional-skills-category w-full text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-[1.6rem] font-sans text-primary mb-[10px] pl-[20px]">Conocimientos de Hardware:</h4>
                        <ul className="list-none p-0 mb-[20px]">
                            <li className="relative text-[1.25rem] text-subtext mb-[8px] pl-[40px] font-sans before:content-['●'] before:text-primary before:absolute before:left-[20px] before:text-[0.8em] before:top-[5px]">
                                Hardware de Computadoras. Ensamblaje de componentes, diagnóstico y solución de problemas de hardware.
                            </li>
                            <li className="relative text-[1.25rem] text-subtext mb-[8px] pl-[40px] font-sans before:content-['●'] before:text-primary before:absolute before:left-[20px] before:text-[0.8em] before:top-[5px]">
                                Conocimientos de Almacenamiento y Redes.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* 3. HABILIDADES BLANDAS */}
            <div className="text-center w-full max-w-[1000px] mx-auto">
                <h2 className="text-[2.2rem] font-sans text-primary mt-[40px] mb-[25px]">Habilidades Blandas</h2>
                <ul className="soft-skills-list flex flex-wrap justify-center gap-[20px] list-none p-0 mb-[60px] mx-auto max-w-[800px]">
                    {softSkills.map((skill, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ y: -5, boxShadow: "0 8px 20px var(--color-Shadow)" }}
                            className="bg-sidebar rounded-[10px] py-[15px] px-[25px] flex items-center gap-[10px] text-[1.1rem] text-subtext shadow-[0_3px_10px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-default font-sans"
                        >
                            <span className="text-primary text-[1.3rem] flex items-center">{skill.icon}</span>
                            <span>{skill.name}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>

        </section>
    );
};

export default Skills;
