'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    const experienceData = [
        {
            year: "2020 - Actualidad",
            title: "Actualmente trabajando en PAUNY S.A",
            location: "Las Varillas, Córdoba, Argentina."
        }
    ];

    return (
        <section id="experiencia" className="w-full max-w-[1050px] px-[20px] py-[40px] scroll-mt-[85px] text-center">
            {/* Título - USANDO INTER (font-sans) */}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2.5rem] font-sans font-bold text-primary text-center mb-[1.5rem]"
            >
                Experiencias
            </motion.h2>

            <div className="flex flex-col gap-[20px]">
                {experienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="education-item bg-sidebar p-[25px] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:-translate-y-[8px] hover:shadow-[0_10px_25px_var(--color-Shadow)] transition-all duration-300 text-left"
                    >
                        <h3 className="text-[1.6rem] font-sans font-bold text-primary mb-[10px]">
                            {item.title}
                        </h3>
                        <p className="text-subtext text-[1rem] mb-[5px] font-sans leading-[1.8]">
                            {item.year}
                        </p>
                        <div className="location flex items-center gap-[5px] text-[0.9rem] text-subtext mt-[5px]">
                            <FaMapMarkerAlt className="text-primary text-[0.9rem]" />
                            <span>Ubicación: {item.location}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
