/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'marble': "url('https://images.unsplash.com/photo-1542456485-bd35dccad6cf?w=1000&auto=format&fit=crop&q=60')",
        'golden-stripe': "linear-gradient(90deg, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      }
    },
  },
  plugins: [],
}

