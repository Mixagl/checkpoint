import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Декоративное свечение лаймом в углу — не киберпанк, а мягкий акцент */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-120 w-120 rounded-full bg-accent/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Левая колонка — текст */}
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ПК-клуб нового поколения · Москва
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Твой респавн
              <br />
              начинается <span className="text-accent">здесь</span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Checkpoint — точка входа в мир киберспорта. Топовое железо, свежий
              воздух и атмосфера, в которой хочется остаться на всю ночь.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/pricing"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Забронировать место
              </Link>
              <Link
                href="/zones"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Смотреть зоны
              </Link>
            </div>

            {/* Мини-статы */}
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { value: "70", label: "игровых мест" },
                { value: "24/7", label: "без выходных" },
                { value: "2021", label: "год основания" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold text-fg md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Правая колонка — визуальный блок */}

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src="/images/hero.jpg"
              alt="Игровая зона Checkpoint: монитор, ПК и кресло"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Затемняющая подложка снизу, чтобы текст читался на любом фото */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

            {/* Лейблы поверх фото */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <div className="flex items-center justify-between text-xs">
                <span>CHECKPOINT / ZONE_01</span>
                <span>STANDARD</span>
              </div>
              <div>
                <p className="text-sm opacity-80">Standard Zone</p>
                <p className="mt-1 text-2xl font-semibold">RTX 4060 · 240Hz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
