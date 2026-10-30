import type { Metadata } from "next";
import Link from "next/link";
import ZoneCard from "@/components/ui/ZoneCard";

export const metadata: Metadata = {
  title: "Зоны и оборудование — Checkpoint",
  description:
    "Standard, Premium и VIP / Bootcamp: топовое железо, мониторы 240–360Hz и приватные кабинки. Плюс консольная зона с PS5, Xbox Series X и VR-стендом.",
};

const zones = [
  {
    name: "Standard",
    tag: "Базовая зона",
    seats: 40,
    specs: [
      "RTX 4060 / i5-13400F / 32GB RAM",
      'Мониторы 27" 240Hz',
      "Кресла DXRacer",
    ],
    price: "от 150 ₽",
    image: "/images/standart-zone.jpg",
    imageAlt: "Standart зона",
  },
  {
    name: "Premium",
    tag: "Продвинутая зона",
    seats: 20,
    specs: [
      "RTX 4070 Ti / i7-13700K / 64GB RAM",
      'Мониторы 32" 2K 270Hz',
      "Периферия Logitech, Razer, HyperX на выбор",
    ],
    price: "от 250 ₽",
    image: "/images/premium-zone.webp",
    imageAlt: "Premium зона",
  },
  {
    name: "VIP / Bootcamp",
    tag: "Приватная зона",
    seats: 10,
    specs: [
      "RTX 4090 / i9-13900K",
      "Мониторы 360Hz + премиум-периферия",
      "Отдельные кабинки с шумоизоляцией",
    ],
    price: "от 400 ₽",
    image: "/images/vip-zone.webp",
    imageAlt: "VIP зона",
  },
];

const consoleFeatures = [
  {
    title: "PlayStation 5",
    description: "Эксклюзивы Sony, геймпады DualSense, 4K-телевизоры.",
  },
  {
    title: "Xbox Series X",
    description:
      "Game Pass, кооперативные игры, 120 fps в поддерживаемых тайтлах.",
  },
  {
    title: "VR-стенд",
    description: "Meta Quest 3 — шлемы, стойка, свободная зона 3×3 метра.",
  },
];

export default function ZonesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Заголовок страницы */}
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-wider text-accent">
          Оборудование
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Зоны клуба
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Три игровые зоны с разным железом и приватностью. Все места — с
          топовой периферией, свежим воздухом и круглосуточным доступом.
        </p>
      </div>

      {/* Сетка зон */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {zones.map((zone) => (
          <ZoneCard key={zone.name} {...zone} />
        ))}
      </div>

      {/* Консольная зона */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            Консоли и VR
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Не только ПК.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Если хочется отдохнуть от клавиатуры — рядом ждут консоли и
            VR-стенд. Идеально для компании или короткой сессии.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {consoleFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA внизу страницы */}
      <div className="mt-24 flex flex-wrap items-center gap-4 border-t border-border pt-12 md:mt-32">
        <Link
          href="/pricing"
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Смотреть тарифы
        </Link>
        <Link
          href="/contacts"
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Как добраться
        </Link>
      </div>
    </div>
  );
}
