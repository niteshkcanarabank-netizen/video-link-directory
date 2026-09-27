/* Card fields: label, url, category, duration ("12:34"), views ("1.2M"),
   rating ("92%"), hd (true/false), featured (shows in Featured rail),
   trending (shows in Trending rail). Badges render only when the field is set. */
const SITES = [
  {
    name: "Pornhub", domain: "pornhub.com", color: "#ff9000",
    links: [
      { label: "Homepage", url: "https://www.pornhub.com/", category: "Hub", hd: true, featured: true, trending: true },
      { label: "Categories", url: "https://www.pornhub.com/categories", category: "Browse", hd: true, featured: true },
      { label: "Channels", url: "https://www.pornhub.com/channels", category: "Browse", hd: true },
      { label: "Pornstars", url: "https://www.pornhub.com/pornstars", category: "Stars", hd: true, trending: true },
    ]
  },
  {
    name: "XVideos", domain: "xvideos.com", color: "#e53a3a",
    links: [
      { label: "Homepage", url: "https://www.xvideos.com/", category: "Hub", hd: true, featured: true, trending: true },
      { label: "Channels", url: "https://www.xvideos.com/channels", category: "Browse", hd: true },
      { label: "Pornstars", url: "https://www.xvideos.com/pornstars", category: "Stars", hd: true },
    ]
  },
  {
    name: "Eporner", domain: "eporner.com", color: "#4aa3ff",
    links: [
      { label: "Homepage", url: "https://www.eporner.com/", category: "Hub", hd: true, featured: true, trending: true },
      { label: "Categories", url: "https://www.eporner.com/cats/", category: "Browse", hd: true },
      { label: "Pornstars", url: "https://www.eporner.com/pornstars/", category: "Stars", hd: true },
    ]
  },
  {
    name: "XNXX", domain: "xnxx.com", color: "#8a5cf6",
    links: [
      { label: "Homepage", url: "https://www.xnxx.com/", category: "Hub", hd: true, trending: true },
    ]
  },
  {
    name: "RedTube", domain: "redtube.com", color: "#d61f26",
    links: [
      { label: "Homepage", url: "https://www.redtube.com/", category: "Hub", hd: true, featured: true },
      { label: "Categories", url: "https://www.redtube.com/categories", category: "Browse", hd: true },
      { label: "Channels", url: "https://www.redtube.com/channels", category: "Browse", hd: true },
    ]
  },
  {
    name: "YouPorn", domain: "youporn.com", color: "#2fbf9b",
    links: [
      { label: "Homepage", url: "https://www.youporn.com/", category: "Hub", hd: true, trending: true },
      { label: "Categories", url: "https://www.youporn.com/categories/", category: "Browse", hd: true },
      { label: "Channels", url: "https://www.youporn.com/channels/", category: "Browse", hd: true },
    ]
  },
];
