'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
    // Aquí puedes agregar más proyectos en el futuro
    const projects = [
        {
            title: "DIF Evaluativo",
            description: "Software Interactivo para instancias Evaluativas. Es una plataforma ejecutable que funciona en la red local, diseñada para modernizar las evaluaciones escolares mediante una propuesta más dinámica, formal y sencilla. Su alcance abarca instituciones de nivel secundario, superior y universidades.",
            tags: ["HTML", "CSS", "JavaScript", "Electron"],
            image: "/Img/proyectos/proyecto-previa.png", // Nombre corregido
            demoLink: "#",
            repoLink: "#",
        }
    ];

    return (
        <section id="proyectos" className="w-full max-w-[1050px] px-6 py-24 scroll-mt-24">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-heading font-bold text-primary mb-4 flex justify-center items-center gap-3">
                    <FaCode /> Mis Proyectos
                </h2>
                <p className="text-subtext text-lg max-w-2xl mx-auto">
                    Ejemplos de mis trabajos recientes, aplicando tecnologías modernas para resolver problemas reales.
                </p>
            </motion.div>

            <div className="flex flex-col gap-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-sidebar rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(74,144,226,0.2)] border border-white/5 transition-all duration-300"
                    >
                        {/* Contenido Texto */}
                        <div className="p-8 md:p-10 border-b border-white/5">
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <h3 className="text-3xl font-heading font-bold text-primary">{project.title}</h3>

                                {/* Links (Demo / Github) */}
                                <div className="flex gap-4">
                                    <a href={project.demoLink} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-hover transition-colors text-sm">
                                        <FaExternalLinkAlt /> Ver Demo
                                    </a>
                                    {/* Descomenta esto si tienes el repo público
                  <a href={project.repoLink} className="flex items-center gap-2 px-4 py-2 bg-[#40444B] text-white rounded-lg font-bold hover:bg-black transition-colors text-sm">
                    <FaGithub /> Código
                  </a>
                  */}
                                </div>
                            </div>

                            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Etiquetas de Tecnología */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-[#1A1A2E] text-primary text-sm font-semibold rounded-full border border-primary/30">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Imagen del Proyecto */}
                        <div className="relative w-full h-[300px] md:h-[500px] bg-[#1A1A2E] group">
                            {/* Overlay al hacer hover (opcional) */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />

                            <Image
                                src={project.image}
                                alt={project.title}
                                fill // Esto hace que la imagen llene el contenedor automáticamente
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
