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
        "logo-github": "url(../src/imgs/github.avif)",
        "logo-linkedin": "url(../src/imgs/linkedin.avif)",
        "logo-ws": "url(../src/imgs/ws.avif)",
        "logo-react-router-dom": "url(../src/imgs/react-router-dom.avif)",
        "logo-tailwind": "url(../src/imgs/tailwind.avif)",
        "logo-node": "url(../src/imgs/node.png)",
        "logo-express": "url(../src/imgs/express.avif)",
        "logo-mongo": "url(../src/imgs/mongo.avif)",
        "img-animex": "url(../src/imgs/animex.avif)",
        "img-caprichos": "url(../src/imgs/caprichos.avif)",
        "img-acordeon": "url(../src/imgs/acordeon.avif)",
        "img-social": "url(../src/imgs/social.avif)",
        "img-learn": "url(../src/imgs/learn.avif)",
        "img-snap": "url(../src/imgs/snap.avif)",
        "img-bank": "url(../src/imgs/bank.avif)",
        "img-bachiller": "url(../src/imgs/bachiller.avif)",
        "img-tecnico": "url(../src/imgs/tecnico.avif)",
        "img-tecnologo": "url(../src/imgs/tecnologo.avif)",
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
