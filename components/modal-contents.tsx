"use client"

import { GraduationCap, Code, Award, Briefcase, Target, Lightbulb } from "lucide-react"

/**
 * Modal Content Components
 * 
 * These components contain the detailed content for each modal.
 * Customize the content, styling, and layout as needed.
 */

export function AboutMeModalContent() {
  return (
    <div className="space-y-6">
      <div className="prose prose-invert max-w-none">
        <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          I am a passionate Computer Science student at Lovely Professional University, 
          currently in my journey from 2023 to present. My focus lies in building scalable 
          full-stack applications and solving complex problems using modern web technologies 
          and strong algorithmic foundations.
        </p>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">What Drives Me</h3>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Problem Solving</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              I enjoy tackling complex algorithmic challenges and have solved 100+ DSA problems 
              on LeetCode, achieving a global rank of 1021 in weekly contests.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-3 mb-2">
              <Code className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Full Stack Development</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Passionate about building end-to-end applications using React, Node.js, Express, 
              and MongoDB, with a focus on clean code and scalable architecture.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Continuous Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Always exploring new technologies and best practices. Currently deepening my 
              knowledge in backend systems, data structures, and system design.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-4">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Real-World Impact</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Seeking internship opportunities to contribute to meaningful projects and 
              grow as a developer in a professional environment.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-4 mt-8">My Approach</h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          I believe in writing clean, maintainable code and following best practices. 
          My development process involves thorough planning, iterative development, 
          and continuous testing. I'm comfortable working both independently and as 
          part of a team, and I value clear communication and collaboration.
        </p>
      </div>
    </div>
  )
}

export function JourneyModalContent() {
  const journeySteps = [
    {
      icon: GraduationCap,
      year: "2023 - Present",
      title: "Computer Science at LPU",
      description: "Started my Bachelor's degree in Computer Science at Lovely Professional University. Building a strong foundation in Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.",
      highlights: ["Core CS Fundamentals", "Object-Oriented Programming", "Database Management", "Software Engineering"]
    },
    {
      icon: Code,
      year: "2023 - Present",
      title: "Full Stack Development Journey",
      description: "Began learning web development, progressing to modern frameworks and backend technologies, building multiple full-stack projects with React, Node.js, Express, and databases.",
      highlights: ["React.js & Tailwind CSS", "Node.js & Express.js", "MongoDB & MySQL", "Git & GitHub"]
    },
    {
      icon: Award,
      year: "2025",
      title: "Competitive Programming",
      description: "Achieved significant milestones in competitive programming on LeetCode. Secured Global Rank 1021 in Weekly Contest 464 among 10,000+ participants. Achieved 13th rank out of 100 in Code-A-Haunt Hackathon.",
      highlights: ["Global Rank 1021 – Contest 464", "100+ Problems Solved", "13th in Code-A-Haunt Hackathon", "Strong DSA Foundation"]
    },
    {
      icon: Award,
      year: "2025",
      title: "Competitive Programming",
      description: "Achieved significant milestones in competitive programming on LeetCode. Consistently solving problems and participating in weekly contests to sharpen problem-solving skills.",
      highlights: ["Global Rank 1021 in Contest", "100+ Problems Solved", "100-Day & 50-Day Badges", "Strong DSA Foundation"]
    },
    {
      icon: Briefcase,
      year: "Looking Ahead",
      title: "Professional Growth",
      description: "Actively seeking internship opportunities in Full Stack, Frontend, or Backend development. Ready to contribute to real-world projects and learn from experienced developers.",
      highlights: ["Open to Opportunities", "Team Collaboration", "Continuous Learning", "Real-World Impact"]
    }
  ]

  return (
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        My journey in software development has been driven by curiosity, dedication, 
        and a passion for building meaningful solutions.
      </p>

      <div className="space-y-6">
        {journeySteps.map((step, index) => (
          <div 
            key={index}
            className="rounded-xl border border-border bg-secondary/30 p-6 transition-all hover:border-primary/30 hover:bg-secondary/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <step.icon size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {step.year}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="rounded-md bg-card px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SkillsModalContent() {
  const skillDetails = [
    {
      category: "Programming Languages",
      description: "Strong foundation in multiple programming languages for different use cases",
      skills: [
        { name: "C++", level: "Advanced", description: "Primary language for DSA and competitive programming" },
        { name: "JavaScript", level: "Advanced", description: "Full-stack development with modern ES6+ features" },
        { name: "Python", level: "Intermediate", description: "Scripting and automation tasks" },
        { name: "PHP", level: "Intermediate", description: "Backend development for web applications" },
      ]
    },
    {
      category: "Frameworks",
      description: "Modern frameworks for full-stack development",
      skills: [
        { name: "React.js", level: "Advanced", description: "Component-based UI development with hooks" },
        { name: "Node.js", level: "Advanced", description: "JavaScript runtime for scalable backend" },
        { name: "Express.js", level: "Advanced", description: "RESTful API development and middleware" },
        { name: "Tailwind CSS", level: "Advanced", description: "Utility-first CSS framework for rapid styling" },
      ]
    },
    {
      category: "Database",
      description: "Database technologies for data management",
      skills: [
        { name: "MongoDB", level: "Intermediate", description: "NoSQL database for flexible data storage" },
        { name: "MySQL", level: "Intermediate", description: "Relational database management" },
        { name: "PostgreSQL", level: "Intermediate", description: "Advanced open-source relational database" },
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Development tools and platforms I use daily",
      skills: [
        { name: "Git & GitHub", level: "Advanced", description: "Version control and collaboration" },
        { name: "Postman", level: "Advanced", description: "API testing and documentation" },
        { name: "AWS", level: "Intermediate", description: "Cloud services and deployment" },
        { name: "Docker", level: "Intermediate", description: "Containerization and deployment" },
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <p className="text-lg text-muted-foreground">
        A comprehensive overview of my technical skills and proficiency levels across 
        different technologies and tools.
      </p>

      <div className="space-y-6">
        {skillDetails.map((category, index) => (
          <div key={index} className="rounded-xl border border-border bg-secondary/30 p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">{category.category}</h3>
            <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
            
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div 
                  key={i}
                  className="rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
