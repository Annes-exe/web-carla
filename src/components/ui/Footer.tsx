"use client";

import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight mb-4 block">
                            Carla Alvarez
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Acompañandote en tu proceso de crecimiento personal y bienestar emocional.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-brand-sage">Explorar</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-white transition-colors">Sobre Mí</Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-white transition-colors">Servicios</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-white transition-colors">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-brand-sage">Contacto</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <Instagram size={20} />
                                <a href="https://www.instagram.com/psienestar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    @psienestar
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} />
                                <span>+58 424 383 0191</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} />
                                <a href="mailto: psienestar@gmail.com" className="hover:text-white transition-colors">
                                    psienestar@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Psicóloga Carla Alvarez. Todos los derechos reservados.</p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <Link href="/privacy" className="hover:text-gray-300 transition-colors">Política de Privacidad</Link>
                        <Link href="/terms" className="hover:text-gray-300 transition-colors">Términos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
