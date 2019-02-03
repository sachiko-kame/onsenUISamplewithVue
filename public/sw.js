console.log('Hello from sw.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // リクエストされたすべての「.js」ファイルに一致するルートをWorkboxに登録することです
  workbox.routing.registerRoute(
    new RegExp('.*\.js'),

    // 可能であればJavaScriptファイルをネットワークから取得し、ネットワークに障害が発生した場合はキャッシュされたバージョンにフォールバックする必要がある場合は、「ネットワーク優先」戦略を使用してこれを実現できます。
    workbox.strategies.networkFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}