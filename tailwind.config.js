/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2DA8FF",
          dark: "#0E1621",
          gray: "#8A8F98"
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.75rem', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '4.25rem', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.03em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: []
};
