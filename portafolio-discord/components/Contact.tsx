'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contacto" className="w-full max-w-[1050px] px-6 py-24 scroll-mt-24 mb-20">

            <div className="flex flex-col md:flex-row gap-12 items-start justify-between">

                {/* Lado Izquierdo: Información */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className="text-4xl font-heading font-bold text-primary mb-6">📬 ¡Contáctame!</h2>
                    <p className="text-xl text-subtext mb-8 leading-relaxed">
                        Estoy abierto a nuevas oportunidades, ideas o proyectos.<br />
                        ¡No dudes en escribirme!
                    </p>

                    <div className="flex justify-center md:justify-start gap-6">
                        <a href="tel:+543534014632" aria-label="Llamar" className="text-3xl text-subtext hover:text-primary hover:scale-110 transition-all duration-300">
                            <FaPhone />
                        </a>
                        <a href="https://wa.me/5493534014632" target="_blank" aria-label="WhatsApp" className="text-3xl text-subtext hover:text-[#25D366] hover:scale-110 transition-all duration-300">
                            <FaWhatsapp />
                        </a>
                        <a href="mailto:ezemilani2016@gmail.com" aria-label="Email" className="text-3xl text-subtext hover:text-red-500 hover:scale-110 transition-all duration-300">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* Lado Derecho: Formulario Estilo Discord */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full bg-sidebar p-8 rounded-2xl shadow-2xl border border-white/5"
                >
                    <form className="flex flex-col gap-5">

                        {/* Nombre */}
                        <div>
                            <label htmlFor="nombre" className="block text-xs font-bold text-subtext uppercase tracking-wide mb-2">Tu nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                placeholder="Ej. Juan Pérez"
                                required
                                className="w-full bg-[#1e1f22] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-subtext uppercase tracking-wide mb-2">Tu correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="nombre@ejemplo.com"
                                required
                                className="w-full bg-[#1e1f22] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>

                        {/* País */}
                        <div>
                            <label htmlFor="pais" className="block text-xs font-bold text-subtext uppercase tracking-wide mb-2">País</label>
                            <select
                                id="pais"
                                required
                                className="w-full bg-[#1e1f22] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none cursor-pointer"
                            >
                                <option value="" disabled selected>Selecciona tu país</option>
                                <option value="argentina">Argentina</option>
                                <option value="chile">Chile</option>
                                <option value="mexico">México</option>
                                <option value="colombia">Colombia</option>
                                <option value="españa">España</option>
                                <option value="peru">Perú</option>
                                <option value="uruguay">Uruguay</option>
                                <option value="otros">Otro</option>
                            </select>
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label htmlFor="mensaje" className="block text-xs font-bold text-subtext uppercase tracking-wide mb-2">Mensaje</label>
                            <textarea
                                id="mensaje"
                                rows={5}
                                placeholder="Escribe tu mensaje aquí..."
                                required
                                className="w-full bg-[#1e1f22] text-white p-3 rounded-lg border border-transparent focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            ></textarea>
                        </div>

                        {/* Botón Enviar */}
                        <button
                            type="submit"
                            className="mt-2 w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FaPaperPlane /> Enviar Mensaje
                        </button>

                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
