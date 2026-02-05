"use client";

import { motion } from "framer-motion";
import { Brain, Heart, Users, Sparkles } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Terapia Individual",
        description: "Espacio seguro para explorar tus emociones, manejar la ansiedad y fortalecer tu autoestima en Maracay.",
        icon: Brain,
        colSpan: "md:col-span-2",
        delay: 0.1,
    },
    {
        id: 2,
        title: "Terapia de Pareja",
        description: "Reconstruye la comunicación y la confianza. Herramientas prácticas para mejorar la convivencia.",
        icon: Heart,
        colSpan: "md:col-span-1",
        delay: 0.2,
    },
    {
        id: 3,
        title: "Ansiedad y Estrés",
        description: "Técnicas cognitivo-conductuales para gestionar el estrés y recuperar tu paz mental.",
        icon: Sparkles,
        colSpan: "md:col-span-1",
        delay: 0.3,
    },
    {
        id: 4,
        title: "Crecimiento Personal",
        description: "Descubre tu potencial y define tu propósito de vida con acompañamiento profesional.",
        icon: Users,
        colSpan: "md:col-span-2",
        delay: 0.4,
    },
];

export const ServicesGrid = () => {
    return (
        <section id="services" className="py-24 bg-brand-cream/50 relative">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-4 rounded-full bg-brand-sage/10 text-brand-sage font-medium text-sm mb-4 uppercase tracking-wider"
                    >
                        Mis Servicios
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
                    >
                        Acompañamiento Profesional en Maracay
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600"
                    >
                        Enfoque integral para tu bienestar mental y emocional.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                    {services.map((service) => (
                        <motion.article
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between group ${service.colSpan}`}
                        >
                            <div>
                                <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-sage mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-brand-sage transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-sans">
                                    {service.description}
                                </p>
                            </div>

                            <div className="mt-8 flex items-center text-brand-sage font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                <span>Más información</span>
                                <span className="ml-2">→</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
