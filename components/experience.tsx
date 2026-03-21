"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { GraduationCap, Briefcase, Award, Code, Maximize2, BookOpen } from "lucide-react"
import { FullScreenModal } from "./full-screen-modal"
import { JourneyModalContent } from "./modal-contents"

const timelineData = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    organization: "Lovely Professional University • CGPA: 6.9",
    period: "2023 - Present",
    description: "Pursuing Bachelor's degree in Computer Science with focus on Data Structures, Algorithms, and Software Engineering.",
    type: "education",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    organization: "Self-Learning & Projects",
    period: "2023 - Present",
    description: "Built multiple full-stack applications using React, Node.js, Express, and MongoDB. Focused on creating scalable and maintainable code.",
    type: "experience",
  },
  {
    icon: BookOpen,
    title: "OOPs & DSA Training",
    organization: "CSE Path Shala",
    period: "Jul 2025 - Aug 2025",
    description: "Completed 35+ hours live training on C++ programming, OOP, and Data Structures & Algorithms. Solved problems on sorting, searching, and time complexity.",
    type: "training",
  },
  {
    icon: Award,
    title: "LeetCode Achievements",
    organization: "Competitive Programming",
    period: "2025",
    description: "Global Rank 1021 in Weekly Contest 464 among 10,000+ participants. Solved 100+ DSA problems. Achieved 13th rank in Code-A-Haunt Hackathon.",
    type: "achievement",
  },
  {
    icon: Briefcase,
    title: "Seeking Internship",
    organization: "Full Stack / Frontend / Backend",
    period: "Open to Opportunities",
    description: "Looking for opportunities to contribute to real-world projects and grow as a developer in a professional environment.",
    type: "goal",
  },
]

function TimelineItem({ item, index }: { item: typeof timelineData[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Content Card */}
        <motion.div
          className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}
          whileHover={{ scale: 1.02 }}
        >
          <div className="rounded-xl border border-border bg-card p-6 card-shadow hover:border-primary/30 transition-all">
            <div className={`flex items-start gap-3 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
              <motion.div
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={24} className="text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-primary mb-2">{item.organization}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.period}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Dot */}
        <motion.div
          className="relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        >
          <motion.div
            className="h-4 w-4 rounded-full bg-primary"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(74, 222, 128, 0.4)",
                "0 0 0 10px rgba(74, 222, 128, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Spacer for other side */}
        <div className="flex-1" />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex gap-4">
        {/* Timeline Dot */}
        <motion.div
          className="relative z-10 flex h-4 w-4 flex-shrink-0 items-center justify-center mt-2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        >
          <motion.div
            className="h-4 w-4 rounded-full bg-primary"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(74, 222, 128, 0.4)",
                "0 0 0 10px rgba(74, 222, 128, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Content Card */}
        <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
          <div className="rounded-xl border border-border bg-card p-5 card-shadow hover:border-primary/30 transition-all">
            <div className="flex items-start gap-3">
              <motion.div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={20} className="text-primary" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-primary mb-1">{item.organization}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const containerRef = useRef<HTMLElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <>
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Journey"
      >
        <JourneyModalContent />
      </FullScreenModal>

      <section
        id="experience"
        ref={containerRef}
        className="relative px-6 py-24 md:py-32 overflow-hidden"
      >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            My Journey
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-3 h-1 rounded-full bg-primary"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            From learning to building, here's my path in software development
          </p>
          
          {/* View Full Journey Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            onClick={() => setIsModalOpen(true)}
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Maximize2 size={16} />
            View Full Journey
          </motion.button>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Vertical Line - Mobile */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
