"use client"

import { ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TooltipProps {
  children: ReactNode
  content: string
  delay?: number
}

/**
 * Tooltip Component
 * 
 * Usage:
 * <Tooltip content="Extra information here">
 *   <YourCard />
 * </Tooltip>
 * 
 * Customization:
 * - Change tooltip background: bg-card
 * - Change text color: text-foreground
 * - Adjust animation duration in variants
 * - Change position by modifying top/bottom values
 */
export function Tooltip({ children, content, delay = 0 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* Tooltip Popup */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, delay: delay }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none"
          >
            {/* Tooltip Content */}
            <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-xl backdrop-blur-sm">
              <p className="text-xs text-foreground whitespace-nowrap max-w-xs">
                {content}
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
              <div className="border-4 border-transparent border-t-card" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Effect Wrapper */}
      <motion.div
        whileHover={{ 
          y: -8, 
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="hover-lift-enhanced"
      >
        {children}
      </motion.div>
    </div>
  )
}
