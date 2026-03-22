"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Maximize2, Trees, Bath, Car, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "Сосновый бор",
    district: "Выборгский район",
    price: "18 500 000",
    priceShort: "18.5 млн",
    area: 240,
    land: 25,
    rooms: 5,
    baths: 3,
    garage: true,
    tag: "Хит продаж",
    tagColor: "bg-forest-700",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    dist: 42,
    features: ["Сауна", "Терраса", "Камин"],
    type: "Коттедж",
    new: false,
  },
  {
    id: 2,
    title: "Усадьба «Тихая заводь»",
    district: "Приозерский район",
    price: "32 000 000",
    priceShort: "32 млн",
    area: 380,
    land: 60,
    rooms: 7,
    baths: 4,
    garage: true,
    tag: "Премиум",
    tagColor: "bg-navy-700",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    dist: 88,
    features: ["Бассейн", "Беседка", "Пруд"],
    type: "Усадьба",
    new: false,
  },
  {
    id: 3,
    title: "Лесной коттедж",
    district: "Всеволожский район",
    price: "9 200 000",
    priceShort: "9.2 млн",
    area: 160,
    land: 15,
    rooms: 4,
    baths: 2,
    garage: false,
    tag: "Новинка",
    tagColor: "bg-beige-600",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&q=80",
    dist: 28,
    features: ["Терраса", "Газ", "Лес"],
    type: "Коттедж",
    new: true,
  },
  {
    id: 4,
    title: "Дом у Ладоги",
    district: "Приозерский район",
    price: "14 800 000",
    priceShort: "14.8 млн",
    area: 200,
    land: 20,
    rooms: 5,
    baths: 2,
    garage: true,
    tag: "У воды",
    tagColor: "bg-sky-700",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80",
    dist: 95,
    features: ["Вид на озеро", "Причал", "Баня"],
    type: "Коттедж",
    new: false,
  },
  {
    id: 5,
    title: "Таунхаус «Еловый»",
    district: "Гатчинский район",
    price: "6 500 000",
    priceShort: "6.5 млн",
    area: 130,
    land: 4,
    rooms: 3,
    baths: 2,
    garage: true,
    tag: "",
    tagColor: "",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80",
    dist: 35,
    features: ["Закрытый КП", "Детский клуб"],
    type: "Таунхаус",
    new: true,
  },
  {
    id: 6,
    title: "Поместье «Медвежий лог»",
    district: "Лужский район",
    price: "22 000 000",
    priceShort: "22 млн",
    area: 310,
    land: 45,
    rooms: 6,
    baths: 3,
    garage: true,
    tag: "Редкий объект",
    tagColor: "bg-forest-700",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
    dist: 130,
    features: ["Охота", "Рыбалка", "Лес 360°"],
    type: "Усадьба",
    new: false,
  },
];

const tabs = ["Все", "Коттедж", "Таунхаус", "Усадьба"];

export default function Properties() {
  const [activeTab, setActiveTab] = useState("Все");
  const [liked, setLiked] = useState<number[]>([]);

  const filtered =
    activeTab === "Все" ? properties : properties.filter((p) => p.type === activeTab);

  return (
    <section id="properties" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="font-josefin text-xs text-forest-600 tracking-widest uppercase font-medium">
          Наши объекты
        </span>
        <h2 className="font-cinzel text-4xl md:text-5xl text-navy-800 mt-3 mb-4">
          Найдите свой дом
        </h2>
        <p className="font-josefin text-navy-600/70 max-w-xl mx-auto leading-relaxed">
          47 тщательно отобранных объектов в лучших районах Ленинградской области
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex gap-2 justify-center mb-10 flex-wrap"
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-josefin text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? "bg-forest-700 text-beige-50 shadow-md shadow-forest-900/20"
                : "bg-beige-100 text-navy-600 hover:bg-beige-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-beige-200 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/10 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tag */}
                {p.tag && (
                  <span
                    className={`absolute top-3 left-3 ${p.tagColor} text-white text-xs font-josefin font-semibold px-3 py-1 rounded-full`}
                  >
                    {p.tag}
                  </span>
                )}
                {p.new && !p.tag && (
                  <span className="absolute top-3 left-3 bg-beige-600 text-white text-xs font-josefin font-semibold px-3 py-1 rounded-full">
                    Новинка
                  </span>
                )}

                {/* Favourite */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setLiked((prev) =>
                      prev.includes(p.id) ? prev.filter((x) => x !== p.id) : [...prev, p.id]
                    );
                  }}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                  aria-label="В избранное"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      liked.includes(p.id) ? "fill-red-500 text-red-500" : "text-navy-400"
                    }`}
                  />
                </button>

                {/* Distance */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1">
                  <MapPin className="w-3 h-3 text-forest-600" />
                  <span className="text-xs font-josefin font-medium text-navy-700">
                    {p.dist} км от КАД
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-cinzel text-lg text-navy-800 font-semibold leading-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs font-josefin text-navy-500 mb-4 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {p.district}
                </p>

                {/* Specs */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-navy-600">
                    <Maximize2 className="w-3.5 h-3.5 text-forest-500" />
                    <span className="text-sm font-josefin">{p.area} м²</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-navy-600">
                    <Trees className="w-3.5 h-3.5 text-forest-500" />
                    <span className="text-sm font-josefin">{p.land} сот.</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-navy-600">
                    <Bath className="w-3.5 h-3.5 text-forest-500" />
                    <span className="text-sm font-josefin">{p.baths} санузла</span>
                  </div>
                  {p.garage && (
                    <div className="flex items-center gap-1.5 text-navy-600">
                      <Car className="w-3.5 h-3.5 text-forest-500" />
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex gap-1.5 flex-wrap mb-5">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-josefin text-forest-700 bg-forest-50 border border-forest-200 px-2.5 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-beige-100">
                  <div>
                    <span className="font-cinzel text-xl font-semibold text-navy-800">
                      {p.price} ₽
                    </span>
                  </div>
                  <button className="flex items-center gap-2 bg-forest-700/10 hover:bg-forest-700 text-forest-700 hover:text-beige-50 font-josefin text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer group/btn">
                    Подробнее
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Load more */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <button className="font-josefin font-medium text-forest-700 border-2 border-forest-700 hover:bg-forest-700 hover:text-beige-50 px-8 py-3.5 rounded-xl transition-all duration-200 cursor-pointer">
          Показать все 47 объектов
        </button>
      </motion.div>
    </section>
  );
}
