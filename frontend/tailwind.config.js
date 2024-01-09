module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "425px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
      },
    },
  },
};
