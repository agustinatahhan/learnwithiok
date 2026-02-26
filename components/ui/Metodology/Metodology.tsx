"use client";

import {
  HiOutlineComputerDesktop,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentCheck,
  HiOutlineAcademicCap,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";
import { motion } from "framer-motion";

const items = [
  {
    icon: HiOutlineComputerDesktop,
    title: "100% Online y Personalizado",
    description:
      "Clases diseñadas exclusivamente para vos, sin traslados y aprovechando al máximo las herramientas digitales.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    title: "Enfoque en Fluidez",
    description:
      "Basado en el método comunicativo: el objetivo es que hables y te expreses con confianza en situaciones reales.",
  },
  {
    icon: HiOutlineDocumentCheck,
    title: "Material Adaptado",
    description:
      "Contenido actualizado y relevante según tus objetivos específicos, ya sean profesionales o personales.",
  },
  {
    icon: HiOutlinePresentationChartLine,
    title: "Feedback y Seguimiento",
    description:
      "Monitoreo constante de tu progreso con devoluciones constructivas para que veas tu evolución real paso a paso.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Flipped Classroom",
    description:
      "Metodología de 'clase invertida' para optimizar el tiempo de encuentro y potenciar tu aprendizaje autónomo.",
  },
];

export default function Metodology() {
  return (
    <section className="bg-linear-to-r from-blue/30 via-pink/30 to-violet/30 padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-violet text-sm font-semibold uppercase tracking-widest mb-3">
            Metodología
          </p>
          <h2 className="mb-6">¿Qué me diferencia?</h2>
          <p className="text-text/80 leading-relaxed">
            Un enfoque <strong>moderno, dinámico y centrado en vos</strong>. <br />
            Mis clases combinan comunicación real con una metodología basada en
            la investigación sobre la adquisición de segundas lenguas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm flex flex-col gap-5 hover:shadow-md transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center">
                <Icon size={28} className="text-violet" />
              </div>
              <div>
                <h4 className="mb-3">{title}</h4>
                <p className="text-text/80 leading-snug">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}