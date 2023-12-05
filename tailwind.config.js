/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            primary: 'Poppins',
        },
        container: {
            padding: {
                DEFAULT: '30px',
                lg: 0,
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1140px',
        },
        extend: {
            backgroundImage: {
                logo: "url('/public/logo.png')",
                hero: "url('/public/bg.jpg')",
            },
            colors: {
                primary: '#222',
                secondary: '#f5e6e0',
            },
        },
    },
}
