"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Phone, MapPin } from "lucide-react";

const schedule = [
    { day: "Lunes", slots: ["09:00 AM", "11:00 AM", "03:00 PM"] },
    { day: "Martes", slots: ["10:00 AM", "02:00 PM", "04:00 PM"] },
    { day: "Miérc", slots: ["09:00 AM", "11:00 AM", "05:00 PM"] },
    { day: "Jueves", slots: ["08:00 AM", "10:00 AM", "02:00 PM"] },
    { day: "Viernes", slots: ["09:00 AM", "01:00 PM"] },
];

export const Contact = () => {
    const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);

    const handleWhatsAppRedirect = () => {
        if (!selectedSlot) return;

        // Format: Hola Carla, me interesa agendar una consulta para el Lunes a las 09:00 AM
        const message = `Hola Carla, me interesa agendar una consulta para el ${selectedSlot.day} a las ${selectedSlot.time}.`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "584243687685";

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Background blob */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-sage/5 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Info & Context */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-brand-sage/10 text-brand-sage font-medium text-sm mb-6 uppercase tracking-wider">
                            Contacto
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                            Empieza tu proceso de cambio hoy.
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            Sé que dar el primer paso no es fácil. Estoy aquí para acompañarte.
                            Selecciona un horario tentativo que te convenga y conversemos por WhatsApp para confirmar tu cita en mi consultorio en Maracay o vía online.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-cream rounded-xl text-brand-sage">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-gray-900 text-lg">Consultorio Presencial</h4>
                                    <p className="text-gray-600">Av. Las Delicias, Centro Empresarial Europa, Maracay, Aragua.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-cream rounded-xl text-brand-sage">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-gray-900 text-lg">Contacto Directo</h4>
                                    <p className="text-gray-600">+58 424 383 0191</p>
                                    <p className="text-sm text-gray-500">Respondemos en menos de 24 horas.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Calendar */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-brand-cream/50 p-8 rounded-[2.5rem] border border-brand-sage/10 relative"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Calendar className="text-brand-sage" size={24} />
                            <h3 className="font-serif font-bold text-2xl text-gray-900">Disponibilidad Semanal</h3>
                        </div>

                        <div className="space-y-6">
                            {schedule.map((dayPlan) => (
                                <div key={dayPlan.day} className="space-y-3">
                                    <h4 className="font-medium text-gray-900 ml-1">{dayPlan.day}</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {dayPlan.slots.map((time) => {
                                            const isSelected = selectedSlot?.day === dayPlan.day && selectedSlot?.time === time;
                                            return (
                                                <button
                                                    key={`${dayPlan.day}-${time}`}
                                                    onClick={() => setSelectedSlot({ day: dayPlan.day, time })}
                                                    className={`
                            px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border cursor-pointer
                            ${isSelected
                                                            ? "bg-brand-sage text-white border-brand-sage shadow-md transform scale-105"
                                                            : "bg-white text-gray-600 border-white hover:border-brand-sage/50 hover:text-brand-sage"}
                          `}
                                                >
                                                    {time}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Floating Action within the card */}
                        <AnimatePresence>
                            {selectedSlot && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="mt-8 pt-6 border-t border-gray-200"
                                >
                                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <Clock size={20} className="text-brand-sage" />
                                            <span className="text-sm font-medium text-gray-700">
                                                {selectedSlot.day} - {selectedSlot.time}
                                            </span>
                                        </div>
                                        <button
                                            onClick={handleWhatsAppRedirect}
                                            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2.5 rounded-full font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <Phone size={18} />
                                            Confirmar Cita
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};
