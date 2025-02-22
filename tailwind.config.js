/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        xxs: "380px",
      },
      aspectRatio: {
        shorts: "9 / 16",
      },
      fontFamily: {
        sans: ["var(--font-helv)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-filter-img":
          "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
        "gradient-filter-img-top":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent)",
        "gradient-filter-img-right":
          "linear-gradient(to left, rgba(0, 0, 0, 0.9), transparent)",
      },

      colors: {
        black: "#000",
        black1: "#161616",
        blackGrey: "#202020",
        darkBlue: "#364549",
        primary: "#f11320",
        primaryLight: "#F55661",
        primaryLighter: "#F5566188",
        primaryDark: "#D1333D",
        secondary: "#13F198",
        secondaryDark: "#27b37b",
        tritory: "#13B6F1",
        tritoryDark: "#3f9cbd",
        lightGray: "#dddddd55",
        goldLight: "#FEC053",
        goldDark: "#464646",
        darkGray: "#031D26",
        glowPink: "#F95560",
      },
      maxWidth: {
        grid: "calc(1600px + 10%)",
      },
      padding: {
        grid: "0 5%",
      },
      transitionDuration: {
        3000: "3000ms",
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "bounce-little": "bounce-little 1s infinite;",
        "morning-slide": "morning-slide 12.5s linear infinite",
        fade: "fade 900ms ease-in-out",
        "scale-up": "scale-up 300ms ease-in-out",
        "scale-up-down": "scale-up-down 1s ease-in 0s infinite",
        "slide-up": "slide-up 12s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "background-transition":
          "background-transition 60s ease-in-out infinite",
        "hue-change": "hue-change 30s ease-in-out infinite",
        "dropdwon-appearance-in":
          "dropdwon-appearance-in 250ms ease-out normal both",
        glowPink: "glowPink 3s infinite alternate",
        glowYellow: "glowYellow 3s infinite alternate",
        glowGray: "glowGray 3s infinite alternate",
        glowGrayDark: "glowGray 3s infinite alternate",
        "move-to-right": "move-to-right 3s infinite",
        "move-and-rotate": "moveAndRotate 10s infinite",
      },
      keyframes: {
        moveAndRotate: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "10%, 90%": { transform: "translate(50px, 0) rotate(90deg)" },
          "20%, 80%": { transform: "translate(50px, 50px) rotate(180deg)" },
          "30%, 70&": { transform: "translate(0, 50px) rotate(270deg)" },
          "40%, 60%": { transform: "translate(0, 0) rotate(360deg)" },
          "50%": { transform: "translate(0, 50px) rotate(270deg)" },
        },
        glowPink: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #F9556040, 0 0 10px #F9556040, 0 0 15px #F9556040, 0 0 20px #ff00ff40, 0 0 25px #ff00ff40, 0 0 28px #ff00ff40",
          },
          "50%": {
            boxShadow:
              "0 0 2px #9747FF40, 0 0 5px #9747FF40, 0 0 10px #9747FF40, 0 0 15px #ff00ff40, 0 0 20px #ff00ff40, 0 0 25px #ff00ff40",
          },
        },
        glowYellow: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #FEC053, 0 0 10px #FEC053, 0 0 15px #FEC053, 0 0 20px #FEC05340, 0 0 25px #FEC05340, 0 0 28px #FEC05340",
          },
          "50%": {
            boxShadow:
              "0 0 2px #FEC053, 0 0 5px #FEC053, 0 0 10px #FEC053, 0 0 15px #fdba7440, 0 0 20px #fdba7440, 0 0 25px #fdba7440",
          },
        },
        glowGray: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #e4e4e480, 0 0 10px #e4e4e480, 0 0 15px #e4e4e480, 0 0 20px #e4e4e480, 0 0 25px #e4e4e480, 0 0 28px #e4e4e480",
          },
          "50%": {
            boxShadow:
              "0 0 2px #e4e4e480, 0 0 5px #e4e4e480, 0 0 10px #e4e4e480, 0 0 15px #e4e4e480, 0 0 20px #e4e4e480, 0 0 25px #e4e4e480",
          },
        },
        glowGrayDark: {
          "0%, 100%": {
            boxShadow:
              "0 0 5px #d1d5db80, 0 0 10px #d1d5db80, 0 0 15px #d1d5db80, 0 0 20px #d1d5db40, 0 0 25px #d1d5db40, 0 0 28px #d1d5db40",
          },
          "50%": {
            boxShadow:
              "0 0 2px #d1d5db80, 0 0 5px #d1d5db80, 0 0 10px #d1d5db80, 0 0 15px #d1d5db40, 0 0 20px #d1d5db40, 0 0 25px #d1d5db40",
          },
        },
        "background-transition": {
          "0%, 50%, 100%": { transform: "rotate(0deg) scale(1, 1)" },
          "25%": { transform: "rotate(45deg) scale(2, 2)" },
          "75%": { transform: "rotate(-45deg) scale(2, 2)" },
        },
        "dropdwon-appearance-in": {
          "0%": {
            opacity: 0,
            transform: "translate(50%, 10%) scale(0.85)",
          },
          "60%": {
            opacity: 0.75,
            "backface-visibility": "hidden",
            "webkit-font-smoothing": "antialiased",
            transform: "translate(50%, 10%) scale(1.15)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(50%, 10%) scale(1)",
          },
        },
        "hue-change": {
          "0%, 50%, 100%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(45deg)" },
          "75%": { filter: "hue-rotate(-45deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        "bounce-little": {
          "0%, 100%": {
            transform: "translateY(-15%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%, 26%": { transform: "translateY(0%)" },
          "29%, 56%": { transform: "translateY(-200%)" },
          "59%, 86%": { transform: "translateY(-400%)" },
          "97%": { transform: "translateY(-400%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "scale-up": {
          "0%": { opacity: 0, transform: "translateX(-50%) scale(1,0)" },
          "100%": { opacity: 1, transform: "translateX(-50%) scale(1,1)" },
        },
        "scale-up-down": {
          "0%": { transform: "scale(0,0)" },
          "100%": { transform: "scale(1,1)" },
        },
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-19.5%)",
          },
          "40%, 56%": {
            transform: "translateY(-34.5%)",
          },
          "60%, 76%": {
            transform: "translateY(-53%)",
          },
          "80%, 96%": {
            transform: "translateY(-69%)",
          },
          "96.1%": {
            transform: "translateY(-83.33%)",
          },
        },
        "morning-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-19%)",
          },
          "40%, 56%": {
            transform: "translateY(-34.5%)",
          },
          "60%, 76%": {
            transform: "translateY(-52%)",
          },
          "80%, 96%": {
            transform: "translateY(-69%)",
          },
          "96.1%": {
            transform: "translateY(-83.33%)",
          },
        },
        "move-to-right": {
          "0%, 100%": { transform: "translateX(0);" },
          "50%": { transform: "translateX(6px);" },
        },
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  variants: {
    extends: {
      transform: ["responsive", "hover", "focus", "active"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            prime: "#f11320",
            secondary: "#27b37b",
            tritory: "#3f9cbd",
            forth: "#737373",
            fifth: "#9747FF",
            sixth: "#00A79D",
            sixth50: "hsl(175.66deg 91.21% 17.84%)",
          },
        },
        dark: {
          colors: {
            prime: "#F55661",
            secondary: "#13F198",
            tritory: "#13B6F1",
            forth: "#737373",
            fifth: "#9747FF",
            sixth: "#00A79D",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
