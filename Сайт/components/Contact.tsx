"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", agree: false });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.agree) return;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-beige-50 overflow-hidden">
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
            Связаться с нами
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-navy-800 mt-3 mb-4">
            Начните поиск сегодня
          </h2>
          <p className="font-josefin text-navy-600/70 max-w-xl mx-auto leading-relaxed">
            Оставьте заявку и наш специалист свяжется с вами в течение часа.
            Подберём варианты под ваш запрос и бюджет.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 border border-beige-200 shadow-xl shadow-navy-900/5"
          >
            {!sent ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-josefin font-medium text-navy-700 mb-1.5"
                  >
                    Имя *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm placeholder:text-beige-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-josefin font-medium text-navy-700 mb-1.5"
                  >
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm placeholder:text-beige-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-josefin font-medium text-navy-700 mb-1.5"
                  >
                    Пожелания
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Что для вас важно? Район, бюджет, особые требования..."
                    className="w-full px-4 py-3.5 rounded-xl border border-beige-200 bg-beige-50 text-navy-800 font-josefin text-sm placeholder:text-beige-400 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded border-beige-300 text-forest-700 focus:ring-forest-500 cursor-pointer"
                  />
                  <span className="text-xs font-josefin text-navy-500 leading-relaxed">
                    Я согласен(а) с{" "}
                    <a href="#" className="text-forest-700 underline hover:text-forest-600">
                      политикой обработки персональных данных
                    </a>
                  </span>
                </label>
                <button
                  type="submit"
                  className="bg-forest-700 hover:bg-forest-600 disabled:bg-beige-300 disabled:cursor-not-allowed text-beige-50 font-josefin font-semibold py-4 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-forest-900/20 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Отправить заявку
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-forest-600 mb-5" />
                <h3 className="font-cinzel text-2xl text-navy-800 mb-3">Заявка отправлена!</h3>
                <p className="font-josefin text-navy-600/70 leading-relaxed">
                  Мы свяжемся с вами в течение часа. Спасибо за доверие!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            {[
              {
                icon: Phone,
                label: "Телефон",
                value: "+7 (812) 123-45-67",
                sub: "Пн–Вс, 9:00 – 20:00",
                href: "tel:+78121234567",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@lenpomestye.ru",
                sub: "Отвечаем в течение часа",
                href: "mailto:info@lenpomestye.ru",
              },
              {
                icon: MapPin,
                label: "Офис",
                value: "Санкт-Петербург, Невский пр., 12",
                sub: "Возможны выезды по области",
                href: "#",
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-beige-200 hover:border-forest-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-700/10 group-hover:bg-forest-700/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <c.icon className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <div className="text-xs font-josefin text-navy-500 uppercase tracking-wider mb-1">
                    {c.label}
                  </div>
                  <div className="font-josefin font-semibold text-navy-800">{c.value}</div>
                  <div className="text-sm font-josefin text-navy-500">{c.sub}</div>
                </div>
              </a>
            ))}

            {/* Trust badge */}
            <div className="bg-forest-700/8 border border-forest-200 rounded-2xl p-6">
              <div className="font-cinzel text-navy-800 font-semibold mb-2">
                Бесплатная консультация
              </div>
              <p className="font-josefin text-sm text-navy-600/80 leading-relaxed">
                Первая консультация с нашим специалистом — абсолютно бесплатно.
                Расскажем о рынке, подберём варианты под ваш запрос.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
