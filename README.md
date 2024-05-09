# eleven

This is an eleventy template that comes preconfigured with Tailwind CSS. I call it the "Eleven Tails" stack :D.

## Commands

There are a few commands you can run to aid development:

```sh
npm run start:tailwind # Watch for any style changes and compile them using Tailwind
npm run start:eleventy # Run the eleventy dev server
npm start # Run both the eleventy dev server and Tailwind
```

When the site is ready to deploy you'll need to run any one of these commands (depending on your changes):

```sh
npm run build:tailwind # Build CSS files
npm run build:eleventy # Build HTML and JS files
npm run build # Build the whole project (HTML, JS, CSS)
```
