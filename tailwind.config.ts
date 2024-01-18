import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord"],
  },
  colors: {
      red: {
        500: '#5A0E13',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
}
export default config
