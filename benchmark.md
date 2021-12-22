## Loading only the css related to the page

**Here we removed multiple css files that were added to the page completely unrelated. Now the page fetches and loads the css file that is needed only for this page.**

## Metrics

- File size : 206kb
- Time to fetch : 23ms
- Time to parse : 5.38ms
- Time to recalculate : 37.29ms

![splitting the code and only using the css required for this page fetch time in network tab](./document-assets/code-split-css-network.png)
![splitting the code and only using the css required for this page parse time in performance tab](./document-assets/code-split-css-parse-time.png)
![splitting the code and only using the css required for this page recalculate time in performance tab](./document-assets/code-split-css-recalculate-time.png)
