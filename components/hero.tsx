"use client"

import { useEffect, useState } from "react"
import { ArrowDown, FileText, Mail } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { StarsBackground } from "./stars-background"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20 overflow-hidden">
      <StarsBackground />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          className="mb-8 overflow-hidden rounded-full border-2 border-border shadow-xl shadow-background/50 animate-float"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Kartik Pundir"
            width={140}
            height={140}
            className="h-[140px] w-[140px] object-cover"
            priority
          />
        </motion.div>

        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium text-primary">
            Open to Internship Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="mb-3 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl"
        >
          Kartik Pundir
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={itemVariants}
          className="mb-6 text-lg font-medium text-muted-foreground md:text-xl"
        >
          Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground"
        >
          I build scalable full stack applications and solve complex problems
          using C++ and modern web technologies. Passionate about backend
          systems, data structures, and real-world impact.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 animate-glow"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={16} />
            Download Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} />
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
