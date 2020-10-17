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
    "revision": "5768ff4471a44b3662976414e21aac9c"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.396aba76.css",
    "revision": "7edb5a3d6235cd5b63a2a24e43edfe17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6631ec10.js",
    "revision": "324abeaf5de30d4487b8baf0149204e9"
  },
  {
    "url": "assets/js/11.2d1440d3.js",
    "revision": "3d193f1ad779b49bee06222fb2f0d35e"
  },
  {
    "url": "assets/js/12.d3bdce42.js",
    "revision": "85c70944104fbaeaca0567ede3192050"
  },
  {
    "url": "assets/js/13.5ab6e7d6.js",
    "revision": "f6c1296cec17d322a2ca0377719b8149"
  },
  {
    "url": "assets/js/14.fb9a2937.js",
    "revision": "c46f69e5ac57c0332650586d5b376aa5"
  },
  {
    "url": "assets/js/15.20c343f5.js",
    "revision": "7077c9dde49d850e985cd90bc1597f30"
  },
  {
    "url": "assets/js/16.98e53241.js",
    "revision": "03c1b435c0a80cf931aee2fb48cd1340"
  },
  {
    "url": "assets/js/17.b5fbdddd.js",
    "revision": "bb7f11338ceb576846e5fc19969e49c6"
  },
  {
    "url": "assets/js/18.ca753561.js",
    "revision": "548e1d7201f37c074638e803fdf86ae9"
  },
  {
    "url": "assets/js/19.7d2dc8c5.js",
    "revision": "561bafe1308cceea909cae632c87af08"
  },
  {
    "url": "assets/js/20.ff6b18ac.js",
    "revision": "c34b5915840b7282cdaaa0521451f282"
  },
  {
    "url": "assets/js/21.ded297ea.js",
    "revision": "2b8f185e69f93a44704686c52cafd4de"
  },
  {
    "url": "assets/js/22.c82caa8b.js",
    "revision": "cf7e6b53781a687234ae0a6d1caf82b3"
  },
  {
    "url": "assets/js/23.a8a8b8bc.js",
    "revision": "4a594d8aae6d169a31972d56ff442435"
  },
  {
    "url": "assets/js/24.d587c089.js",
    "revision": "6335b69c3f53847b2bc224217aa69db1"
  },
  {
    "url": "assets/js/25.49d37067.js",
    "revision": "fa7a02e7fe51c8065e7702f1e5239c70"
  },
  {
    "url": "assets/js/26.a2d5b804.js",
    "revision": "c8f6923ca0f31de5d09fe78572da8a2b"
  },
  {
    "url": "assets/js/27.9201608b.js",
    "revision": "563a5fd9254ab1c3b55f774dd5d6e621"
  },
  {
    "url": "assets/js/28.4cfab3e0.js",
    "revision": "57bc408432a2010005955c61e68e6c9f"
  },
  {
    "url": "assets/js/29.d2c0bfbc.js",
    "revision": "8378595edb9ee4064264bdc79b19fbf3"
  },
  {
    "url": "assets/js/30.99ec19a0.js",
    "revision": "0adf5f66a335e11f202dce060e12039a"
  },
  {
    "url": "assets/js/31.1763e3b4.js",
    "revision": "41a13e728ee557da6bed6025e5ae11a2"
  },
  {
    "url": "assets/js/32.0fbc0810.js",
    "revision": "24845cd5f9257ccdc782e0e9f2bb01cc"
  },
  {
    "url": "assets/js/33.7f5acb3e.js",
    "revision": "df8ecf578508a98cf7d0360e28ddce69"
  },
  {
    "url": "assets/js/34.d02f511d.js",
    "revision": "4d4b57ffeaa6a869f79f3cbebe5a2ded"
  },
  {
    "url": "assets/js/35.73c08f28.js",
    "revision": "31feb4fe9c8d09733b98442105c460ac"
  },
  {
    "url": "assets/js/36.c73095f7.js",
    "revision": "ef69cacd1916d92d7b5c83f884fe2f9c"
  },
  {
    "url": "assets/js/37.ee892bc0.js",
    "revision": "aed642f0c97225b018470932535b2684"
  },
  {
    "url": "assets/js/38.1e34cbd6.js",
    "revision": "b89d68b8a1460cfcb182d8ec62e2175d"
  },
  {
    "url": "assets/js/39.dffc14b5.js",
    "revision": "4a0d5ef939b1b2c1a3d5599d992f192f"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.eea9096d.js",
    "revision": "20b5062b64f3ab18afcf3d0be794f16a"
  },
  {
    "url": "assets/js/41.098bc4c5.js",
    "revision": "edfa73adf868aab6e1f8b7bdad83221c"
  },
  {
    "url": "assets/js/42.36d85c0b.js",
    "revision": "1ef54088c50cbab45e1e287b13de9afd"
  },
  {
    "url": "assets/js/43.377c2ce0.js",
    "revision": "dc7c121beeb3ac5c0788f228c0039c4d"
  },
  {
    "url": "assets/js/44.45fe9f53.js",
    "revision": "8ae0dc85e489feb506e43ef0dad47067"
  },
  {
    "url": "assets/js/45.7de38803.js",
    "revision": "94f92bd7d893d975cc5dd7df1e6e5c56"
  },
  {
    "url": "assets/js/46.8805a3b9.js",
    "revision": "118af93960513baeb288cba1c5249f8e"
  },
  {
    "url": "assets/js/5.dee3447c.js",
    "revision": "3d472b6b81492b2089433480ff3651c4"
  },
  {
    "url": "assets/js/6.5f90de48.js",
    "revision": "b977bb4a4d0bd99f601f9711f4242667"
  },
  {
    "url": "assets/js/7.cbc7f3fd.js",
    "revision": "681d2b504c8dcd8e6ae364f886b22ec8"
  },
  {
    "url": "assets/js/8.c2414f61.js",
    "revision": "7f8949dbad57c71f2ee0ab7842371b30"
  },
  {
    "url": "assets/js/9.4b69f138.js",
    "revision": "0c3186b34f7b68f751d16bb3e999b70a"
  },
  {
    "url": "assets/js/app.36f9cebe.js",
    "revision": "4a36e3d24c87682be9889029e3d6a175"
  },
  {
    "url": "assets/js/vendors~flowchart.f07e9de1.js",
    "revision": "9e3b94f080c3bad3630e092a05973784"
  },
  {
    "url": "assets/js/vendors~notification.5cedef2c.js",
    "revision": "2078acfa65b99daa1be14c50a1b5089a"
  },
  {
    "url": "cmdr/faq.html",
    "revision": "13bad678a1c21b62ba7d60456094dcc8"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "681b8b0430c625ad1d43fbd4a623e819"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "c574fa35b3b335c0bedab79456ca1b68"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "4d0525b57b7a54afcd10e6143946eb7b"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "4e03bb02fac3212e9ad0b41702a0ba20"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "1d432a49f823c5fc942a9d0d94828891"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "0087f1e1bfe7609c5377396734f41d76"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "c4fa499dc3087c0f78d853e2e35bf013"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "9a50f4c39427fa040fd4d4d3d5165750"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "6c956a8fbaae1f2ed0158778177701f2"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "c9e0a0d8dba53c40b7ae0b94f5746869"
  },
  {
    "url": "cmdr/index.html",
    "revision": "31bb49a0320a0ebfe7e0d26b6d0077e8"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "1033b268629b5767ac6368504737f20c"
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
    "revision": "0cfb77e7fdde5b0d750f990ceb7d1489"
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
    "revision": "4ae0f3c5c87b18843dbf6a0dffe1faf4"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "00a573d573bde2bfa3ab0ea5d7a030d0"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "159b9b06fcb11ff35e6d6a22329ef797"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "9f1ccf9cf00fc49d1fe516cad3b377c2"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "aa7443e94ff3e23ee80dfbfa265ff8a0"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "1a9a719ec04812ecca170dee69e31c4c"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "3bf441667edcee1f53329fdfd48c78d6"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "7757fa795c8a1e998a6fb7da92acf15a"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "c08307af7d1f3abdb4310a7e52b7ccc8"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "2626e83eb2e6af3f992f854907c63a20"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "3ae0324a6eab1fd3f15e1206fe608459"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "d00c49a17d7b98d68d8df36b505a0ec9"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "9af7bde44ca7980641c9c177d2447483"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "ebad30283a413409599130d7c00b7ef3"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "f14c3f40c8ddf8ce884a29228ba24cb2"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "e75645aa93cb9898b1e9c76a023d5656"
  },
  {
    "url": "zh/index.html",
    "revision": "62db25b891d18406a264483d06f7c67f"
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
