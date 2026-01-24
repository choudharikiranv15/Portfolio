/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'charcoal': '#0a0a0a',
                'charcoal-light': '#141414',
                'grey-soft': '#2A2A2A',
                'accent-white': '#F5F5F5',
                'accent-grey': '#A3A3A3',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Space Grotesk', 'monospace'], // Using Space Grotesk as mono/tech font
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'scroll': 'scroll 20s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
