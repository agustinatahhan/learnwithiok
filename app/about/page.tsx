"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-bg overflow-hidden padding">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-72 gradient opacity-10 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full gradient opacity-10 blur-3xl" />
      </div>

      <div className="ctn ctn-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-5 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative w-55 sm:w-62.5 lg:w-70">
            

              <div className="relative h-70 sm:h-77.5 lg:h-85 rounded-[28px] overflow-hidden shadow-xl border border-black/10">
                <Image
                  src="/images/her/karen.jpeg"
                  alt="Karen profesora de inglés"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

             
              <div className="absolute -bottom-4 -left-4 bg-bg shadow-md border border-black/10 rounded-2xl px-4 py-2 text-sm font-semibold text-text whitespace-nowrap">
                +5 años enseñando 🎓
              </div>
            </div>
          </motion.div>

       
          <motion.div
            className="lg:col-span-7 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="outfit mb-5">
              Hola, soy{" "}
              <span className="gradient bg-clip-text text-transparent">
                Karen
              </span>
            </h2>

            <p className="text-text/80 mb-5">
              Soy profesora de inglés con formación universitaria y una maestría
              en enseñanza de segundas lenguas. Viví y estudié en distintos
              países de Europa, y sé lo que significa empezar de cero en otro
              lugar y necesitar el idioma para crecer personal y
              profesionalmente.
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="border-l-4 border-current gradient bg-clip-text pl-4 italic text-text/80 space-y-1"
            >
              <p>Aprender inglés no es solo memorizar reglas.</p>
              <p>Es animarse a hablar. Es equivocarse sin miedo.</p>
              <p>Es ganar confianza.</p>
            </motion.blockquote>
          </motion.div>
        </div>

        <div className="my-12 h-px bg-text/10" />

        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-8 flex flex-col gap-4">
            <p className="text-text/80">
              En 2020 creé <span className="font-semibold">Learn with IOK</span>{" "}
              para acompañar a personas que quieren expandirse profesional y
              personalmente a través del idioma.
              <br />
              No trabajo con alumnos. Trabajo con personas.
              <br />
              Cada estudiante tiene objetivos distintos, ritmos distintos y
              desafíos distintos. Mi compromiso es acompañarte con
              responsabilidad, seguimiento real y una metodología que funcione.
              <br />
              Acá no sos un número. Sos parte de una comunidad que aprende para
              avanzar.
            </p>
          </div>

          <Link href="/agenda" className="btn btn-colors mt-12">
            Quiero empezar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
