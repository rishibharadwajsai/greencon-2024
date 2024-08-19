/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./node_modules/flowbite/**/*.js",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin')],
// }

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};


