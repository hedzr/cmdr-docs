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
    "revision": "9ff5824ed8164406ca0f0d966a39e819"
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
    "url": "assets/js/32.ff223ef1.js",
    "revision": "3d742637589b919197fb65dc415157c6"
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
    "url": "assets/js/35.aef025e4.js",
    "revision": "6f950dad824c2166df2cdd29d72509a2"
  },
  {
    "url": "assets/js/36.e887dde5.js",
    "revision": "e7ad72bf4356ccf61c83aa588043154a"
  },
  {
    "url": "assets/js/37.3706d9d4.js",
    "revision": "56703cdb543b11de1c30c58fbd6569ea"
  },
  {
    "url": "assets/js/38.167d319c.js",
    "revision": "9d5571842c4a605766c552f97c576248"
  },
  {
    "url": "assets/js/39.1652c682.js",
    "revision": "a460a89dbe944ad0a16f00a12e4c649a"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.fa9f30e6.js",
    "revision": "a1cb78869dd9bbfb37bf1c727158ed75"
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
    "url": "assets/js/app.7c683191.js",
    "revision": "b2f3ef7cf1ba4d88165929af05604eb7"
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
    "revision": "1951fed510f1aade670bee81be88f5c2"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "2368dbd2c7501d057c94199deba08373"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "d8fea9bd4f1d9ef061637977776b3d26"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "aa34b58ad64ce77159b375a7690b5c36"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "06aacdeefafc7a33892d888b169fb336"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "26bdc8db4b36cd52edd278698a3838b9"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "12996d4d2313536d04a1f7629080c995"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "483bc67ce148bea897ff016ebce76b7e"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "7e9ad160c25c18ac878fa14f01978038"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "09181997a9dd72c4cce6887bda5a2d55"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "1bfe984c30b3eb2e420dd06fa37fe77b"
  },
  {
    "url": "cmdr/index.html",
    "revision": "69e93f946de75a6dc3b6d2bc90a7f4e8"
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
    "revision": "8f5c14d8f33c301ae0c66cba16f02f2f"
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
    "revision": "1d7a11680df87044eca133d8bc18910b"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "aa8855c51062db51b688142ffe6b99d9"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "dcc311bc50758b89e5cf88db3c2efc06"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "cf91fe06274ba3cacebb2fffc1bd0cd1"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "eb49be36376dad2815e6062502faab13"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "976ad9693a7c7f66c949b3a4ec36a0f6"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "a12399397eed0b6b6d0358562defe284"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "e51d8b05f072cbab1edbec6a33930af3"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "ccc621e936a148f5ff20ce5a786dc4e6"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "256e3dd0cb8465b978b95abedaae8e10"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "83466094c9e36af31a71359b5d8a4b9f"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "3ddebf6c54b7fc5390ab505ac3efa1f8"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "67b1747937e2d851acdf35167aa6efbd"
  },
  {
    "url": "zh/index.html",
    "revision": "d603177fcf796dce5b0b522de0687dd8"
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
