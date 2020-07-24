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
    "revision": "272ac176165f155dcd1f946f44bd2a3e"
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
    "url": "assets/js/11.30acec70.js",
    "revision": "1a51983e78f7a657a501f3d6b910479d"
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
    "url": "assets/js/15.28951c91.js",
    "revision": "f17fa969a1f1e09ca9315257d3459aff"
  },
  {
    "url": "assets/js/16.60052103.js",
    "revision": "671c87ea530acc0f304707da0117117c"
  },
  {
    "url": "assets/js/17.bc9061d9.js",
    "revision": "92d4cd16d3c7f01c2ad46d9de5d19333"
  },
  {
    "url": "assets/js/18.a8e72d95.js",
    "revision": "b95db46c0d35c5e37408c8941c757de4"
  },
  {
    "url": "assets/js/19.549922e5.js",
    "revision": "51e46e2bc6dd834ac60fde9647c72a39"
  },
  {
    "url": "assets/js/20.ba77941d.js",
    "revision": "7fab7e4e354cf734a9ee75e2efb8e208"
  },
  {
    "url": "assets/js/21.2d20ecfe.js",
    "revision": "7e7a690b153efc31c60d88cce3c541d5"
  },
  {
    "url": "assets/js/22.568bf770.js",
    "revision": "019319d89319f7208e3ab2a19f93ea30"
  },
  {
    "url": "assets/js/23.5f542946.js",
    "revision": "c2f81fd2acd55bd23d23eb08062f5825"
  },
  {
    "url": "assets/js/24.ebff5fad.js",
    "revision": "1bbc5cd69ef986a3a49169fb2ef2c80f"
  },
  {
    "url": "assets/js/25.a830964a.js",
    "revision": "90c5b7170d0d723a01b9772bbf210e36"
  },
  {
    "url": "assets/js/26.0f8c73b3.js",
    "revision": "a3d67fd60baba5f76edc207ff9f96040"
  },
  {
    "url": "assets/js/27.6986be35.js",
    "revision": "13c232a866722a05a8981c3456f09147"
  },
  {
    "url": "assets/js/28.ec254d92.js",
    "revision": "c0683717e45e7b062c62b0728919fb2b"
  },
  {
    "url": "assets/js/29.afc25d0e.js",
    "revision": "309b2708a0061a85ae0e1d46585f723f"
  },
  {
    "url": "assets/js/30.d02ccb2e.js",
    "revision": "f9ed17dd914006f8a690001d9924f463"
  },
  {
    "url": "assets/js/31.acbe4a51.js",
    "revision": "3ea27a47d460cd32f7417e3724a5250d"
  },
  {
    "url": "assets/js/32.b7351313.js",
    "revision": "fa503a19e492f56e83188edfa48d2838"
  },
  {
    "url": "assets/js/33.4fdc88cb.js",
    "revision": "256196aeb11cc4e80d8dca9d3c965c6f"
  },
  {
    "url": "assets/js/34.5f1d478c.js",
    "revision": "8c8fc35bf6b25f530a9ef200b9de91aa"
  },
  {
    "url": "assets/js/35.fd4d7cf6.js",
    "revision": "071770b033fe580114dcac9f8a92424e"
  },
  {
    "url": "assets/js/36.710b0ccc.js",
    "revision": "21a4261439da21d65c7cdd4252135534"
  },
  {
    "url": "assets/js/37.7dab6727.js",
    "revision": "c1e7024c47c2a43e120de2eee97d1702"
  },
  {
    "url": "assets/js/38.9892a3ff.js",
    "revision": "5e51d49ca5bcef5a991c45304d23acee"
  },
  {
    "url": "assets/js/39.11a57d15.js",
    "revision": "54f87b45009fe25a5c9fa7c3f246acd8"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.77392885.js",
    "revision": "8641f874536b746a620186b3c8d245fd"
  },
  {
    "url": "assets/js/41.9de6d71b.js",
    "revision": "fedf812619a1783405639356fd309b1c"
  },
  {
    "url": "assets/js/5.dee3447c.js",
    "revision": "3d472b6b81492b2089433480ff3651c4"
  },
  {
    "url": "assets/js/6.89abf3a2.js",
    "revision": "6a51ec44d389a63c920c8c34cd313f18"
  },
  {
    "url": "assets/js/7.78dbbe62.js",
    "revision": "0ad5b2ed9864ec72c8ac6039bf07276f"
  },
  {
    "url": "assets/js/8.d6d0fcd9.js",
    "revision": "fd259590f2d6e7e2a13dcb3b202db65e"
  },
  {
    "url": "assets/js/9.4b69f138.js",
    "revision": "0c3186b34f7b68f751d16bb3e999b70a"
  },
  {
    "url": "assets/js/app.fd484180.js",
    "revision": "91b9adce3e6d9dadb45ef62ad8c2a334"
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
    "revision": "df4645a773504be45925d4a30b8a7ff1"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "1c1d2124f4b027d99ec97cac6e79d93c"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "7553b7ca138dd33a45ee6689ac100f1b"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "261b463ccdbe234409f9ac8e6bb812f1"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "8c4b815aca8780311845677e471a87b1"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "453788633188608bd5d6f53597614ea0"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "b24937c838ee3206488b69329a1c36cc"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "b84bfb7c6601d0a6b5e14349e68af183"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "84988061e839ce043fd8505d9feefe26"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "900a867d350d9fcde7cae626108bbc15"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "766966da63ac39555fc0f657fe024933"
  },
  {
    "url": "cmdr/index.html",
    "revision": "6b8881b4de1ff528812d78eca2a9904f"
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
    "revision": "dd8da8221966d9bdfc9d71d63a73352b"
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
    "revision": "2dc35d96f6d215b742ec85524e5310e6"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "44f78abc8ef0a899908f0b131ec5cf4d"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "25ecc217545c5586c4ded4cdded0c855"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "1db54bdd0fa4943dace86a9d67b6577b"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "a853f9d42f0d393cfb2f9ebdd903bbba"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "307b1dff8647b1c60609c43e81084faf"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "7fbf02768f5848e47c33b4a340b44ce7"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "5f8eefd57a1ebdd237345f93b33d1d1f"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "6b274d374cddd6e2104c4e705209dd6a"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "24ebe89769b593e097c191d51a45c907"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "b5c91ac12b785c9ea96f0ca6d16976a4"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "0512a711b861d289f60d11be8167da25"
  },
  {
    "url": "zh/index.html",
    "revision": "a3dd9b8b54d2d33ba69d79104fbd766e"
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
