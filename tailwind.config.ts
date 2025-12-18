import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAFA", // Broken white
        "cream-dark": "#F5F5F5",
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          800: "#292524",
          900: "#1c1917",
        },
        maroon: {
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#ffc7c7",
          300: "#ffa0a0",
          400: "#ff6b6b",
          500: "#f83b3b",
          600: "#d91e1e", // Richer red
          700: "#b91515",
          800: "#991b1b", // Deep classic maroon
          900: "#7f1d1d", // Dark oxblood
          950: "#450a0a", // Very dark
        },
        gold: {
          DEFAULT: "#C5A059", // Muted metallic gold, less yellow
          light: "#E5C585",
          dark: "#A58039",
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "slow-zoom": "slowZoom 10s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite linear",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      boxShadow: {
        "soft": "0 10px 40px -10px rgba(0,0,0,0.08)",
        "hard": "4px 4px 0px 0px rgba(0,0,0,1)",
        "glow": "0 0 30px rgba(197, 160, 89, 0.3)", // matched to new gold
      },
    },
  },
  plugins: [],
};
export default config;
