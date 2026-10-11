import { Nav } from "@/components/nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Contact } from "@/components/sections/contact"
import { getAbout } from "@/lib/content"

export default function Page() {
  const about = getAbout()
  return (
    <>
      <Nav name={about.name} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="max-w-4xl mx-auto px-6 py-10 text-xs text-muted-foreground border-t border-border mt-4">
          © 2024 {about.name}
        </footer>
      </main>
    </>
  )
}
