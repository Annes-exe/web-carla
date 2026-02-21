"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Sobre Mí", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
                    Carla Alvarez
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-brand-sage transition-colors font-medium relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brand-sage transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link href="#contact" className="inline-block relative z-50 bg-brand-sage text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-[#7d938a] transition-all transform hover:-translate-y-0.5 cursor-pointer active:scale-95">
                        Reservar Cita
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-800 focus:outline-none p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-cream/95 backdrop-blur-md overflow-hidden border-b border-gray-200"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-gray-800 hover:text-brand-sage"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-brand-sage text-white px-8 py-3 rounded-full font-medium shadow-md w-3/4 text-center block mx-auto">
                                Reservar Cita
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
