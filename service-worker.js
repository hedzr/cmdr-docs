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
    "revision": "93aa738cbc59e3d6587e7baf0e0f6102"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.c125cced.css",
    "revision": "73f93d8b4c103b44236ceba2d306cacb"
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
    "url": "assets/js/11.017a7178.js",
    "revision": "64b5a091bad717ad40e0bb15e5be439c"
  },
  {
    "url": "assets/js/12.786b50db.js",
    "revision": "934e05907c2c825037a6d20a30e29d76"
  },
  {
    "url": "assets/js/13.0aef1751.js",
    "revision": "5ff51927b9eff0863ceefeb1e2218a21"
  },
  {
    "url": "assets/js/14.fb9a2937.js",
    "revision": "c46f69e5ac57c0332650586d5b376aa5"
  },
  {
    "url": "assets/js/15.7e6271d7.js",
    "revision": "0c9eabd7126a0886b01f4a653211e778"
  },
  {
    "url": "assets/js/16.9fcb9d82.js",
    "revision": "66c0441833362ad8f64784709d01e220"
  },
  {
    "url": "assets/js/17.147a3922.js",
    "revision": "4b716f957863138f32877ba508b93967"
  },
  {
    "url": "assets/js/18.77229f00.js",
    "revision": "3ef7249a035ee90bdb7f76be15ed23c0"
  },
  {
    "url": "assets/js/19.528ec23f.js",
    "revision": "56da50eb172039e890b1a99834f366df"
  },
  {
    "url": "assets/js/20.725b9ca7.js",
    "revision": "c77fd870fab7b725b7e3c3aa2fd93871"
  },
  {
    "url": "assets/js/21.c54e613e.js",
    "revision": "dcbc1a80e78477b61daf3479a556152e"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.d5f287f9.js",
    "revision": "34713090c9a5f0538ee87c1694c81b4d"
  },
  {
    "url": "assets/js/24.91da8249.js",
    "revision": "6bde6919fffa51523fcf93e855bed00c"
  },
  {
    "url": "assets/js/25.67b3d72d.js",
    "revision": "8d31fdb4f4799b5ec0b25647e4178ba3"
  },
  {
    "url": "assets/js/26.ccfbee09.js",
    "revision": "587cbea470da23c71381c0823a8d6a69"
  },
  {
    "url": "assets/js/27.8ebe590d.js",
    "revision": "c5085bf4a9b430f3f11789e3d4d0b4d8"
  },
  {
    "url": "assets/js/28.354e2d56.js",
    "revision": "a475ca351cf9a6c7a59eceaad8170c18"
  },
  {
    "url": "assets/js/29.44981763.js",
    "revision": "f0113a86c87ee2c4c10d2989a0e9ad22"
  },
  {
    "url": "assets/js/30.422cf996.js",
    "revision": "9d665fa5243b36e9e1d7028aa7869385"
  },
  {
    "url": "assets/js/31.47f16e08.js",
    "revision": "61ac1002d30c9ab50c6f679aede33a58"
  },
  {
    "url": "assets/js/32.3c514f0f.js",
    "revision": "10b3c4aa5f859b315610f5ba84a3b2cb"
  },
  {
    "url": "assets/js/33.c286cd67.js",
    "revision": "641824dc260067fccfcfd710a7408807"
  },
  {
    "url": "assets/js/34.0b82f3c4.js",
    "revision": "b774e135079b3168c8bbed858441ef93"
  },
  {
    "url": "assets/js/35.6bdac347.js",
    "revision": "56c21f1b11fffab4eb8251e614518a25"
  },
  {
    "url": "assets/js/36.80217456.js",
    "revision": "bc99811f59e0ee47c78eb2ba7d634e3c"
  },
  {
    "url": "assets/js/37.7d900522.js",
    "revision": "d8f899a06a6f27ed029e4ce27ced217b"
  },
  {
    "url": "assets/js/38.108ea613.js",
    "revision": "8826e8c87f13a5c91b6686fa53a92028"
  },
  {
    "url": "assets/js/39.7511c16c.js",
    "revision": "2f384df979a2584842c8d67e782bdff2"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.0269d5e2.js",
    "revision": "f715209505563d630d43183d95e1681f"
  },
  {
    "url": "assets/js/41.34f1d2ba.js",
    "revision": "f9cf6b7e326cbffcf4495aff9b9edb7c"
  },
  {
    "url": "assets/js/42.b8738acd.js",
    "revision": "963c67085d7ad39eec36d421fff0529d"
  },
  {
    "url": "assets/js/5.5d216651.js",
    "revision": "f4f7222d729e4c80f3a4de848a9104ec"
  },
  {
    "url": "assets/js/6.4ddbf92d.js",
    "revision": "1ba32c1b6e681bd8e3016df2159cc884"
  },
  {
    "url": "assets/js/7.78dbbe62.js",
    "revision": "0ad5b2ed9864ec72c8ac6039bf07276f"
  },
  {
    "url": "assets/js/8.cace9542.js",
    "revision": "53a881c3b8b6778cea579e711fb8daa1"
  },
  {
    "url": "assets/js/9.8db88d53.js",
    "revision": "3ba97d9c9f04d81de38cbc0d2eda2f24"
  },
  {
    "url": "assets/js/app.cbf331b9.js",
    "revision": "93402a70a2b975cb80e05d8c1c95af41"
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
    "revision": "81589dc2881d487ef76b4db8b42f9e25"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "0d46687d58ceebfe0506e9a7fad5cd83"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "e5ed35c53013c035f6c3d5f6484c8ccc"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "21f1c60f879c731a461b0f402c8434f6"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "f3fd309752908b327849338a9f7fef59"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "a2ea52ebd071735600e24654d8a5971e"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "f62b14603a0748e652b7358fb0fde777"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "5339526c936721708cc9911954a5d87b"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "48809f94520c102082baa22b306972e4"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "d86bb0b80554f61c7413735bdd7b0211"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "7d0a3e78b5e33808edb4653d08b2229e"
  },
  {
    "url": "cmdr/index.html",
    "revision": "0ffac72233b662e93347148a6c245bdf"
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
    "revision": "f9c6431d6b3c3df313079bfa257cead2"
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
    "revision": "eada908e96aabb3105515b13c6083c18"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "0db6d2fdcef8f3d3ad97fc8fafaf757e"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "21813d14dd878faae5155c665464eaac"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "4d50aa5b5493a1f80b62896350f28d16"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "cced6f0e73cbf979139f8a82497c13eb"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "b978533aed9ed54e82401e7191a75788"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "72ba0e0a1b3b3b82f157e7da67ba7b28"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "4d8f90c0075f876585138e6b22594429"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "a15984a2178a98c12f38f4ef663492b1"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "3a2a63c18b4bcbf8e7fad3a5675ccdce"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "55f39140ca0d6901114d0e4b6cada730"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "059b12b13cb8f7811a597d1f630b8ca6"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "ff2adb01ad8445dfba3a9dad5b76170e"
  },
  {
    "url": "zh/index.html",
    "revision": "87f1e5e886432b2197b2a177c128c8ff"
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
