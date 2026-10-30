import type { Metadata } from "next";
import Link from "next/link";
import { tournaments } from "@/lib/tournaments";

export const metadata: Metadata = {
  title: "Турниры — Checkpoint",
  description:
    "Еженедельные турниры по CS2, Dota 2, Valorant и Apex Legends в ПК-клубе Checkpoint. Призовой фонд до 100 000 ₽ в месяц. Запись открыта.",
};

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
    title: "Бесплатные скримы",
    description:
      "Любительским составам — по будням до 16:00, по предварительной записи.",
  },
];

const steps = [
  {
    title: "Выбери турнир",
    description: "Посмотри расписание ниже и найди подходящую игру и дату.",
  },
  {
    title: "Заполни форму",
    description:
      "Нажми «Записаться» и укажи название команды, капитана и состав.",
  },
  {
    title: "Приходи играть",
    description:
      "За день до турнира мы подтвердим участие в Telegram. Вход для зрителей свободный.",
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
          Турниры в Checkpoint.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Еженедельные соревнования по CS2, Dota 2, Valorant и Apex Legends.
          Собирай команду, записывайся и играй на турнирных аренах клуба.
        </p>
      </div>

      {/* Информационные карточки */}
      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h2 className="text-lg font-semibold">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Таблица турниров */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            Расписание
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Ближайшие турниры.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Запись открыта для всех. Собирай команду и жми «Записаться».
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          {/* Заголовок таблицы — только на десктопе */}
          <div className="hidden border-b border-border bg-surface px-8 py-4 text-xs uppercase tracking-wider text-muted md:grid md:grid-cols-[1.2fr_1fr_1.5fr_1fr_auto] md:gap-4">
            <span>Игра</span>
            <span>Дата</span>
            <span>Формат</span>
            <span>Призовой фонд</span>
            <span className="text-right">Запись</span>
          </div>

          {tournaments.map((t, i) => (
            <div
              key={t.id}
              className={`flex flex-col gap-4 px-8 py-6 md:grid md:grid-cols-[1.2fr_1fr_1.5fr_1fr_auto] md:items-center md:gap-4 ${
                i !== 0 ? "border-t border-border" : ""
              }`}
            >
              <p className="text-base font-semibold">{t.game}</p>

              <div>
                <p className="text-sm">{t.date}</p>
                <p className="text-xs text-muted">{t.time}</p>
              </div>

              <p className="text-sm text-muted">{t.format}</p>
              <p className="text-sm font-medium">{t.prize}</p>

              <div className="md:text-right">
                {t.status === "open" && t.registrationUrl ? (
                  <a
                    href={t.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
                  >
                    Записаться
                  </a>
                ) : (
                  <span className="inline-block rounded-full border border-border px-5 py-2 text-sm text-muted">
                    {t.status === "soon" ? "Скоро" : "Закрыта"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Как это работает */}
      <section className="mt-24 border-t border-border pt-16 md:mt-32">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            Как это работает
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Три шага до турнира.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <p className="text-xs font-semibold text-accent">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
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
        <a
          href="https://t.me/checkpoint_club"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
        >
          Задать вопрос в Telegram
        </a>
      </div>
    </div>
  );
}
