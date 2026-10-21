const C='palabra-7',F=['./','index.html','vocab.json','exercises.json','manifest.webmanifest','icon.svg'];
addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
addEventListener('fetch',e=>{const u=e.request.url;if(e.request.method!='GET'||/tatoeba|mymemory/.test(u))return;
e.respondWith(caches.open(C).then(c=>c.match(e.request).then(r=>{const n=fetch(e.request).then(x=>{if(x.ok||x.type=='opaque')c.put(e.request,x.clone());return x}).catch(()=>r);return r||n})))});
