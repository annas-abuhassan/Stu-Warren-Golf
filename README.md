# Stu Warren Golf

Website for Stu Warren Golf: golf coaching for professionals, individuals and schools.

## Stack

Plain HTML, CSS and a little JavaScript with no build step, hosted on Netlify.

- `index.html` – the whole one-page site
- `assets/styles.css` – styles
- `assets/main.js` – mobile menu
- `assets/images/` – logo, favicon and photos
- `thanks.html` – page shown after the contact form is sent
- `netlify.toml` – Netlify config

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploying on Netlify

In Netlify, choose **Add new site → Import an existing project**, pick this repo and deploy (no build command; `netlify.toml` publishes the repo root).

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy, enable form detection under **Forms** in the site settings, then add an email notification so submissions go to Stu.
