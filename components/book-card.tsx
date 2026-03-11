interface BookCardProps {
  title: string
  author: string
  description: string
  image: string
  year: string
  category: string
}

export function BookCard({ title, author, description, image, year, category }: BookCardProps) {
  return (
    <article className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={`Portada de ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs text-primary uppercase tracking-wider">{category}</span>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">por {author}</p>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  )
}
