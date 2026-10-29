type ReviewCardProps = {
  quote: string;
  author: string;
  meta: string;
};

export default function ReviewCard({ quote, author, meta }: ReviewCardProps) {
  return (
    <figure className="flex flex-col rounded-2xl border border-border bg-surface p-8">
      {/* Кавычка-акцент */}
      <span aria-hidden className="text-3xl leading-none text-accent">
        “
      </span>

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-fg">
        {quote}
      </blockquote>

      <figcaption className="mt-8 border-t border-border pt-6">
        <p className="text-sm font-semibold text-fg">{author}</p>
        <p className="mt-1 text-xs text-muted">{meta}</p>
      </figcaption>
    </figure>
  );
}
