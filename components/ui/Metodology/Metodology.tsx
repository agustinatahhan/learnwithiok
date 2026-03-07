"use client";

import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineLaptop } from "react-icons/ai";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiBookShelfFill } from "react-icons/ri";
import { PiExam } from "react-icons/pi";
import { RiSpeakAiLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { TbCalendarStats } from "react-icons/tb";
import Image from "next/image";
const items = [
  {
    icon: AiOutlineLaptop,
    title: "100% en vivo",
    description:
      "Clases en línea diseñadas a tu nivel y adaptadas a tus horarios y desde donde estés.",
  },

  {
    icon: LiaChalkboardTeacherSolid,
    title: "Aula Invertida",
    description:
      "Prepara las clases con anticipación para optimizar tu tiempo en el encuentro en vivo.",
  },
  {
    icon: RiBookShelfFill,
    title: "Material",
    description:
      "En línea incluido en plataforma (PDFs descargables, videos, presentaciones de la clase, etc) . Contenido actualizado y adaptado según tus objetivos y nivel actual.",
  },
  {
    icon: PiExam,
    title: "Evaluación Continua",
    description:
      "Retroalimentación constante y personalizada al final de cada clase. Test en línea estratégicos para medir tu evolución.",
  },
  {
    icon: RiSpeakAiLine,
    title: "Método Comunicativo",
    description:
      "Tiempo en clase dedicado a la práctica oral guiada e interacción en entorno colaborativo.",
  },
  {
    icon: HiOutlineUsers,
    title: "Comunidad Exclusiva",
    description:
      "Acceso a un grupo de WhatsApp y plataforma donde puedes practicar con otros alumnos y resolver dudas fuera de horario",
  },
];

export default function Metodology() {
  return (
    <section className="bg-linear-to-r from-violet/30 to-blue/30 padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 md:mb-14 text-start flex items-center justify-center gap-1 md:gap-4 lg:gap-6">
            <TbCalendarStats
              color="#9579b6"
              className="inline text-4xl md:text-5xl lg:text-7xl shrink-0"
            />
            Tu ritmo, tus reglas{" "}
          </h2>
          <p className="text-text/80 ">
            <strong className="text-lg md:text-xl">
              ¿Cansado de los métodos rígidos?
            </strong>{" "}
            En este espacio, vos tenés el control. Implementamos la metodología
            de flipped classroom (clase invertida): preparás el contenido de
            manera autónoma a tus propios tiempos y usamos nuestros encuentros
            en vivo exclusivamente para que te sueltes a hablar. Combinamos
            sesiones dinámicas con la flexibilidad que buscás para aprender a tu
            manera.
            <br />
            Desarrollá <strong>tu pensamiento crítico</strong>, ganá{" "}
            <strong>seguridad</strong> y prepárate para que el futuro te
            encuentre hablando un <strong>inglés fluido.</strong>
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
              <p className="text-text/80 ">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h4 className="text-center flex items-center justify-center flex-wrap text-blue leading-tight">
            <span>El mundo te espera y con</span>

            <Image
              src="/images/logo/logofooter.png"
              alt="iok"
              width={100}
              height={100}
              className="inline-block w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-1"
            />
            <span>te ayudamos a conquistarlo.</span>
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
