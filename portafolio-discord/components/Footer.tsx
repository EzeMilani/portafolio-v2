import { FaInstagram, FaDiscord, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-sidebar border-t border-white/5 py-8 mt-auto">
            <div className="max-w-[1050px] mx-auto px-6 flex flex-col items-center gap-4">

                <p className="text-subtext text-center">
                    © 2025 Ezequiel Milani. Todos los derechos reservados.
                </p>

                <div className="flex gap-6 mt-2">
                    <a href="https://www.instagram.com/ezemilani/" target="_blank" aria-label="Instagram" className="text-2xl text-subtext hover:text-[#E1306C] hover:scale-125 transition-all">
                        <FaInstagram />
                    </a>
                    <a href="#" target="_blank" aria-label="Discord" className="text-2xl text-subtext hover:text-[#5865F2] hover:scale-125 transition-all">
                        <FaDiscord />
                    </a>
                    <a href="https://github.com/EzeMilani" target="_blank" aria-label="GitHub" className="text-2xl text-subtext hover:text-white hover:scale-125 transition-all">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ezequiel-milani-840763309/" target="_blank" aria-label="LinkedIn" className="text-2xl text-subtext hover:text-[#0A66C2] hover:scale-125 transition-all">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:ezemilani2016@gmail.com" aria-label="Email" className="text-2xl text-subtext hover:text-red-500 hover:scale-125 transition-all">
                        <FaEnvelope />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
