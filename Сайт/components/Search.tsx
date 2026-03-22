"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";

const districts = ["Все районы", "Выборгский", "Приозерский", "Всеволожский", "Гатчинский", "Лужский"];
const types = ["Все типы", "Коттедж", "Таунхаус", "Участок", "Усадьба"];
const prices = ["Любой бюджет", "до 5 млн", "5–15 млн", "15–30 млн", "от 30 млн"];

export default function SearchBar() {
  const [district, setDistrict] = useState(districts[0]);
  const [type, setType] = useState(types[0]);
  const [price, setPrice] = useState(prices[0]);
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section id="search" className="relative z-20 -mt-10 px-4 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-navy-900/10 p-6 border border-beige-200"
      >
        {/* Main search row */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* Text search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-beige-600" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Поиск по названию, адресу..."
              className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm placeholder:text-beige-500 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-beige-400 hover:text-navy-700 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Selects */}
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            {[
              { value: district, options: districts, setter: setDistrict },
              { value: type, options: types, setter: setType },
              { value: price, options: prices, setter: setPrice },
            ].map((s, i) => (
              <select
                key={i}
                value={s.value}
                onChange={(e) => s.setter(e.target.value)}
                className="px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all cursor-pointer min-w-[140px]"
              >
                {s.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ))}
          </div>

          {/* Search button */}
          <button className="bg-forest-700 hover:bg-forest-600 text-beige-50 font-josefin font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0 hover:shadow-md">
            Найти
          </button>
        </div>

        {/* Quick tags */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <span className="text-xs font-josefin text-beige-600 uppercase tracking-wider">Популярно:</span>
          {["У воды", "С баней", "Лесной участок", "До 30 км от КАД", "Готов к заселению"].map((tag) => (
            <button
              key={tag}
              className="text-xs font-josefin text-forest-700 bg-forest-700/8 hover:bg-forest-700/15 border border-forest-700/20 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="ml-auto flex items-center gap-1.5 text-xs font-josefin text-navy-600 hover:text-forest-700 transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Расширенный поиск
          </button>
        </div>

        {/* Extended filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 pt-5 border-t border-beige-200 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Площадь дома", placeholder: "от — до м²" },
              { label: "Площадь участка", placeholder: "от — до сот." },
              { label: "Расстояние от КАД", placeholder: "до ... км" },
              { label: "Год постройки", placeholder: "от — до" },
            ].map((f) => (
              <div key={f.label}>
                <label className="block text-xs font-josefin text-navy-600 mb-1.5 font-medium">
                  {f.label}
                </label>
                <input
                  placeholder={f.placeholder}
                  className="w-full px-3 py-2.5 rounded-lg border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm placeholder:text-beige-400 focus:outline-none focus:border-forest-500 transition-all"
                />
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
