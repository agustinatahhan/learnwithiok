"use client";
import EmblaCarousel from "@/components/carousel/TestimonialsCarousel";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const items = [
  {
    name: "Estefanía",
    text: "Karen es una profesional excelente. Siempre fue paciente y mostró mucha destreza para manejar grupos grandes. Aprendí mucho con ella, es la mejor docente de idiomas que he tenido. Su inglés es impecable y sus clases siempre fueron dinámicas. Estoy muy agradecida con ella por su gran labor.",
  },
  {
    name: "Katia",
    text: "I truly enjoyed learning English with Karen! Her classes are engaging, well-structured and perfectly tailored to each student's needs. Her patience, warm encouragement and genuine passion for teaching helped me gain confidence and speak more fluently. I highly recommend her!",
  },
  {
    name: "Suleny",
    text: "Tuve el privilegio de ser alumna de Karen como profesora de inglés y puedo decir que ha sido una de las mejores docentes que he tenido. Destaca por su gran capacidad para enseñar de forma clara, dinámica y motivadora. Gracias a su dedicación y metodología, logré mejorar notablemente mi nivel de inglés y ganar más confianza al comunicarme.",
  },
  {
    name: "Paula",
    text: "Karen es una excelente profesional y compañera de trabajo, siempre se encuentra actualizada en temas relacionados a la enseñanza del idioma inglés y español y a las diferentes culturas del mundo. Una viajera y aprendiz incansable, que siempre ha demostrado ser muy creativa y también tener habilidades de liderazgo positivo en todos los lugares en los que se desenvuelve. ",
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
  text,
  index,
}: {
  name: string;
  text: string;
  index: number;
}) {
  return (
    <div
      key={index}
      className="flex flex-col gap-0 bg-white rounded-3xl p-8 h-full"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <StarRating />

      <p className="text-sm italic mb-2 font-bold">{name}</p>
      <p className="text-xs lg:text-sm">{text}</p>
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
          <h2>Experiencias de nuestros alumnos</h2>
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
