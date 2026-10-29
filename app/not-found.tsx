import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-xs uppercase tracking-wider text-accent">Ошибка 404</p>
      <h1 className="mt-4 text-6xl font-bold leading-none tracking-tight md:text-8xl">
        Респавн не найден.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        Такой страницы нет — возможно, она была перемещена или вы ошиблись
        адресом. Вернитесь на главную и начните заново.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
        >
          На главную
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
