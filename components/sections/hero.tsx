import Image from "next/image"
import { getAbout } from "@/lib/content"

export function Hero() {
  const about = getAbout()
  return (
    <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12">
        {/* Photo */}
        <div className="shrink-0">
          <Image
            src="/rajphoto2.png"
            alt={about.name}
            width={120}
            height={120}
            className="rounded-full object-cover ring-2 ring-border"
            priority
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">
            {about.location}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">{about.name}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">{about.title}</p>
          <p className="text-base text-foreground/80 max-w-2xl leading-relaxed">
            {about.summary}
          </p>
          <div className="flex gap-4 mt-8">
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
              className="px-5 py-2.5 rounded-md border border-border text-sm font-medium hover:bg-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
