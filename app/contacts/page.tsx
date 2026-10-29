import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты — Checkpoint",
  description:
    "Адрес, режим работы и соцсети ПК-клуба Checkpoint. Работаем круглосуточно, без выходных.",
};

const contacts = [
  {
    label: "Адрес",
    value: "г. Москва, ул. Пиксельная, 7",
    note: "5 минут от метро «Технопарк»",
  },
  {
    label: "Режим работы",
    value: "Круглосуточно",
    note: "7 дней в неделю, без перерывов",
  },
  {
    label: "Телефон",
    value: "+7 (000) 000-00-00",
    note: "Звонки и WhatsApp",
    href: "tel:+70000000000",
  },
  {
    label: "Соцсети",
    value: "@checkpoint_club",
    note: "Telegram и VK",
    href: "https://t.me/checkpoint_club",
  },
];

export default function ContactsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Заголовок */}
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-wider text-accent">
          Контакты
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          Заходи на респавн.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Мы работаем круглосуточно — можно прийти в любое время, без записи и
          звонка. Но если хочется уточнить детали, мы на связи.
        </p>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        {/* Контактные данные */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-border">
            {contacts.map((item, i) => (
              <div
                key={item.label}
                className={`px-8 py-6 ${
                  i !== 0 ? "border-t border-border" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-2 block text-lg font-medium transition-colors hover:text-accent"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-medium">{item.value}</p>
                )}
                <p className="mt-1 text-sm text-muted">{item.note}</p>
              </div>
            ))}
          </div>

          {/* Как добраться */}
          <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold">Как добраться</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                Метро «Технопарк», выход №2, далее 5 минут пешком.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                На машине — бесплатная парковка во дворе (въезд с торца здания).
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                На автобусе — остановка «Пиксельная, 7», маршруты 42 и 117.
              </li>
            </ul>
          </div>
        </div>

        {/* Карта-заглушка */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative flex h-full min-h-100 flex-col items-center justify-center p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <p className="mt-6 text-lg font-semibold">Checkpoint</p>
            <p className="mt-1 text-sm text-muted">
              г. Москва, ул. Пиксельная, 7
            </p>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">
              Интерактивная карта появится здесь позже. Пока ориентируйтесь на
              адрес и схему проезда.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 flex flex-wrap items-center gap-4 border-t border-border pt-12 md:mt-32">
        <Link
          href="/pricing"
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          Смотреть тарифы
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
