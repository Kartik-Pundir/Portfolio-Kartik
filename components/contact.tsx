"use client"

import { useRef, useState } from "react"
import { Mail, Github, Linkedin, Send, User, MessageSquare } from "lucide-react"
import { motion, useInView } from "framer-motion"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "Kartikpundir231@gmail.com",
    href: "mailto:Kartikpundir231@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Kartik-Pundir",
    href: "https://github.com/Kartik-Pundir",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "kartik-pundir816",
    href: "https://www.linkedin.com/in/kartik-pundir816/",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        // If email service is not configured, fall back to mailto
        if (response.status === 500 && data.error === 'Failed to send email') {
          const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          )
          window.location.href = `mailto:Kartikpundir231@gmail.com?subject=${subject}&body=${body}`
          
          setIsSubmitted(true)
          setFormData({ name: "", email: "", message: "" })
          setTimeout(() => setIsSubmitted(false), 5000)
          return
        }
        throw new Error(data.error || 'Failed to send message')
      }

      // Show success message
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly at Kartikpundir231@gmail.com')
      console.error('Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-3 h-1 rounded-full bg-primary"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            I am actively looking for internship opportunities. Let&apos;s build
            something impactful together.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="rounded-xl border border-border bg-card p-8 card-shadow"
              whileHover={{ y: -5 }}
            >
              <h3 className="mb-6 text-xl font-bold text-foreground">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-lg bg-primary/10 border border-primary/20 p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"
                  >
                    <Send size={32} className="text-primary" />
                  </motion.div>
                  <h4 className="mb-2 text-lg font-semibold text-foreground">Thank You!</h4>
                  <p className="text-sm text-muted-foreground">
                    I will reach you soon. Thank you for your interest!
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    A confirmation email has been sent to your inbox.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive"
                    >
                      {error}
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-secondary px-4 py-3 pl-10 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder=""
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-border bg-secondary px-4 py-3 pl-10 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder=""
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-3 top-3 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-lg border border-border bg-secondary px-4 py-3 pl-10 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    {isLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h3 className="mb-6 text-xl font-bold text-foreground">Connect With Me</h3>
              
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 card-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon size={20} className="text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {link.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              className="mt-6 rounded-xl border border-border bg-card p-6 card-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <h4 className="mb-3 text-lg font-semibold text-foreground">Quick Response</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I typically respond within 24 hours. Feel free to reach out through mail!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
