"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phrases = [
  "No solo aprendés gramática.",
  "Aprendés a usar el idioma con confianza, claridad y propósito.",
  "Si vivís en el extranjero, trabajás en entornos internacionales o querés expandir tus oportunidades…",
  "Estás en el lugar correcto.",
];

export default function Divider() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-bg padding"
    >
      <div className="ctn ctn-margin">
        <div className="flex flex-col items-center text-center gap-2">
          {phrases.map((phrase, i) => {
            const isLast = i === phrases.length - 1;

            return (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className={`
                  ${
                    isLast
                      ? "text-xl lg:text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue via-pink to-violet text-center "
                      : "text-xl lg:text-2xl font-medium text-center "
                  }
                `}
              >
                {phrase}
              </motion.p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
