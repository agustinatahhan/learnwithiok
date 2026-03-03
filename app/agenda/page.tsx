"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineEnvelope } from "react-icons/hi2";

const plans = [
  {
    label: "Clase individual",
    price: "18 €",
    per: "por clase",
    highlight: false,
    description: "Perfecta para probar y avanzar a tu ritmo.",
  },
  {
    label: "Pack 5 clases",
    price: "15 €",
    per: "por clase",
    highlight: true,
    description: "El equilibrio ideal entre flexibilidad y ahorro.",
  },
  {
    label: "Pack 10 clases",
    price: "12 €",
    per: "por clase",
    highlight: false,
    description: "El mayor ahorro para un compromiso real con el idioma.",
  },
];

const CALENDLY_URL = "https://calendly.com/learnwithiok";

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {plans.map(
                  ({ label, price, per, highlight, description }, index) => (
                    <motion.div
                      key={label}
                      className={`relative rounded-2xl p-6 flex flex-col gap-2 border transition-all ${
                        highlight
                          ? "bg-white border-violet shadow-md shadow-violet/10"
                          : "bg-white border-text/10 shadow-sm"
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
                      {highlight && (
                        <span className="absolute -top-3 left-5 bg-violet text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
                          <HiOutlineSparkles size={12} />
                          Más popular
                        </span>
                      )}
                      <p className="text-sm font-semibold uppercase tracking-widest text-violet">
                        {label}
                      </p>
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold leading-none text-text">
                          {price}
                        </span>
                        <span className="text-sm mb-1 text-text/50">{per}</span>
                      </div>
                      <p className="text-sm text-text/60 leading-snug">
                        {description}
                      </p>
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
