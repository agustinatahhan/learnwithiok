import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/images/hero2.png"
        alt="Imagen de estudiantes"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ctn">
          <div className="w-full lg:max-w-2xl flex flex-col items-center justify-center lg:items-start lg:justify-start space-y-8 lg:space-y-12">
            <div className="space-y-3">
              <h1 className="text-white">Transformá tu futuro con inglés</h1>

              <p className="text-white/90 icursive">
                Clases dinámicas y personalizadas
              </p>
            </div>

            <Link
              href="/agenda"
              className="btn btn-colors flex flex-row items-center justify-center gap-2"
            >
              <IoCalendarNumberOutline size={20} />
              <>Agendá tu Clase</>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
