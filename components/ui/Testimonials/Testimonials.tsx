"use client";
import EmblaCarousel from "@/components/carousel/TestimonialsCarousel";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Carolina",
    tagline: "Economista, venezolana en Barcelona, 2026",
    text: "Hola! Me agrada enormemente tener un espacio para compartir y dar fe de las excelentes capacidades profesionales como profesora de inglés de Karen. En ella confluyen conocimiento del idioma, capacidad para detectar las áreas de oportunidad de los integrantes de su grupo de estudios a fin de reforzarlo de forma integral, un bagaje de sus experiencias personales que transmite con propiedad e íntegra de forma amena para lograr una mayor fluidez y gran capacidad para lograr la participación del grupo en el aula virtual de clase. Tiene manejo de las plataformas de estudio y solicita apoyo a su equipo de back office para la resolución de problemas técnicos sin que el grupo resienta la situación. Es empática , flexible, resolutiva, cercana. Juntas logramos gran evolución en mi aprendizaje del idioma y por todo ello la recomiendo ampliamente. ",
  },
  {
    name: "Katia",
    text: "I truly enjoyed learning English with Karen! Her classes are engaging, well-structured and perfectly tailored to each student's needs. Her patience, warm encouragement and genuine passion for teaching helped me gain confidence and speak more fluently. I highly recommend her!",
  },
  {
    name: "Estefanía",
    tagline: "Analista de riesgos comerciales, colombiana en Barcelona, 2024",
    text: "Karen es una profesional excelente. Siempre fue paciente y mostró mucha destreza para manejar grupos grandes. Aprendí mucho con ella, es la mejor docente de idiomas que he tenido. Su inglés es impecable y sus clases siempre fueron dinámicas. Estoy muy agradecida con ella por su gran labor.",
  },
  {
    name: "Suleny",
    tagline: "Administrativa, venezolana en Barcelona, 2024",
    text: "Tuve el privilegio de ser alumna de Karen como profesora de inglés y puedo decir que ha sido una de las mejores docentes que he tenido. Destaca por su gran capacidad para enseñar de forma clara, dinámica y motivadora. Gracias a su dedicación y metodología, logré mejorar notablemente mi nivel de inglés y ganar más confianza al comunicarme.",
  },
];

function StarRating() {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} style={{ color: "#FBBF24", fontSize: "20px" }} />
      ))}
    </div>
  );
}

function TestimonialCard({
  name,
  tagline,
  text,
  index,
}: {
  name: string;
  tagline?: string;
  text: string;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight);
    }
  }, [text]);

  return (
    <div
      key={index}
      className="flex flex-col gap-0 bg-white rounded-3xl p-8 h-full"
      style={{ border: "1px solid rgba(0,0,0,0.06)" }}
    >
      <StarRating />
      <p className="text-sm italic mb-2 font-bold">{name}</p>
      {tagline && <p className="text-xs text-gray-400 mb-2">{tagline}</p>}

      <p
        ref={textRef}
        className={`text-xs lg:text-sm transition-all duration-300 ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        {text}
      </p>

      {(isTruncated || expanded) && (
        <button
          className="text-xs text-gray-400 mt-1 self-start hover:text-gray-600 transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}
export default function Testimonials() {
  return (
    <section className="bg-bg padding">
      <div className="ctn ctn-margin">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-10 lg:mb-14">Experiencias de nuestros alumnos</h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          <EmblaCarousel>
            {items.map((item, index) => (
              <TestimonialCard key={item.name} {...item} index={index} />
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
}
