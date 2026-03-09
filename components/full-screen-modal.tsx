"use client"

import { ReactNode, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface FullScreenModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/**
 * Full Screen Modal Component
 * 
 * Usage:
 * const [isOpen, setIsOpen] = useState(false)
 * 
 * <FullScreenModal 
 *   isOpen={isOpen} 
 *   onClose={() => setIsOpen(false)}
 *   title="Section Title"
 * >
 *   <YourContent />
 * </FullScreenModal>
 * 
 * Customization:
 * - Change animation: modify initial/animate/exit values
 * - Change background: bg-background/95
 * - Adjust blur: backdrop-blur-xl
 * - Change close button position: top-6 right-6
 */
export function FullScreenModal({ isOpen, onClose, title, children }: FullScreenModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden"
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 z-[101] overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-8 md:px-8 md:py-12">
              <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-foreground md:text-4xl"
                  >
                    {title}
                  </motion.h2>
                  
                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm md:p-8"
                >
                  {children}
                </motion.div>

                {/* Bottom Hint */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center text-sm text-muted-foreground"
                >
                  Press <kbd className="rounded bg-secondary px-2 py-1 text-xs font-semibold">ESC</kbd> or click outside to close
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
