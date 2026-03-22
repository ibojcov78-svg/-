import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЛесПоместье — Загородная недвижимость в Ленинградской области",
  description:
    "Премиальная загородная недвижимость в Ленинградской области. Дома у леса, у воды, в экологически чистых районах. Ваш идеальный дом за городом.",
  keywords: "загородная недвижимость, Ленинградская область, купить дом, участок у леса, коттедж",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
