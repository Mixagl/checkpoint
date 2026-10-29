import Link from "next/link";

const navItems = [
  { href: "/zones", label: "Зоны" },
  { href: "/esports", label: "Киберспорт" },
  { href: "/pricing", label: "Тарифы" },
  { href: "/contacts", label: "Контакты" },
];

const socials = [
  { href: "https://t.me/checkpoint_club", label: "Telegram" },
  { href: "https://vk.com/checkpoint_club", label: "VK" },
];

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Бренд + слоган */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-fg transition-colors hover:text-accent"
            >
              Checkpoint<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Твой респавн начинается здесь. Топовое железо, киберспорт и
              атмосфера, в которой хочется остаться на всю ночь.
            </p>
          </div>

          {/* Навигация */}
          <nav className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-fg">Навигация</h3>
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

          {/* Контакты */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-fg">Контакты</h3>
            <p className="text-sm text-muted">г. Москва, ул. Пиксельная, 7</p>
            <p className="text-sm text-muted">Круглосуточно, 7 дней в неделю</p>
            <a
              href="tel:+70000000000"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              +7 (000) 000-00-00
            </a>
            <div className="mt-1 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя полоса */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} Checkpoint. Все права защищены.</p>
          <p>ПК-клуб нового поколения</p>
        </div>
      </div>
    </footer>
  );
}
