const CACHE = "agrosat-v2";
const ASSETS = [
  "./", "./index.html", "./css/style.css", "./js/app.js", "./js/data.js", "./manifest.json",
  "./images/analysis_2026-03-29.png", "./images/analysis_2026-04-28.png",
  "./images/analysis_2026-05-28.png", "./images/analysis_2026-06-02.png",
  "./images/trend_ndvi_moisture.png", "./images/ndvi_difference.png", "./images/advisory_table.png"
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
