import {
  HiOutlineGlobeAlt,
  HiOutlineBriefcase,
  HiOutlineComputerDesktop,
  HiOutlineChatBubbleLeftRight,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup
} from "react-icons/hi2";

const audience = [
  {
    icon: HiOutlineGlobeAlt,
    text: "Vivís en el extranjero y querés comunicarte con seguridad.",
  },
 {
    icon: HiOutlineUserGroup,
    text: "Te gusaría interactuar con gente que vive en el extrajero o en tu pais",
  },
  
  {
    icon: HiOutlineBriefcase,
    text: "Buscás oportunidades laborales internacionales.",
  },
  {
    icon: HiOutlineComputerDesktop,
    text: "Trabajás remoto y necesitás inglés.",
  },
  {
    icon: HiOutlineChatBubbleLeftRight,
    text: "Querés dejar de bloquearte cuando hablás.",
  },
  {
    icon: HiOutlineArrowTrendingUp,
    text: 'Querés pasar del "entiendo pero no hablo" al "me animo".',
  },
];

export default function Audience() {
  return (
    <section className="bg-linear-to-r from-blue/30 via-pink/30 to-violet/30 padding">
      <div className="ctn ctn-margin">
        <div className="mb-16">
          <h2 className="mb-6">¿Para quién es Learn With IOK?</h2>
        </div>

        {/* Lista */}
        <ul className="flex flex-col md:grid md:grid-cols-2 gap-4 mb-12">
          {audience.map(({ icon: Icon, text }, index) => (
            <li
              key={index}
              className="flex items-center gap-4 bg-white/50 border border-white/60 rounded-2xl min-h-28 p-6"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-violet/80 flex items-center justify-center">
                <Icon className="text-white" size={20} />
              </div>
              <p className="text-text/80 leading-relaxed">
                {text}
              </p>
            </li>
          ))}
        </ul>

        {/* Cierre */}
        <p className="italic">
          ¡No importa tu punto de partida. Importa que quieras avanzar!
        </p>
      </div>
    </section>
  );
}
