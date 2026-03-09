"use client";

import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineEnvelope } from "react-icons/hi2";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";

const plans = [
  {
    icon: HiOutlineSpeakerphone,
    label: "Club de Conversación (Tu prioridad)",
    individual: "Sesión Individual:",
    price: "15 €.",
    pack1: 'Pack "Conversationalist" (10 sesiones):',
    price1: "90 €.",
    note: "Ventaja: Te sale a solo 9 € por clase. Ideal para mantener el ritmo semanalmente.",
    highlight: false,
    description: "Enfocado en soltura y networking. Grupos de 5 a 8 personas.",
  },
  {
    icon: GrGroup,
    label: "Curso General English (3O sesiones?)",
    individual: "Pago Mensual:",
    price: "120 € por bloque de 10 sesiones.",
    pack1: 'Pack "Full Level" (Pago único 3 meses):',
    price1: "320 € (Ahorras 40 €).",
    note: "Nota: Este pack garantiza tu plaza y material por todo el trimestre.",
    highlight: false,
    description:
      "Para los que quieren subir de nivel con estructura. Grupos de 5 personas. Sesiones de 1:30h.",
  },
  {
    icon: IoPersonOutline,
    label: "Clases Privadas (Individuales)",
    individual: "Clase Suelta:",
    price: "20 €.",
    pack1: "Pack de 5 clases:",
    price1: "90 € (18 €/h).",
    pack2: "Pack de 10 clases:",
    price2: "60 € (16 €/h).",
    highlight: false,
    description: "Atención 100% personalizada. Duración: 1 hora.",
  },
  {
    icon: BsSuitcaseLg,
    label: "Business English & Prep. Exámenes",
    individual: "Clase Suelta:",
    price: "25 €.",
    pack1: "Pack de 10 clases:",
    price1: "220 € (22 €/h).",
    note: "Sugerencia: Este pack es el más buscado por profesionales que necesitan resultados rápidos.",
    highlight: false,
    description:
      "Inglés especializado para trabajo o certificaciones oficiales. Duración: 1 hora.",
  },
];

// const CALENDLY_URL = "https://calendly.com/learnwithiok";

