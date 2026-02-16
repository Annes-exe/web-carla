"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Quote } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-ash/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group perspective-1000"
                    >
                        {/* Image Container with Placeholder */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] md:aspect-auto md:h-[600px] border-4 border-brand-cream bg-gray-100 transform transition-transform duration-500 hover:rotate-1">
                            {/* Placeholder UI */}
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-gray-400">
                                <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 animate-pulse" />
                                <span className="text-lg font-medium">Foto Profesional</span>
                                <span className="text-sm mt-2 font-light italic text-gray-400">(Pendiente)</span>
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Floating Credential Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[200px] border border-white"
                        >
                            <p className="text-brand-sage font-bold text-sm uppercase tracking-wide mb-1">Especialidad</p>
                            <p className="text-gray-800 text-xs font-medium leading-relaxed">
                                Terapia Cognitivo Conductual & Gestión Emocional
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-brand-ash/10 text-brand-ash font-medium text-sm mb-6 uppercase tracking-wider">
                            Sobre Mí
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                            Más que una terapeuta, soy tu aliada en el camino.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 mb-8 min-h-[100px]">
                            <p>
                                Mi enfoque se basa en la empatía radical y la evidencia científica. En mi consulta, encontrarás un espacio libre de juicios donde trabajaremos objetivos claros y alcanzables.
                            </p>
                            <p>
                                Creo firmemente que la salud mental no es un destino, sino una práctica diaria de autoconocimiento y compasión.
                            </p>
                        </div>

                        {/* Credentials List */}
                        <div className="space-y-4 mb-10">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-brand-cream rounded-lg text-brand-sage mt-1">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Licenciada en Psicología</h4>
                                    <p className="text-sm text-gray-500">Universidad Bicentenaria de Aragua (UBA)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-brand-cream rounded-lg text-brand-sage mt-1">
                                    <BookOpen size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Maestría en Psicología Conductual</h4>
                                    <p className="text-sm text-gray-500">En curso - CIPPSV</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote Block */}
                        <div className="relative p-6 bg-brand-cream/30 rounded-2xl border-l-4 border-brand-sage">
                            <Quote className="absolute top-4 left-4 text-brand-sage/20 w-8 h-8" />
                            <p className="text-gray-700 italic relative z-10 pl-2">
                                &quot;Amo mi profesión porque no hay nada más gratificante que ver a una persona recuperar su luz propia y tomar las riendas de su vida.&quot;
                            </p>
                            <p className="text-right text-brand-sage font-bold text-sm mt-3">— Carla Alvarez</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
