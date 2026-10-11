import { getAbout } from "@/lib/content"
import { Separator } from "@/components/ui/separator"

export function Contact() {
  const about = getAbout()
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
      <Separator className="mb-16" />
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <p className="text-base text-foreground/80 max-w-lg mb-8">
        I&apos;m open to new opportunities. Feel free to reach out via email or connect on GitHub.
      </p>
      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${about.email}`}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {about.email}
        </a>
        <a
          href={about.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {about.github}
        </a>
        <a
          href={about.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {about.linkedin}
        </a>
      </div>
    </section>
  )
}
