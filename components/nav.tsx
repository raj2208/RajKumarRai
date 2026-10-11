export function Nav({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-wide">{name}</span>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}
