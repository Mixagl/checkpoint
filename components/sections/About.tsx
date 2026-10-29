export default function About() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-start">
          {/* Левая колонка — заголовок и текст */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-wider text-accent">
              О клубе
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Не просто компьютерный клуб.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Checkpoint — точка входа в мир киберспорта и цифровых развлечений.
              Мы открылись в 2021 году и с тех пор стали вторым домом для сотен
              геймеров.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              У нас нет пыльных подвалов с ламповыми мониторами — только свежий
              воздух, топовое железо и атмосфера, в которой хочется остаться на
              всю ночь.
            </p>
          </div>

          {/* Правая колонка — миссия */}
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <p className="text-xs uppercase tracking-wider text-muted">
              Наша миссия
            </p>
            <p className="mt-4 text-xl font-medium leading-relaxed md:text-2xl">
              Дать каждому игроку — от казуала до будущего чемпиона — идеальные
              условия для игры, общения и роста.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {[
                { value: "2021", label: "год основания" },
                { value: "70", label: "игровых мест" },
                { value: "24/7", label: "без выходных" },
                { value: "5", label: "турниров в неделю" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-bold text-fg">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
