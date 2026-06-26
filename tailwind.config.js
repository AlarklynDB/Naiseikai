/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep night sky base
        void: {
          DEFAULT: '#05050f',
          mid: '#080820',
          light: '#0c0c2a',
        },
        // Building silhouette dark tones
        city: {
          dark: '#0a0a1a',
          mid: '#12122b',
          light: '#1a1a3a',
        },
        // Surface / card layers
        surface: {
          DEFAULT: '#0f0f28',
          raised: '#181838',
          hover: '#202048',
        },
        border: {
          DEFAULT: '#2a2a55',
          light: '#3a3a6a',
        },
        text: {
          DEFAULT: '#e8e3f5',
          muted: '#9e98c0',
          faint: '#5a5580',
        },
        // Neon accent palette
        neon: {
          cyan:    '#00e5ff',
          purple:  '#bf5fff',
          pink:    '#ff6eb4',
          amber:   '#ffb347',
          teal:    '#00ffcc',
          blue:    '#4fc3f7',
        },
        // Soft glow versions for text / borders (less blinding)
        glow: {
          cyan:   'rgba(0, 229, 255, 0.15)',
          purple: 'rgba(191, 95, 255, 0.15)',
          pink:   'rgba(255, 110, 180, 0.15)',
          amber:  'rgba(255, 179, 71, 0.15)',
          teal:   'rgba(0, 255, 204, 0.10)',
        },
        // Star whites
        star: {
          bright: '#ffffff',
          mid:    '#c8d8ff',
          dim:    '#7080b0',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', '"Lora"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      lineHeight: {
        body:    '1.8',
        heading: '1.2',
      },
      boxShadow: {
        'neon-cyan':   '0 0 8px rgba(0,229,255,0.6), 0 0 20px rgba(0,229,255,0.3)',
        'neon-purple': '0 0 8px rgba(191,95,255,0.6), 0 0 20px rgba(191,95,255,0.3)',
        'neon-pink':   '0 0 8px rgba(255,110,180,0.6), 0 0 20px rgba(255,110,180,0.3)',
        'neon-amber':  '0 0 8px rgba(255,179,71,0.6), 0 0 20px rgba(255,179,71,0.3)',
        'neon-teal':   '0 0 8px rgba(0,255,204,0.6), 0 0 20px rgba(0,255,204,0.3)',
        'city-glow':   '0 -10px 40px rgba(0,100,255,0.12)',
      },
      animation: {
        'twinkle':     'twinkle 3s ease-in-out infinite',
        'neon-pulse':  'neonPulse 4s ease-in-out infinite',
        'float-slow':  'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.2' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.9', filter: 'brightness(1)' },
          '50%':      { opacity: '0.6', filter: 'brightness(0.7)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
