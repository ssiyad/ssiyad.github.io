[Sabu Siyad](https://github.com/ssiyad)'s [website](https://ssiyad.com). Plain
HTML, CSS and JavaScript, with no build step and no libraries. The fonts load
from Google Fonts.

The previous Zola blog is on the
[`legacy`](https://github.com/ssiyad/ssiyad.github.io/tree/legacy) branch.

## Run locally

The pages use root-relative paths, so serve the folder over HTTP:

```sh
python -m http.server
```

## Deploy

A push to `master` copies the site files to the `gh-pages` branch, which
GitHub Pages serves.
