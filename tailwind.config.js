/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: 'rgba(var(--color-main), <alpha-value>)',
        purple: 'rgba(var(--color-purple), <alpha-value>)',
        red: 'rgba(var(--color-red), <alpha-value>)',
        blue: 'rgba(var(--color-blue), <alpha-value>)',
        gray: 'rgba(var(--color-gray), <alpha-value>)',
        link: 'rgba(var(--color-link), <alpha-value>)',
        'bg-main': 'rgba(var(--color-bg-main), <alpha-value>)',
      },
      backgroundImage: {
        logo: 'var(--resource-logo)',
        'link-icon': 'var(--resource-bg-link)',
        switch: 'var(--resource-bg-switch)',
        'switch-mobile': 'var(--resource-bg-switch-mobile)',
        mouse: 'var(--resource-bg-mouse)',
        js: 'var(--resource-js)',
        ts: 'var(--resource-ts)',
      },
      screens: {
        mobile: { max: '768px' },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
