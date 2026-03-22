"use client";

import { motion } from "motion/react";
import { Shield, Map, HandshakeIcon, Clock, Award, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Юридическая чистота",
    desc: "Полная проверка каждого объекта. Чистые документы, отсутствие обременений. Гарантия безопасной сделки.",
  },
  {
    icon: Map,
    title: "Знание территории",
    desc: "12 лет работы только в Ленинградской области. Знаем каждый район, каждую дорогу и природную особенность.",
  },
  {
    icon: HandshakeIcon,
    title: "Сопровождение до ключей",
    desc: "Помогаем на каждом этапе: от первого просмотра до получения ключей и оформления собственности.",
  },
  {
    icon: Clock,
    title: "Скорость сделки",
    desc: "Средний срок от первого просмотра до подписания договора — 18 дней. Без лишней бюрократии.",
  },
  {
    icon: Award,
    title: "Лучшие цены",
    desc: "Прямые договоры с застройщиками и собственниками без посредников. Работаем без скрытых комиссий.",
  },
  {
    icon: Leaf,
    title: "Экологический отбор",
    desc: "В каталоге только объекты в экологически чистых зонах, вдали от промышленных предприятий.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy-800 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-forest-700/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-600/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-josefin text-xs text-forest-400 tracking-widest uppercase font-medium">
            Наши преимущества
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-beige-50 mt-3 mb-4">
            Почему выбирают нас
          </h2>
          <p className="font-josefin text-beige-300/70 max-w-xl mx-auto leading-relaxed">
            Мы не просто продаём дома. Мы помогаем найти место, где будет по-настоящему хорошо.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.title}
              variants={itemVariants}
              className="group p-7 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-forest-500/40 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-forest-700/30 flex items-center justify-center mb-5 group-hover:bg-forest-700/50 transition-colors">
                <r.icon className="w-6 h-6 text-forest-400" />
              </div>
              <h3 className="font-cinzel text-lg text-beige-100 font-semibold mb-3">
                {r.title}
              </h3>
              <p className="font-josefin text-beige-400/70 leading-relaxed text-sm">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Big number strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: "₽ 0", label: "скрытых комиссий" },
            { num: "18", label: "дней средняя сделка" },
            { num: "100%", label: "объектов проверено" },
            { num: "12", label: "лет в Ленобласти" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="font-cinzel text-4xl font-bold text-forest-400 mb-2">
                {s.num}
              </div>
              <div className="font-josefin text-xs text-beige-400/60 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
