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
    "dark-blue":"#00285F",
    "light-blue":"#004080",
   }
    },
  },
  plugins: [],
}
export default config