export default function Agenda() {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="bg-linear-to-b from-violet/10 to-white">
        <div className="ctn ctn-margin">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-violet text-sm font-semibold uppercase tracking-widest mb-3">
              Agendá tu clase
            </p>
            <h2 className="mb-4">¿Cómo empezar?</h2>
            {/* <p className="text-text/80">
              Seguí estos pasos y en minutos tenés tu clase reservada.
            </p> */}
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* <p className="text-sm font-semibold uppercase tracking-widest text-violet">
              Pasos a seguir
            </p> */}

            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full gradient flex items-center justify-center text-white text-sm font-bold">
                01
              </div>
              <div className="pt-1.5 flex-1">
                <h4>Elegí el plan que te conviene</h4>
              </div>
            </motion.div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* <p className="text-sm font-semibold uppercase tracking-widest text-violet mb-5">
            Planes disponibles
          </p> */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {plans.map(
                  (
                    {
                      icon: Icon,
                      label,
                      price,
                      price1,
                      price2,
                      pack1,
                      pack2,
                      individual,
                      highlight,
                      description,
                      note,
                    },
                    index,
                  ) => (
                    <motion.div
                      key={label}
                      className={`relative rounded-2xl flex flex-col overflow-hidden border transition-all ${
                        highlight
                          ? "border-violet shadow-lg shadow-violet/15"
                          : "border-text/10 shadow-sm"
                      }`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                    >
                      {/* Header */}
                      <div
                        className={`px-6 pt-6 pb-5 ${highlight ? "bg-violet/5" : "bg-white"}`}
                      >
                        {highlight && (
                          <span className="inline-flex items-center gap-1 bg-violet text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                            <HiOutlineSparkles size={11} />
                            Más popular
                          </span>
                        )}
                        <div className="flex flex-row items-center gap-3 mb-1">
                           <Icon size={20} className="text-blue" />
                          <p
                            className={`text-sm md:text-[16px] font-bold uppercase tracking-wide ${highlight ? "text-violet" : "text-blue"}`}
                          >
                            {label}
                          </p>
                        </div>
                        <p className="text-sm text-text/60 leading-relaxed">
                          {description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div
                        className={`h-px ${highlight ? "bg-violet/15" : "bg-text/8"}`}
                      />

                      {/* Pricing rows */}
                      <div className="bg-white px-6 py-5 flex flex-col gap-3 flex-1">
                        {/* Individual */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text/70">
                            {individual}
                          </span>
                          <span
                            className={`text-sm font-semibold ${highlight ? "text-violet" : "text-text"}`}
                          >
                            {price}
                          </span>
                        </div>

                        {/* Pack 1 */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text/70">{pack1}</span>
                          <span
                            className={`text-sm font-semibold ${highlight ? "text-violet" : "text-text"}`}
                          >
                            {price1}
                          </span>
                        </div>

                        {/* Pack 2 (optional) */}
                        {pack2 && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text/70">
                              {pack2}
                            </span>
                            <span
                              className={`text-sm font-semibold ${highlight ? "text-violet" : "text-text"}`}
                            >
                              {price2}
                            </span>
                          </div>
                        )}

                        {/* Note */}
                        {note && (
                          <>
                            <div className="h-px bg-text/6 mt-1" />
                            <p className="text-xs text-text/50 leading-relaxed">
                              {note}
                            </p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
            <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full gradient flex items-center justify-center text-white text-sm font-bold">
                02
              </div>
              <div className="pt-1.5 flex-1">
                <h4>
                  Completá este formulario y me contactaré con vos en 48hs
                  hábiles.
                </h4>
                <a
                  className="btn btn-colors mt-6 flex flex-row gap-3 items-center justify-center"
                  href="https://forms.gle/EedqNB3kzVyoAjsQ7"
                >
                  <FaLongArrowAltRight />
                  Formulario
                </a>
              </div>
            </motion.div>
            {/* <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full gradient flex items-center justify-center text-white text-sm font-bold">
                02
              </div>
              <div className="pt-1.5 flex-1">
                <h4>Seleccioná tu día y horario</h4>
              </div>
            </motion.div> */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <InlineWidget
                url={CALENDLY_URL}
                styles={{
                  height: "700px",
                  minWidth: "100%",
                  width: "100%",
                }}
              />
            </motion.div> */}

            {/* <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full gradient flex items-center justify-center text-white text-sm font-bold">
                03
              </div>
              <div className="pt-1.5 flex-1">
                <h4>Realizá la transferencia</h4>
                <div className="mt-3 bg-text/5 rounded-xl p-4 text-sm text-text/70 space-y-1">
                  <p>
                    <span className="font-semibold text-text/90">Nombre:</span>{" "}
                    Karen Banos Jakubson
                  </p>
                  <p>
                    <span className="font-semibold text-text/90">IBAN:</span>{" "}
                    ES18 1583 0001 1390 5755 9201
                  </p>
                  <p>
                    <span className="font-semibold text-text/90">
                      BIC / SWIFT code:
                    </span>{" "}
                    REVOESM2
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div
              className="flex gap-5"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-full gradient flex items-center justify-center text-white text-sm font-bold">
                04
              </div>
              <div className="pt-1.5 flex-1">
                <h4>Enviá tu comprobante</h4>
                <p className="mt-2 text-text/80">
                  Mandá el comprobante a{" "}
                  <a
                    href="mailto:learnwithiok@gmail.com"
                    className="text-violet font-medium hover:underline"
                  >
                    learnwithiok@gmail.com
                  </a>
                </p>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="bg-violet/10 flex flex-col items-center gap-4 text-center padding"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="ctn ctn-margin">
          <h3 className=" text-center">
            ¡Y ahora sí, empezá tu camino hacia el aprendizaje! 🚀
          </h3>
          <p className="text-text/80 text-center mt-2">
            ¿Tenés dudas? Escribinos y con gusto te ayudamos.
          </p>
          <a
            href="mailto:learnwithiok@gmail.com"
            className="btn btn-colors mt-12 w-auto self-center gap-2"
          >
            <HiOutlineEnvelope size={20} />
            learnwithiok@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
