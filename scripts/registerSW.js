/*Register Service Worker
 *updated to es6 syntax from
 *https://developers.google.com/web/fundamentals/primers/service-workers/
 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(registration => {
      // registration successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, error => {
      // registration fails
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}