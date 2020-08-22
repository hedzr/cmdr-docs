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
    "revision": "546be8c93ea87fef7b84ebec58cd0d25"
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
    "url": "assets/js/21.ded297ea.js",
    "revision": "2b8f185e69f93a44704686c52cafd4de"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.a8a8b8bc.js",
    "revision": "4a594d8aae6d169a31972d56ff442435"
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
    "url": "assets/js/29.11c2d4df.js",
    "revision": "a035070927464b669c525332360e639a"
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
    "url": "assets/js/33.a0ba75b3.js",
    "revision": "c07e81d5a3b94d2e4df80cb8e3f612e4"
  },
  {
    "url": "assets/js/34.0b8284f2.js",
    "revision": "a57a1d7468eec5bbbb41062ad54cda16"
  },
  {
    "url": "assets/js/35.e7934f1b.js",
    "revision": "e2cc79c7ff704684251a5d6a133091a9"
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
    "url": "assets/js/40.296426cb.js",
    "revision": "a4fdfd346320d8f7496ea1bea3ee210e"
  },
  {
    "url": "assets/js/41.1359776f.js",
    "revision": "d2d48ce3793062cd1346f9f2591db74d"
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
    "url": "assets/js/app.593848be.js",
    "revision": "1e10258556ecd227b5fb1165d04e8140"
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
    "revision": "240ede9c267d7ec4968014f8cb8b2948"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "abc757fcc1f0b7539bdaeab6a781963e"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "329a0b6d6e37b59afdf3ccd5396f4a48"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "d03274ebaa804b50bb6de95171283f55"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "9663c9eb510408b3d667ad7e2d5852b9"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "5803a07a98df91f5c8c90730368c8a8f"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "10a122a972d05ada625455f69ed019b3"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "fab767bd95487e4e223d8f8d49642c0d"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "dd86aebbce5c5e23f2aa419fe476f06c"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "f1c8875855be967768bfb778f3118db8"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "d3473b1c7220ebcc1cbf3775be2d3df5"
  },
  {
    "url": "cmdr/index.html",
    "revision": "f7cc07684faf3aa9ea49e1db99d61f26"
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
    "revision": "fb50c6e73da6ab8a5451609c738d7f16"
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
    "revision": "507de3708533e4262824cc2811a5c4ed"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "4db13350f2acd35ada8850de7ce4a91e"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "76397bc132a9be5e9955bcc722e918b6"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "97b923d2d3e15edbe7c6079a1b665519"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "576d383909d6981d86adee9eaf29cf94"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "8aab93e9b7b704a03ac29bcc1fc30e77"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "57904d805b3d1336ebeeebc6315c937a"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "82da7cf893d752a3577bc1f7f87f626b"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "66f2c9b45365bb5fcccf693a4aec6f51"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "950aadb0583eb94a9fbe8a943ea6bdb5"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "a375efbdb7ae77ae38cb4a3528d59500"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "234ab06f7b36c23b6fa58a2cf3901b0e"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "b96b8f632ca1e109dbcba2e301393365"
  },
  {
    "url": "zh/index.html",
    "revision": "a79f82a5786dac70b89500ecf4a21468"
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
