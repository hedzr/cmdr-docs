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
    "revision": "07edb048ddf8e6b2b3137969f12b5abf"
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
    "url": "assets/js/29.4741182c.js",
    "revision": "aff3eb2a31399c17caef951740e50332"
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
    "url": "assets/js/33.58ed0c7c.js",
    "revision": "003150b985dcf3d7969772f1c0cac89d"
  },
  {
    "url": "assets/js/34.12b4ac86.js",
    "revision": "151a8c26a7a1b56fd2eadc42f2ea57ff"
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
    "url": "assets/js/37.313e99da.js",
    "revision": "e4c0cca570af78dd82884725042a2165"
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
    "url": "assets/js/app.cbfa1787.js",
    "revision": "bacbad7b1409b5988d3e4e9dd4e35353"
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
    "revision": "8050163632acf11c51f5298e8d4d56eb"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "0d374300f649cd2abe2a78fb4ad7e5d3"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "5673ce8f858b5d7a461dc882360aa9a8"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "9184b1fdc4ae0f777468cbbfb681e372"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "7557eda32152c2dbbb6cf5780815e500"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "9786ace53588b87f4970ac0d8fa2dc21"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "8cd1185892b8937ae0affa5259d025ed"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "9170b0215babb50886ba9a26ad8896f4"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "0cf52f091d0855387ce206b108d29cb3"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "90b786b3ff2f2e4e711be4131bc49a2f"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "77cd5a8f132fec6c8cbf9dea40d28673"
  },
  {
    "url": "cmdr/index.html",
    "revision": "c901cd309edb00e5d5c2e3e3255850da"
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
    "revision": "1ac89d38367930299e6624964b5cb4eb"
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
    "revision": "2bc93ed724f937961617dacdfbca9c26"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "abc0d534a13280011c9cf1e2b3215455"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "067b345f45dea63335d4537d5600e0e0"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "0dea66c3051dde75e1cae1c95460cfe9"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "7d81a1a1cc1d307029bbfcf5b4dbf4bc"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "e68335dd8416d55d2666c1ba524635ff"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "1390a1dd74bcbc2adac95e300296cd33"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "d1e2c9dc5ae78870e1ab640d503078c0"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "ad5628ff5799da917b74379ef3726066"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "71047c813af4d5a549ba3232419c9677"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "fc9fb0c75d29ff182d583c18e84c041f"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "a55a5bd87927fe6bb0a35e3fbfda18c7"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "fc360907866e0d4eab08d2f1a857ff65"
  },
  {
    "url": "zh/index.html",
    "revision": "690ad93543a8e06338a572afdbd05d4d"
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
