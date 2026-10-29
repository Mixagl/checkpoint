import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Тарифы и абонементы — Checkpoint",
  description:
    "Почасовая оплата, ночные пакеты, дневной безлимит, абонементы на 10/30/100 часов и скидка студентам. Прозрачные цены без скрытых доплат.",
};

const hourlyRates = [
  { zone: "Standard", price: "150 ₽" },
  { zone: "Premium", price: "250 ₽" },
  { zone: "VIP / Bootcamp", price: "400 ₽" },
];

const packages = [
  {
    name: "Ночной пакет",
    price: "700 ₽",
    unit: "с 23:00 до 8:00",
    description: "Standard-зона. Девять часов игры по цене пяти.",
    highlight: false,
  },
  {
    name: "Дневной безлимит",
    price: "900 ₽",
    unit: "на весь день",
    description: "Играй сколько хочешь в течение дня без ограничений.",
    highlight: true,
  },
  {
    name: "Абонемент",
    price: "от 1 200 ₽",
    unit: "10 / 30 / 100 часов",
    description: "Бонусные часы в подарок. Чем больше пакет — тем выгоднее.",
    highlight: false,
  },
];

const perks = [
  {
    title: "Скидка студентам",
    description: "−20% по будням до 17:00 при предъявлении студенческого.",
  },
  {
    title: "Клубная карта",
    description: "Накопительные баллы с каждой игры. Тратится на часы и бар.",
  },
  {
    title: "Скримы для команд",
    description: "Бесплатно по будням до 16:00 для любительских составов.",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Заголовок */}
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-wider text-accent">
          Тарифы
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Прозрачные цены.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Платишь за время — получаешь топовое железо и атмосферу. Без скрытых
          доплат и обязательств.
        </p>
      </div>

      {/* Почасовые тарифы */}
      <section className="mt-16">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
          Почасовая оплата
        </h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          {hourlyRates.map((rate, i) => (
            <div
              key={rate.zone}
              className={`flex items-center justify-between px-8 py-6 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <span className="text-base font-medium">{rate.zone}</span>
              <span className="text-lg font-semibold text-fg">
                {rate.price}
                <span className="text-sm font-normal text-muted"> / час</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Пакеты */}
      <section className="mt-20">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
          Пакеты и абонементы
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                pkg.highlight
                  ? "border-accent/60 bg-surface"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                {pkg.highlight && (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-bg">
                    Хит
                  </span>
                )}
              </div>
              <p className="mt-6 text-3xl font-bold">{pkg.price}</p>
              <p className="mt-1 text-sm text-muted">{pkg.unit}</p>
              <p className="mt-6 flex-1 text-sm leading-relaxed text-muted">
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Бонусы */}
      <section className="mt-20 border-t border-border pt-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Бонусы и скидки.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Мелочи, которые делают игру дешевле и приятнее.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold">{perk.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-24 flex flex-wrap items-center gap-4 border-t border-border pt-12 md:mt-32">
        <Link
          href="/contacts"
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Как добраться
        </Link>
        <Link
          href="/zones"
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Смотреть зоны
        </Link>
      </div>
    </div>
  );
}
