'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="w-full max-w-[1050px] px-5 py-24 scroll-mt-24">
            {/* Contenedor principal con animación de entrada */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-sidebar rounded-[20px] p-10 flex flex-col md:flex-row gap-10 items-center shadow-[0_8px_25px_var(--color-Shadow)] hover:-translate-y-2 transition-transform duration-300"
            >

                {/* Foto de Perfil */}
                <div className="relative group shrink-0">
                    <div className="w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-primary shadow-[0_0_20px_var(--color-Shadow)]">
                        <Image
                            src="/Img/perfil.jpg"
                            alt="Foto de perfil de Ezequiel Milani"
                            width={280}
                            height={280}
                            priority // Esto hace que la imagen cargue super rápido
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Información */}
                <div className="flex-1 text-subtext">
                    {/* Estado Online */}
                    <div className="flex items-center gap-3 mb-6 font-semibold text-[#58de41] text-lg">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff8c] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff8c]"></span>
                        </span>
                        <span>Disponible para trabajar</span>
                    </div>

                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            <strong className="text-white">Hola mi nombre es Ezequiel</strong>, soy un programador junior con experiencia en <strong className="text-white">HTML, CSS y JavaScript</strong>.
                            Me encanta crear interfaces atractivas y funcionales, y siempre estoy buscando nuevos desafíos para mejorar mis habilidades.
                        </p>

                        <p>
                            Actualmente estoy aprendiendo tecnologías como <strong className="text-primary">React</strong> para convertirme en un <strong className="text-primary">desarrollador Full Stack</strong>.
                        </p>

                        <p>
                            Además de programar, me interesa la tecnología en general, resolver problemas y aprender constantemente.
                            Disfruto trabajar en equipo y compartir conocimientos.
                        </p>

                        <p>
                            📍 <strong>Ubicación:</strong> Argentina, Córdoba, Pozo del Molle.
                        </p>
                    </div>

                    {/* Botón Descargar CV */}
                    <a
                        href="/EZEQUIEL MILANI.pdf"
                        download
                        className="inline-block mt-6 px-6 py-3.5 bg-primary text-white font-bold rounded-lg shadow-[0_4px_15px_var(--color-Shadow)] hover:bg-primary-hover hover:-translate-y-1 hover:shadow-[0_6px_20px_var(--color-Shadow)] transition-all duration-300"
                    >
                        📄 Descargar CV
                    </a>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
