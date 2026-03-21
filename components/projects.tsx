"use client"

import { useRef } from "react"
import { Github, Trophy } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { Tooltip } from "./tooltip"

const projects = [
  {
    title: "CS Smart",
    subtitle: "Web Based Car Loan System",
    description:
      "Built a fintech platform to manage loan services, leads, applications, and appointments. Developed REST APIs with JWT authentication and Google OAuth login. Created an Admin Dashboard for managing users, leads, and feedback with automated email notifications. Capable of handling 100+ concurrent users efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Kartik-Pundir/cs-smart-finserve",
    tooltip: "Fintech platform with JWT auth and admin dashboard",
  },
  {
    title: "NextGen Code Analyzer",
    subtitle: "AI Code Analysis Platform",
    description:
      "Built an AI-powered code analysis platform to review, optimize, and detect issues in source code. Built an AST-based analysis engine improving code efficiency by 20%. Integrated a third-party API for AI-based real-time suggestions. Handles 30+ concurrent users with stable performance.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Kartik-Pundir",
    tooltip: "AI-powered code analysis with AST engine",
  },
  {
    title: "Data Banker",
    subtitle: "Web Based Data Management System",
    description:
      "Developed a web-based system to manage structured market data, improving accessibility and reliability. Managed 50+ data records with full CRUD operations and validation checks. Implemented search and filtering features for faster data retrieval.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
    github: "https://github.com/Kartik-Pundir/Data-Bank-Manager",
    tooltip: "Data management system with CRUD and search features",
  },
]

const achievements = [
  "Global Rank 1021 in LeetCode Weekly Contest 464 among 10,000+ participants",
  "Solved 100+ DSA problems on LeetCode",
  "13th Rank out of 100 in Code-A-Haunt Hackathon",
]

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 h-1 rounded-full bg-primary"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project, i) => (
            <Tooltip key={project.title} content={project.tooltip}>
              <motion.article
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all hover:border-primary/30 card-shadow"
              >
              {/* Title & Subtitle */}
              <h3 className="mb-1 text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mb-4 text-sm font-medium text-primary">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground transition-all hover:border-primary/30 hover:text-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={14} />
                  GitHub
                </motion.a>
              </div>
            </motion.article>
            </Tooltip>
          ))}
        </motion.div>

        {/* DSA & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -5 }}
          className="mt-10 rounded-xl border border-border bg-card p-7 transition-all card-shadow"
        >
          <div className="mb-5 flex items-center gap-3">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Trophy size={20} className="text-primary" />
            </motion.div>
            <h3 className="text-lg font-bold text-foreground">
              DSA & Achievements
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {achievements.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
