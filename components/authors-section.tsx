const authors = [
  {
    name: "J.R.R. Tolkien",
    title: "Padre de la Fantasía Moderna",
    description: "Creador de la Tierra Media, sus obras sentaron las bases del género fantástico tal como lo conocemos hoy.",
    books: "El Señor de los Anillos, El Hobbit, El Silmarillion"
  },
  {
    name: "Brandon Sanderson",
    title: "Maestro de los Sistemas de Magia",
    description: "Conocido por sus intrincados sistemas de magia y mundos meticulosamente construidos.",
    books: "Mistborn, El Archivo de las Tormentas, Elantris"
  },
  {
    name: "George R.R. Martin",
    title: "El Arquitecto de Westeros",
    description: "Revolucionó la fantasía con sus narrativas moralmente grises y consecuencias realistas.",
    books: "Canción de Hielo y Fuego, Fuego y Sangre"
  },
  {
    name: "Patrick Rothfuss",
    title: "El Poeta de la Fantasía",
    description: "Su prosa lírica y su complejo protagonista han cautivado a lectores de todo el mundo.",
    books: "Crónica del Asesino de Reyes"
  }
]

export function AuthorsSection() {
  return (
    <section id="autores" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Mentes Brillantes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Autores Legendarios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los arquitectos de mundos que han dado forma al género de la fantasía 
            con su imaginación sin límites.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {authors.map((author, index) => (
            <article
              key={index}
              className="p-8 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors"
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                {author.name}
              </h3>
              <p className="text-primary text-sm mb-4">{author.title}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {author.description}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">Obras destacadas:</span> {author.books}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
