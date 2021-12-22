const purgecss = require("@fullhuman/postcss-purgecss");
const cssNano = require("cssnano");

module.exports = {
  plugins: [
    cssNano({
      preset: "default",
    }),
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
};
