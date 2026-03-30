'use client'
import { useScrollFadeIn } from './useScrollFadeIn'

const PUBLICATIONS = [
  {
    type: 'Research Paper',
    title: 'Synchronizing Object Detection Applications: Advancements and Existing Challenges',
    meta: 'ResearchGate · 2024',
    tags: ['Object Detection', 'Computer Vision', 'Deep Learning', 'Survey'],
    href: 'https://www.researchgate.net/publication/379826586_Synchronizing_Object_Detection_Applications_Advancements_and_Existing_Challenges',
  },
  {
    type: 'Research Paper',
    title: 'Privacy Preserving Machine Learning Model Personalization through Federated Personalized Learning',
    meta: 'ResearchGate · 2024',
    tags: ['Federated Learning', 'Privacy Preserving ML', 'Model Personalization', 'Machine Learning'],
    href: 'https://www.researchgate.net/publication/378970065_Privacy_Preserving_Machine_Learning_Model_Personalization_through_Federated_Personalized_Learning',
  },
]

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 11L11 1M11 1H4M11 1v7" />
    </svg>
  )
}

export default function Publications() {
  const r1 = useScrollFadeIn()
  const r2 = useScrollFadeIn()
  const refs = [r1, r2]

  return (
    <section id="publications" className="bg-bg2 px-16 py-24 max-md:px-8 max-md:py-20 max-sm:px-5 max-sm:py-16">
      <div className="section-label">02 — Research</div>
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.02em] leading-[1.1] mb-16">Publications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PUBLICATIONS.map((pub, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="fade-in card-hover flex flex-col gap-5 p-8 bg-bg border border-white/[0.06] max-sm:p-6"
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Type */}
            <div className="inline-flex items-center gap-2 font-mono text-[0.65rem] text-cyan tracking-[0.12em] uppercase">
              <span className="w-[5px] h-[5px] rounded-full bg-cyan" />
              {pub.type}
            </div>

            {/* Title */}
            <h3 className="text-[1rem] font-bold text-text leading-[1.45] tracking-[-0.01em]">{pub.title}</h3>

            {/* Meta */}
            <p className="font-mono text-[0.7rem] text-text-faint tracking-[0.06em]">{pub.meta}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {pub.tags.map(t => (
                <span key={t} className="px-2 py-0.5 bg-surface2 text-text-faint font-mono text-[0.65rem] tracking-[0.06em]">{t}</span>
              ))}
            </div>

            {/* Link */}
            <a
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 font-mono text-[0.72rem] text-cyan no-underline tracking-[0.08em] uppercase transition-[gap] duration-200 hover:gap-3"
            >
              Read on ResearchGate <ArrowIcon />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
