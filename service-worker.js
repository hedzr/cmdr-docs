/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d84340be684076843fc6cf055c9a6646"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.6d9cbb45.css",
    "revision": "ffdebb4712dd7dd14fe0d0f3ff370bcd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b65fca4a.js",
    "revision": "da317260f4a4093fd2239603e19612f3"
  },
  {
    "url": "assets/js/11.e0222314.js",
    "revision": "392e76799b76fcdfb5c5aa9e4b9c58db"
  },
  {
    "url": "assets/js/12.d696f7dd.js",
    "revision": "922c4ccbe406539221471f1de3b6b446"
  },
  {
    "url": "assets/js/13.a849461f.js",
    "revision": "b96292b79411869b45bab167fbd539f8"
  },
  {
    "url": "assets/js/14.b3347c0f.js",
    "revision": "1870ea34a827a482dd923299159a0fad"
  },
  {
    "url": "assets/js/15.5b4fb504.js",
    "revision": "e9bdc5ffef395efa4f121d7babdc0c15"
  },
  {
    "url": "assets/js/16.0d0f11e7.js",
    "revision": "0c7168d9160ff00ebd85e7dd1658be5e"
  },
  {
    "url": "assets/js/17.1a7903d0.js",
    "revision": "6374c06004d539d050fb7c18473ba133"
  },
  {
    "url": "assets/js/18.f8eaadca.js",
    "revision": "85fc28bc85ae34bc2f7f3a3885981059"
  },
  {
    "url": "assets/js/19.ff3f52b4.js",
    "revision": "0a8accb0135df3cff0bb8048fe5c2ed1"
  },
  {
    "url": "assets/js/20.77ac0de6.js",
    "revision": "af93e3f30a71b9b1faf0484d2709e84a"
  },
  {
    "url": "assets/js/21.4ca24454.js",
    "revision": "779b1e9fe76b6f6fc36bb251dbd029fd"
  },
  {
    "url": "assets/js/22.48268aac.js",
    "revision": "5eecc4c9cec476fe240ce1ea7a3b813d"
  },
  {
    "url": "assets/js/23.bfee0adc.js",
    "revision": "0f312ce5d6bdf3915db254dd007b944b"
  },
  {
    "url": "assets/js/24.0033170c.js",
    "revision": "c5d6c220beb8a323b78323f03a4c9933"
  },
  {
    "url": "assets/js/25.0c2c4c75.js",
    "revision": "b9c872e46e63a8c21fca7b02d9d9e9bd"
  },
  {
    "url": "assets/js/26.1cc79d3f.js",
    "revision": "abb2b50b0dc631556f768478d136eb4b"
  },
  {
    "url": "assets/js/27.6bda76eb.js",
    "revision": "fb2acfc4fabc055db874f802c6c1fc98"
  },
  {
    "url": "assets/js/28.ff0e5477.js",
    "revision": "6e9e459cdbb03728f8e7a0cf35c25c12"
  },
  {
    "url": "assets/js/29.90bb2b1f.js",
    "revision": "4bf32924b7f37b7fa68c58aaac643eb2"
  },
  {
    "url": "assets/js/30.b188d368.js",
    "revision": "1df0fce76ff787f6f91d79c511d778fa"
  },
  {
    "url": "assets/js/31.4e1e4d6d.js",
    "revision": "c437a9d4ccd1eac224a97798e29119f0"
  },
  {
    "url": "assets/js/32.c67f3db7.js",
    "revision": "540a9bd4379f0c4219580c8c22c3b61c"
  },
  {
    "url": "assets/js/33.3f65c253.js",
    "revision": "e90f218d7ad8d581978c29e127a06737"
  },
  {
    "url": "assets/js/34.6be6b774.js",
    "revision": "4590f8b84311a9ed55e335f8e3d1e736"
  },
  {
    "url": "assets/js/35.03026c44.js",
    "revision": "ef893cc6abe650ba629e6c56587a0a9e"
  },
  {
    "url": "assets/js/36.e16aebcd.js",
    "revision": "a0845cf152fccbdafc6224264ff8df38"
  },
  {
    "url": "assets/js/37.26977b08.js",
    "revision": "d853ccf5cee511cdc65d51a388c7a331"
  },
  {
    "url": "assets/js/38.289f0626.js",
    "revision": "abdd3f1f5446c775f33ccaa44d1c882b"
  },
  {
    "url": "assets/js/39.0c03e38f.js",
    "revision": "11c04325586c12f0fde4af803cc63fbf"
  },
  {
    "url": "assets/js/4.6f7cccbc.js",
    "revision": "4bccd09bfdd89ae9f33d6af0c5dd39a5"
  },
  {
    "url": "assets/js/40.8e0dffb3.js",
    "revision": "c01443a85f8ed9ba8b479d9d42194c40"
  },
  {
    "url": "assets/js/41.077eece4.js",
    "revision": "9d7815e9e0dbd2f5056ad3b647b7ca69"
  },
  {
    "url": "assets/js/42.a57d7857.js",
    "revision": "45070b196f7f3024e9ed307d1b6a3d6c"
  },
  {
    "url": "assets/js/43.2932c014.js",
    "revision": "586f228b92c179243b18bd3c4f75bb4d"
  },
  {
    "url": "assets/js/44.46fb9813.js",
    "revision": "44f66ae42c9b0b59147db81de01473cb"
  },
  {
    "url": "assets/js/45.4e10bfa1.js",
    "revision": "f94d888b996b431a3a7abcc7cca08810"
  },
  {
    "url": "assets/js/46.8d89a081.js",
    "revision": "8ebe4a1e654677d9466f06b09e6349e9"
  },
  {
    "url": "assets/js/47.4db6237a.js",
    "revision": "e3fa89c6d3a7127cc7d8b6c0a204ac3b"
  },
  {
    "url": "assets/js/48.b1f2cf19.js",
    "revision": "25841f37ddb4a98a9ffe0ab84ede2318"
  },
  {
    "url": "assets/js/49.dcfbc956.js",
    "revision": "ea2ea08423c183467d2fb0f6974a148c"
  },
  {
    "url": "assets/js/5.97911acc.js",
    "revision": "967e97a2593b9aa930ca4b7bd7da2131"
  },
  {
    "url": "assets/js/6.d38dd923.js",
    "revision": "e8edb2abb1a34cce5358ce272fa609f8"
  },
  {
    "url": "assets/js/7.f3ddcdca.js",
    "revision": "fcf57db4a6f6c0d444814ee2e64a325b"
  },
  {
    "url": "assets/js/8.4991cec7.js",
    "revision": "6703a708ab262c4d55799c61e5e71fef"
  },
  {
    "url": "assets/js/9.3bc42e1e.js",
    "revision": "c572a6c134c7d10f16750244b81e2821"
  },
  {
    "url": "assets/js/app.6a4f909d.js",
    "revision": "e4d158c728aced8214d6e57255e4ab44"
  },
  {
    "url": "assets/js/vendors~flowchart.0fa7e353.js",
    "revision": "de7fc2647235fd26562b7be99b29f4fa"
  },
  {
    "url": "assets/js/vendors~notification.a9caabb0.js",
    "revision": "572675a5d71ac99ae57daae40bc30654"
  },
  {
    "url": "cmdr/faq.html",
    "revision": "0307c80688cf2a7fcf576c24126b26ea"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "2c855e1bc4c2211585efa9bac7ed7b60"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "47d0c98919e574f02223378e9b85a4bc"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "9f7ad93fa4bc1080473ae4585fb4ba49"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "975e3b8bf24bcd6c25f08d0c5aaf2236"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "e12d689ce3a59aef16749cf69c4c19b4"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "a71b881b017846ab8b3052a89e857071"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "fdedd270114ad3ba59bfe31b5f28286c"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "6761c1a2ccefc552e4be804ac543939d"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "0da64606e4db6bdadac5c21fec3edfbb"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "d9bd499e12aa9fd2d07d7fec3f0086f4"
  },
  {
    "url": "cmdr/index.html",
    "revision": "0deaf4674557c53474cc8652890fb9d1"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "d72454730b852cec4b5195a4ca27e5d1"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a01076c0af57fb667bbbd57825f312a0"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "140057bc485c25b6cbb463f91a556107"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d76d18e659da492eaa827df545423453"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "233f8f1f547c8e48da48683636facc0b"
  },
  {
    "url": "icons/logo.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "eb35e311a2d3a47b63afc5f87f078d57"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/cmdr/faq.html",
    "revision": "8bf8770924780f5edd7b676f162fa0f4"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "3b587f1ca1c57088f2cab84cecb109c7"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "d2c3c2d5b3f81a6c1a086202fe401f47"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "88f011569599c982bfb5748c0a343f07"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "48dfd5e07617d290b9b20745b9e4a9eb"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "8421607f6cf636f4e927904dc7fe68b4"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "e5b506ba1f064aa2572a6ef433a05325"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "08dee709199624d2413a5af8f68eb68c"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "a4b0aa7357beacf63042fc2dc91c907e"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "c12b76d01fb835c071e62ca0b8755354"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "5326684b38df7433b89882202961154d"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "a975e05aacebadbdbcf9d41ac0ceef39"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "5f825074279d6a64e8b849b078b93653"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "fe5a6c47c3e8a799e303770edc24c831"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "44baf743abc320a280d31880b26abcf3"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "2de25ca682d9b55d64baa6614938a20b"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "f07eebc44700ede0b085cfa134de8b3d"
  },
  {
    "url": "zh/index.html",
    "revision": "671e33c1cd2f444a74ef273c13a3babe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
