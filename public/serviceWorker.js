/* eslint-disable no-restricted-globals */
const CACHE_ELEMENTS = ["./"];

const CACHE_NAME = "v1_static_cache_weather_app";
//*****************************       Installing         ************************************************** */
const addResourcesToCache = async () => {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CACHE_ELEMENTS);
  } catch (error) {
    console.log(error);
  }
};

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(addResourcesToCache());
});

//*****************************       Activate                 ***************************************** */
const deleteCache = async key => await caches.delete(key);
const deleteOldCaches = async () => {
  const cacheKeepList = CACHE_NAME;
  const keys = await caches.keys();
  const cachesToDelete = keys.filter(key => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

//Preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("activate", e => {
  e.waitUntil(() => {
    enableNavigationPreload();
    deleteOldCaches();
  });
});

//********************************     Fetching             ********************************************** */
const putInCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
};

const cacheFirst = async ({ request, fallbackUrl }) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  try {
    const responseFromNetwork = await fetch(request);
    if (/^https?:$/i.test(new URL(request.url).protocol))
      putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }

    return new Response("Network error Happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

self.addEventListener("fetch", e => {
  e.respondWith(
    cacheFirst({
      request: e.request,
      fallbackUrl: "../src/img/Lovepik_com-400217866-404-page-error.png",
    })
  );
});
