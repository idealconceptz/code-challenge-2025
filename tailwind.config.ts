import { heroui } from '@heroui/theme';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@heroui/*/dist/**/*.{js,mjs}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
};
module.exports = config;
