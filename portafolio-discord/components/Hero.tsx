'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="inicio" className="w-full max-w-6xl mx-auto px-6 py-20 md:py-32 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-sidebar rounded-3xl p-8 md:p-12 flex flex-col-reverse md:flex-row gap-12 items-center shadow-[0_0_40px_rgba(74,144,226,0.15)] border border-white/5 w-full"
            >

                {/* Lado Izquierdo: Información */}
                <div className="flex-1 text-left space-y-6">
                    {/* Estado */}
                    <div className="inline-flex items-center gap-2 bg-[#1A1A2E] px-4 py-2 rounded-full border border-green-500/30">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        {/* PRUEBA DE FUEGO: Color Rojo */}
                        <span className="text-red-500 font-semibold text-sm tracking-wide">Disponible para trabajar</span>
                    </div>

                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Hola, soy <strong className="text-white text-xl">Ezequiel</strong>. Soy un programador junior especializado en <strong className="text-primary">HTML, CSS y JavaScript</strong>.
                        </p>
                        <p>
                            Actualmente estoy profundizando en el ecosistema <strong className="text-white">React & Next.js</strong> para consolidarme como desarrollador Full Stack.
                        </p>
                        <p className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                            <span>📍</span> Córdoba, Argentina
                        </p>
                    </div>

                    {/* BOTÓN CV CORREGIDO */}
                    <div className="pt-4">
                        <a
                            href="/EZEQUIEL MILANI.pdf"
                            download
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-blue-600 hover:scale-105 hover:shadow-primary/50 transition-all duration-300 transform"
                        >
                            <span>📄</span>
                            <span>Descargar CV</span>
                        </a>
                    </div>
                </div>

                {/* Lado Derecho: Foto */}
                <div className="relative group shrink-0">
                    {/* Efecto de brillo detrás de la foto */}
                    <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>

                    <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl">
                        <Image
                            src="/Img/perfil.jpg"
                            alt="Ezequiel Milani"
                            width={320}
                            height={320}
                            priority
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Hero;
