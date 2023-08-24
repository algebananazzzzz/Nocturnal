/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  safelist: [
    {
      pattern: /w-(1|2|3|4|5|7|10)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /bg-(gray|blue|indigo|purple|violet|fuchsia|pink)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /text-(gray|blue|indigo|purple|violet|fuchsia|pink)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    require('preline/plugin'),
  ],
}