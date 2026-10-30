# Stu Warren Golf

Website for Stu Warren Golf: golf in schools across England.

## Stack

Plain HTML, CSS and a little JavaScript with no build step, hosted on Netlify.

- `index.html` – home page with the four tablet buttons
- `primary.html` – Primary Golf Experience (brochure content, timetables, meet the coach, booking form)
- `leaderboard.html` – National Hole-in-One Challenge leaderboard
- `secondary.html`, `workshops.html` – placeholder pages until Stu's copy is ready
- `assets/styles.css` – styles
- `assets/main.js` – mobile menu
- `assets/timetables.js` – the sample timetable options shown on the primary page
- `assets/leaderboard.js` – **leaderboard scores: edit the list in this file to update the table**
- `assets/docs/` – downloadable PDFs (brochure, meet the coach, timetables)
- `assets/images/` – logo, favicon and photos (school photos taken from Stu's brochure)
- `thanks.html` – page shown after the contact form is sent
- `netlify.toml` – Netlify config

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploying on Netlify

In Netlify, choose **Add new site → Import an existing project**, pick this repo and deploy (no build command; `netlify.toml` publishes the repo root).

The contact form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy, enable form detection under **Forms** in the site settings, then add an email notification so submissions go to Stu. There are four forms: `contact`, `primary-enquiry`, `secondary-interest` and `workshops-enquiry`.
