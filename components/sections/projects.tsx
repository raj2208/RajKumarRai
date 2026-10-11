import { getProjects } from "@/lib/content"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = getProjects()
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <Card key={project.name} className="border-border bg-card flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold text-sm leading-snug">{project.name}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
                >
                  ↗
                </a>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <p className="text-sm text-foreground/75 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
