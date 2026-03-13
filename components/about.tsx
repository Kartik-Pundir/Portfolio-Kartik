"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Database, Server, Target, Maximize2 } from "lucide-react"
import { FullScreenModal } from "./full-screen-modal"
import { AboutMeModalContent } from "./modal-contents"

const highlights = [
  {
    icon: Server,
    title: "Frontend & Backend Development",
    description:
      "Building robust server-side systems, RESTful APIs, and responsive user interfaces.",
  },
  {
    icon: Code2,
    title: "DSA & C++",
    description:
      "Strong algorithmic foundation with 100+ problems solved and contest participation.",
  },
  {
    icon: Database,
    title: "Full Stack Apps",
    description:
      "End-to-end development from database design to responsive frontends.",
  },
  {
    icon: Target,
    title: "Continuous Growth",
    description:
      "Actively learning, building, and seeking opportunities to contribute to real-world projects.",
  },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
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
        title="About Me"
      >
        <AboutMeModalContent />
      </FullScreenModal>

      <section id="about" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={`mb-14 transition-all duration-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div
            className={`transition-all delay-150 duration-600 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              I am a Computer Science student with a strong foundation in Data
              Structures, Algorithms, and frontend & backend development. I enjoy building
              structured, scalable systems and continuously improving my
              problem-solving skills through competitive programming and
              real-world projects. Currently seeking internship opportunities in
              Full Stack Development and Backend Engineering.
            </p>
            
            {/* View More Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              <Maximize2 size={16} />
              Learn More About Me
            </button>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`rounded-xl border border-border bg-card p-5 transition-all duration-600 hover:border-primary/30 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${250 + i * 80}ms` }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
