# THE 5 PATTERNS BLOCKING YOU FROM HEALTHY LOVE

A playful quiz that helps people spot which dating pattern may be getting in the way of healthier love. Answer 25 quick statements, get a score for each of the five patterns, and read the result description for your highest-scoring pattern.

![Landing page preview](src/images/readme-preview.jpg)

## What It Does

- Starts with a landing page and simple instructions.
- Walks through 5 patterns with 5 statements each.
- Scores each pattern separately from `0` to `15`.
- Shows all pattern scores at the end.
- Shows all tied highest-scoring patterns if there is a tie.
- Includes a restart button.

## Run Locally

```bash
npm install
npm run dev
```

## Build Locally

```bash
npm run build
```

The built site is created in `dist/`.

## Deploy To GitHub Pages

The repo is already prepared for GitHub Pages with:

- `vite.config.js` using `base: "/love-quiz/"`
- `.github/workflows/deploy.yml` building and deploying `dist/`

To deploy:

1. Push the latest code to the `main` branch.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Go to the `Actions` tab and open `Deploy to GitHub Pages`.
6. Wait for the workflow to finish.

The site should be available at:

```text
https://avollrath.github.io/love-quiz/
```
