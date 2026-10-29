"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/zones", label: "Зоны" },
  { href: "/esports", label: "Киберспорт" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем скролл body, когда открыто мобильное меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Закрываем меню по Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Логотип */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-fg transition-colors hover:text-accent"
          onClick={() => setIsOpen(false)}
        >
          Checkpoint
          <span className="text-accent">.</span>
        </Link>

        {/* Десктопная навигация */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA (десктоп) */}
        <Link
          href="/pricing"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90 md:inline-block"
        >
          Забронировать
        </Link>

        {/* Кнопка мобильного меню */}
        <button
          type="button"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg transition-colors hover:bg-surface md:hidden"
        >
          {isOpen ? (
            // Крестик
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            // Бургер
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden overflow-hidden border-t border-border transition-[max-height] duration-300 ease-out ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/pricing"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-bg"
          >
            Забронировать
          </Link>
        </nav>
      </div>
    </header>
  );
}
