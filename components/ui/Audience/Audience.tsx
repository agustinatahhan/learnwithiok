"use client";

import { ImUserCheck } from "react-icons/im";
import { RiChatCheckLine } from "react-icons/ri";
import { TbWorldCheck } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { LuBookOpenCheck } from "react-icons/lu";
import { GrAchievement } from "react-icons/gr";

import { motion } from "framer-motion";

const items = [
  {
    icon: ImUserCheck,
    // title: "Confianza total",
    text: "Confianza y autonomía al expresante en inglés",
  },
  {
    icon: RiChatCheckLine,
    // title: "Pronunciación natural",
    text: "Uso de estructuras consciente y mejor pronunciación",
  },
  {
    icon: TbWorldCheck,
    // title: "Inglés para el mundo real",
    text: "Dominar el inglés en entornos multiculturales",
  },
  {
    icon: FaPeopleRoof,
    // title: "Entorno seguro y motivador",
    text: "Sentirte en un lugar seguro y motivador",
  },
  {
    icon: LuBookOpenCheck,
    // title: "Proceso visible clase a clase",
    text: "Notarás tu progreso con resultados tangibles",
  },
  {
    icon: GrAchievement,
    // title: "Metas alcanzadas",
    text: "Pensar en inglés sin que se sienta como “estudiar”",
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
          <h2 className="mb-10 md:mb-14 text-center">¿Qué lograrás con las clases?</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon,  text }, index) => (
            <motion.div
              key={index}
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
              <div className="flex flex-row gap-3 items-center justify-center mb-1">
                <div className="flex items-center justify-center">
                  <Icon size={50} className="text-blue" />
                </div>
                {/* <h4>{title}</h4> */}
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
