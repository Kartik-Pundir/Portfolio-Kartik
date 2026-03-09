"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code2,
  Layout,
  Server,
  Database,
  BookOpen,
  Users,
  Wrench,
  Maximize2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Tooltip } from "./tooltip"
import { FullScreenModal } from "./full-screen-modal"
import { SkillsModalContent } from "./modal-contents"

interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
  tooltip: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "PHP"],
    tooltip: "Programming languages I use for development",
  },
  {
    title: "Frameworks",
    icon: Layout,
    skills: ["React.js", "Node.js", "Express.js", "Laravel"],
    tooltip: "Modern frameworks for full-stack development",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL", "NoSQL"],
    tooltip: "Database technologies for data management",
  },
  {
    title: "Core CS Fundamentals",
    icon: BookOpen,
    skills: ["Operating Systems", "OOPs", "DBMS", "Computer Networks"],
    tooltip: "Strong foundation in computer science concepts",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Good Communication",
      "Problem Solving",
      "Critical Thinking",
      "Team Collaboration",
    ],
    tooltip: "Essential skills for effective teamwork",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Render",
      "REST APIs",
      "npm",
      "Chrome DevTools",
    ],
    tooltip: "Development tools and deployment platforms",
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  return (
    <>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Technical Skills"
      >
        <SkillsModalContent />
      </FullScreenModal>

      <section id="skills" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-14 transition-all duration-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Technical Skills
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
          
          {/* View All Skills Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
          >
            <Maximize2 size={16} />
            View Detailed Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <Tooltip key={category.title} content={category.tooltip}>
              <div
                className={`rounded-xl border border-border bg-card p-6 transition-all duration-600 hover:border-primary/30 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + catIndex * 70}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {skill}
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
