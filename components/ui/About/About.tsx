"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "2020", label: "Clases\nonline desde" },
  { value: "+13", label: "años de\nexperiencia" },
  { value: "+300", label: "alumnos\nformados" },
];

export default function About() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-30">

      {/* ── Wave background ── */}
      <div className="relative">
        <svg
          viewBox="0 0 900 230"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C80,10 200,90 340,55 C460,25 560,80 680,50 C780,25 860,65 900,45 L900,230 L0,230 Z"
            fill="#e0b8f0"
          />
          <path
            d="M0,95 C100,55 220,115 360,85 C480,58 580,105 700,78 C800,55 870,90 900,72 L900,230 L0,230 Z"
            fill="#c97ee8"
            opacity="0.55"
          />
        </svg>

        {/* ── Stats + image row ── */}
        <div className="relative z-10 px-5 sm:px-8 lg:pl-20 flex items-end justify-between">

          {/* Stats */}
          <div className="flex flex-row gap-3 sm:gap-10 md:gap-20 items-end pb-6 sm:pb-8 h-full md:h-75">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                {/* Big number */}
                <span className="outfit font-extrabold leading-none tracking-tight text-text
                                 text-xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {stat.value}
                </span>
                {/* Label */}
                <span className="mt-0.5 text-text/60 leading-snug whitespace-pre-line
                                 text-[9px] sm:text-xs md:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div className="relative -mb-10 -mr-5 sm:-mr-8 md:-mr-6 self-end shrink-0">
            <Image
              src="/images/her/karen2.png"
              alt="Karen"
              width={500}
              height={500}
              className="object-contain object-bottom drop-shadow-md
                         w-40 sm:w-65 md:w-95 lg:w-125 h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 mt-14 md:mt-16 px-4 text-center"
      >
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-widest gradient bg-clip-text text-transparent">
          Mi historia
        </span>

        <h2 className="outfit font-bold leading-tight max-w-sm sm:max-w-lg
                       text-xl sm:text-3xl md:text-4xl">
          ¿Cómo comenzó{" "}
          <span className="gradient bg-clip-text text-transparent">
            todo en IOK?
          </span>
        </h2>

      
        <Link href="/about" className="btn btn-colors">
          Conocé más
        </Link>
      </motion.div>

    </section>
  );
}