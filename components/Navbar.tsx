'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#publications' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-16 h-[72px] border-b border-white/[0.06] transition-all duration-300 ${
          scrolled ? 'bg-bg/95 backdrop-blur-xl' : 'bg-bg/90 backdrop-blur-lg'
        }`}
      >
        <Link href="#hero" className="font-mono text-[0.85rem] font-bold tracking-[0.2em] uppercase text-cyan no-underline">
          SSK
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-[0.78rem] tracking-[0.12em] uppercase text-text-muted no-underline hover:text-cyan transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none p-[6px] cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-text rounded transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text rounded transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-[199] bg-bg/98 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-400 overflow-hidden ${
          open ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <ul className="list-none flex flex-col py-2">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={close}
                className="block px-8 py-4 font-mono text-[0.85rem] tracking-[0.12em] uppercase text-text-muted no-underline border-b border-white/[0.06] last:border-b-0 hover:text-cyan hover:bg-cyan/[0.06] transition-all duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Padding spacer */}
      <div className="h-[72px]" />
    </>
  )
}
