'use client';
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer w-full bg-sidebar text-center p-[25px] mt-auto border-t border-shadow">
            <p className="text-subtext leading-[1.8] mb-[1rem] text-[1.1rem]">
                © 2025 Ezequiel Milani. Todos los derechos reservados.
            </p>
            <div className="footer-redes mt-[15px] flex justify-center">
                <a
                    href="https://www.instagram.com/ezemilani/"
                    target="_blank"
                    aria-label="Instagram"
                    className="inline-block text-subtext mx-[12px] text-[2.2rem] transition-all duration-300 hover:text-primary hover:scale-[1.3]"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://discord.com/invite/tu_invitacion"
                    target="_blank"
                    aria-label="Discord"
                    className="inline-block text-subtext mx-[12px] text-[2.2rem] transition-all duration-300 hover:text-primary hover:scale-[1.3]"
                >
                    <FaDiscord />
                </a>
                <a
                    href="https://github.com/EzeMilani"
                    target="_blank"
                    aria-label="GitHub"
                    className="inline-block text-subtext mx-[12px] text-[2.2rem] transition-all duration-300 hover:text-primary hover:scale-[1.3]"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/ezequiel-milani-840763309/"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="inline-block text-subtext mx-[12px] text-[2.2rem] transition-all duration-300 hover:text-primary hover:scale-[1.3]"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:ezemilani2016@gmail.com"
                    aria-label="Enviar correo electrónico"
                    className="inline-block text-subtext mx-[12px] text-[2.2rem] transition-all duration-300 hover:text-primary hover:scale-[1.3]"
                >
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
