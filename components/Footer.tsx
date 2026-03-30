export default function Footer() {
  return (
    <footer className="bg-bg2 px-16 py-7 border-t border-white/[0.06] flex justify-between items-center flex-wrap gap-2 max-md:px-8 max-sm:px-5 max-sm:flex-col max-sm:text-center">
      <p className="font-mono text-[0.68rem] text-text-faint tracking-[0.06em]">
        © 2025 <span className="text-cyan">Shadman Sakeeb Khan</span>. All rights reserved.
      </p>
      <p className="font-mono text-[0.68rem] text-text-faint tracking-[0.06em]">
        Built with Next.js · Tailwind CSS · Deployed on Vercel
      </p>
    </footer>
  )
}
