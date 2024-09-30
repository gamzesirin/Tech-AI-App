import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        '7xl': '1280px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        shine: "shine 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          "0%, 100%": { backgroundPosition: "400% center" },
          "50%": { backgroundPosition: "0% center" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#7C3AED",
          "primary-content": "#FFFFFF",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e6ecef",
        },
      },
      "dark",
    ],
  },
};

export default config;