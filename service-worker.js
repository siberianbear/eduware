"use strict";var precacheConfig=[["/eduware/index.html","5978575b6d96dded70b88b2edaa22ec2"],["/eduware/static/css/main.f1ec4930.css","638e2fed6164a502689c36892aa55ef9"],["/eduware/static/js/main.ac07c1c9.js","484b262046de9c078061d69ceacb96a0"],["/eduware/static/media/bttn_1a.c09e5c8e.svg","c09e5c8ef1c91d9b4c48572907f1062d"],["/eduware/static/media/bttn_1a.eee4b235.svg","eee4b235482413a4ca272df1c4cbdc79"],["/eduware/static/media/bttn_2b.6d317c54.svg","6d317c546cece8e8c893234c3edb8a9e"],["/eduware/static/media/bttn_2b.cfe8e27a.svg","cfe8e27ad1ac8b4d01f2daeca99f5e1a"],["/eduware/static/media/bttn_3c.4babbbe6.svg","4babbbe6acc5a3f7c3df2bcfc11fabe1"],["/eduware/static/media/bttn_3c.dc97c2c3.svg","dc97c2c3cfe5ccf683076124559e6e8f"],["/eduware/static/media/bttn_4d.3df1b57c.svg","3df1b57ce88dfb57612624bf7e480377"],["/eduware/static/media/bttn_4d.afba8a8e.svg","afba8a8ecae9ae61319ccfe7c707358a"],["/eduware/static/media/bttn_5asterix.6957743b.svg","6957743b742a0bac9a5139b83606d6f2"],["/eduware/static/media/bttn_5e.7d25e30f.svg","7d25e30ffb284666b9d6134991a5f2ef"],["/eduware/static/media/bttn_6f.390fd009.svg","390fd0094eb5605e0cadd4ddb0bbfe18"],["/eduware/static/media/bttn_6lightning.4714c111.svg","4714c111d7851b84d2ee71e270da09bf"],["/eduware/static/media/bttn_arrow_down.4151d2d0.svg","4151d2d0c967ee1e20006778fdd1a913"],["/eduware/static/media/bttn_arrow_left.50845985.svg","50845985739de1e1cfb1637ef75808ce"],["/eduware/static/media/bttn_arrow_right.0f43194b.svg","0f43194b4ff75ece17f8ebbc373c6c92"],["/eduware/static/media/bttn_arrow_up.7cfa9a90.svg","7cfa9a9036c178b727c53970b5855f34"],["/eduware/static/media/bttn_down.62812110.svg","62812110d90166c00ba81618c2ab0999"],["/eduware/static/media/bttn_left.7160f953.svg","7160f953c19304eb6936f775d00bf8f6"],["/eduware/static/media/bttn_right.f6531d14.svg","f6531d14dfcecc2cc31f92f5d36951ad"],["/eduware/static/media/bttn_up.0ad91932.svg","0ad91932e1cb63f80bf3da6800e4c301"],["/eduware/static/media/bttn_up.d65d853c.svg","d65d853cfb096b0658ac5c0dc44cb648"],["/eduware/static/media/skin-default.559b0e43.png","559b0e4346fdd5ddeb6dd786c575d93b"],["/eduware/static/media/skin-large.4f606fe9.svg","4f606fe904676b56c98e17cc952b365f"],["/eduware/static/media/skin-mini.0363d2fc.png","0363d2fc443bfc831b6c3b1420e5c2d1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/eduware/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});