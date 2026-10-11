import { getAbout } from "@/lib/content"

export function Hero() {
  const about = getAbout()
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <p className="text-sm text-muted-foreground mb-3 tracking-widest uppercase">
        {about.location}
      </p>
      <h1 className="text-5xl font-bold tracking-tight mb-4">{about.name}</h1>
      <p className="text-xl text-muted-foreground mb-8">{about.title}</p>
      <p className="text-base text-foreground/80 max-w-2xl leading-relaxed">
        {about.summary}
      </p>
      <div className="flex gap-4 mt-10">
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          GitHub
        </a>
        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-accent transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
