export default {
  content: ["./src/**/*.jsx", "./**/*.html"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#191919",
        card: "#232323",
      },

      backgroundImage: {
        "logo-react": "url('../src/imgs/atomo.avif')",
      },

      screens: {
        "400px": "400px",
        "460px": "460px",
        "530px": "530px",
        "600px": "600px",
        "750px": "750px",
        "800px": "800px",
        "850px": "850px",
        "900px": "900px",
        "1000px": "1000px",
      },

      fontFamily: {
        "finger-paint": "'Finger Paint', cursive",
      },
    },
  },
  plugins: [],
};
