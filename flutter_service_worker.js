'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3b3dc530a785793edc12a6c18e2d7a60",
"assets/AssetManifest.bin.json": "274378190a5e7719e7f8215405b2440e",
"assets/AssetManifest.json": "2149a9bf9e5d95340eb068bd8a6edf9e",
"assets/assets/fonts/SamsungOne-400.ttf": "4889669d08e2addfe6b66ca4a0297074",
"assets/assets/fonts/SamsungOne-700.ttf": "9880c5ab2b7844e855f285198c0bab05",
"assets/assets/fonts/SamsungSharpSans-Bold.ttf": "31af6b22017b69635b55ecd00339f923",
"assets/assets/icons/MathBridgeAcademy.jpg": "3e0ad94fd1a8d292495d2472f3b250e7",
"assets/assets/images/469348157_122109016856638377_503139542444500999_n.jpg": "a9db94c6b7b8b9be79bb7c461a80344c",
"assets/assets/images/academic_coaching.jpg": "f975df536c03a1d2843f47422b0b9778",
"assets/assets/images/ambitious-teenager-with-dark-skin-and-boycut-make-2023-11-27-05-22-49-utc.jpg": "beb0b3682953770b4e4ecdc446e52e1b",
"assets/assets/images/back-to-school-conceptual-background-2023-11-27-05-37-00-utc.jpg": "c443751efda5372f6711478b7f0d2b83",
"assets/assets/images/beautiful_country_road_tree_tunnel-wallpaper-5120x2880.jpg": "8d8ecbf4d52301e30b69ef4bfe57007d",
"assets/assets/images/error_3.jpeg": "5b8b525929dcb7b7551826022fb69bcf",
"assets/assets/images/gathered-for-the-good-of-their-education-2023-11-27-05-09-57-utc.jpg": "f24825076b8337ea80ba66ad3eecbb51",
"assets/assets/images/graphic-designer-working-from-home-using-laptop-an-2024-11-22-18-56-20-utc.jpg": "eb6a08a6aa9b885e10f27b1a3b0af6e7",
"assets/assets/images/group_sessions_cover.jpg": "f3afb969732fc9781ca15071fdcc62f2",
"assets/assets/images/home_cover.png": "e027f228ec9b4e030d7ed5c6685402d9",
"assets/assets/images/home_cover_1.png": "5e9ce19fe59434adbba794af8ea0409a",
"assets/assets/images/image-asset.jpeg": "c003602e5b75b6bb63a40a3075d97d92",
"assets/assets/images/image_processing20210907-29381-lsg0l0.gif": "4ce8bdf31a44ff1d4e85b5222f41acba",
"assets/assets/images/IMG_20241017_050633_062.jpg": "abaa650b49abd519cc479113749ffd98",
"assets/assets/images/IMG_20241126_161008_491.jpg": "fc54735a09a9e7b4ca150e13d5f1aa49",
"assets/assets/images/online_courses.jpg": "e301be5449a0153930111a3f41e5f683",
"assets/assets/images/profile.jpg": "2df116bf5d4b50af16242ecfffd9a791",
"assets/assets/images/profile_background_removed.png": "89eb28256e1ec8fea5f635013bafc352",
"assets/assets/images/R.jpeg": "650493aa27051a03c434d4523c6aaad0",
"assets/assets/images/service.jpg": "673486827d72019bfa68a6dd8c9e6372",
"assets/assets/images/the-hand-that-is-written-with-the-white-chalk-and-2023-11-27-04-51-34-utc.jpg": "dd92b56dc5cf2d72681cd569f71044a5",
"assets/assets/images/three-multiethnic-women-at-desk-having-lesson-2024-06-17-21-06-48-utc.jpg": "38edc08e44f819a9162dad70b9b32a6d",
"assets/assets/images/tutoring.jpg": "50296feae46089242d8731f2ae599c36",
"assets/assets/images/workshops.jpg": "0677b8ce7ec07089717576bba4cd8b30",
"assets/assets/images/wp11070501-imac-4k-wallpapers.jpg": "4c06f7544b412041db62a76277351dfa",
"assets/assets/images/wp11070506-imac-4k-wallpapers.jpg": "9af74d304e6bd97f1f46819d9cc84e12",
"assets/assets/images/young-african-american-woman-siting-at-cafe-workin-2023-11-27-04-55-45-utc.jpg": "b57781787f80ddffa571993726dc5385",
"assets/FontManifest.json": "49b1b9693a9d3093507e3c95aed2e5de",
"assets/fonts/MaterialIcons-Regular.otf": "1c24c549a979225bea818ceb8cfe7bf6",
"assets/NOTICES": "38a3521901504869c301e52dbac25bc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0be7b41212c51da41281c5c685c3d1f3",
"icons/favicon.png": "3e0ad94fd1a8d292495d2472f3b250e7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "729c2dbce02449664debbe42c550f537",
"/": "729c2dbce02449664debbe42c550f537",
"main.dart.js": "e4a227d8d6e143d7c4ce71559f1de975",
"manifest.json": "976841349ba856d0e3b27a2b31255481",
"version.json": "8057c5a53425874405ca0f278c6d4b7c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
