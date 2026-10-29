import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Киберспорт — Checkpoint",
  description:
    "Две турнирные арены 5×5, еженедельные турниры по CS2, Dota 2, Valorant и Apex Legends, призовой фонд до 100 000 ₽ в месяц и бесплатные скримы для любительских составов.",
};

const tournaments = [
  {
    game: "CS2",
    day: "Каждый вторник",
    format: "5×5 · Single Elimination",
  },
  {
    game: "Dota 2",
    day: "Каждый четверг",
    format: "5×5 · Captains Mode",
  },
  {
    game: "Valorant",
    day: "Каждую субботу",
    format: "5×5 · Bo3 плей-офф",
  },
  {
    game: "Apex Legends",
    day: "Каждое воскресенье",
    format: "Trios · 3 матча",
  },
];

const features = [
  {
    title: "Две турнирные арены",
    description:
      "Формат 5×5 с отдельными экранами для зрителей и комментаторской зоной.",
  },
  {
    title: "Призовой фонд",
    description:
      "До 100 000 ₽ в месяц. Распределяется между победителями еженедельных турниров.",
  },
  {
    title: "Собственная команда",
    description:
      "Checkpoint Esports выступает на городских и региональных лигах.",
  },
  {
    title: "Бесплатные скримы",
    description:
      "Любительским составам — по будням до 16:00, по предварительной записи.",
  },
];

export default function EsportsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      {/* Заголовок */}
      <div className="max-w-3xl">
        <p className="mb-3 text-xs uppercase tracking-wider text-accent">
          Киберспорт
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
          От казуала до чемпиона.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Checkpoint — не только место поиграть. Это площадка, где любительские
          составы превращаются в команды, а тренировки — в победы на турнирах.
        </p>
      </div>

      {/* Что есть */}
      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h2 className="text-xl font-semibold">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Расписание турниров */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            Расписание
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Еженедельные турниры.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Участие — по регистрации в Telegram-канале клуба. Вход для зрителей
            свободный.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          {tournaments.map((t, i) => (
            <div
              key={t.game}
              className={`flex flex-col gap-1 px-8 py-6 md:flex-row md:items-center md:justify-between ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <div>
                <p className="text-base font-semibold">{t.game}</p>
                <p className="mt-1 text-sm text-muted">{t.format}</p>
              </div>
              <p className="text-sm font-medium text-accent md:text-right">
                {t.day}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Команда */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              Checkpoint Esports
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Наша команда на сцене.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Состав Checkpoint Esports выступает на городских и региональных
              лигах. Мы тренируемся здесь же — на тех самых аренах, где проходят
              турниры.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <p className="text-sm text-muted">Ближайшее выступление</p>
            <p className="mt-2 text-2xl font-bold">Городская лига · CS2</p>
            <p className="mt-1 text-sm text-muted">
              Даты и состав обновляются в Telegram-канале
            </p>
            <a
              href="https://t.me/checkpoint_club"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              Следить за командой →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
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
