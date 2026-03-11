"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import EmblaCarousel from "@/components/carousel/AboutCarousel";

const timelineItems = [
  {
    id: 1,
    period: "El comienzo",
    emoji: "✨",
    text: "Desde pequeña sentí pasión por la enseñanza y la comunicación. Siempre tuve el deseo de hacer algo grande y viajar por el mundo.",
    images: ["/images/about/2.jpeg"],
    imageAlt: "Karen de niña",
  },
  {
    id: 2,
    period: "Argentina → Alemania",
    emoji: "🎓",
    text: "Estudié el Profesorado en Lengua y Culturas Inglesas en la Universidad Nacional de Cuyo, en Mendoza. Fui becada para cursar 8 meses en la Technische Universität Chemnitz, en Alemania, donde también aprendí alemán.",
    images: [
      "/images/about/2SECCION-3.jpeg",
      "/images/about/2SECCION-4.png",
      "/images/about/2SECCION-5.png",
      "/images/about/2SECCION-6.jpeg",
    ],
    imageAlt: "Universidad y graduación",
  },
  {
    id: 3,
    period: "Copenhagen",
    emoji: "🇩🇰",
    text: "Viví en Copenhagen, donde tuve la oportunidad de trabajar como profesora voluntaria de inglés en un centro educativo. Durante ese tiempo también di clases particulares, ayudando a estudiantes a mejorar su comunicación y confianza en el idioma.",
    images: [
      "/images/about/cop.png",
      "/images/about/SECCION3-7.jpeg",
      "/images/about/SECCION3-8.jpeg",
      "/images/about/SECCION3-9.jpeg",
      "/images/about/SECCION3-10.jpeg",
      "/images/about/SECCION3-11.jpeg",

      "/images/about/SECCION3-EXTRAFOTO.jpeg",
    ],
    imageAlt: "Copenhagen",
  },
  
  {
    id: 4,
    period: "Pandemia → IOK",
    emoji: "💻",
    text: "Durante la pandemia mi plan era mudarme a Australia, pero el COVID cambió todo. Volví a Argentina y fue allí donde nació IOK, mi proyecto de enseñanza online. Lo que comenzó como unas pocas clases virtuales creció hasta formar una comunidad de más de 80 estudiantes.",
    images: [
      "/images/about/SECCION4-12.png",
      "/images/about/SECCION4-13.png",
      "/images/about/SECCION4-14.png",
      "/images/about/SECCION4-15.png",
      "/images/about/SECCION4-16.png",
      // "/images/about/SECCION4-17.jpg",
    ],
    imageAlt: "Comunidad IOK online",
  },
  {
    id: 5,
    period: "Suecia, 2021",
    emoji: "🇸🇪",
    text: "En 2021 me mudé a Suecia y desde allí continué desarrollando mi comunidad.",
    images: ["/images/about/SECCION5.jpg"],
    imageAlt: "Suecia",
  },
  {
    id: 6,
    period: "Irlanda, 2022",
    emoji: "🇮🇪",
    text: "En 2022 me mudé a Irlanda, donde trabajé presencialmente en una escuela de inglés para adultos. Fue mi primera experiencia enseñando cursos intensivos en aulas multiculturales, lo que me permitió desarrollar un enfoque práctico y adaptado a estudiantes de distintos orígenes y niveles. Además, trabajé una temporada en un afterschool Montessori con niños de 5 a 11 años, realizando talleres de arte, cultura y teatro, lo que me permitió desarrollar y poner en práctica mi creatividad como docente.",
    images: [
      "/images/about/SECCION6-18.jpg",
      "/images/about/SECCION6-19.jpg",
      "/images/about/SECCION6-20.jpg",
      "/images/about/SECCION6-21.jpg",
      "/images/about/SECCION6-22.jpg",
      "/images/about/SECCION6-24.jpeg",
    ],
    imageAlt: "Irlanda",
  },
  {
    id: 7,
    period: "Hoy",
    emoji: "🌎",
    text: "Vivo entre España y Francia, sigo enseñando inglés online y explorando nuevas formas de ayudar a mis alumnos a comunicarse con confianza. Además, actualmente estoy aprendiendo francés.",
    images: ["/images/about/ULTIMAFOTO.jpg"],
    imageAlt: "Hoy, entre España y Francia",
  },
];

function TimelineImages({ images, alt }: { images: string[]; alt: string }) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative h-80 w-full max-w-2xl rounded-2xl overflow-hidden shadow-md border border-black/10">
        <Image src={images[0]} alt={alt} fill className="object-cover " />
      </div>
    );
  }

  return (
    <div className="w-full sm:px-8">
      <EmblaCarousel
        options={{ loop: false, align: "start" }}
        slideClassName="basis-[80%] sm:basis-[48%]"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative h-56 sm:h-70 w-full rounded-xl overflow-hidden shadow-md border border-black/10"
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover "
            />
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative bg-linear-to-r from-bg via-violet/10 to-blue/10  overflow-hidden padding">
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
                  src="/images/about/karen.jpeg"
                  alt="Karen profesora de inglés"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
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
              Soy profesora de inglés argentina con formación universitaria y
              una maestría en enseñanza de segundas lenguas. Después de vivir y
              estudiar en distintos países de Europa, hoy ayudo a mis
              estudiantes a:
            </p>

            <motion.blockquote
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="border-l-4 border-current gradient bg-clip-text pl-4 italic text-text/80 space-y-1"
            >
              <p>Comunicarse en inglés con confianza</p>
              <p>Abrirse a nuevas oportunidades</p>
              <p>Construir su propio camino</p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="my-12 h-px bg-text/10" />

        {/* ── Section title ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="outfit text-2xl sm:text-3xl font-bold text-text">
            Donde empezó todo
          </h3>
          <p className="text-text/50 mt-2 text-sm">
            Un recorrido por los lugares que me formaron
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-text/10" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-7 h-7 rounded-full bg-bg border-2 border-text/15 shadow-sm z-10">
                  <div className="w-2.5 h-2.5 rounded-full gradient" />
                </div>

                {/* Period label */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest gradient bg-clip-text text-transparent mb-1.5">
                  {item.emoji && <span>{item.emoji}</span>}
                  {item.period}
                </span>

                {/* Description */}
                <p className="text-text/75 leading-relaxed mb-4">{item.text}</p>

                {/* Images */}
                <TimelineImages images={item.images} alt={item.imageAlt} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
