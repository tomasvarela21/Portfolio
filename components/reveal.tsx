"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps = {
  children: null,
  delay: 0,
  className: "",
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.unobserve(entry.target)
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transform-gpu opacity-0 translate-y-6 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  )
}
