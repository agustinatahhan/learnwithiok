import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20 lg:py-30">

      <div className="relative">

        <svg
          viewBox="0 0 900 230"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Back wave — lighter */}
          <path
            d="
              M0,60
              C80,10 200,90 340,55
              C460,25 560,80 680,50
              C780,25 860,65 900,45
              L900,230 L0,230 Z
            "
            fill="#e0b8f0"
          />
          {/* Front wave — richer violet */}
          <path
            d="
              M0,95
              C100,55 220,115 360,85
              C480,58 580,105 700,78
              C800,55 870,90 900,72
              L900,230 L0,230 Z
            "
            fill="#c97ee8"
            opacity="0.55"
          />
        </svg>

        <div className="relative z-10 px-5 sm:px-8 lg:pl-20 flex items-center justify-between">

          {/* Stats */}
          <div className="flex flex-row gap-5 sm:gap-10 md:gap-30 items-start sm:items-end pb-6 sm:pb-8 h-full md:h-75 justify-end">
            <p className="text-[10px] md:text-[12px] lg:text-lg">
              Clases online<br />desde el 2020
            </p>

            <p className="text-[10px] md:text-[12px] lg:text-lg">
              Profesora<br />+13 años de<br />experiencia
            </p>

            <p className="text-[10px] md:text-[12px] lg:text-lg">
              + 300 de<br />alumnos
            </p>
          </div>

          {/* Image */}
          <div className="relative -mb-10 -mr-5 sm:-mr-8 md:-mr-6 self-end shrink-0">
            <Image
              src="/images/her/karen2.png"
              alt="Karen"
              width={500}
              height={500}
              className="object-contain object-bottom drop-shadow-md
                         w-40 sm:w-65 md:w-95 lg:w-125
                         h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center gap-5 mt-14 md:mt-16 px-4">
        <h2 className="mb-4 sm:mb-6 text-center text-lg sm:text-xl md:text-2xl">
          ¿Cómo comenzó todo en IOK?
        </h2>

        <Link href="/about" className="btn btn-colors">
          Conocé más
        </Link>
      </div>

    </section>
  );
}