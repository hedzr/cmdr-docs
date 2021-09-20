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
    "revision": "49bb28ff8142792b3aa2b8909a327604"
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
    "url": "assets/js/17.6c4184b1.js",
    "revision": "e47e352dae784c9413de83de652c5ec2"
  },
  {
    "url": "assets/js/18.acad83ca.js",
    "revision": "97bc07eabdc7cd9f8f82a21e22eb83df"
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
    "url": "assets/js/21.f6814291.js",
    "revision": "958e18f83fba03623c74875ce15d5127"
  },
  {
    "url": "assets/js/22.fba2f863.js",
    "revision": "70c7722f58bdb6724e16ab68e4068e8f"
  },
  {
    "url": "assets/js/23.ea7c70cf.js",
    "revision": "bef3118f9c9483cd55aaff3068b4b332"
  },
  {
    "url": "assets/js/24.c76157d9.js",
    "revision": "4b3b35a9f6fa2148ad6862678ae3bfe5"
  },
  {
    "url": "assets/js/25.be979298.js",
    "revision": "f37eb0a2cc0c26b90cf63d849095694e"
  },
  {
    "url": "assets/js/26.cc151a5b.js",
    "revision": "b25dd84f98fc4ef65fb0cb66137a0237"
  },
  {
    "url": "assets/js/27.856770e3.js",
    "revision": "525504893a5c3789239f24cc1572927f"
  },
  {
    "url": "assets/js/28.5cd1e0af.js",
    "revision": "a58a12f848924f8168025914744e0c8d"
  },
  {
    "url": "assets/js/29.0ff844ab.js",
    "revision": "33dc0cee6e7ca046af3415308569d22c"
  },
  {
    "url": "assets/js/30.13370870.js",
    "revision": "8c9104d5930cec58351cd87fdbab58ed"
  },
  {
    "url": "assets/js/31.3aaf7844.js",
    "revision": "a427459e8952fafc5a830e913600297a"
  },
  {
    "url": "assets/js/32.5b5765b6.js",
    "revision": "bbd77d03cc9c7e2c7dbd4c21f4ef3e58"
  },
  {
    "url": "assets/js/33.5f45ec06.js",
    "revision": "6e2e90f04855c968d8ce638d82aaf655"
  },
  {
    "url": "assets/js/34.44a23835.js",
    "revision": "fb836911da49d0c8339f599bc27f837d"
  },
  {
    "url": "assets/js/35.4acd587d.js",
    "revision": "ef893cc6abe650ba629e6c56587a0a9e"
  },
  {
    "url": "assets/js/36.6fbc1c80.js",
    "revision": "84189b69e61b88b9637932973d135db1"
  },
  {
    "url": "assets/js/37.900268b3.js",
    "revision": "8f86a7391dad000c4b0cee0638823fe3"
  },
  {
    "url": "assets/js/38.f1d5ae76.js",
    "revision": "4c7220de5c4e4e75a19e519746f80731"
  },
  {
    "url": "assets/js/39.7792c179.js",
    "revision": "c13d2556625dfac6e28bdfa9711c2caa"
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
    "url": "assets/js/41.64b27989.js",
    "revision": "f43505ebddf0a677fec6f186a0250a7e"
  },
  {
    "url": "assets/js/42.47e23a4c.js",
    "revision": "67a034e58445b1b2af89c6725cd75ba4"
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
    "url": "assets/js/46.45876e35.js",
    "revision": "c1d0d5891c79dbd40d88cf51e4cc27c5"
  },
  {
    "url": "assets/js/47.0a4e5c2e.js",
    "revision": "b70c5ce930de57a9af4187b51a18cf04"
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
    "url": "assets/js/app.e0cef11b.js",
    "revision": "c2bd5d107945e3419468a4ddaf315479"
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
    "revision": "b396336c88d3339b1a4ac7f05a929414"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "40199c21d582e93f1df6053c4d143af4"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "4359e9798a4976afc30c468f8b06b4c1"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "023f7c5842236545950681336ed9b32f"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "cebf0ded5311586a2621a7ced5832c7d"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "6b9fea02c9ee932205e29c669626a6d4"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "10b854f42bb155d3cb8216a5e407faad"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "b5b5aeb49e3a1f5df29b4e8dd13ec6b2"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "e1239189d7abc5275d1bc5b63c53f974"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "7996d4539e56ac494c6a46260fddf234"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "7ca6c1974ce8c4142d5f5357abde0cc9"
  },
  {
    "url": "cmdr/index.html",
    "revision": "a8bce4df2c404944634a17d8f1e3cd4c"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "9fac8b017c695febb606145402ff6502"
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
    "revision": "5a9f4044669ec2038c50df6a3269f134"
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
    "revision": "d5ac5518760dea1252f67228c3b82439"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "cc3f05905c16638b3041a1d04176edb3"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "8ec3f8b809e66e8558f705c6ef4d4fdd"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "06716e5f20bea815b211e4fb375d4dd8"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "fb2ac137072c2294dedb202ef942876b"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "6525fc15cd57b66fdeba5a66d97b1060"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "8544f2993931360fb5b0e9824c1ae8be"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "719545f594e8061aff7453521d7c9d1f"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "91a1cfecfc8ec4e49a6cdc3847884b9d"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "dc832c22d6119b361a30fe3bb045f14a"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "911c29bc49e098435d04a91da27f1f6d"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "e9420141c2e3de5333266d95fa76e853"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "688b2791df4049db791c0a6f78503a36"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "3e4c8d61e2d9d54bb02ee9c60857dbf9"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "eb8dbd559aa16778e598e3f05d295999"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "54c46e9378cfbbdd44034b5badc0ce5e"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "887001c23a0dedda074b45bd4fdc087b"
  },
  {
    "url": "zh/index.html",
    "revision": "5f7570d3db849a5d2f10a0f628ba15c2"
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
