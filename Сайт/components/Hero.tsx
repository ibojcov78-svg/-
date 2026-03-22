"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, MapPin } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
    >
      {/* Background parallax image */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900/70" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-beige-300/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-forest-700/30 backdrop-blur-sm border border-forest-400/30 rounded-full px-4 py-2 mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-beige-300" />
          <span className="text-beige-200 text-xs font-josefin font-medium tracking-widest uppercase">
            Ленинградская область
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-beige-50 leading-[1.05] tracking-tight mb-6"
        >
          Жизнь среди
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 to-sage-400 italic">
            природы
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-josefin text-lg md:text-xl text-beige-200/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Премиальная загородная недвижимость в&nbsp;живописных районах
          Ленинградской области. Дома у&nbsp;леса, озёр и&nbsp;рек.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#properties"
            className="bg-forest-700 hover:bg-forest-600 text-beige-50 font-josefin font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-forest-900/40 hover:-translate-y-0.5"
          >
            Смотреть объекты
          </a>
          <a
            href="#contact"
            className="bg-beige-50/10 backdrop-blur-sm hover:bg-beige-50/20 border border-beige-100/30 text-beige-50 font-josefin font-medium text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer"
          >
            Бесплатная консультация
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mt-14 pt-10 border-t border-beige-100/15"
        >
          {[
            { num: "12+", label: "лет на рынке" },
            { num: "340", label: "сделок закрыто" },
            { num: "98%", label: "довольных клиентов" },
            { num: "47", label: "объектов сейчас" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-cinzel text-3xl font-semibold text-beige-100">
                {s.num}
              </div>
              <div className="font-josefin text-xs text-beige-300/70 tracking-wider uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-beige-200/50 cursor-pointer"
      >
        <span className="font-josefin text-xs tracking-widest uppercase">Прокрутите</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
