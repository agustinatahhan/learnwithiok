import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section className=" bg-bg padding">
      <div className="ctn-margin px-6 lg:px-8 w-full justify-center items-center">
        {/* Encabezado */}
        <div className="mb-12">
          <h2 className="mb-6 text-center">¿Listo para empezar?</h2>
          <p className="text-text/80 leading-relaxed text-center">
            Reservá tu primera clase y empezá a hablar inglés con confianza.
          </p>
        </div>

        {/* Botones CTA */}
        <div className="flex justify-center">
          <Link
            href="/agenda"
            className="btn btn-colors flex flex-row items-center justify-center gap-2"
          >
            <IoCalendarNumberOutline size={20} />
            Agendá tu Clase
          </Link>
        </div>
      </div>
    </section>
  );
}
