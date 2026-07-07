/* ============================================================
   SITABA — Service Worker (versi minimal, TANPA offline caching)
   Tujuan file ini cuma satu: memenuhi syarat "installable PWA"
   di Chrome/Android (harus ada service worker terdaftar + listener
   'fetch'). Belum melakukan caching apa pun, jadi semua request
   tetap langsung ke jaringan seperti biasa — perilaku app TIDAK
   berubah sama sekali dari sebelumnya.

   Kalau nanti mau nambah kemampuan offline (buka app tanpa
   internet), logic caching ditambahkan di sini belakangan.
   ============================================================ */

const SW_VERSION = 'sitaba-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Listener 'fetch' wajib ada (walau cuma passthrough) agar browser
// menganggap app ini sebagai PWA yang installable.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});