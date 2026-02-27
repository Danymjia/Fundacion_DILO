"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-[family-name:var(--font-heading)]">
              D
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)] leading-tight">
              Fundación DILO
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="group relative w-auto cursor-pointer overflow-hidden rounded-full border border-primary/20 bg-background px-5 py-2.5 text-center font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
                <span className="inline-block text-sm transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                  Agenda tu Primera Cita
                </span>
              </div>
              <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="leading-none font-medium text-sm">Agendar Cita</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 leading-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background px-4 pb-4 pt-2 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border/40 pt-4">
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="group relative w-full cursor-pointer flex justify-center overflow-hidden rounded-full border border-primary/20 bg-background px-5 py-3 text-center font-medium text-foreground shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
                  <span className="inline-block text-sm transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                    Agenda tu Primera Cita
                  </span>
                </div>
                <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span className="leading-none font-medium text-sm">Agendar Cita</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 leading-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
