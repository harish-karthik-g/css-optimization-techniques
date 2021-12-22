# Demonstration of optimising CSS files for production with bootstrap

## How to use the repository

The optimization methods used can be considered a 3 step process. Each step optimizing the css further and by the final step, the css is reduced to the bare minimum. The main/master branch will have the code with all the changes implemented and the final build that is available for production. There will be a branch for unoptimised build, build after implementing code-splitting, build after implementing purgecss and build after implmenting minification. Each branch will also have a setup document to explain how to setup the tools for that particular task and its config to reproduce similar effects.

## Optimization Techniques discussed

**Step 0:** Unoptimised CSS <br>
**Step 1:** Code splitting <br>
**Step 2:** Remove Unused CSS <br>
**Step 3:** Minification <br>

## Tools used

- PostCSS
- PostCSS CLI
- Purge CSS
- CSS Nano

## Note

- This entire process is meant for production build. Using this when developing will make the process slow.
- Currently this demostration is provided with bootstrap but it is completely possible to do with any css file.
