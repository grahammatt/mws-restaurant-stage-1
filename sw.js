/*Service Worker
 *Code comes from following along with this guide
 *updated to es6 syntax
 *https://developers.google.com/web/fundamentals/primers/service-workers/
 */
const CACHE_NAME = 'my-site-cache-v1';
let urlsToCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/styles/styles.css',
  '/scripts/dbHelper.js',
  '/scripts/restaurant_info.js',
  '/scripts/main.js',
  '/data/restaurants.json'
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    //open cache
    caches.open(CACHE_NAME)
    .then(cache => {
      console.log('Opened cache');
      //add to cache
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  //when a url is fetched
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      // Cache hit - return cache response
      // else attempt to fetch
      return response ? response : fetch(event.request);
    })
  );
});