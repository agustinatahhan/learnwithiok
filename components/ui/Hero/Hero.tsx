"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/hero/hero2.png"
        alt="Imagen de estudiantes"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ctn">
          <div className="w-full flex flex-col items-center justify-center lg:items-center lg:justify-center space-y-8 lg:space-y-16">
            <div className="space-y-4">
              <motion.h1
                className="text-white text-center text-shadow-sm"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Tu espacio seguro para aprender inglés
              </motion.h1>

              <motion.p
                className="text-white/90 italic text-center text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                Conéctate, practica y mejora tu inglés en un entorno seguro y amigable.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            >
              <Link
                href="/agenda"
                className="btn btn-colors flex flex-row items-center justify-center gap-2"
              >
                <IoCalendarNumberOutline size={20} />
                <>Agendá tu Clase</>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}