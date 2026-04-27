/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "neural-dark": "#050508",
        "neural-surface": "#0D0D1A",
        "neural-card": "#111127",
        "neon-violet": "#7C3AED",
        "neon-cyan": "#06B6D4",
        "neon-green": "#10B981",
        "neon-pink": "#EC4899",
        "data-yellow": "#F59E0B"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"]
      },
      boxShadow: {
        neon: "0 0 24px rgba(124,58,237,.45)",
        cyan: "0 0 24px rgba(6,182,212,.45)",
        green: "0 0 24px rgba(16,185,129,.45)",
        pink: "0 0 24px rgba(236,72,153,.45)"
      },
      backgroundImage: {
        "neural-grid":
          "linear-gradient(rgba(124,58,237,.13) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,.13) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
