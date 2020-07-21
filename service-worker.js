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
    "revision": "ed094cb2c11cc8db52e4fc00d137c343"
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
    "url": "assets/js/40.8e03b357.js",
    "revision": "0e2759fa4312ff72b5804d08c84c6535"
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
    "url": "assets/js/app.364ae08c.js",
    "revision": "4f58f44d7359d748a6ce421a0ebf7bfc"
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
    "revision": "cb639688ef18ef2d4993f94865ecfbc2"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "09c811f192ce5f8d544f5963be81c4a0"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "0285c6a9e614e91628063aaa7eac9e12"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "118f9450be1153228790b21d7f9c1dae"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "6b1ba2aa262db9ac7b907cd3d87601e2"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "1b7e496e36b752c073a939af3d87c8f1"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "0ff11403f344ca054028ec06656c5c74"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "3d84af84c54d6958ce3da47bd43cabdd"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "5a01156a515333cc98a30652ed8e226b"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "735f7937d0542f7095b2a68c1a555ce1"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "85139a0aee63310b49f09e2e0be3aeab"
  },
  {
    "url": "cmdr/index.html",
    "revision": "5ebd95d682d6dee288f92b4f41e7c091"
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
    "revision": "1c2d14f1718851ce79cbe23c6fb0962b"
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
    "revision": "0dbeed6ea3eaaca8d6cb3b8b2b3391fc"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "b53cd4bd6351d173f3f5084b09065a92"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "5c05c94e5ed0155b5de3cc81d9acd396"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "8c9313ae88d308afd55bc4a039e45833"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "19c00c4a4eed8158652bd51636589140"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "5ec6ffbeb67b8752ecccf48df8d47185"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "0efffd8eea1d4190ed78cee1d09298b9"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "19680cb533ba3d22f611ab2e8d4c82cb"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "fd7aaf8b5731b40e67a70375eecdf910"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "b83b94a265c82ba75c43b5c593db5187"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "cde206b8d4be7ea3ac753e64e3715fd4"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "1d994327d517a2131c87ff15ca5f88b0"
  },
  {
    "url": "zh/index.html",
    "revision": "734ca85dec5ee49b46ab44901e0205c2"
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
