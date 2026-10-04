const C='palabra-1',F=['./','index.html','words.json','manifest.webmanifest','icon.svg'];
addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
addEventListener('fetch',e=>{if(e.request.method!='GET'||!e.request.url.startsWith(location.origin))return;
e.respondWith(caches.open(C).then(c=>c.match(e.request).then(r=>{const n=fetch(e.request).then(x=>{c.put(e.request,x.clone());return x}).catch(()=>r);return r||n})))});
