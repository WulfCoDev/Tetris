/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Pixelify Sans',
    },

    backgroundImage: {

      site: "url('../src/assets/bg2.jpg')",

    },
    extend: {
      colors: {
        'bg-42A5F5': '#42A5F5',
        'bg-7E57C2': '#7E57C2',
        'bg-81C784': '#81C784',
        'bg-FFF176': '#FFF176',
        'bg-FF7043': '#FF7043',
        'bg-EC407A': '#EC407A',
        'bg-546E7A': '#546E7A',
      }
    },
  },
  plugins: [],
}

