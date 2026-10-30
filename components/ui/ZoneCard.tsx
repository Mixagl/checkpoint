import Image from "next/image";

type ZoneCardProps = {
  name: string;
  tag: string;
  specs: string[];
  price: string;
  seats: number;
  image?: string;
  imageAlt?: string;
};

export default function ZoneCard({
  name,
  tag,
  specs,
  price,
  seats,
  image,
  imageAlt,
}: ZoneCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50">
      {/* Текстовая часть */}
      <div className="flex flex-1 flex-col p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted">{tag}</p>
            <h3 className="mt-1 text-2xl font-semibold">{name}</h3>
          </div>
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
            {seats} мест
          </span>
        </div>

        <ul className="mb-8 flex-1 space-y-2">
          {specs.map((spec) => (
            <li
              key={spec}
              className="flex items-start gap-2 text-sm text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted">Стоимость</p>
          <p className="mt-1 text-xl font-semibold text-fg">
            {price}
            <span className="text-sm font-normal text-muted"> / час</span>
          </p>
        </div>
      </div>

      {/* Фото снизу — только если передано */}
      {image && (
        <div className="relative aspect-16/10 w-full border-t border-border">
          <Image
            src={image}
            alt={imageAlt ?? name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
    </article>
  );
}
