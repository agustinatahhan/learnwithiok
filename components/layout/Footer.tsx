import Link from "next/link";
import Image from "next/image";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { RiInstagramLine } from "react-icons/ri";
import { IoCalendarNumberOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-violet/20">
      {/* Fila principal */}
      <div className="px-6 lg:px-30 py-8 flex flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/logo.png"
            alt="Learn with Iok"
            width={120}
            height={40}
          />
        </Link>

        {/* Iconos de redes */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:learnwithiok@gmail.com"
            aria-label="Correo"
            className="w-10 h-10 rounded-full bg-linear-to-r from-pink to-violet flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 ease-in-out
           hover:scale-105 active:scale-95 cursor-pointer"
          >
            <HiOutlineEnvelope size={20} />
          </a>
          <a
            href="https://instagram.com/learnwithiok"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-linear-to-r from-pink to-violet flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 ease-in-out
           hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RiInstagramLine size={20} />
          </a>
          <Link
            href="/agenda"
            aria-label="Agendar clase"
            className="w-10 h-10 rounded-full bg-linear-to-r from-pink to-violet flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 ease-in-out
           hover:scale-105 active:scale-95 cursor-pointer"
          >
            <IoCalendarNumberOutline size={20} />
          </Link>
        </div>
      </div>

      {/* Fila inferior */}
      <div className="px-6 lg:px-20 py-4 border-t border-text/10 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-text/40">
          © {new Date().getFullYear()} Learn with Iok. Todos los derechos
          reservados.
        </p>
        <p className="text-xs text-text/40">
          <a
            href="https://agustinatahhan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-violet transition-colors"
          >
            By A
          </a>
        </p>
      </div>
    </footer>
  );
}
