"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/focus-areas", label: "Focus Areas" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="Avatar" width={40} height={40} className="rounded-full" />
            <span className="font-semibold tracking-tight">Hugo Chaves Vásquez</span>
          </Link>

          {/* Navegación de Escritorio */}
          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-80 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón de Menú Móvil */}
          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="rounded-md p-2 transition">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Panel de Navegación Móvil */}
      {isOpen && (
        <nav className="sm:hidden px-4 pt-2 pb-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}