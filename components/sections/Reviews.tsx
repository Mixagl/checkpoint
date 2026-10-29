import ReviewCard from "@/components/ui/ReviewCard";

const reviews = [
  {
    quote:
      "Лучшее место для скримов. Железо не лагает, персонал шарит. Провожу тут каждые выходные.",
    author: "Артём",
    meta: "21 год · Standard Zone",
  },
  {
    quote:
      "Брал VIP на день рождения — атмосфера топ, друзья до сих пор вспоминают.",
    author: "Даша",
    meta: "19 лет · VIP / Bootcamp",
  },
  {
    quote:
      "Турнир по CS2 — всё по-взрослому: судьи, трансляция, призы. Вернусь.",
    author: "Кирилл",
    meta: "24 года · Киберспорт",
  },
];

export default function Reviews() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-wider text-accent">
            Отзывы
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Что говорят те, кто уже заходил на респавн.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
