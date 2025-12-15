'use client';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            year: "2024",
            title: "Desarrollo Front-End React",
            institution: "Coderhouse",
            description: "Curso intensivo enfocado en la creación de SPAs (Single Page Applications) utilizando React JS. Manejo de componentes, hooks, routing y consumo de APIs."
        },
        {
            year: "2023",
            title: "Desarrollo Web Full Stack",
            institution: "Autodidacta / Cursos Online",
            description: "Aprendizaje continuo de tecnologías web modernas, incluyendo HTML5, CSS3, JavaScript, Git y bases de datos."
        },
        {
            year: "2018 - 2023",
            title: "Bachiller en Economía y Administración",
            institution: "IPEM 147",
            description: "Formación secundaria completa con orientación en economía y administración de empresas."
        }
    ];

    return (
        <section id="formacion" className="w-full max-w-[1050px] px-6 py-24 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-heading font-bold text-primary mb-4 flex justify-center items-center gap-3">
                    <FaGraduationCap /> Formación
                </h2>
                <p className="text-subtext text-lg max-w-2xl mx-auto">
                    Mi recorrido académico y certificaciones que avalan mis conocimientos.
                </p>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icono central */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-sidebar bg-primary text-white shadow min-w-[40px] z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 translate-x-[2px]">
                            <FaGraduationCap className="w-5 h-5" />
                        </div>

                        {/* Tarjeta */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-sidebar p-6 rounded-2xl shadow-lg border border-white/5 hover:border-primary/30 transition-colors ml-4 md:ml-0">
                            <span className="flex items-center mb-1 text-sm font-semibold text-primary">
                                {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <div className="text-subtext mb-2 font-medium">{item.institution}</div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
