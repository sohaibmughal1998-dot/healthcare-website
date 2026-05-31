import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT:'#1a7b8a', dark:'#0d5a6b', deeper:'#0a3d52', mid:'#2a9bb0', light:'#e8f4f6' },
        softpink: '#f8e8ed',
        softgreen: '#e8f5e9',
        softblue: '#e3f2fd',
        softyellow: '#fff9e6',
        muted: '#5a7080',
        border: '#e0ebf0',
        bg: '#f0f4f8',
      },
      fontFamily: { sans: ['Inter','sans-serif'], poppins: ['Poppins','sans-serif'] },
    },
  },
  plugins: [],
}
export default config
