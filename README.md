# LinkHub — Video Link Directory

A clean, dark, mobile-friendly directory of outbound video-site links.
Nothing is hosted, stored, or played here — every card opens the respective
external website in a new tab.

## Add more links
Edit `links.js` — add entries under any site, or add a whole new site block:

```js
{ name: "SiteName", domain: "example.com", color: "#ff9000",
  links: [
    { label: "Homepage", url: "https://www.example.com/" },
    { label: "Category name", url: "https://www.example.com/some-page" },
  ] }
```

## Run locally
Any static server works, e.g. `python3 -m http.server` in this folder.

## Deploy
Push to GitHub and enable Pages (or Netlify/Vercel). Note: some static hosts
restrict adult-adjacent content — if Pages flags it, use Netlify or Vercel instead.
