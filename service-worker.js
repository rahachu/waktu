const CACHE_NAME = "waktuV1";
var urlsToCache = [
  "./",
  "./nav.html",
  "./index.html",
  "./pages/home.html",
  "./pages/about.html",
  "./pages/contact.html",
  "./pages/clock.html",
  "./css/materialize.min.css",
  "./css/style.css",
  "./js/materialize.min.js",
  "./js/nav.js",
  "./js/clock.js",
  "./js/darkmode.js",
  "./images/img1.jpg",
  "./images/img2.jpg",
  "./images/img3.jpg",
  "./images/img4.jpg",
  "./images/img5.jpg",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://media.giphy.com/media/WSrJg2RqlMPHrgMpOh/source.gif"
];
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
            return response;
          }
   
          console.log(
            "ServiceWorker: Memuat aset dari server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
  });

  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
