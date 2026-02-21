"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
    id: number;
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "¿Cuánto dura cada sesión?",
        answer: "Las sesiones tienen una duración de entre 45 y 90 minutos. Este tiempo está diseñado para trabajar profundamente en tus objetivos terapéuticos sin generar fatiga mental.",
    },
    {
        id: 2,
        question: "¿Atiendes presencial en Maracay o solo online?",
        answer: "Ofrezco ambas modalidades. Atiendo de forma presencial en mi consultorio ubicado en el B. Independencia calle B, local 1 y también realizo consultas online a través de Google Meet o Zoom para pacientes fuera de la ciudad, fuera del país o que prefieran esta opción.",
    },
    {
        id: 3,
        question: "¿Trabajas con niños o solo con adultos?",
        answer: "Mi enfoque clínico está especializado en adultos y adolescentes. Para el tratamiento de niños, suelo referir a colegas especialistas en psicología infantil para garantizar la mejor atención posible para los pequeños.",
    },
];

export const FAQ = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 bg-brand-cream/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-brand-sage/10 text-brand-sage font-medium text-sm mb-4 uppercase tracking-wider">
                        Dudas Frecuentes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        Preguntas que quizás te haces
                    </h2>
                    <p className="text-lg text-gray-600">
                        Es normal tener dudas antes de empezar. Aquí respondo las más comunes.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                            >
                                <span className={`font-serif text-xl font-bold transition-colors ${openId === faq.id ? "text-brand-sage" : "text-gray-900"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${openId === faq.id ? "bg-brand-sage text-white" : "bg-gray-100 text-gray-500"}`}>
                                    {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openId === faq.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
