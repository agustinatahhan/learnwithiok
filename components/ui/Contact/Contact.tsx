"use client";

import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-bg padding">
      <div className="ctn-margin px-6 lg:px-8 w-full justify-center items-center pt-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-center">¿Listo para empezar?</h2>
          <p className="text-text/80 text-center">
            Reservá tu primera clase y empezá a hablar inglés con confianza.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            href="/agenda"
            className="btn btn-colors flex flex-row items-center justify-center gap-2"
          >
            <IoCalendarNumberOutline size={20} />
            Agendá tu Clase
          </Link>
        </motion.div>
      </div>
    </section>
  );
}