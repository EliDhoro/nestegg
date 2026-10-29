/* Nestegg service worker — makes the app open instantly and work offline. */
var CACHE = 'nestegg-20261029173509', LIB = 'nestegg-lib';
var SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', function(e){
  // 'reload' skips the browser's own cache, so a new version never installs an old copy of the app
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL.map(function(u){ return new Request(u, {cache:'reload'}); })); })
    .then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k.indexOf('nestegg-') === 0 && k !== CACHE && k !== LIB; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  // Never cache Google sign-in, Drive or sync traffic.
  if (/googleapis\.com|google\.com$|googleusercontent\.com$/.test(url.hostname)) return;
  if (url.origin === self.location.origin && req.mode === 'navigate') {
    // The app itself: newest version when online (so updates show up the first time you open it),
    // the saved copy when offline or if the network takes more than 4 seconds.
    e.respondWith(caches.open(CACHE).then(function(c){
      var net = fetch(req, {cache:'no-cache'}).then(function(res){ if (res && res.ok) c.put('./index.html', res.clone()); return res; });
      var slow = new Promise(function(resolve){ setTimeout(resolve, 4000); }).then(function(){ return c.match('./index.html'); });
      return Promise.race([net.catch(function(){ return c.match('./index.html'); }), slow.then(function(hit){ return hit || net; })])
        .then(function(res){ return res || net; });
    }));
    return;
  }
  if (url.origin === self.location.origin) {
    // Icons and manifest: open from the saved copy, refresh it in the background.
    e.respondWith(caches.open(CACHE).then(function(c){
      return c.match(req).then(function(hit){
        var net = fetch(req).then(function(res){ if (res && res.ok) c.put(req, res.clone()); return res; }).catch(function(){ return hit; });
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
