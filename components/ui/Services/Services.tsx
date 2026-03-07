"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TfiWrite } from "react-icons/tfi";

const items = [
  {
    img: "/images/services/clase1.png",
    title: "Sesión Individual",
    badge: "1:1",
    description: "Clases 1:1 adaptadas a tu nivel, ritmo y objetivos.",
    label: "Ideales si:",
    bullets: [
      "Querés avanzar más rápido",
      "Necesitás preparación específica",
      "Buscás acompañamiento personalizado",
      "Querés trabajar bloqueos al hablar",
    ],
  },
  {
    img: "/images/services/grupal.png",
    title: "Inglés General Grupal",
    badge: "Grupos",
    description: "Máximo 6 personas, ambiente cálido y participativo.",
    label: "Ideales si:",
    bullets: [
      "Te motiva aprender con otros",
      "Querés practicar conversación real",
      "Buscás una opción más accesible",
      "Querés sentir comunidad mientras aprendés",
    ],
  },
  {
    img: "/images/services/conversacion.png",
    title: "Club de Conversación",
    badge: "Coversación",
    description:
      "Grupos máximo 6 personas. \nNiveles: intermedio A2/B1, avanzado B1+/B2",
    label: "Clases enfocadas en:",
    bullets: [
      "Conversaciones reales",
      "Pronunciación",
      "Temas actuales",
      "Expresiones y vocabulario",
      "Mejorar tu fluidez",
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
    title: "Preparación para Exámenes",
    badge: "Exámenes",
    description:
      "IELTS y Cambridge. \nNiveles: intermedio A2/B1, avanzado B1+/B2",
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
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 md:mb-14 flex items-start md:items-center justify-center gap-1 md:gap-4 lg:gap-6">
            <TfiWrite
              color="#9579b6"
              className="inline text-4xl md:text-5xl lg:text-7xl shrink-0"
            />
            Elegí tu experiencia de aprendizaje
          </h2>
          <p className="text-text/80 ">
            Diseñamos la experiencia que mejor se adapte a tu estilo de vida
            para que empieces a hablar inglés con seguridad desde el primer día.
            Vos ponés el objetivo, nosotros el plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map(
            ({ img, title, badge, description, label, bullets }, index) => (
              <motion.div
                key={title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-60">
                  <Image src={img} alt={title} fill className="object-cover" />
                  <span className="absolute top-3 left-3 bg-linear-to-r from-blue to-violet text-white text-sm font-semibold w-24 py-1 flex items-center justify-center rounded-full shadow-sm">
                    {badge}
                  </span>
                </div>

                <div className="flex flex-col gap-6 p-5 flex-1">
                  <div>
                    <h4 className="text-blue">{title}</h4>
                  </div>
                  <div>
                    <p className="font-normal whitespace-pre-line">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue/20">
                    <p className=" lg:text-[18px]  mb-3">{label}</p>
                    <ul className="flex flex-col gap-1.5">
                      {bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 lg:text-[18px]"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue/40 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
