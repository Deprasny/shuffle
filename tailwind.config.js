/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        pixel: ["PixelMix", "monospace"]
      },
      colors: {
        "accent-purple": "#8B5CF6",
        "accent-yellow": "#D3FB51",
        "nav-purple": "#14021E"
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateX(calc(0%))" },
          "100%": { transform: "translateX(calc(-50%))" }
        },
        scrollTextLeft: {
          "0%": { transform: "translateX(calc(-50%))" },
          "100%": { transform: "translateX(calc(0%))" }
        }
      },
      animation: {
        scrollText: "scrollText 40s linear infinite",
        scrollTextLeft: "scrollTextLeft 40s linear infinite"
      }
    }
  },
  plugins: []
};
