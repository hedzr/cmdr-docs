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
    "revision": "2f27d5214175866ca84e87eaca3a0e0a"
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
    "url": "assets/js/app.45615248.js",
    "revision": "9e77db2c8061a4b2451533dc67786f6b"
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
    "revision": "f173820fa5985ac0333fc53a2e2afa85"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "3f423f9bb5efbc88accee325344da200"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "0832ad481a84b0506f636a1956bc849d"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "424206f558db4b79f8db47ac76a2e608"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "a2fb5a6ae25ad152917e4601adda53f3"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "ced6fbad5c8d786e48be53cbe2df97a5"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "ab901c605613954ae11ae5cab3144bc8"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "25a8cf4164f79b33c5bba351ddbb0eb1"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "3f640b2dc1d3a4ee3503c1b16fbb4854"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "88cad2c4e37c9454bd6d2bd0e1d06ce1"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "5493b45804cb8ca72a1f505fa4406aa3"
  },
  {
    "url": "cmdr/index.html",
    "revision": "81a475af2490ae938a4a0ec1f5b74e8d"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "49615f1cfd6a98510722f4cc4b644376"
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
    "revision": "14367f0b76b1a47b6a919ba8b8861e71"
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
    "revision": "d3c2d4c328b6ae37d2402a441a307ce6"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "58261a67458b4b3c0af39fdc42491161"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "b0bb81874679a8c3253b8db7a1f6be34"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "2b6339aae25b88aa0395007f39de17e4"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "00e307dea575b3a2d2f309366ecdb566"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "217cc5d513a9e389671b1a03d8c0be9c"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "785a72c445b36fece5dcb45ddea703c5"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "1cafe38fe9efa370e8555660c2c639bc"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "88a08219413f7d26d0071a456efc579c"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "047e11550b2d6d0d77f123bc71777425"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "6753c66ce6fbf4a0162cd0174bea4dcb"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "4664eac4e3878c5de5033cc22ec38cf2"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "a02e5a0f28eaa5cbc316f94b4b32786f"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "d10436b0351cb278c783fe63e3d745db"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "e81f36411a9b047651a63bc898925467"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "828c2ade6bc0df6fbf1108885de8935c"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "4dd4e7bcb04fbfa231f2e472a407ba53"
  },
  {
    "url": "zh/index.html",
    "revision": "8fd674519a4279832eb7c41a28611e54"
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
