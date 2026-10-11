import fs from "fs"
import path from "path"
import matter from "gray-matter"

function read(filename: string) {
  const file = path.join(process.cwd(), "content", filename)
  return matter(fs.readFileSync(file, "utf8"))
}

export function getAbout() {
  const { data, content } = read("about.md")
  return data as {
    name: string
    title: string
    location: string
    email: string
    github: string
    linkedin: string
    summary: string
  }
}

export function getExperience() {
  const { data } = read("experience.md")
  return (data.jobs ?? []) as {
    company: string
    role: string
    period: string
    location: string
    description: string
    highlights: string[]
  }[]
}

export function getProjects() {
  const { data } = read("projects.md")
  return (data.projects ?? []) as {
    name: string
    description: string
    tags: string[]
    github: string
    status: string
  }[]
}

export function getSkills() {
  const { data } = read("skills.md")
  return (data.categories ?? []) as {
    name: string
    skills: string[]
  }[]
}
