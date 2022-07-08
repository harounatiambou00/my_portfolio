/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        dark: '#041C32',
        light: '#EEEEEE',
        teal: '#045f66',
        white: "#FFFFFF",
        success: '#00FFAB',
        warning: '#FFF323',
        error: '#FFF323'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'serif': ['ui-serif', 'Georgia',],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'kanit': ['Kanit', 'sans-serif'],
        'righteous': ['Righteous', 'cursive'],
        'splash': ['Splash', 'cursive'],
        'poiret': ['Poiret One', 'cursive'],
      },
      width: {
        'drawer': '40rem',
      }
    },
  },
  plugins: [],
}
