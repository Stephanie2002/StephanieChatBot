export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="font-serif text-xl font-bold text-foreground">
                Reino de Fantasía
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Tu destino para descubrir los mejores libros de fantasía. 
              Explora mundos mágicos, conoce héroes legendarios y piérdete en aventuras épicas.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#libros" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Libros
                </a>
              </li>
              <li>
                <a href="#autores" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Autores
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Géneros</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">Fantasía Épica</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Alta Fantasía</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Fantasía Oscura</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Fantasía Urbana</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Reino de Fantasía. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Hecho con pasión por los libros
          </p>
        </div>
      </div>
    </footer>
  )
}
