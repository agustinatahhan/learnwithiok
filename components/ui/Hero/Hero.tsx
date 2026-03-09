"use client";

import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumberOutline, IoRocketOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center padding bg-violet/15">
      <div className="ctn ctn-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="relative w-full h-72 sm:h-96 lg:h-130">
            <Image
              src="/images/hero/hero.png"
              alt="Imagen Karen"
              fill
              priority
              className="object-contain object-center rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-3 lg:gap-5 items-center justify-center text-center w-full ">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="gradient bg-clip-text text-transparent text-center lg:text-start"
            >
              Tu espacio seguro para mejorar tu{" "}
              <span className="uppercase ">inglés </span>
              <span style={{ display: "inline-block", color: "transparent" }}>
                <IoRocketOutline
                  color="#9579b6"
                  className="text-4xl md:text-[60px] lg:text-[70px]"
                  style={{
                    verticalAlign: "middle",
                  }}
                />
              </span>
            </motion.h1>
            <motion.h3
              className="text-[16px] md:text-[28px] w-full text-center lg:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Habla y practica con un acompañamiento real
            </motion.h3>

            <motion.p
              className="text-text/75 w-full text-xs md:text-[21px] text-center lg:text-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            >
              Clases 100% online para adultos · Flexibles y personalizadas
            </motion.p>

            <motion.div
              className="flex justify-center  w-full "
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            >
              <Link
                href="/agenda"
                className="btn btn-colors flex items-center gap-2 mt-2"
              >
                <IoCalendarNumberOutline size={20} />
                Empieza hoy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
