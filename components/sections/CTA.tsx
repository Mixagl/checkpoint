import Link from "next/link";

export default function CTA() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 md:px-16 md:py-24">
          {/* Мягкое свечение лаймом */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-[100px]"
          />

          <div className="relative max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              Первый визит
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Твой респавн ждёт.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Заходи в любое время суток — мы работаем круглосуточно. Выбери
              зону, займи место и играй.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contacts"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                Как добраться
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
              >
                Смотреть тарифы
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
