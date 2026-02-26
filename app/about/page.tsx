import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative">
        {/* Fondo */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet/80 via-violet/60 to-neutral-50" />

        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ===== TEXTO ===== */}
            <div className="text-center lg:text-left">
              <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-6">
                Sobre mí
              </p>

              <h2 className="text-white">
                Hola, soy Karen.
                <br />
                Enseño inglés para que ganes confianza.
              </h2>
            </div>

            {/* ===== IMAGEN ===== */}
         <div className="flex justify-center lg:justify-end relative">
  <div className="relative group">

    {/* Figura geométrica sólida detrás */}
    <div className="absolute -bottom-8 -right-8 w-[260px] h-[340px] md:w-[300px] md:h-[380px] lg:w-[340px] lg:h-[440px] 
                    bg-violet/20 rounded-[2rem] -z-10 transition-transform duration-500 
                    group-hover:translate-x-2 group-hover:translate-y-2" />

    {/* Imagen */}
    <div className="relative w-[240px] h-[320px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[420px] 
                    rounded-[2rem] overflow-hidden shadow-xl 
                    transition-transform duration-500 
                    group-hover:-translate-x-2 group-hover:-translate-y-2">

      <Image
        src="/images/her/karen.jpeg"
        alt="Karen - Profesora de Inglés"
        fill
        className="object-cover"
        priority
      />
    </div>

  </div>
</div>
          </div>
        </div>
      </div>

      <div className="bg-white padding">
        <div className="ctn ctn-margin space-y-6">
          <p>
            Soy profesora de inglés con formación universitaria y una maestría
            en enseñanza de segundas lenguas. Viví y estudié en distintos países
            de Europa, y sé lo que significa empezar de cero en otro lugar.
          </p>

          <div className="flex gap-3 text-violet">
            <HiOutlineSparkles size={22} />
            <p className="italic">
              Aprender inglés no es memorizar reglas. Es animarse. Es ganar
              confianza.
            </p>
          </div>

          <p>
            Creé <strong>Learn with IOK</strong> en 2020 para acompañar a
            personas que quieren expandirse profesional y personalmente a través
            del idioma.
          </p>

          <p className="italic">
            No trabajo con alumnos.{" "}
            <span className="text-violet">Trabajo con personas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
