'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="w-full max-w-[1050px] px-5 py-[90px] flex justify-center scroll-mt-[85px]">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-sidebar rounded-[20px] p-[40px] flex flex-wrap gap-[40px] items-start justify-center shadow-[0_8px_25px_var(--color-Shadow)] hover:-translate-y-[10px] transition-transform duration-300 w-full"
            >

                {/* FOTO (Izquierda) */}
                <div className="relative shrink-0 flex justify-center">
                    <div className="relative w-[280px] h-[280px] group">
                        <Image
                            src="/Img/perfil.jpg"
                            alt="Foto de perfil de Ezequiel Milani"
                            width={280}
                            height={280}
                            priority
                            className="rounded-full object-cover border-[4px] border-primary shadow-[0_0_20px_var(--color-Shadow)] transition-transform duration-300 group-hover:-translate-y-[10px]"
                        />
                    </div>
                </div>

                {/* INFORMACIÓN (Derecha) */}
                <div className="flex-1 min-w-[280px] text-subtext pr-[20px] md:pr-0">
                    {/* Estado */}
                    <div className="flex items-center mb-[1.5rem] font-semibold text-[#58de41] text-[1.1rem]">
                        <span className="w-[12px] h-[12px] bg-[#00ff8c] rounded-full mr-[10px] animate-[pulse_1.5s_infinite] shadow-[0_0_0_0_rgba(0,255,140,0.7)]"></span>
                        <span>Disponible para trabajar</span>
                    </div>

                    <div className="space-y-[1.2rem] text-[1.1rem] leading-[1.8] text-subtext">
                        <p>
                            <strong className="text-white">Hola mi nombre es Ezequiel</strong>, soy un programador junior con experiencia en <strong className="text-white">HTML, CSS y JavaScript</strong>.
                            Me encanta crear interfaces atractivas y funcionales, y siempre estoy buscando nuevos desafíos para mejorar mis habilidades.
                        </p>
                        <p>
                            Actualmente estoy aprendiendo tecnologías como <strong className="text-white">React</strong> para convertirme en un <strong className="text-white">desarrollador Full Stack</strong>.
                        </p>
                        <p>
                            Además de programar, me interesa la tecnología en general, resolver problemas y aprender constantemente.
                            Disfruto trabajar en equipo y compartir conocimientos.
                        </p>
                        <p>
                            📍 <strong className="text-white">Ubicación:</strong> Argentina, Córdoba, Pozo del Molle.
                        </p>
                    </div>

                    {/* BOTÓN CV */}
                    <a
                        href="/EZEQUIEL MILANI.pdf"
                        download
                        className="inline-block mt-[25px] px-[25px] py-[14px] bg-[#4A90E2] text-white no-underline rounded-[8px] font-extrabold shadow-[0_4px_15px_var(--color-Shadow)] transition-all duration-300 text-[1.05rem] hover:scale-105 hover:bg-[#2763ad] hover:shadow-[0_0_25px_var(--color-Shadow)] hover:brightness-110"
                    >
                        📄 Descargar CV
                    </a>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
