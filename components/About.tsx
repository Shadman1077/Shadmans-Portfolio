'use client'
import { useScrollFadeIn } from './useScrollFadeIn'

const SKILLS = [
  'Webflow', 'GSAP', 'JavaScript ES6+', 'TypeScript', 'React.js', 'Node.js',
  'HTML5 / CSS3', 'Tailwind CSS', 'WordPress', 'Elementor', 'Python',
  'TensorFlow', 'OpenCV', 'FastAPI', 'Docker', 'SQL', 'Git', 'Figma',
  'SEO', 'Deep Learning',
]

const TIMELINE = [
  {
    period: 'Feb 2023 — Present',
    title: 'Web Developer — Thirteen Limited',
    sub: 'Building high-fidelity Webflow & WordPress sites. Pixel-perfect, fully responsive builds with GSAP animations, Core Web Vitals optimisation, and SEO best practices.',
    badge: 'Full-time',
  },
  {
    period: 'Ongoing',
    title: 'ML Research & Project Development',
    sub: 'Self-directed work in machine learning, computer vision, and deep learning. Actively building and publishing ML models with TensorFlow, Python, and OpenCV.',
    badge: 'Passion project',
  },
  {
    period: 'Sept 2019 — Dec 2023',
    title: 'BSc — Computer Science & Engineering',
    sub: 'North South University, Dhaka · CGPA 3.13/4.0 · Major in Machine Learning · Coursework: DSA, OOP, Algorithms, Machine Learning',
    badge: 'University',
  },
  {
    period: '2016 — 2018',
    title: 'HSC — Science',
    sub: 'BAF Shaheen College, Dhaka',
    badge: 'College',
  },
  {
    period: '2014 — 2016',
    title: 'SSC — Science',
    sub: 'BAF Shaheen College, Kurmitola',
    badge: 'School',
  },
]

const STATS = [
  { num: '30+', label: 'Web Projects' },
  { num: '3', label: 'ML Projects' },
  { num: '2', label: 'Publications' },
  { num: 'BD', label: 'Based In' },
]

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
    </svg>
  )
}

export default function About() {
  const leftRef = useScrollFadeIn()
  const rightRef = useScrollFadeIn()

  return (
    <section id="about" className="bg-bg px-16 py-24 max-md:px-8 max-md:py-20 max-sm:px-5 max-sm:py-16">
      <div className="section-label">01 — About &amp; Background</div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-16">Who I Am</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left col */}
        <div ref={leftRef} className="fade-in">
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-6">
            I&apos;m <strong className="text-text font-semibold">Shadman Sakeeb Khan</strong>, a web developer based in Dhaka,
            Bangladesh, currently working at <strong className="text-text font-semibold">Thirteen Limited</strong> — building
            immersive, production-grade websites for clients across real estate and enterprise sectors. With{' '}
            <strong className="text-text font-semibold">30+ Webflow projects</strong> shipped, I bring both craft and speed to every build.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-6">
            My stack spans Webflow, GSAP, JavaScript, TypeScript, React, and Node.js. I also hold a{' '}
            <strong className="text-text font-semibold">BSc in CSE from North South University</strong> with a major in Machine
            Learning — actively channeling that into real AI projects and positioning myself to break into the ML/AI industry.
          </p>
          <p className="text-[0.95rem] leading-[1.9] text-text-muted mb-8">
            I thrive at the intersection of design and engineering — where a pixel-perfect interface meets a well-architected system.
          </p>

          {/* CV Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 max-sm:flex-col">
            <a
              href="/cvs/shadman_sakeeb_khan_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan/[0.12] border border-cyan/10 text-cyan font-mono text-[0.7rem] tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:bg-cyan/20 hover:border-cyan/30 max-sm:justify-center"
            >
              <DownloadIcon />
              Download CV — Software &amp; ML
            </a>
            <a
              href="/cvs/SHADMAN_WEBFLOW.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/[0.06] text-text-muted font-mono text-[0.7rem] tracking-[0.08em] uppercase no-underline transition-all duration-200 hover:border-cyan/20 hover:text-cyan hover:bg-cyan/[0.06] max-sm:justify-center"
            >
              <DownloadIcon />
              Download CV — Web Development
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] max-sm:grid-cols-2">
            {STATS.map(s => (
              <div key={s.label} className="bg-bg2 py-5 px-2 text-center">
                <div className="text-[1.9rem] font-extrabold text-cyan leading-none mb-1">{s.num}</div>
                <div className="font-mono text-[0.62rem] text-text-faint tracking-[0.08em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col */}
        <div ref={rightRef} className="fade-in" style={{ transitionDelay: '150ms' }}>
          <div className="section-label mb-7">Education &amp; Career</div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-0 top-2 bottom-0 w-px opacity-30"
              style={{ background: 'linear-gradient(to bottom, #00d4ff, transparent)' }} />
            {TIMELINE.map((item, i) => (
              <div key={i} className="pl-8 mb-10 relative">
                <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-cyan"
                  style={{ boxShadow: '0 0 12px #00d4ff' }} />
                <div className="font-mono text-[0.7rem] text-cyan tracking-[0.1em] mb-1 opacity-80">{item.period}</div>
                <div className="text-[1rem] font-bold text-text mb-1 tracking-[-0.01em]">{item.title}</div>
                <div className="text-[0.85rem] text-text-muted leading-relaxed mb-2">{item.sub}</div>
                <span className="inline-block px-2 py-0.5 bg-cyan/[0.12] border border-cyan/10 text-cyan font-mono text-[0.65rem] tracking-[0.08em] uppercase">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="section-label mt-10 mb-4">Core Skills</div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map(s => (
              <span
                key={s}
                className="px-3 py-1.5 bg-surface border border-white/[0.06] text-text-muted font-mono text-[0.7rem] tracking-[0.06em] transition-all duration-200 hover:border-cyan/30 hover:text-cyan hover:bg-cyan/[0.12] cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
