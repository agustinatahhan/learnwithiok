"use client";

import {
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineComputerDesktop,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { motion } from "framer-motion";

const items = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Confianza total",
    text: "Pierde el miedo a hablar y cometer errores. Suéltate y comunícate con seguridad desde el día uno.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Pronunciación natural",
    text: "Aprende a hablar con una dicción clara y auténtica para que te entiendan sin esfuerzo en cualquier conversación.",
  },
  {
    icon: HiOutlineBriefcase,
    title: "Inglés para el mundo real",
    text: "Domina el idioma que necesitas para viajar, trabajar internacionalmente y conectarte con personas de todo el mundo.",
  },
  {
    icon: HiOutlineComputerDesktop,
    title: "Entorno seguro y motivador",
    text: "Un espaci de aprendizaje sin juicios, diseñado para aprender, reír y crecer juntos, donde equivocarse es parte del éxito.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Proceso visible clase a clase",
    text: "Resultados tangibles. Sentirás cómo tu nivel avanza y tu fluidez mejora semana tras semana.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    title: "Metas alcanzadas",
    text: "Consigue tus objetivos, ya sea un examen, entrevista de trabajo o simplemente sentirte bilingüe.",
  },
];

export default function Audience() {
  return (
    <section className="bg-linear-to-r from-violet/20 to-blue/20 padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 md:mb-14 text-center">Lo que lograrás después de las clases</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }, index) => (
            <motion.div
              key={title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm flex flex-col gap-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="flex flex-row gap-3 items-center justify-start mb-1">
                <div className="w-12 h-12 rounded-xl bg-blue/10 flex items-center justify-center">
                  <Icon size={32} className="text-blue" />
                </div>
                <h4>{title}</h4>
              </div>
              <p className="text-text/80 leading-snug">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* <motion.p
          className="italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          ¡No importa tu punto de partida. Importa que quieras avanzar!
        </motion.p> */}
      </div>
    </section>
  );
}
