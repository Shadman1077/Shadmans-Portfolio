import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080b0f',
        bg2: '#0d1117',
        surface: '#141c26',
        surface2: '#1a2436',
        cyan: {
          DEFAULT: '#00d4ff',
          glow: 'rgba(0,212,255,0.12)',
        },
        text: {
          DEFAULT: '#e8edf5',
          muted: '#8b99b0',
          faint: '#4a5568',
        },
      },
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'blink': 'blink 1s step-end infinite',
        'scroll-line': 'scrollLine 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
        scrollLine: {
          to: { left: '200%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
