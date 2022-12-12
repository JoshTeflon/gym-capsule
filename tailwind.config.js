/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1920px',
      },
      colors: {
        'brand': 'var(--brand)',
        'primary': 'var(--primary)',
        'text-100': 'var(--text-100)',
        'text-200': 'var(--text-200)',
        'text-300': 'var(--text-300)',
        'text-400': 'var(--text-400)',
        'bg-light': 'var(--bg-light)',
      },
      fontFamily: {
        "ClashGrotesk": ['var(--font-clash)'],
      },
    },
  },
  plugins: [],
}
