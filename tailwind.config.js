/* eslint-disable */
const { toRadixVars } = require("windy-radix-palette/vars");
const radixColors = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
    "./hooks/**/*.tsx",
    "./.storybook/*.html",
    "./.storybook/preview.ts",
    "./content/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)"],
        serif: ["LXGW WenKai Lite", "serif"],
      },
      colors: {
        primary: toRadixVars("grass"),
        accent: toRadixVars("plum"),
        neutral: toRadixVars("olive"),
        neutralA: toRadixVars("oliveA"),
        ...radixColors.blackA,
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        // LoadingDots
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        // Page
        "page-in": {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        // Page
        "page-in": "page-in .6s both",
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("windy-radix-palette")({
      colors: {
        grass: radixColors.grass,
        grassDark: radixColors.grassDark,
        plum: radixColors.plum,
        plumDark: radixColors.plumDark,
        olive: radixColors.olive,
        oliveDark: radixColors.oliveDark,
        oliveA: radixColors.oliveA,
        oliveDarkA: radixColors.oliveDarkA,
      },
    }),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("windy-radix-typography"),
    require("tailwindcss-radix")(),
  ],
};
