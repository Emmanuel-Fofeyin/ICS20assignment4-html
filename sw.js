var GHPATH = "/ICS20assignment4-html"
var APP_PREFIX = "gppwa_"
var VERSION = "version_001"
var URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/css/style.css`,
  `${GHPATH}/android-chrome-512x512.png`,
  `${GHPATH}/js/script.js`,
]

var CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener("fetch", function (e) {
  console.log("Fetch request : " + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log("Responding with cache : " + e.request.url)
        return request
      } else {
        console.log("File is not cached, fetching : " + e.request.url)
        return fetch(e.request)
      }
    })
  )
})