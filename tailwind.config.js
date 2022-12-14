/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1536px'
      },
      colors: {
        'brand': 'var(--brand)',
        'primary': 'var(--primary)',
        'text-100': 'var(--text-100)',
        'text-200': 'var(--text-200)',
        'text-300': 'var(--text-300)',
        'text-400': 'var(--text-400)',
        'text-700': 'var(--text-700)',
        'text-gradient': 'var(--text-gradient)',
        'bg-light': 'var(--bg-light)'
      },
      fontFamily: {
        "ClashGrotesk": ['var(--font-clash)'],
        "DMSans": ['var(--font-dm-sans)']
      },
      boxShadow: {
        'card-shadow': '0px 10.7477px 32.2432px rgba(149, 157, 165, 0.2)'
      }
    },
  },
  plugins: [],
}
