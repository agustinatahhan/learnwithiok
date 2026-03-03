"use client";

import {
  HiOutlineComputerDesktop,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentCheck,
  HiOutlineAcademicCap,
  HiOutlinePresentationChartLine,
  HiOutlineUsers,
} from "react-icons/hi2";
import { motion } from "framer-motion";

const items = [
  {
    icon: HiOutlineComputerDesktop,
    title: "100% Online en vivo",
    description:
      "Clases diseñadas exclusivamente para vos, sin traslados y aprovechando al máximo las herramientas digitales.",
  },

  {
    icon: HiOutlineAcademicCap,
    title: "Flipped Classroom",
    description:
      "(Aula Invertida) Optimiza tu tiempo: prepara los temas con contenido previo para que el encuentro en vivo sea 100% práctico y participativo.",
  },
  {
    icon: HiOutlineDocumentCheck,
    title: "Material",
    description:
      "Contenido actualizado y relevante según tus objetivos (profesionales o personales) y adaptado exactamente a tu nivel actual.",
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Feedback y Seguimiento",
    description:
      "Monitoreo constante y personalizado de tu evolución . A través de mini-tests estratégicos, mediremos tu progreso real en cada etapa.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Método Comunicativo",
    description:
      "Basado en el aprendizaje cooperativo y colaborativo. El foco está en que hables y te expreses con confianza desde el primer día.",
  },
  {
    icon: HiOutlineUsers,
    title: "Comunidad Exclusiva",
    description:
      "Acceso a un grupo de WhatsApp o plataforma donde puedes practicar con otros alumnos y resolver dudas fuera de horario",
  },
];

export default function Metodology() {
  return (
    <section className="bg-linear-to-r from-violet/30 to-blue/30 padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* <p className="text-blue text-sm font-semibold uppercase tracking-widest mb-3">
            Metodología
          </p> */}
          <h2 className="mb-6">Tu ritmo, tus reglas</h2>
          <p className="text-text/80 leading-relaxed">
            ¿Cansado de los métodos rígidos? Aquí tú llevas el volante.
            Fusionamos la energía de nuestras clases en vivo con la libertad de
            tu estudio autónomo para que empieces a vivir el idioma. Desarrolla
            un pensamiento crítico, gana una seguridad de acero al hablar y
            prepárate para abrir las puertas que el mundo tiene para ti. Si
            buscas resultados reales sin perder tu esencia, estás en el lugar
            correcto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm flex flex-col gap-5 "
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
              <p className="text-text/80 leading-snug">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
