import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { TbTrendingUp } from "react-icons/tb";

const items = [
  {
    icon: HiOutlineUserGroup,
    title: "Interactiva",
    description:
      "Aprendizaje dinámico y práctico. Priorizamos la conversación espontánea para que ganes fluidez y confianza desde el primer día.",
  },
  {
    icon: HiOutlineBookOpen,
    title: "Personalizada",
    description:
      "Contenido adaptado a tus metas profesionales y ritmo personal. Diseñamos un plan de estudio que se ajusta a lo que vos necesitás.",
  },
  {
    icon: TbTrendingUp,
    title: "Evolución Constante",
    description:
      "Resultados tangibles. Notarás tu avance sesión tras sesión con un seguimiento cercano que garantiza alcanzar tus objetivos.",
  },
];

export default function Metodology() {
  return (
    <section className="bg-linear-to-r from-blue/30 via-pink/30 to-violet/30 padding">
      <div className="ctn ctn-margin">
        <div className="mb-16">
          <p className="text-violet text-sm font-semibold uppercase tracking-widest mb-3">
            Enfoque Pedagógico
          </p>
          <h2>
            Nuestra Metodología
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow items-center lg:items-start"
            >
              <div className="w-11 h-11 rounded-xl bg-violet/10 flex items-center justify-center">
                <Icon size={25} className="text-violet" />
              </div>
              <div>
                <h3 className="text-text font-bold text-lg mb-2">{title}</h3>
                <p>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
