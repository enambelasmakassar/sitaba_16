/* ============================================================
   SITABA — Service Worker
   Gabungan dari 2 fungsi:
   1. PWA installable (versi asli, TANPA offline caching — perilaku
      app tetap sama seperti sebelumnya, semua request langsung ke
      jaringan).
   2. OneSignal Web Push — supaya notifikasi (pengumuman, obrolan,
      linimasa) bisa muncul walau aplikasi sedang tertutup.

   PENTING: baris importScripts di bawah HARUS berada di baris
   paling atas file ini (di luar semua event listener) — ini syarat
   dari OneSignal SDK.
   ============================================================ */

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

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
