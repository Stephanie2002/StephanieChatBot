export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <svg
            className="w-8 h-8 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            Reino de Fantasía
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#libros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Libros
          </a>
          <a href="#autores" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Autores
          </a>
          <a href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
