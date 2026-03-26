/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium deep blue palette
        navy: {
          50:  '#f0f4fb',
          100: '#d9e3f5',
          200: '#b3c7eb',
          300: '#7da0d8',
          400: '#4a78c2',
          500: '#2955a8',
          600: '#1d418d',
          700: '#193474',
          800: '#162b5f',
          900: '#0F1F3D', // primary brand navy
          950: '#090f1e',
        },
        // Warm neutrals
        stone: {
          50:  '#FAFAF8', // main bg
          100: '#F5F4F0',
          200: '#E8E6E0',
          300: '#D1CFC8',
          400: '#A8A59E',
          500: '#7A7770',
          600: '#5C5A54',
          700: '#3E3D39',
          800: '#2A2924',
          900: '#1A1A18', // near-black text
        },
        // CTA accent
        cta: {
          DEFAULT: '#1E3A8A',
          hover:   '#1B3278',
          light:   '#EBF0FB',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans:  ['"Open Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':      ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h2':      ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3':      ['1.375rem', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body':    ['1rem',     { lineHeight: '1.7' }],
        'small':   ['0.875rem', { lineHeight: '1.6' }],
        'xs':      ['0.75rem',  { lineHeight: '1.5' }],
      },
      spacing: {
        // 8px grid
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'prose-xl': '68ch',
        'prose-lg': '72ch',
      },
      boxShadow: {
        'soft':   '0 1px 3px 0 rgba(15,31,61,0.06), 0 1px 2px -1px rgba(15,31,61,0.04)',
        'card':   '0 2px 8px 0 rgba(15,31,61,0.08), 0 1px 3px -1px rgba(15,31,61,0.05)',
        'lifted': '0 4px 16px 0 rgba(15,31,61,0.10), 0 2px 6px -2px rgba(15,31,61,0.06)',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
