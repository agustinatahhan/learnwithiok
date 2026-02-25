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
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center">
      <nav className="mx-2 sm:mx-8 md:mx-5 my-4 flex w-full flex-col rounded-4xl bg-bg/80 px-3 py-1.5 sm:px-6 sm:py-2 shadow-sm">
        <div className="flex w-full items-center justify-between">
          {/* LOGO */}
          <Link href="/">
            <div className="relative w-28 h-12">
              <Image
                src="/images/logo/logo.png"
                alt="Logo learnwithiok"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`text-sm transition-all px-4 py-1.5 rounded-4xl ${
                    isActive
                      ? "bg-linear-to-r from-pink to-violet text-white font-semibold shadow-sm"
                      : "text-text/70 hover:text-violet font-medium"
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
              className="p-2 text-violet"
            >
              <IoIosMenu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-19.5 md:top-20.5 z-40 w-[95%] rounded-3xl bg-bg/80 p-3 shadow-sm lg:hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-1.5 rounded-full mb-1 text-sm transition-all ${
                  isActive
                    ? "bg-linear-to-r from-pink to-violet text-white font-semibold"
                    : "text-text/70 font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
