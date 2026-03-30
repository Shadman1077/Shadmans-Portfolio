'use client'
import { useState } from 'react'
import { useScrollFadeIn } from './useScrollFadeIn'

type Project = {
  num: string
  title: string
  desc: string
  tags: string[]
  link?: string
  linkLabel?: string
  inProgress?: boolean
}

const WEB_PROJECTS: Project[] = [
  {
    num: '01 / Web',
    title: 'Symphony by Chaimaa',
    desc: 'A Dubai-based luxury real estate website with fluid, fully responsive web design and advanced scroll animations and parallax effects built with custom code, jQuery, and GSAP.',
    tags: ['Webflow', 'GSAP', 'jQuery', 'Parallax', 'Dubai'],
    link: 'https://www.chaimaa.ae/',
    linkLabel: 'Visit Site',
  },
  {
    num: '02 / Web',
    title: 'Paradiso',
    desc: 'A premium real estate development project in Dubai. Full Webflow build — covering design implementation, GSAP animations, and fully responsive development from the ground up.',
    tags: ['Webflow', 'GSAP', 'Responsive', 'Real Estate', 'Dubai'],
    link: 'https://paradiso-website.webflow.io/',
    linkLabel: 'Visit Site',
  },
  {
    num: '03 / Web',
    title: 'Concord Group',
    desc: 'An ongoing enterprise website built with WordPress and Elementor, featuring fully responsive design, modern animations from Elementor\'s library and GSAP, and MySQL integration.',
    tags: ['WordPress', 'Elementor', 'GSAP', 'MySQL', 'Ongoing'],
    inProgress: true,
  },
  {
    num: '04 / Web',
    title: 'Meghna Corporation',
    desc: 'A dynamic enterprise website for one of Bangladesh\'s largest conglomerates. Built in Webflow with GSAP animations and a fully responsive layout.',
    tags: ['Webflow', 'GSAP', 'Responsive', 'Enterprise'],
    link: 'https://www.meghna.com.bd/',
    linkLabel: 'Visit Site',
  },
  {
    num: '05 / Web',
    title: 'Osus Eye Real Estate',
    desc: 'A legacy real estate platform built with a focus on immersive storytelling and premium UX. Crafted for Thirteen Limited using Webflow and GSAP.',
    tags: ['Webflow', 'GSAP', 'Real Estate'],
    link: 'https://osus-eye-website.webflow.io/en/home',
    linkLabel: 'Visit Site',
  },
  {
    num: '06 / Web',
    title: 'Pearlshire',
    desc: 'Building sustainable futures and enriching communities — a brand-forward real estate website with a strong editorial identity, built in Webflow.',
    tags: ['Webflow', 'Animation', 'Real Estate'],
    link: 'https://pearlshire-website.webflow.io/',
    linkLabel: 'Visit Site',
  },
]

const ML_PROJECTS: Project[] = [
  {
    num: '01 / ML',
    title: 'Leukemia Detection System',
    desc: 'A web app detecting leukemia stages from microscopic blood cell images using deep learning. Covers the full pipeline: data preprocessing, image processing, model training, and web deployment.',
    tags: ['Deep Learning', 'Computer Vision', 'Python', 'TensorFlow', 'Web Deployment'],
    link: 'https://github.com/Shadman1077/Leukemia_Detection',
    linkLabel: 'View on GitHub',
  },
  {
    num: '02 / ML',
    title: 'Indoor Object Detection',
    desc: 'A Java-based indoor object detection system identifying objects in real time via camera and from saved images. Built on a pretrained COCO dataset with 80 indoor object classes, with a companion mobile app.',
    tags: ['Java', 'Computer Vision', 'COCO Dataset', 'Mobile App', 'Real-time'],
    link: 'https://github.com/Shadman1077',
    linkLabel: 'View on GitHub',
  },
  {
    num: '03 / ML',
    title: 'Chronic Kidney Disease Prediction',
    desc: 'An ML classification project predicting Chronic Kidney Disease in patients. Covers full data preprocessing, correlation analysis, and model training on real clinical data.',
    tags: ['Python', 'Machine Learning', 'Classification', 'Jupyter Notebook', 'Healthcare'],
    link: 'https://github.com/Shadman1077/Chronic-Kidney-Disease-Prediction',
    linkLabel: 'View on GitHub',
  },
]

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 11L11 1M11 1H4M11 1v7" />
    </svg>
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const ref = useScrollFadeIn()
  return (
    <div
      ref={ref}
      className="fade-in card-hover flex flex-col p-8 bg-bg2 border border-white/[0.06] max-sm:p-6"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-mono text-[0.7rem] text-text-faint tracking-[0.1em] mb-4">{project.num}</div>
      <h3 className="text-[1.1rem] font-bold tracking-[-0.01em] mb-3 text-text leading-[1.3]">{project.title}</h3>
      <p className="text-[0.875rem] text-text-muted leading-[1.7] mb-6 font-normal flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map(t => (
          <span key={t} className="px-2 py-0.5 bg-surface2 text-text-faint font-mono text-[0.65rem] tracking-[0.06em]">{t}</span>
        ))}
      </div>
      {project.inProgress ? (
        <span className="font-mono text-[0.72rem] text-text-faint tracking-[0.08em] uppercase opacity-50">In Progress</span>
      ) : project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 font-mono text-[0.72rem] text-cyan no-underline tracking-[0.08em] uppercase transition-[gap] duration-200 hover:gap-3"
        >
          {project.linkLabel} <ArrowIcon />
        </a>
      ) : null}
    </div>
  )
}

export default function Works() {
  const [tab, setTab] = useState<'web' | 'ml'>('web')
  const projects = tab === 'web' ? WEB_PROJECTS : ML_PROJECTS

  return (
    <section id="works" className="bg-bg px-16 py-24 max-md:px-8 max-md:py-20 max-sm:px-5 max-sm:py-16">
      <div className="section-label">03 — Portfolio</div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-16">Selected Work</h2>

      {/* Divider */}
      <div className="w-full h-px mb-12" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.1), transparent)' }} />

      {/* Tabs */}
      <div className="flex border-b border-white/[0.06] mb-12 overflow-x-auto scrollbar-none">
        {(['web', 'ml'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-shrink-0 px-7 py-4 font-syne text-[0.82rem] font-bold tracking-[0.08em] uppercase border-none bg-transparent cursor-pointer transition-all duration-200 -mb-px whitespace-nowrap border-b-2 ${
              tab === t
                ? 'text-cyan border-b-cyan'
                : 'text-text-faint border-b-transparent hover:text-text-muted'
            }`}
          >
            {t === 'web' ? 'Web Development' : 'ML / AI Projects'}
          </button>
        ))}
      </div>

      {/* ML banner */}
      {tab === 'ml' && (
        <div className="flex items-start gap-6 bg-surface border border-cyan/10 p-7 mb-10 max-sm:flex-col max-sm:p-5">
          <div className="flex-shrink-0 w-12 h-12 bg-cyan/[0.12] border border-cyan/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
            </svg>
          </div>
          <div>
            <h3 className="text-[1rem] font-bold text-text mb-1">ML Enthusiast → Future ML Engineer</h3>
            <p className="text-[0.85rem] text-text-muted leading-relaxed">
              Actively building machine learning projects to break into the AI/ML industry. Focused on computer vision,
              deep learning, and healthcare AI — with hands-on experience across the full model development pipeline.
            </p>
          </div>
        </div>
      )}

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 100} />
        ))}
      </div>
    </section>
  )
}
