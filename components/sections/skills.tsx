import { getSkills } from "@/lib/content"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const categories = getSkills()
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10">Skills</h2>
      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat.name}>
            <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
              {cat.name}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm font-normal py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
