'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "08365586b43bfae76d62a80f2d25864f",
"assets/AssetManifest.bin.json": "1da047ef22ef2581ec18ed61618d184e",
"assets/assets/bkash.png": "75b656c49cd1b49a36dcb8ccc9c9d3ae",
"assets/assets/fonts/Inter/Inter_18pt-Black.ttf": "b797a429ef21b9b7d44b96038cdb10f2",
"assets/assets/fonts/Inter/Inter_18pt-BlackItalic.ttf": "6a6d7edd78447c5edcb33570ce97efe8",
"assets/assets/fonts/Inter/Inter_18pt-Bold.ttf": "f77ce9588dccbc52fdbf0b79f0d63714",
"assets/assets/fonts/Inter/Inter_18pt-BoldItalic.ttf": "da935c5b19ddded26aab2c880d835a8e",
"assets/assets/fonts/Inter/Inter_18pt-ExtraBold.ttf": "a6ed481bff60bc9270904d214947ab13",
"assets/assets/fonts/Inter/Inter_18pt-ExtraBoldItalic.ttf": "b03bfa9ceab3df1f81834d0523331c30",
"assets/assets/fonts/Inter/Inter_18pt-ExtraLight.ttf": "2c6c78d98816958b53fea58451f921d3",
"assets/assets/fonts/Inter/Inter_18pt-ExtraLightItalic.ttf": "24df6449633144fa3f4258c775dd67c5",
"assets/assets/fonts/Inter/Inter_18pt-Italic.ttf": "ab4004692577ac82604c777fa83da556",
"assets/assets/fonts/Inter/Inter_18pt-Light.ttf": "dfaec8b8820224135d07f1b409ceb214",
"assets/assets/fonts/Inter/Inter_18pt-LightItalic.ttf": "6eb3a2d2c6f095080ac034867886d0bf",
"assets/assets/fonts/Inter/Inter_18pt-Medium.ttf": "8540f35bf8acd509b9ce356f1111e983",
"assets/assets/fonts/Inter/Inter_18pt-MediumItalic.ttf": "c64a8c393f4d6ffd87f80723727b7f2c",
"assets/assets/fonts/Inter/Inter_18pt-Regular.ttf": "37dcabff629c3690303739be2e0b3524",
"assets/assets/fonts/Inter/Inter_18pt-SemiBold.ttf": "e5532d993e2de30fa92422df0a8849dd",
"assets/assets/fonts/Inter/Inter_18pt-SemiBoldItalic.ttf": "0f93bef7d8e8ea0612ba37a71efcccff",
"assets/assets/fonts/Inter/Inter_18pt-Thin.ttf": "6f2d2f41f504aee66da88684f15d7e1d",
"assets/assets/fonts/Inter/Inter_18pt-ThinItalic.ttf": "95d83862ccec5b0d0487f243e34fcc61",
"assets/assets/fonts/Manrope/Manrope-Bold.ttf": "8e8fe178c0f147b91ed2a2b3097ad8a4",
"assets/assets/fonts/Manrope/Manrope-ExtraLight.ttf": "ec4a6e976cec7c2fa377e9f24e292338",
"assets/assets/fonts/Manrope/Manrope-Light.ttf": "7c8bdfd65f2d0d081069e438f953359f",
"assets/assets/fonts/Manrope/Manrope-Medium.ttf": "de7b3026c153d63d5732582887fecbf4",
"assets/assets/fonts/Manrope/Manrope-Regular.ttf": "8ca1a84037fdb644723129315c390ad9",
"assets/assets/fonts/Manrope/Manrope-SemiBold.ttf": "80cb1b1a8ba262608706cb7f2b017835",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/assets/logo.png": "b641f15e0a616202d90706b527c29559",
"assets/assets/logo_mini.png": "1c985ca3207b5930f14a745ec70f0945",
"assets/assets/svgs/accounting_feature.svg": "ab8b4bd07d111315134372ded77df720",
"assets/assets/svgs/barcode_feature.svg": "64dcf36d88cc7943c1f8fbd7b00503e6",
"assets/assets/svgs/cloud_sync.svg": "7be172f308d046687954c45ecab1ebdd",
"assets/assets/svgs/crm_feature.svg": "fa5a27004212edf00c8d745dbb5f2502",
"assets/assets/svgs/hero_illustration.svg": "de171e20d81601004d7f639b6c4a460d",
"assets/assets/svgs/inventory_feature.svg": "84f1051f8e464e007224922e511b7c0d",
"assets/assets/svgs/pos_feature.svg": "cf2561ae10db17b7a1ee422acc6b8024",
"assets/assets/svgs/reports_feature.svg": "8aac16654addcb3e2ce4c4f4c559543b",
"assets/FontManifest.json": "3f447c1049188f286d758c11c3614144",
"assets/fonts/MaterialIcons-Regular.otf": "053bb0ad3f8861cda0e160c91e4cd5d5",
"assets/NOTICES": "6a86f639d9fc69e26339eaa39271a85d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"browserconfig.xml": "6a2c2f2feb4aeb60c88674c0e2845f38",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "1c985ca3207b5930f14a745ec70f0945",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4facc6816d91dfa954363e9db12e86ca",
"icons/Icon-192.png": "552964711e85e49898985bbda93335de",
"icons/Icon-512.png": "1a48473cf12eb95ba98625aee095ab1a",
"icons/Icon-maskable-192.png": "552964711e85e49898985bbda93335de",
"icons/Icon-maskable-512.png": "1a48473cf12eb95ba98625aee095ab1a",
"index.html": "e4065fa594c19595612e1aaf23aae4aa",
"/": "e4065fa594c19595612e1aaf23aae4aa",
"main.dart.js": "a032b247e3552fbb24b4eeb84a281fb2",
"manifest.json": "8929a9abb8481090bba94be0e4677972",
"robots.txt": "c4956a5cb1b859ea54ef79327b7e8ad1",
"sitemap.xml": "a8e1dbbcaebf1d3d4fedf2a5de7155e7",
"version.json": "101c4dcfa9ebc0c1eef3c31d31963664"};
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
