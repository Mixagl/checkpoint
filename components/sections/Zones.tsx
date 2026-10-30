import Link from "next/link";
import ZoneCard from "@/components/ui/ZoneCard";

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

export default function Zones() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              Оборудование
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Три зоны. Одно правило — никаких компромиссов.
            </h2>
          </div>
          <Link
            href="/zones"
            className="shrink-0 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Все зоны →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {zones.map((zone) => (
            <ZoneCard key={zone.name} {...zone} />
          ))}
        </div>
      </div>
    </section>
  );
}
