/* Nestegg service worker — makes the app open instantly and work offline. */
var CACHE = 'nestegg-20261025083625', LIB = 'nestegg-lib';
var SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf('nestegg-') === 0 && k !== CACHE && k !== LIB; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  // Never cache Google sign-in or Drive traffic.
  if (/googleapis\.com|accounts\.google\.com|google\.com$/.test(url.hostname)) return;
  if (url.origin === self.location.origin) {
    // Stale-while-revalidate: open instantly from cache, refresh in the background.
    e.respondWith(caches.open(CACHE).then(function(c){
      var key = req.mode === 'navigate' ? './index.html' : req;
      return c.match(key, {ignoreSearch: req.mode === 'navigate'}).then(function(hit){
        var net = fetch(req).then(function(res){ if (res && res.ok) c.put(key, res.clone()); return res; }).catch(function(){ return hit; });
        return hit || net;
      });
    }));
    return;
  }
  if (url.hostname === 'cdnjs.cloudflare.com') {
    // PDF reader library: cache after first use so imports work offline later.
    e.respondWith(caches.open(LIB).then(function(c){
      return c.match(req).then(function(hit){ return hit || fetch(req).then(function(res){ if (res.ok) c.put(req, res.clone()); return res; }); });
    }));
  }
});
