// 새달랩 커스텀 PWA service worker: pages network-first (offline → cache; 주문 관리가 불러오는 check.html 해석기도 항상 최신으로), other same-origin files cache-first, fonts cached
const CACHE='sedal-custom-v104';
const CORE=['./','./index.html','./check.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET')return;
  if(u.origin===location.origin&&(e.request.mode==='navigate'||e.request.destination==='document'||/\.html$/.test(u.pathname))){e.respondWith(caches.open(CACHE).then(async c=>{try{const r=await fetch(e.request,{cache:'no-cache'});if(r.ok)c.put(e.request,r.clone());return r}catch(_){return (await c.match(e.request,{ignoreSearch:true}))||(await c.match('./index.html'))||Response.error()}}))}
  else if(u.origin===location.origin){e.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(e.request,{ignoreSearch:true});const net=fetch(e.request).then(r=>{if(r.ok)c.put(e.request,r.clone());return r}).catch(()=>hit);return hit||net}))}
  else if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){e.respondWith(caches.open(CACHE+'-fonts').then(async c=>{const hit=await c.match(e.request);if(hit)return hit;try{const r=await fetch(e.request);c.put(e.request,r.clone());return r}catch(_){return hit||Response.error()}}))}});
