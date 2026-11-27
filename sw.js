// Mochi 字卡 PWA service worker
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  // 纯透传：满足 PWA 可安装条件，不缓存大文件（避免占存储、防旧版本残留）
});
