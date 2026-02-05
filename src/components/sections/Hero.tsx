"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-28 pb-16 md:pt-32 relative overflow-hidden bg-brand-cream">
            {/* Background Decorative Blob */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-sage/10 rounded-full blur-3xl opacity-70 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-ash/10 rounded-full blur-3xl opacity-70 pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-brand-sage/10 text-brand-sage font-medium text-sm mb-6 uppercase tracking-wider">
                        Psicología Clínica & Bienestar
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        Encuentra el equilibrio y la <span className="text-brand-sage">paz interior</span> que mereces.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Un espacio seguro para tu crecimiento personal. Terapia profesional enfocada en ansiedad, autoestima y relaciones.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-brand-sage text-white px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl hover:bg-[#7d938a] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer">
                            Agendar Consulta
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3.5 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-all cursor-pointer">
                            Conoce más
                        </button>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-gray-100 border-4 border-white">
                        {/* Placeholder for now - normally would use next/image */}
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/20 to-brand-ash/20" />
                            <span className="relative text-lg font-medium text-gray-500">Retrato Profesional</span>
                        </div>
                    </div>

                    {/* Floater Element */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden sm:block"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                                5+
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold leading-tight">Años de experiencia</p>
                                <p className="text-gray-500 text-sm">Ayudando a pacientes</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
