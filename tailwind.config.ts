import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#060d1f",
          2: "#0b1428",
          3: "#0f1c35",
        },
        purple: {
          DEFAULT: "#7c3aed",
          soft: "#a78bfa",
          glow: "#c4b5fd",
        },
        lavender: "#e0d7ff",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite",
        "breathe-ring": "breatheRing 4s ease-in-out infinite",
        "breathe-core": "breatheCore 4s ease-in-out infinite",
        "typing-bounce": "typingBounce 0.9s ease-in-out infinite",
        "online-pulse": "onlinePulse 2s ease-in-out infinite",
        "pulse-dot": "pulseDot 1s ease-in-out infinite",
        shimmer: "shimmer 1.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "card-float": "cardFloat 6s ease-in-out infinite",
        "msg-in": "msgIn 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "modal-in": "modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        blobFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,25px) scale(0.97)" },
        },
        breatheRing: {
          "0%,100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.2)", opacity: "0.8" },
        },
        breatheCore: {
          "0%,100%": {
            transform: "scale(1)",
            boxShadow: "0 0 30px rgba(124,58,237,0.5)",
          },
          "50%": {
            transform: "scale(1.1)",
            boxShadow: "0 0 60px rgba(124,58,237,0.9)",
          },
        },
        typingBounce: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(-5px)", opacity: "1" },
        },
        onlinePulse: {
          "0%,100%": { boxShadow: "0 0 6px rgba(34,197,94,0.8)" },
          "50%": { boxShadow: "0 0 14px rgba(34,197,94,1)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        cardFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        msgIn: {
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        modalIn: {
          from: { opacity: "0", transform: "scale(0.92) translateY(20px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
