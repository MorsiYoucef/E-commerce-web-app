/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors:{
                "rabbit-red": "#ea2e0e"
            },
        },
    },
    variants: {
        extend: {},
    },
  plugins: [],
}