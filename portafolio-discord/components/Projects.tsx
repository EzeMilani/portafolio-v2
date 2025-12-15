'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "DIF Evaluativo",
            subtitle: "Software Interactivo para instancias Evaluativas.",
            description: "DIF Evaluativo es una plataforma ejecutable que funciona en la red local, diseñada para modernizar las evaluaciones escolares mediante una propuesta mas dinámica, formal y sencilla. Surge como una alternativa ante las limitaciones de las evaluaciones tradicionales. Su alcance abarcara instituciones de nivel secundario, superior y universidades.",
            tags: ["HTML", "CSS", "JavaScript", "[Otras tecnologías]"],
            image: "/Img/proyectos/proyecto-previa.png", // Asegúrate de que esta ruta sea correcta
            demoLink: "#"
        }
    ];

    return (
        <section id="proyectos" className="w-full max-w-[1050px] px-[20px] py-[80px] scroll-mt-[85px] text-center">

            {/* Título de la Sección */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-[40px]"
            >
                <h2 className="text-[2.8rem] font-sans font-bold text-primary mb-[25px]">Mis Proyectos</h2>
                <p className="text-[1.25rem] text-subtext leading-[1.8] mb-[40px] font-sans">
                    Estoy trabajando en varios proyectos web. Próximamente vas a poder ver ejemplos aquí con enlaces y descripciones detalladas de cada uno, incluyendo las tecnologías utilizadas y los problemas que resuelven.
                </p>
            </motion.div>

            {/* Lista de Proyectos */}
            <div className="flex flex-col gap-[20px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="proyecto-item bg-sidebar rounded-[15px] p-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:-translate-y-[8px] hover:shadow-[0_10px_25px_var(--color-Shadow)] transition-all duration-300 text-left"
                    >
                        {/* Título del Proyecto */}
                        <h3 className="text-[1.8rem] font-bold text-primary mb-[10px] font-sans">
                            {project.title}
                        </h3>

                        {/* Subtítulo / Descripción Corta */}
                        <p className="text-[1.05rem] text-subtext leading-[1.6] mb-[5px] font-sans">
                            <strong className="text-white">{project.subtitle}</strong>
                        </p>

                        {/* Descripción Larga */}
                        <p className="text-[1.05rem] text-subtext leading-[1.6] mb-[5px] font-sans">
                            {project.description}
                        </p>

                        {/* Tecnologías */}
                        <p className="text-[1.05rem] text-subtext leading-[1.6] mb-[15px] font-sans">
                            <strong className="text-white">Tecnologías:</strong> {project.tags.join(", ")}
                        </p>

                        {/* Imagen del Proyecto */}
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={700}
                            height={400}
                            className="proyecto-preview-img w-full max-w-[700px] h-auto rounded-[10px] border-[2px] border-primary mb-[20px] block mx-auto shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
                        />

                        {/* Enlaces */}
                        <div className="proyecto-links mt-2">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                className="text-primary font-bold font-sans hover:text-white transition-colors duration-300 mr-[15px]"
                            >
                                Ver Demo
                            </a>
                        </div>

                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Projects;
