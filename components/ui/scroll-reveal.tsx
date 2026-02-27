"use client"

import { motion, useInView, UseInViewOptions } from "motion/react"
import { useRef } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  viewOptions?: UseInViewOptions
  yOffset?: number
  blur?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  viewOptions = { once: true, margin: "-50px" },
  yOffset = 20,
  blur = false,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, viewOptions)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, filter: blur ? "blur(4px)" : "blur(0px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: yOffset, filter: blur ? "blur(4px)" : "blur(0px)" }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
