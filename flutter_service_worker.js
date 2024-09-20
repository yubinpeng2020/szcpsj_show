'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ws_logo.png": "fdc36e85902538f0cbd2148e5ba12b83",
"version.json": "5939b3fe96b7fef0c834354123d86499",
"main.dart.js_7.part.js": "d44086f3eef978e9af9f85bca2a41d8d",
"main.dart.js_6.part.js": "018ff3c3b2282ddc98f9de6c85b3309f",
"index.html": "282d959cf6318b95eece3cadefb84003",
"/": "282d959cf6318b95eece3cadefb84003",
"main.dart.js_4.part.js": "852a028fc2972a36195f0a3939146c2c",
"main.dart.js": "5031e0b7c3ba22c8fe952537f89dda63",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"main.dart.js_5.part.js": "8800fe0cd841dece851b5b87577000de",
"icons/ws_icon.png": "b64a3837a2597e1b32adb37c79ddf6ae",
"manifest.json": "2aeb825b406eb7ed9a9e476e6ac59f0c",
"main.dart.js_1.part.js": "3dbc9b5205072046baccd36bf48fce87",
"main.dart.js_3.part.js": "abac0dad6792db22b00c36916c0d10ae",
"assets/AssetManifest.json": "003f729e63a7496b39acb3a10af3bfec",
"assets/NOTICES": "219684374de8275499b43c718d279729",
"assets/FontManifest.json": "3bfed6985fc9643a95fabc3934eb3f26",
"assets/AssetManifest.bin.json": "c3617a245978908833907b51e28e892c",
"assets/packages/flutter_gallery_assets/fonts/GalleryIcons.ttf": "5750220c0cbb3762ca4f060af8efc2ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_sound_web/howler/howler.js": "2bba823e6b4d71ea019d81d384672823",
"assets/packages/flutter_sound_web/src/flutter_sound_recorder.js": "f7ac74c4e0fd5cd472d86c3fe93883fc",
"assets/packages/flutter_sound_web/src/flutter_sound_player.js": "6bf84579813fd481ec5e24e73927500d",
"assets/packages/flutter_sound_web/src/flutter_sound.js": "aecd83c80bf4faace0bcea4cd47ab307",
"assets/packages/ws_szcpsj/fonts/iconfont.json": "382d407fb41ff18c2c3c81c3c38d39fe",
"assets/packages/ws_szcpsj/fonts/iconfont.ttf": "7d9d5388ac151b9cb63fca515a160a02",
"assets/packages/ws_szcpsj/assets/example/first/person_msg_column.png": "d8a06d08c5b46fb1310272280e9a0828",
"assets/packages/ws_szcpsj/assets/example/first/name_text.png": "d827fcb9c1cd1b1bb8d9c4a4f131f95f",
"assets/packages/ws_szcpsj/assets/example/first/academy_major_row.png": "677308e2cc9aca07aa289d5efd025da2",
"assets/packages/ws_szcpsj/assets/example/first/major_border.png": "5eeeb157611de58b9606b214e29ed9df",
"assets/packages/ws_szcpsj/assets/example/first/id_photo_image.jpg": "b9450afc75dd4b925bfa30aac873bd32",
"assets/packages/ws_szcpsj/assets/example/first/school_icon.png": "0b4073f2cd3d6eac4b5054939f912b66",
"assets/packages/ws_szcpsj/assets/example/first/id_photo_stack.png": "062d65547717cbfb6ccf4208fa151616",
"assets/packages/ws_szcpsj/assets/example/first/salary_expectation_radio.gif": "1cae249c1507e7871775e8e093e5c3b7",
"assets/packages/ws_szcpsj/assets/example/first/employment_tendency_checkbox.gif": "e0c0b51deb01683e90826314b39219da",
"assets/packages/ws_szcpsj/assets/example/first/person_msg_card.png": "0540c1df2f765536d39d19ef37e679fd",
"assets/packages/ws_szcpsj/assets/logo/ws_logo.png": "f3bcc37d8fa3a69584018b928c9344f2",
"assets/packages/ws_szcpsj/assets/logo/ws_logo_color.png": "f3bcc37d8fa3a69584018b928c9344f2",
"assets/packages/ws_szcpsj/assets/material/qqtouxiang.jpeg": "5babd21e4b95279cd800358a52bb78e0",
"assets/packages/ws_szcpsj/assets/material/id_photo.jpg": "b9450afc75dd4b925bfa30aac873bd32",
"assets/packages/ws_szcpsj/assets/material/weixin_gzh.jpg": "f8e3406ad35f6563bd47e5d8fa47120d",
"assets/packages/ws_szcpsj/assets/material/wechat_gzh_qrcode.jpg": "55afc653bd1c214561593f8d83ef1a2a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "e77cd7d54e8b2ab8e2ddadb0e1c0949a",
"assets/fonts/MaterialIcons-Regular.otf": "c88e67c7f24034fb854e1de9a9d676e2",
"assets/assets/mp3/song1.mp3": "92e3b95fbff6b9139cc40bbfc313c92d",
"main.dart.js_2.part.js": "00114f5a0d8e65b29ce5eff256e1406d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
