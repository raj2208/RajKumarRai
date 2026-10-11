import { getExperience } from "@/lib/content"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Experience() {
  const jobs = getExperience()
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold mb-10">Experience</h2>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <Card key={job.company} className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                <div>
                  <p className="font-semibold text-base">{job.role}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap sm:mt-1">
                  {job.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 mb-4">{job.description}</p>
              <ul className="flex flex-col gap-2">
                {job.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-foreground/75 flex gap-2">
                    <span className="text-muted-foreground mt-0.5">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
