export default {
  content: ["./src/**/*.jsx", "./**/*.html", "./**/*.css"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#191919",
        card: "#232323",
        "custom-blue": "#306AC1",
      },

      color: {},

      backgroundImage: {
        "logo-react": "url('../src/imgs/atomo.avif')",
        "img-profile": "url(../src/imgs/img-profile.jpg)",
        "logo-github": "url(../src/imgs/github.png)",
        "logo-linkedin": "url(../src/imgs/linkedin.png)",
        "logo-ws": "url(../src/imgs/ws.png)",
        "logo-react-router-dom": "url(../src/imgs/react-router-dom.png)",
        "logo-tailwind": "url(../src/imgs/tailwind.png)",
        "logo-node": "url(../src/imgs/node.png)",
        "logo-express": "url(../src/imgs/express.png)",
        "logo-mongo": "url(../src/imgs/mongo.png)",
        "img-animex": "url(../src/imgs/animex.png)",
        "img-caprichos": "url(../src/imgs/caprichos.png)",
      },

      screens: {
        "350px": "350px",
        "400px": "400px",
        "460px": "460px",
        "500px": "500px",
        "530px": "530px",
        "600px": "600px",
        "730px": "730px",
        "750px": "750px",
        "800px": "800px",
        "850px": "850px",
        "900px": "900px",
        "1000px": "1000px",
        "1060px": "1060px",
        "1160px": "1160px",
        "1196px": "1196px",
        "1479px": "1479px",
      },

      fontFamily: {
        "finger-paint": "'Finger Paint', cursive",
        raleway: "'Raleway', sans-serif",
      },
    },
  },
  plugins: [],
};
