/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        fontFamily: {
            sans: ['Satoshi', "sans-serif"],
            inter: ['Inter', "sans-serif"]
        },
        extend: {
            colors: {
                'primary': '#203365',
                'secondary': '#add7f2',
            }
          },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
