# Conquer Academy HTML Project

Static multi-page website for a fictional web development academy, built with HTML, SCSS, and Vite.

## Stack

- HTML
- SCSS (Sass)
- Vite

## Pages

- Home
- Courses
- Individual course pages
- Blog
- Contact
- About
- Login
- Sign up
- Legal notice
- 404 page

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
.
├── *.html
├── img/
├── main.js
├── sass/
├── package.json
└── README.md
```

## Notes

- SCSS is imported through `main.js`
- Vite compiles the styles and serves the generated CSS to all HTML pages that include `/main.js`
