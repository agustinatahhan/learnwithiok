"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    img: "/images/services/individual.jpg",
    title: "Clases Individuales de inglés general",
    badge: "1:1",
    description: "Sesiones totalmente adaptadas a tu nivel, ritmo y objetivos.",
    label: "Ideales si:",
    bullets: [
      "Querés avanzar más rápido",
      "Necesitás preparación específica",
      "Buscás acompañamiento personalizado",
      "Querés trabajar bloqueos al hablar",
    ],
  },
  {
    img: "/images/services/group.png",
    title: "Clases en Grupos Reducidos de inglés general",
    badge: "Grupos",
    description: "Grupos pequeños, ambiente cálido y participativo.",
    label: "Ideales si:",
    bullets: [
      "Te motiva aprender con otros",
      "Querés practicar conversación real",
      "Buscás una opción más accesible",
      "Querés sentir comunidad mientras aprendés",
    ],
  },
   {
    img: "/images/services/conv.jpg",
    title: "Club de Conversación",
    badge: "Coversación",
    description: " Clases 100 % habladas, dinámicas y divertidas para mejorar tu inglés desde el primer minuto.",
    label: "Lo que vas a conseguir:",
    bullets: [
      "Habla real: Conversaciones auténticas como en la vida diaria o el trabajo.",
      "Confianza total: Expresarte sin miedo y con seguridad.",
      "Fluidez rápida: Practica hablar sin pausas ni bloqueos.",
      "Temas actuales: Noticias, cultura, tendencias",
      "Corrección útil: Feedback inmediato y personalizado para mejorar cada día.",
    ],
  },
  {
    img: "/images/services/interview.jpg",
    title: "Inglés para Profesionales",
    badge: "Profesional",
    description:
      "Perfecto si querés crecer profesionalmente o trabajar en el exterior.",
    label: "Clases enfocadas en:",
    bullets: [
      "Reuniones laborales",
      "Presentaciones",
      "Entrevistas de trabajo",
      "Comunicación empresarial",
      "Fluidez en entornos internacionales",
    ],
  },
  {
    img: "/images/services/exam.jpg",
    title: "Preparación para Exámenes - IELTS y Cambridge",
    badge: "Exámenes",
    description: "Preparación personalizada para distintos niveles.",
    label: "Trabajo con:",
    bullets: [
      "Estrategias específicas",
      "Práctica cronometrada",
      "Simulaciones reales",
      "Correcciones detalladas",
    ],
  },
];

export default function Services() {
  return (
    <section className="bg-linear-to-b from-violet/15 to-bg padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Elegí tu experiencia de aprendizaje</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map(({ img, title, badge, description, label, bullets }, index) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-60">
                <Image src={img} alt={title} fill className="object-cover" />
                <span className="absolute top-3 left-3 bg-linear-to-r from-blue to-violet text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {badge}
                </span>
              </div>

              <div className="flex flex-col gap-6 p-5 flex-1">
                <div>
                  <h4>{title}</h4>
                </div>
                <div>
                  <p className="font-normal">{description}</p>
                </div>

                <div className="pt-3 border-t border-blue/20">
                  <p className="text-blue lg:text-[20px] font-bold mb-3">
                    {label}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 lg:text-[20px]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue/40 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}