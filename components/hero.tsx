export function Hero() {
  return (
    <section id="inicio" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6">
          Tu portal a mundos extraordinarios
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-8">
          Donde la magia cobra vida en cada página
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Explora reinos encantados, batallas épicas y héroes legendarios. 
          Descubre historias que han cautivado a millones de lectores alrededor del mundo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#libros"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Explorar Libros
          </a>
          <a
            href="#autores"
            className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-sm hover:bg-secondary transition-colors"
          >
            Conocer Autores
          </a>
        </div>
      </div>
    </section>
  )
}
