import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
         'color-primary': '#23252B',
         'color-secudary': '#130F1A',
         'color-tertiary': '#FF944D',
         'color-border-1': '#0A66C2',
      },
      width: {
         '128': '42rem',
         'presetation': '57.25rem',
         'about-text': '34rem'
      },
      maxWidth:{
         'tela': '70rem', 
      },
      animation:{
         'presetation-home': '5s ease 2s infinite alternate none running icon_move_people',
         'animation_header': '1s 1s both animat',
         'animation_presentation': '1.7s 1.7s both animat2'
      },
      keyframes: {
         icon_move_people:{
            '0%':{
               _webkit_transform: 'translate3d(0, 0, 0)',
               transform: 'translate3d(0, 0, 0)',
            },
            '100%': {
               _webkit_transform: 'translate3d(30px, 60px, 0)',
               transform: 'translate3d(-30px, -50px, 0)'
            }
         },
         animat: {
            '0%':{
               transform: 'translateX(-200%)'
            },
            '100%': {
               transform: 'translateX(0%)'
            }
         },
         animat2: {
            '0%':{
               opacity: '0'
            },
            '100%': {
               opacity: '1'
            }
         }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config