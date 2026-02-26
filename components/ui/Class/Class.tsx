"use client";

import {
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import { motion } from "framer-motion";

const inClassActivities = [
  "Practicar conversación.",
  "Resolver dudas concretas.",
  "Aplicar lo aprendido en situaciones reales.",
  "Simular diferentes contextos.",
  "Trabajar la fluidez y seguridad.",
];

const benefits = [
  "Mejora la retención.",
  "Aumenta tu confianza.",
  "Reduce la ansiedad al momento de hablar.",
  "Te otorga autonomía como estudiante.",
];

export default function FlippedClassroom() {
  return (
    <section className="bg-white padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-3">
            <HiOutlineLightBulb className="text-violet" size={24} />
            <p className="text-violet text-sm font-semibold uppercase tracking-widest">
              Modelo de Aprendizaje
            </p>
          </div>
          <h2 className="mb-6">¿Qué es la Clase Invertida?</h2>
          <p className="text-text/80 leading-relaxed">
            Trabajo con el modelo de <strong>Flipped Classroom</strong>. Esto
            significa que el contenido teórico (videos breves, lecturas o
            actividades) se revisa antes de la clase para que, al encontrarnos,
            no perdamos tiempo en explicaciones largas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="flex flex-col gap-6 border border-text/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-pink uppercase tracking-widest">
                01
              </span>
              <h4>Durante la sesión</h4>
            </div>

            <p className="italic">Usamos el encuentro para:</p>

            <ul className="space-y-3">
              {inClassActivities.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <HiOutlineCheckCircle
                    className="text-pink shrink-0 mt-0.5"
                    size={20}
                  />
                  <p className="leading-snug">{item}</p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-text/8">
              <p className="italic">
                <span>El resultado: </span>
                clases más dinámicas, participativas y enfocadas en que hables
                desde el primer momento.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 border border-text/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-pink uppercase tracking-widest">
                02
              </span>
              <h4>¿Por qué funciona?</h4>
            </div>

            <p className="italic">Cambiamos el aprendizaje pasivo por activo:</p>

            <ul className="space-y-3">
              {benefits.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <HiOutlineCheckCircle
                    className="text-pink shrink-0 mt-0.5"
                    size={16}
                  />
                  <p className="leading-snug">{item}</p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto pt-6 border-t border-text/8">
              <p className="italic">
                El objetivo no es que sepas inglés. Es que lo uses con
                seguridad.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}