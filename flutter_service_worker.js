'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5bc9f7a82056deab9531ff096ae5998d",
"assets/AssetManifest.bin.json": "50414753efd52891c4bf7e7ca53ee613",
"assets/assets/bkash.png": "75b656c49cd1b49a36dcb8ccc9c9d3ae",
"assets/assets/fonts/Inter/Inter_18pt-Bold.ttf": "4899795cdb43cdb42f0e62e5aa3463c0",
"assets/assets/fonts/Inter/Inter_18pt-Medium.ttf": "d79b1804e975dadd265c908da2788c25",
"assets/assets/fonts/Inter/Inter_18pt-Regular.ttf": "657904988ec1922b88772ac1ac7257f0",
"assets/assets/fonts/Inter/Inter_18pt-SemiBold.ttf": "0ea0c430f0266636f0e34a2e3070319f",
"assets/assets/fonts/Manrope/Manrope-Bold.ttf": "816ad504af56b6d928553c0421080627",
"assets/assets/fonts/Manrope/Manrope-Medium.ttf": "86b1c25fec125d50189374b1426fa9be",
"assets/assets/fonts/Manrope/Manrope-Regular.ttf": "5638fd2d8cbf29afd6e026b3dda00df2",
"assets/assets/fonts/Manrope/Manrope-SemiBold.ttf": "828abd79ab160209562005be017b774f",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf": "2596e1043a3b619ca5d301b7b4f1b8d3",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf": "00466a09ff00ff0f6ea2d010cff06361",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf": "8c2f4d22a5a7a0bbe36af4393a6f5a28",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf": "d97ce9fb096160275aafd5877df419b3",
"assets/assets/logo.png": "b641f15e0a616202d90706b527c29559",
"assets/assets/logo_mini.png": "1c985ca3207b5930f14a745ec70f0945",
"assets/FontManifest.json": "a9a43e1eff58d50f412cf6b57c2b7e9f",
"assets/fonts/MaterialIcons-Regular.otf": "72fd36d9c7eccaa762617147f6b9facb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"browserconfig.xml": "6a2c2f2feb4aeb60c88674c0e2845f38",
"favicon.png": "1c985ca3207b5930f14a745ec70f0945",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3373e27edce31d7d19a1aba6c8f2487b",
"icons/Icon-192.png": "552964711e85e49898985bbda93335de",
"icons/Icon-512.png": "1a48473cf12eb95ba98625aee095ab1a",
"icons/Icon-maskable-192.png": "552964711e85e49898985bbda93335de",
"icons/Icon-maskable-512.png": "1a48473cf12eb95ba98625aee095ab1a",
"main.dart.js": "dc3571f072684b8531f37706a170fc82",
"main.dart.mjs": "de783ccf24c349d9410750d17d6baed2",
"main.dart.wasm": "0b460b228f96cbfabe754da227d5efa9",
"manifest.json": "8929a9abb8481090bba94be0e4677972",
"preview.html": "d95ae8ca1c8a84c30acc19a82a38b904",
"robots.txt": "fb809fc41ea2d382100a36695715b022",
"sitemap.xml": "53c389bc59057dccc8462029c9a9da63",
"version.json": "101c4dcfa9ebc0c1eef3c31d31963664"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
  // Patched by tool/postbuild_web.ps1: rely on lazy cache population in
  // the fetch handler instead of bulk-downloading every resource.
  return Promise.resolve();
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
