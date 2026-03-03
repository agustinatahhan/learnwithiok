"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMenu } from "react-icons/io";

const navItems = [
  { key: "home", label: "Inicio", href: "/" },
  { key: "about", label: "Sobre Mí", href: "/about" },
  { key: "agenda", label: "Agenda", href: "/agenda" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <div className="relative w-full h-21.25 lg:h-35" >
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#be65b7" />
                <stop offset="10%" stopColor="#9579b6" />
                <stop offset="40%" stopColor="#9579b6" />
                <stop offset="100%" stopColor="#0d47a1" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 L1440,0 L1440,55 C1200,75 900,85 600,70 C300,55 150,50 0,65 Z"
              fill="url(#navGrad)"
            />
          </svg>

          <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-8" style={{ paddingBottom: "12px" }}>
            <Link href="/">
              <div className="relative w-14 h-14 lg:w-22 lg:h-22">
                <Image
                  src="/images/logo/logo-blanco.png"
                  alt="Logo learnwithiok"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP nav items */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`text-[15px] font-medium transition-all px-4 py-1.5 rounded-full ${
                      isActive
                        ? "border rounded-full text-white font-semibold"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* MOBILE BUTTON */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen((p) => !p)}
                className="p-2 text-white"
              >
                <IoIosMenu size={26} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
        {isOpen && (
        <div className="fixed top-[80px] z-40 w-[95%] left-1/2 -translate-x-1/2 rounded-3xl bg-white/90 backdrop-blur-sm p-3 shadow-lg lg:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-full mb-1 text-sm transition-all ${
                  isActive
                    ? "bg-linear-to-r from-pink to-violet text-white font-semibold"
                    : "text-gray-700 font-medium hover:bg-violet-50 hover:text-violet-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
