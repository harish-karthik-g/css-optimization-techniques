# Setup PurgeCSS and CSSnano

1. Initialize a npm repository in the project with `npm init -y`
2. Install postcss, postcss-cli and purgecss as developer dependencies `npm i -D postcss postcss-cli @fullhuman/postcss-purgecss cssnano`
3. Create a postcss config file with name `postcss.config.js`
4. Add the following configuration in the postcss config file

   ```js
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
   ```

5. Add script to package.json `"build:css": "postcss ./css/bootstrap.css -o ./css/styles.css"`
6. Point the newly generated `styles.css` in `index.html`

## Tools and their documentation

[**PostCSS**](https://github.com/postcss/postcss) <br>
[**PostCSS-cli**](https://github.com/postcss/postcss-cli) <br>
[**PurgeCSS**](https://purgecss.com) <br>
[**CSSnano**](https://cssnano.co/) <br>
