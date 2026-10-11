import { getAbout } from "@/lib/content"
import { Separator } from "@/components/ui/separator"

export function About() {
  const about = getAbout()
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-20">
      <Separator className="mb-16" />
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <p className="text-base text-foreground/80 max-w-2xl leading-relaxed">
        {about.summary}
      </p>
    </section>
  )
}
