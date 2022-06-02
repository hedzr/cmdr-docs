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
    "revision": "77b785e87db9df67fd844e02c84f9832"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.7da1cc89.css",
    "revision": "5765401136856eca94ea981c1b5abbc4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.65f5a673.js",
    "revision": "0f9e67aef3756ae6878f1c41ab14ebb5"
  },
  {
    "url": "assets/js/11.3e1b0131.js",
    "revision": "392e76799b76fcdfb5c5aa9e4b9c58db"
  },
  {
    "url": "assets/js/12.fcbdcb2a.js",
    "revision": "c00f7ea7387de7bf7d718bba1169a347"
  },
  {
    "url": "assets/js/13.c595cc64.js",
    "revision": "49b0e71a168170f2cdcd644aeb6c5d79"
  },
  {
    "url": "assets/js/14.6a216c94.js",
    "revision": "8b079f178d84c8996b9b2da55e45ccd5"
  },
  {
    "url": "assets/js/15.5dfddef0.js",
    "revision": "638e4504ea8a91494350569ed923fab5"
  },
  {
    "url": "assets/js/16.ccca98cf.js",
    "revision": "fbdeb01129b5a618846fea6b63875ffc"
  },
  {
    "url": "assets/js/17.211a7bb1.js",
    "revision": "f52163fde94fa94b6afbb32bf9f75f74"
  },
  {
    "url": "assets/js/18.3128da5c.js",
    "revision": "5dd9dd9df4ec7710ad57a553fd83cc68"
  },
  {
    "url": "assets/js/19.37d1dd47.js",
    "revision": "5f3af79d378d26031e91ffa93f8cd38a"
  },
  {
    "url": "assets/js/20.f57ad0f9.js",
    "revision": "52508f7eac86f6d5bee8ffb5968d7d93"
  },
  {
    "url": "assets/js/21.3cd02c3d.js",
    "revision": "b7513dab2fd18bf99013fbf4192406f1"
  },
  {
    "url": "assets/js/22.907988ae.js",
    "revision": "be15940ffcbfbd2e7ff88b76437586e1"
  },
  {
    "url": "assets/js/23.ea7c70cf.js",
    "revision": "bef3118f9c9483cd55aaff3068b4b332"
  },
  {
    "url": "assets/js/24.a0c5b934.js",
    "revision": "0111093863b732e1aa59ec484dfa0dbf"
  },
  {
    "url": "assets/js/25.3b400123.js",
    "revision": "f0d8d0220a956ab9dac88082c07b664c"
  },
  {
    "url": "assets/js/26.cc151a5b.js",
    "revision": "b25dd84f98fc4ef65fb0cb66137a0237"
  },
  {
    "url": "assets/js/27.10a1f03f.js",
    "revision": "9c8c83501d7b9277d7f0fd4d7a10dea5"
  },
  {
    "url": "assets/js/28.682647fa.js",
    "revision": "5f7f41a7764a8cc27432ea17d15d8e16"
  },
  {
    "url": "assets/js/29.0ff844ab.js",
    "revision": "33dc0cee6e7ca046af3415308569d22c"
  },
  {
    "url": "assets/js/30.23906a8d.js",
    "revision": "364db516bf9564bfdfe856a12cb2a36e"
  },
  {
    "url": "assets/js/31.71a153cb.js",
    "revision": "4222b8c61b018d0120cdb6b5ba8e5432"
  },
  {
    "url": "assets/js/32.5b5765b6.js",
    "revision": "bbd77d03cc9c7e2c7dbd4c21f4ef3e58"
  },
  {
    "url": "assets/js/33.b9581dfd.js",
    "revision": "3cdb620710188fa56b24398e722dbbf1"
  },
  {
    "url": "assets/js/34.d6c7acdc.js",
    "revision": "587cf1adae8b13f7caf90543f3d8ab6d"
  },
  {
    "url": "assets/js/35.4acd587d.js",
    "revision": "ef893cc6abe650ba629e6c56587a0a9e"
  },
  {
    "url": "assets/js/36.eb5e5557.js",
    "revision": "856576b2809787d316df46e8ed29bd92"
  },
  {
    "url": "assets/js/37.900268b3.js",
    "revision": "8f86a7391dad000c4b0cee0638823fe3"
  },
  {
    "url": "assets/js/38.969bbc3d.js",
    "revision": "bbab7dc7fd851a0ace414e166e9cd559"
  },
  {
    "url": "assets/js/39.9fd191d2.js",
    "revision": "a304f0d573b0a8f6ca27b4019311cd12"
  },
  {
    "url": "assets/js/4.2c4c0643.js",
    "revision": "579addab336e22c950c8616702411860"
  },
  {
    "url": "assets/js/40.91f3de4a.js",
    "revision": "91c2e2f3ab4f2f15b25d2694b7f7007f"
  },
  {
    "url": "assets/js/41.02781c1f.js",
    "revision": "709d0c870d5e11d18dfa3f6143dee81f"
  },
  {
    "url": "assets/js/42.2dbc60fa.js",
    "revision": "93a287c6837abaf7bd29ca0ab3d79e05"
  },
  {
    "url": "assets/js/43.f752084e.js",
    "revision": "a85869f29a661e70c42a021eec7d331e"
  },
  {
    "url": "assets/js/44.d1490dc9.js",
    "revision": "746ded310df8b0f995362347bb3c342f"
  },
  {
    "url": "assets/js/45.039dda93.js",
    "revision": "e81c6281a0b0ee472c614b3120d34c34"
  },
  {
    "url": "assets/js/46.9a3c7395.js",
    "revision": "57c3f74e44290600112f87ada25125a6"
  },
  {
    "url": "assets/js/47.c0cd39bd.js",
    "revision": "f24a608f1396ba3f36b383a290b3139e"
  },
  {
    "url": "assets/js/48.98e80010.js",
    "revision": "e2ca3e9f04f678880fcce929bd677369"
  },
  {
    "url": "assets/js/49.dcfbc956.js",
    "revision": "ea2ea08423c183467d2fb0f6974a148c"
  },
  {
    "url": "assets/js/5.320525b1.js",
    "revision": "daceb234eb0b285a72df810d150a2b34"
  },
  {
    "url": "assets/js/6.70a7c416.js",
    "revision": "bb1905a5365ab9192f661e1899437cd0"
  },
  {
    "url": "assets/js/7.baab6fc5.js",
    "revision": "bc15685f050f960d8af0fb0a2bf50a00"
  },
  {
    "url": "assets/js/8.e43a741a.js",
    "revision": "cce07b8cfab501730290ea23d6b62259"
  },
  {
    "url": "assets/js/9.e11d0c1d.js",
    "revision": "88b62fb1f07149dafbc76b6ba7a213b4"
  },
  {
    "url": "assets/js/app.a63f1c3b.js",
    "revision": "1e01c434ff79297d3ca97e4552c40760"
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
    "revision": "31b3489159b7c3947515b782ffb6c39e"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "d87d470506083fc0d22041e12e2b4dac"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "cd4b167b75c72b3eeccab604340253b7"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "38dc12a738b4bdfbf9ff263013ac556f"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "75700baacbdd823988ee9c8b76ac6619"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "3a0a906c2addf4c50304591cb996988a"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "b1d0b04c7d45c5aa9f94075a2f24b06e"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "87f838b8ebd20db039b6ee99a71f1569"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "43d0ae4ed60818a2ac0144f9d73478db"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "59fcca50123516951760a258bc41d94e"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "46fcb2bf251334c40de19e6c4f45ea91"
  },
  {
    "url": "cmdr/index.html",
    "revision": "1f6c65165518123a4780185b51af709f"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "87a9542d9aa94325935d2ac84869bd5a"
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
    "revision": "7d490035275cda45176ba4ed4299a058"
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
    "revision": "792970f3dd873a7679567d99410a4f34"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "d12b3efc8759bd196e5b8e84e7db651a"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "3be1805f650fd69fb85448c4f54e9126"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "10d0c19d70ddf28fa8fb378f334ee25c"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "a7bda5b4953230a9aca4dee969d4d934"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "b32c8a7938c964d81cb5ccbc718cde6c"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "48b41697ec582678ff8050d1f7791632"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "4e2003463bf6873ef4f754238f7e7fbc"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "061e769a1623427cf9c194aa9001e826"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "eec7e750f4a05602de3a254996036dc0"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "345e137daa8d2240b95aa2dab28b8552"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "9df25e40275f7f6da2c46fca02b009c8"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "1fb7e0755d387ade85d200ccf34a5f2a"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "a34e10fe28284a5d61e28fd0c83f5f47"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "707168ee199d10b1675bfe49eb25f373"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "a5c687f635510b066bd008336c79e0de"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "e696999c8d3848d6afcd6371fc3f4414"
  },
  {
    "url": "zh/index.html",
    "revision": "ae5c9b40787fa438be60c4461ee0fc23"
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
