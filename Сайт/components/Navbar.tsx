"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Объекты", href: "#properties" },
  { label: "О нас", href: "#why-us" },
  { label: "Районы", href: "#map" },
  { label: "Контакты", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-beige-50/90 backdrop-blur-xl shadow-lg shadow-forest-700/10 border border-beige-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-beige-100">
              <path
                d="M12 2L3 9v13h18V9L12 2z"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <span
            className={`font-cinzel font-semibold text-lg tracking-wide transition-colors ${
              scrolled ? "text-forest-700" : "text-beige-50"
            }`}
          >
            ЛесПоместье
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-josefin text-sm font-medium tracking-widest uppercase transition-colors cursor-pointer hover:text-beige-500 ${
                  scrolled ? "text-navy-700" : "text-beige-100"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+78121234567"
            className={`flex items-center gap-2 text-sm font-medium transition-colors cursor-pointer ${
              scrolled ? "text-forest-700" : "text-beige-100"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span className="font-josefin">+7 (812) 123-45-67</span>
          </a>
          <a
            href="#contact"
            className="bg-forest-700 hover:bg-forest-600 text-beige-50 text-sm font-josefin font-medium px-5 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Подобрать объект
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden cursor-pointer transition-colors ${
            scrolled ? "text-navy-700" : "text-beige-50"
          }`}
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-beige-50/95 backdrop-blur-xl rounded-b-2xl px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-josefin text-sm font-medium tracking-widest uppercase text-navy-700 hover:text-forest-600 transition-colors cursor-pointer py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block bg-forest-700 text-beige-50 text-sm font-josefin font-medium px-5 py-3 rounded-xl text-center cursor-pointer"
              >
                Подобрать объект
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
