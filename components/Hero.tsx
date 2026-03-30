'use client'
import { useEffect, useRef, useState } from 'react'

const PHRASES = ['Web Developer.', 'Webflow Expert.', 'GSAP Animator.', 'ML Enthusiast.', 'Software Engineer.']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const state = useRef({ pi: 0, ci: 0, deleting: false })

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    const tick = () => {
      const { pi, ci, deleting } = state.current
      const phrase = PHRASES[pi]
      if (!deleting) {
        const next = ci + 1
        setTyped(phrase.slice(0, next))
        state.current.ci = next
        if (next === phrase.length) {
          state.current.deleting = true
          timeout = setTimeout(tick, 1800)
          return
        }
      } else {
        const next = ci - 1
        setTyped(phrase.slice(0, next))
        state.current.ci = next
        if (next === 0) {
          state.current.deleting = false
          state.current.pi = (pi + 1) % PHRASES.length
        }
      }
      timeout = setTimeout(tick, deleting ? 45 : 80)
    }
    timeout = setTimeout(tick, 1200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center px-16 pt-16 pb-20 overflow-hidden max-md:px-8 max-sm:px-5"
    >
      {/* Grid bg */}
      <div className="hero-bg-grid" />

      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none top-[-100px] right-[-100px] max-md:w-[350px] max-md:h-[350px] max-md:top-[-50px] max-md:right-[-60px]"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none bottom-[50px] left-[100px] max-md:hidden"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative max-w-[900px] w-full">
        {/* Available tag */}
        <div className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-cyan tracking-[0.1em] uppercase mb-8 opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-[pulseDot_2s_infinite]" />
          Available for new projects
        </div>

        {/* Name */}
        <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mb-6 opacity-0 animate-[fadeUp_0.7s_ease_0.35s_forwards]">
          Shadman<br />
          Sakeeb <span className="text-cyan">Khan</span>
        </h1>

        {/* Typed */}
        <div className="text-[clamp(1rem,2.5vw,1.6rem)] font-medium text-text-muted mb-8 min-h-[2.2rem] opacity-0 animate-[fadeUp_0.7s_ease_0.5s_forwards]">
          <span className="text-text">{typed}</span>
          <span className="inline-block w-0.5 h-[1.1em] bg-cyan align-middle ml-0.5 animate-[blink_1s_step-end_infinite]" />
        </div>

        {/* Bio */}
        <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-[1.8] text-text-muted max-w-[540px] mb-12 font-normal opacity-0 animate-[fadeUp_0.7s_ease_0.65s_forwards] max-sm:max-w-full">
          Web developer at Thirteen Limited with 30+ production sites built in Webflow &amp; GSAP.
          BSc in Computer Science from North South University, majoring in Machine Learning —
          bridging design, engineering, and AI.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap opacity-0 animate-[fadeUp_0.7s_ease_0.8s_forwards]">
          <a
            href="#works"
            className="inline-block px-8 py-3.5 bg-cyan text-bg font-syne text-[0.85rem] font-bold tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-white hover:-translate-y-0.5 max-sm:w-full max-sm:text-center"
          >
            View My Work
          </a>
          <a
            href="mailto:shadman.khan1582@gmail.com"
            className="inline-block px-8 py-3.5 bg-transparent text-cyan font-syne text-[0.85rem] font-bold tracking-[0.08em] uppercase no-underline border border-cyan/10 transition-all duration-200 hover:border-cyan hover:bg-cyan/[0.12] hover:-translate-y-0.5 max-sm:w-full max-sm:text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-16 hidden md:flex items-center gap-3 font-mono text-[0.7rem] text-text-faint tracking-[0.1em] uppercase opacity-0 animate-[fadeUp_0.7s_ease_1.1s_forwards]">
        <div className="relative w-10 h-px bg-text-faint overflow-hidden scroll-bar-line" />
        Scroll to explore
      </div>
    </section>
  )
}
