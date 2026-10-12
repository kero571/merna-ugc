/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f1e7",
        sand: "#efe3d3",
        paper: "#fffaf2",
        line: "#e8dccb",
        ink: "#1f1612",
        brand: "#d62828",
        brandDark: "#b81e1e",
        good: "#1f9d55",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        pop: { "0%": { opacity: 0, transform: "scale(.94)" }, "100%": { opacity: 1, transform: "none" } },
        ring: { "0%": { boxShadow: "0 0 0 0 rgba(214,40,40,.45)" }, "100%": { boxShadow: "0 0 0 14px rgba(214,40,40,0)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        float: "float 4s ease-in-out infinite",
        pop: "pop .25s ease-out both",
        ring: "ring 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
