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
    "revision": "5d5efa1fbcf85eda77feb556a3a76452"
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
    "url": "assets/js/24.33d3cb7a.js",
    "revision": "4ab1e6b4fd3b45741fdda83fe105d08d"
  },
  {
    "url": "assets/js/25.0c2c4c75.js",
    "revision": "b9c872e46e63a8c21fca7b02d9d9e9bd"
  },
  {
    "url": "assets/js/26.e54ab7af.js",
    "revision": "2e73a59832dd169f3f6349936de9822f"
  },
  {
    "url": "assets/js/27.23d3d067.js",
    "revision": "f338c5b6a5882ddeb762078a945bfd72"
  },
  {
    "url": "assets/js/28.0b3e267a.js",
    "revision": "3555713accf145b898855a7737e513c3"
  },
  {
    "url": "assets/js/29.536b12ae.js",
    "revision": "f4ec11501d74cab0e72e7a42e04b1a12"
  },
  {
    "url": "assets/js/30.20e8fcfe.js",
    "revision": "a08347cc5e679d535164f8034cd36dd2"
  },
  {
    "url": "assets/js/31.dc9139bf.js",
    "revision": "4ecfce830aab0945b786dee04287b65a"
  },
  {
    "url": "assets/js/32.f2cdf143.js",
    "revision": "d00407240c208080946153667dcc37a6"
  },
  {
    "url": "assets/js/33.afee984e.js",
    "revision": "59a787b07d867b3c0f614ec89a5720f3"
  },
  {
    "url": "assets/js/34.50a0bb90.js",
    "revision": "7cff61185d8d92abbbe523630ebee01f"
  },
  {
    "url": "assets/js/35.8aa8f9d6.js",
    "revision": "67fe8eff60e7ff751cddbb72464605de"
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
    "url": "assets/js/38.df96d754.js",
    "revision": "d237e618a9e4b123fa1bcdfb162bc02c"
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
    "url": "assets/js/app.3f088985.js",
    "revision": "e6d39d1336e695b34cca7e199ec857a0"
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
    "revision": "6beb19ea5e3679bf8293ac343008500d"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "7113c4f1e86efceaae59974895705242"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "480d4f3e0182434407bfc992546a5b7b"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "9213e39c646f1f0a00615b8a41c2c090"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "781892b35c77b348bca3147f2b30e261"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "427be316b0a6976d6c581fb0759b6ed4"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "f3ac313a8bd7b7676f6bd4ef373f2e37"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "7ff296b03cd1ec03b050d2e310f3eb61"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "f303f5250ec6496b43920715623d3c8a"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "4a049d6e0cfd4ab706eaa9ef3dfc7ad2"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "7460bfcbba71b0b7889ce8aedee21d41"
  },
  {
    "url": "cmdr/index.html",
    "revision": "3d43bbfa9fe988a9b76602a3168bd41f"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "bf22764e80e083f948707b21acb6518e"
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
    "revision": "76c5c107004c53db8d9ecf54180a35ba"
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
    "revision": "3f3b4931a313899254a9003d59228726"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "9237dd2eb41fbf357415aa9a36ef319e"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "836886404b9ae5d7c2721b153d3a392e"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "f670575fc756c347421e8abdf7f22adf"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "55b91ddb50da662daaee6a59374a9e78"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "1c7fa1550e8ab4feb3aab7a3996c8945"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "4e1bcd3775225d0f1dd442178d4ed728"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "ddb299b2fa6b0dafa5c06f120aa6e0b8"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "40eb75efc20df73aacb8f120927769df"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "bedb289bd87665a3a77a9332efab2dc3"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "424bcd55f7d03c71421dca27c7a306cf"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "d2f13f719437017324e886038845ba59"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "e5e6f56c5059dac89936ad53eb47c873"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "8197818f1dc18a943b1ab68db3b81888"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "3e72bb6daf55b11e98b7cb7532c1681a"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "dfbebb77942934d70fcfdebc4009fbae"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "81e59fa646daa2b250d645883059ef15"
  },
  {
    "url": "zh/index.html",
    "revision": "0042bcb45039ac60db22d85ac29e3461"
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
