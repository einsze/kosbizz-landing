import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4C1D95',
          blue: '#1E40AF',
          navy: '#0F172A',
          accent: '#7C3AED',
          light: '#C4B5FD',
          bg: '#F8FAFC',
        },
        wa: {
          green: '#25D366',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4C1D95 0%, #1E40AF 50%, #0F172A 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
        'text-gradient': 'linear-gradient(135deg, #ffffff 0%, #C4B5FD 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'blob-slow': 'blob 20s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
