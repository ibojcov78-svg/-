"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, ChevronRight } from "lucide-react";

const districts = [
  {
    id: "vyborgsky",
    name: "Выборгский район",
    objects: 12,
    desc: "Сосновые леса, Финский залив, архитектурные памятники. Быстрый выезд из СПб по Скандинавии.",
    price: "от 7 млн ₽",
    dist: "40–90 км",
    highlight: "Природа и история",
    x: "28%",
    y: "22%",
  },
  {
    id: "priozersky",
    name: "Приозерский район",
    objects: 9,
    desc: "Ладожское озеро, острова, нетронутая природа. Идеально для рыбалки и спокойного отдыха.",
    price: "от 10 млн ₽",
    dist: "80–130 км",
    highlight: "Вода и тишина",
    x: "55%",
    y: "15%",
  },
  {
    id: "vsevolozhsky",
    name: "Всеволожский район",
    objects: 14,
    desc: "Самый близкий район к Петербургу. Развитая инфраструктура, отличные дороги.",
    price: "от 5 млн ₽",
    dist: "15–45 км",
    highlight: "Близость к городу",
    x: "65%",
    y: "45%",
  },
  {
    id: "gatchinsky",
    name: "Гатчинский район",
    objects: 7,
    desc: "Исторические парки, дворцы, чистый воздух. Развитая социальная инфраструктура.",
    price: "от 4 млн ₽",
    dist: "30–60 км",
    highlight: "Культура и комфорт",
    x: "52%",
    y: "68%",
  },
  {
    id: "luzhsky",
    name: "Лужский район",
    objects: 5,
    desc: "Дикая природа, охота, рыбалка. Для тех, кто ищет настоящее уединение вдали от города.",
    price: "от 8 млн ₽",
    dist: "110–160 км",
    highlight: "Дикая природа",
    x: "38%",
    y: "82%",
  },
];

export default function MapSection() {
  const [active, setActive] = useState(districts[2]);

  return (
    <section id="map" className="py-24 bg-beige-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-josefin text-xs text-forest-600 tracking-widest uppercase font-medium">
            География
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-navy-800 mt-3 mb-4">
            Районы Ленобласти
          </h2>
          <p className="font-josefin text-navy-600/70 max-w-xl mx-auto leading-relaxed">
            Мы работаем в пяти живописных районах области. Каждый уникален по своему характеру.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map SVG */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-beige-100 to-beige-200 rounded-3xl overflow-hidden aspect-square border border-beige-300"
          >
            {/* Decorative map background */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4332' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Water bodies */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <ellipse cx="60" cy="18" rx="18" ry="10" fill="#93c5fd" fillOpacity="0.4" />
              <text x="52" y="20" fontSize="3" fill="#1e40af" fillOpacity="0.7" fontFamily="sans-serif">Ладога</text>
              <ellipse cx="30" cy="38" rx="8" ry="5" fill="#93c5fd" fillOpacity="0.3" />
              <text x="25" y="40" fontSize="2.5" fill="#1e40af" fillOpacity="0.7" fontFamily="sans-serif">Вуокса</text>
              {/* Нева */}
              <path d="M 58 52 Q 62 55 68 58 Q 72 60 75 65" stroke="#93c5fd" strokeWidth="1.5" fill="none" strokeOpacity="0.6" />
              {/* КАД dot */}
              <circle cx="68" cy="52" r="5" fill="none" stroke="#1A2744" strokeWidth="0.8" strokeDasharray="2,1" strokeOpacity="0.4" />
              <text x="68" y="60" fontSize="2.2" fill="#1A2744" fillOpacity="0.5" fontFamily="sans-serif" textAnchor="middle">СПб</text>
            </svg>

            {/* District pins */}
            {districts.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: d.x, top: d.y }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    active.id === d.id
                      ? "bg-forest-700 ring-4 ring-forest-300"
                      : "bg-white hover:bg-forest-50 border-2 border-forest-300"
                  }`}
                >
                  <MapPin
                    className={`w-5 h-5 ${
                      active.id === d.id ? "text-beige-50" : "text-forest-600"
                    }`}
                  />
                </motion.div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-navy-800 text-beige-100 text-xs font-josefin px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {d.objects} объектов
                </div>
              </button>
            ))}
          </motion.div>

          {/* District info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3"
          >
            {/* Active district card */}
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-forest-700 text-beige-50 rounded-2xl p-7 mb-3"
            >
              <span className="inline-block bg-forest-600 text-forest-100 text-xs font-josefin font-medium px-3 py-1 rounded-full mb-4">
                {active.highlight}
              </span>
              <h3 className="font-cinzel text-2xl font-semibold mb-2">{active.name}</h3>
              <p className="font-josefin text-beige-200/80 text-sm leading-relaxed mb-5">
                {active.desc}
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="font-cinzel text-xl font-semibold">{active.price}</div>
                  <div className="text-xs font-josefin text-beige-300/70 mt-0.5">стоимость</div>
                </div>
                <div>
                  <div className="font-cinzel text-xl font-semibold">{active.dist}</div>
                  <div className="text-xs font-josefin text-beige-300/70 mt-0.5">от КАД</div>
                </div>
                <div>
                  <div className="font-cinzel text-xl font-semibold">{active.objects}</div>
                  <div className="text-xs font-josefin text-beige-300/70 mt-0.5">объектов</div>
                </div>
              </div>
            </motion.div>

            {/* District list */}
            {districts.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer text-left ${
                  active.id === d.id
                    ? "border-forest-300 bg-forest-50"
                    : "border-beige-200 bg-white hover:border-forest-200 hover:bg-beige-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      active.id === d.id ? "bg-forest-600" : "bg-beige-400"
                    }`}
                  />
                  <span
                    className={`font-josefin text-sm font-medium ${
                      active.id === d.id ? "text-forest-700" : "text-navy-700"
                    }`}
                  >
                    {d.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-josefin text-navy-500 bg-beige-100 px-2 py-1 rounded-full">
                    {d.objects} объектов
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-colors ${
                      active.id === d.id ? "text-forest-600" : "text-beige-400"
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
