"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code2, Layout, Database, BookOpen, Users, Wrench, Maximize2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Tooltip } from "./tooltip"
import { FullScreenModal } from "./full-screen-modal"
import { SkillsModalContent } from "./modal-contents"

// Devicon CDN base
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons"

interface Skill {
  name: string
  logo?: string
  invert?: boolean
}

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: Skill[]
  tooltip: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    tooltip: "Programming languages I use for development",
    skills: [
      { name: "C++", logo: `${DEVICON}/cplusplus/cplusplus-original.svg` },
      { name: "JavaScript", logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: "Python", logo: `${DEVICON}/python/python-original.svg` },
      { name: "PHP", logo: `${DEVICON}/php/php-original.svg` },
    ],
  },
  {
    title: "Frameworks",
    icon: Layout,
    tooltip: "Modern frameworks for full-stack development",
    skills: [
      { name: "React.js", logo: `${DEVICON}/react/react-original.svg` },
      { name: "Node.js", logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", logo: `${DEVICON}/express/express-original.svg`, invert: true },
      { name: "Tailwind CSS", logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    title: "Database",
    icon: Database,
    tooltip: "Database technologies for data management",
    skills: [
      { name: "MongoDB", logo: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg` },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    title: "Core CS Fundamentals",
    icon: BookOpen,
    tooltip: "Strong foundation in computer science concepts",
    skills: [
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "OOPs" },
      { name: "Computer Networks" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    tooltip: "Essential skills for effective teamwork",
    skills: [
      { name: "Critical Thinking" },
      { name: "Time Management" },
      { name: "Leadership" },
      { name: "Problem Solving" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    tooltip: "Development tools and deployment platforms",
    skills: [
      { name: "Git", logo: `${DEVICON}/git/git-original.svg` },
      { name: "GitHub", logo: `${DEVICON}/github/github-original.svg`, invert: true },
      { name: "Postman", logo: `${DEVICON}/postman/postman-original.svg` },
      { name: "AWS", logo: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg` },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => { if (current) observer.unobserve(current) }
  }, [])

  return (
    <>
      <FullScreenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Technical Skills">
        <SkillsModalContent />
      </FullScreenModal>

      <section id="skills" ref={sectionRef} className="relative px-6 py-24 md:py-32">
        <div className="relative mx-auto max-w-6xl">
          {/* Section Header */}
          <div className={`mb-14 transition-all duration-600 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Technical Skills</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Maximize2 size={16} />
              View Detailed Skills
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, catIndex) => (
              <Tooltip key={category.title} content={category.tooltip}>
                <div
                  className={`rounded-xl border border-border bg-card p-6 transition-all duration-600 hover:border-primary/30 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
                  style={{ transitionDelay: `${150 + catIndex * 70}ms` }}
                >
                  {/* Category Header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with logos */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {skill.logo && (
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            width={14}
                            height={14}
                            className={`h-3.5 w-3.5 object-contain ${skill.invert ? "invert brightness-200" : ""}`}
                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                          />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
