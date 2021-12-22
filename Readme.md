# Demonstration of optimising CSS files for production with bootstrap

## How to use the repository

The optimization methods used can be considered a 3 step process. Each step optimizing the css further and by the final step, the css is reduced to the bare minimum. So it is advised to follow the steps in order for better optimization and results. Each code optimization technique will have two branches. One is before the implementation and the other is after implementation. The main/master branch will have the code with all the changes implemented and the final build that is available for production. Each branch will also have a setup document to explain how to setup the tools for that particular task and its config to reproduce similar effects.

## Optimization Techniques discussed

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
