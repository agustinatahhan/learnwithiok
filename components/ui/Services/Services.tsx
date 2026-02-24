import Image from "next/image";

const items = [
  {
    img: "/images/group.png",
    title: "Clases Grupales",
    description:
      "Aprendé en comunidad con dinámicas colaborativas. Un espacio ideal para practicar conversación real, perder el miedo y enriquecer tu vocabulario con los aportes de otros.",
  },
  {
    img: "/images/individual.jpg",
    title: "Clases Individuales",
    description:
      "Atención exclusiva y personalizada al 100%. Avanzá a tu propio ritmo con un plan diseñado específicamente para tus desafíos, intereses y tiempos particulares.",
  },
  {
    img: "/images/interview.jpg",
    title: "Preparación de Entrevistas",
    description:
      "Ganá la confianza necesaria para dar el próximo paso en tu carrera. Simulacros reales, corrección de CV y herramientas clave para destacar tu perfil profesional en inglés.",
  },
];

export default function Services() {
  return (
    <section className="bg-bg padding">
      <div className="ctn ctn-margin">
        <div className="mb-16">
          <h2>Nuestros Servicios</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ img, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
            >
              {/* IMAGE — mitad superior */}
              <div className="relative w-full h-56">
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT — mitad inferior */}
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-text font-bold text-lg">{title}</h3>
                <p className="text-text/60 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}