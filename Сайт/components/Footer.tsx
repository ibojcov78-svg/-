import { Phone, Mail, MapPin } from "lucide-react";

const links = {
  "Объекты": ["Коттеджи", "Таунхаусы", "Усадьбы", "Участки", "Все объекты"],
  "Районы": ["Выборгский", "Приозерский", "Всеволожский", "Гатчинский", "Лужский"],
  "Компания": ["О нас", "Команда", "Отзывы", "Пресса", "Контакты"],
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-beige-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-forest-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-beige-100">
                  <path d="M12 2L3 9v13h18V9L12 2z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-cinzel font-semibold text-xl tracking-wide text-beige-50">
                ЛесПоместье
              </span>
            </div>
            <p className="font-josefin text-beige-400/70 text-sm leading-relaxed mb-6 max-w-sm">
              Премиальная загородная недвижимость в Ленинградской области.
              12 лет помогаем людям найти их идеальный дом за городом.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: Phone, text: "+7 (812) 123-45-67" },
                { icon: Mail, text: "info@lenpomestye.ru" },
                { icon: MapPin, text: "СПб, Невский пр., 12" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2 text-sm font-josefin text-beige-400/80">
                  <c.icon className="w-3.5 h-3.5 text-forest-400 flex-shrink-0" />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-cinzel text-sm text-beige-100 font-semibold mb-4 tracking-wide">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-josefin text-sm text-beige-400/70 hover:text-beige-200 transition-colors cursor-pointer"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-josefin text-sm text-beige-500/60">
            © 2024 ЛесПоместье. Все права защищены.
          </span>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Пользовательское соглашение"].map((l) => (
              <a
                key={l}
                href="#"
                className="font-josefin text-xs text-beige-500/60 hover:text-beige-300 transition-colors cursor-pointer"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
