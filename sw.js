const C='palabra-9',F=['./','index.html','vocab.json','exercises.json','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','apple-touch-icon.png'];
addEventListener('install',e=>{skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(f=>c.add(f).catch(()=>0)))))});
addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET'||/tatoeba|mymemory/.test(r.url))return;
e.respondWith((async()=>{try{const a=new AbortController(),t=setTimeout(()=>a.abort(),5000),x=await fetch(r,{signal:a.signal});clearTimeout(t);if(x.ok||x.type=='opaque'){const y=x.clone();caches.open(C).then(c=>c.put(r,y)).catch(()=>0)}return x}catch(_){return(await caches.match(r))||(r.mode=='navigate'&&await caches.match('index.html'))||Response.error()}})())});
