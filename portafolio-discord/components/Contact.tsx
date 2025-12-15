'use client';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contacto" className="w-full max-w-[1200px] px-[20px] py-[80px] scroll-mt-[85px] flex flex-col items-center">

            <div className="contacto-contenido flex flex-wrap justify-center items-start gap-[50px] w-full max-w-[1200px] mx-auto">

                {/* Lado Izquierdo: Texto e Información */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contacto-texto flex-1 min-w-[300px] text-center max-w-[500px]"
                >
                    <h2 className="text-[2.8rem] font-sans font-bold text-primary mb-[25px]">📬 ¡Contáctame!</h2>
                    <p className="text-[1.3rem] text-subtext leading-[1.8] mb-[35px] font-sans">
                        Estoy abierto a nuevas oportunidades, ideas o proyectos.<br />
                        ¡No dudes en escribirme!
                    </p>

                    <div className="redes-contacto flex justify-center gap-[25px] mt-[20px]">
                        <a href="tel:+543534014632" aria-label="Llamar" className="text-[2.2rem] text-subtext hover:text-primary hover:scale-[1.3] transition-all duration-300">
                            <FaPhone />
                        </a>
                        <a href="https://wa.me/5493534014632" target="_blank" aria-label="WhatsApp" className="text-[2.2rem] text-subtext hover:text-primary hover:scale-[1.3] transition-all duration-300">
                            <FaWhatsapp />
                        </a>
                        <a href="mailto:ezemilani2016@gmail.com" aria-label="Email" className="text-[2.2rem] text-subtext hover:text-primary hover:scale-[1.3] transition-all duration-300">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* Lado Derecho: Formulario */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="form-contacto bg-sidebar p-[40px] rounded-[16px] shadow-[0_8px_30px_var(--color-Shadow)] flex flex-col gap-[20px] hover:-translate-y-[10px] transition-transform duration-300 flex-1 min-w-[300px] max-w-[600px] w-full"
                >

                    {/* Nombre */}
                    <div>
                        <label htmlFor="nombre" className="block text-[0.9rem] text-subtext mb-[5px] font-sans">Tu nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Tu nombre"
                            required
                            className="w-full bg-[#1e1f22] text-white text-[1.1rem] p-[16px] rounded-[12px] border border-[#40444B] shadow-inner focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,255,42,0.3)] transition-all font-sans"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-[0.9rem] text-subtext mb-[5px] font-sans">Tu correo electrónico:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Tu correo electrónico"
                            required
                            className="w-full bg-[#1e1f22] text-white text-[1.1rem] p-[16px] rounded-[12px] border border-[#40444B] shadow-inner focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,255,42,0.3)] transition-all font-sans"
                        />
                    </div>

                    {/* País */}
                    <div>
                        <label htmlFor="pais" className="block text-[0.9rem] text-subtext mb-[5px] font-sans">Selecciona tu país:</label>
                        <select
                            id="pais"
                            required
                            className="w-full bg-[#1e1f22] text-white text-[1.1rem] p-[16px] rounded-[12px] border border-[#40444B] shadow-inner focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,255,42,0.3)] cursor-pointer transition-all appearance-none font-sans"
                            style={{
                                backgroundImage: `url('data:image/svg+xml;utf8,<svg fill="%23B9BBBE" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right 15px center',
                                backgroundSize: '18px'
                            }}
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
                        <label htmlFor="mensaje" className="block text-[0.9rem] text-subtext mb-[5px] font-sans">Tu mensaje:</label>
                        <textarea
                            id="mensaje"
                            rows={5}
                            placeholder="Tu mensaje"
                            required
                            className="w-full bg-[#1e1f22] text-white text-[1.1rem] p-[16px] rounded-[12px] border border-[#40444B] shadow-inner focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,255,42,0.3)] transition-all resize-none font-sans"
                        ></textarea>
                    </div>

                    {/* Botón Enviar */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold text-[1.2rem] p-[18px] rounded-[12px] shadow-[0_4px_15px_var(--color-Shadow)] hover:bg-[#2763ad] hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--color-Shadow)] transition-all duration-300 font-sans"
                    >
                        Enviar mensaje
                    </button>

                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
