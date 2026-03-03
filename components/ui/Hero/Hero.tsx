"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center padding">
      <div className="ctn ctn-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-20">
          <div className="relative w-full h-72 sm:h-96 md:h-130">
            <Image
              src="/images/hero/hero-photo.png"
              alt="Imagen Karen"
              fill
              priority
              className="object-contain object-center rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-5 items-center text-left w-full">
            <motion.h1
              className="w-full leading-tight"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Tu espacio seguro para practicar inglés
            </motion.h1>

            <motion.h3
              className="text-text text-base sm:text-lg md:text-xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Hablá, equivocate y mejorá con acompañamiento real.
            </motion.h3>

            <motion.p
              className="text-text/75 w-full text-sm lg:text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              Clases 100% online para adultos · Flexibles y personalizadas
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start w-full"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            >
              <Link
                href="/agenda"
                className="btn btn-colors flex items-center gap-2 mt-2"
              >
                <IoCalendarNumberOutline size={20} />
                Elige tu Clase
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
