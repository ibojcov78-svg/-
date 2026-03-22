"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Алексей Морозов",
    role: "Купил коттедж в Выборгском районе",
    text: "Обратились в ЛесПоместье после долгих поисков на других сайтах. За две недели нашли идеальный дом у леса. Вся сделка прошла без единой проблемы. Особо отметим Анну — она была на связи круглосуточно и отвечала на все наши вопросы.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    date: "Октябрь 2024",
  },
  {
    id: 2,
    name: "Наталья Петрова",
    role: "Приобрела усадьбу у Ладоги",
    text: "Мечтала о доме с видом на воду много лет. Здесь подобрали три варианта под наш бюджет, организовали выезды в удобное время. Оформление заняло 3 недели — быстрее, чем я ожидала. Рекомендую всем!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b69c?w=100&h=100&fit=crop&crop=face",
    date: "Сентябрь 2024",
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    role: "Участок во Всеволожском районе",
    text: "Покупал участок для строительства дома. Помогли с выбором расположения, проверили все документы на землю, разъяснили нюансы подведения коммуникаций. Профессионалы своего дела.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "Август 2024",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-beige-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="font-josefin text-xs text-forest-600 tracking-widest uppercase font-medium">
            Отзывы клиентов
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-navy-800 mt-3 mb-2">
            Что говорят о нас
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-beige-50 rounded-3xl p-8 md:p-12 border border-beige-200"
            >
              <Quote className="w-10 h-10 text-forest-200 mb-6" />
              <p className="font-josefin text-navy-700 text-lg leading-relaxed mb-8">
                {reviews[current].text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-forest-200">
                    <Image
                      src={reviews[current].avatar}
                      alt={reviews[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-cinzel text-navy-800 font-semibold">
                      {reviews[current].name}
                    </div>
                    <div className="font-josefin text-sm text-navy-500">
                      {reviews[current].role}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(reviews[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-beige-600 text-beige-600" />
                    ))}
                  </div>
                  <span className="text-xs font-josefin text-navy-400">
                    {reviews[current].date}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-beige-300 hover:border-forest-500 flex items-center justify-center text-navy-600 hover:text-forest-700 transition-colors cursor-pointer"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "w-6 h-2.5 bg-forest-700"
                      : "w-2.5 h-2.5 bg-beige-300 hover:bg-beige-400"
                  }`}
                  aria-label={`Отзыв ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-beige-300 hover:border-forest-500 flex items-center justify-center text-navy-600 hover:text-forest-700 transition-colors cursor-pointer"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
