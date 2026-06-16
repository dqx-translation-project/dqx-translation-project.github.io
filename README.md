# dqx-translation-project.github.io

> Disclaimer: This site was built with the assistance of AI (Claude).

Source for the [DQX Translation Project](https://dqx-translation-project.github.io) documentation site.

## what this is

A static HTML site documenting the tools maintained by the DQX Translation Project, which enable players to experience Dragon Quest X Online in English.

## pages

- **Home** - project overview and feature summary
- **dqxclarity** - download and install guide for the translation tool
- **Troubleshooting** - common issues and fixes
- **FAQ** - frequently asked questions
- **API Setup** - guides for DeepL and Google Translate API configuration

## deployment

Pushing to `main` triggers a GitHub Actions workflow that deploys the `site/` directory to GitHub Pages via the `gh-pages` branch.

## editing

All pages are plain HTML files under `site/`. Shared styles are in `site/css/style.css` and shared JS in `site/js/main.js`. Screenshots and images live in `site/assets/`.
