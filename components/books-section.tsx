import { BookCard } from "./book-card"

const books = [
  {
    title: "El Nombre del Viento",
    author: "Patrick Rothfuss",
    description: "La historia de Kvothe, un legendario mago, músico y aventurero, contada por él mismo mientras se oculta como un humilde tabernero.",
    image: "/images/book-1.jpg",
    year: "2007",
    category: "Fantasía Épica"
  },
  {
    title: "El Camino de los Reyes",
    author: "Brandon Sanderson",
    description: "En un mundo azotado por tormentas devastadoras, los destinos de tres personas convergen en una guerra que cambiará todo.",
    image: "/images/book-2.jpg",
    year: "2010",
    category: "Alta Fantasía"
  },
  {
    title: "Juego de Tronos",
    author: "George R.R. Martin",
    description: "Cuando muere la Mano del Rey, Lord Eddard Stark es convocado a la corte para servir como el nuevo consejero del rey.",
    image: "/images/book-3.jpg",
    year: "1996",
    category: "Fantasía Oscura"
  },
  {
    title: "El Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Bolsón emprende una inesperada aventura con un grupo de enanos para recuperar un tesoro custodiado por un dragón.",
    image: "/images/book-4.jpg",
    year: "1937",
    category: "Fantasía Clásica"
  },
  {
    title: "Mistborn: El Imperio Final",
    author: "Brandon Sanderson",
    description: "En un mundo de cenizas y niebla, una joven ladrona descubre poderes que podrían derrocar al tirano inmortal.",
    image: "/images/book-5.jpg",
    year: "2006",
    category: "Fantasía Épica"
  },
  {
    title: "La Rueda del Tiempo",
    author: "Robert Jordan",
    description: "Tres jóvenes aldeanos descubren que uno de ellos está destinado a enfrentar al Oscuro y decidir el destino del mundo.",
    image: "/images/book-6.jpg",
    year: "1990",
    category: "Alta Fantasía"
  }
]

export function BooksSection() {
  return (
    <section id="libros" className="py-20 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Colección Destacada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Libros Imprescindibles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección cuidadosa de las obras más influyentes del género fantástico, 
            cada una un portal a mundos que desafían la imaginación.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}
