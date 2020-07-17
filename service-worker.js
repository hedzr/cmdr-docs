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
    "revision": "dc3cf3a280e5f0306e8c7828b2154e2b"
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
    "url": "assets/js/10.67a0f508.js",
    "revision": "324abeaf5de30d4487b8baf0149204e9"
  },
  {
    "url": "assets/js/11.51555091.js",
    "revision": "1a51983e78f7a657a501f3d6b910479d"
  },
  {
    "url": "assets/js/12.49886ccf.js",
    "revision": "85c70944104fbaeaca0567ede3192050"
  },
  {
    "url": "assets/js/13.f4ffeece.js",
    "revision": "f6c1296cec17d322a2ca0377719b8149"
  },
  {
    "url": "assets/js/14.d1e86911.js",
    "revision": "c46f69e5ac57c0332650586d5b376aa5"
  },
  {
    "url": "assets/js/15.024e27e7.js",
    "revision": "f17fa969a1f1e09ca9315257d3459aff"
  },
  {
    "url": "assets/js/16.d6b13a1f.js",
    "revision": "671c87ea530acc0f304707da0117117c"
  },
  {
    "url": "assets/js/17.8aeaf418.js",
    "revision": "92d4cd16d3c7f01c2ad46d9de5d19333"
  },
  {
    "url": "assets/js/18.f6fa1ad6.js",
    "revision": "b95db46c0d35c5e37408c8941c757de4"
  },
  {
    "url": "assets/js/19.ef475a3f.js",
    "revision": "51e46e2bc6dd834ac60fde9647c72a39"
  },
  {
    "url": "assets/js/20.09839ec7.js",
    "revision": "7fab7e4e354cf734a9ee75e2efb8e208"
  },
  {
    "url": "assets/js/21.77359b0c.js",
    "revision": "7e7a690b153efc31c60d88cce3c541d5"
  },
  {
    "url": "assets/js/22.c0459fb8.js",
    "revision": "019319d89319f7208e3ab2a19f93ea30"
  },
  {
    "url": "assets/js/23.f51cb149.js",
    "revision": "c2f81fd2acd55bd23d23eb08062f5825"
  },
  {
    "url": "assets/js/24.7a1200e1.js",
    "revision": "1bbc5cd69ef986a3a49169fb2ef2c80f"
  },
  {
    "url": "assets/js/25.98874727.js",
    "revision": "90c5b7170d0d723a01b9772bbf210e36"
  },
  {
    "url": "assets/js/26.9da2cd41.js",
    "revision": "a3d67fd60baba5f76edc207ff9f96040"
  },
  {
    "url": "assets/js/27.54cb0d5a.js",
    "revision": "13c232a866722a05a8981c3456f09147"
  },
  {
    "url": "assets/js/28.8644f0a2.js",
    "revision": "c0683717e45e7b062c62b0728919fb2b"
  },
  {
    "url": "assets/js/29.fa239f8d.js",
    "revision": "4e94eaac79daaedfc465f818988e65ea"
  },
  {
    "url": "assets/js/30.40f137ec.js",
    "revision": "9499aa9c6891912620c2f306b440fa28"
  },
  {
    "url": "assets/js/31.75969e1f.js",
    "revision": "b53ea03a7f2312f9155da657afde6378"
  },
  {
    "url": "assets/js/32.32dbdd21.js",
    "revision": "fa503a19e492f56e83188edfa48d2838"
  },
  {
    "url": "assets/js/33.c8a3caf7.js",
    "revision": "256196aeb11cc4e80d8dca9d3c965c6f"
  },
  {
    "url": "assets/js/34.a2a50ea2.js",
    "revision": "e301fb576b7fb88da8d45e9da74c64f3"
  },
  {
    "url": "assets/js/35.e8980c19.js",
    "revision": "c09965210be49a7befba3f0e5ae4bbd7"
  },
  {
    "url": "assets/js/36.0e6fdf60.js",
    "revision": "7e870f2c07348e46a1e371659b21bc2d"
  },
  {
    "url": "assets/js/37.1a1e241d.js",
    "revision": "d3500686105ffbc584829492b41a5194"
  },
  {
    "url": "assets/js/38.f1db8681.js",
    "revision": "2f9b776815458562d143d8ae529dd649"
  },
  {
    "url": "assets/js/39.3a1520c0.js",
    "revision": "54f87b45009fe25a5c9fa7c3f246acd8"
  },
  {
    "url": "assets/js/4.9bcad52e.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.02a5b4c8.js",
    "revision": "a85123e604d3a269160a72fac3559f30"
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
    "url": "assets/js/6.1c5c79a9.js",
    "revision": "6a51ec44d389a63c920c8c34cd313f18"
  },
  {
    "url": "assets/js/7.cfd0bca6.js",
    "revision": "0ad5b2ed9864ec72c8ac6039bf07276f"
  },
  {
    "url": "assets/js/8.d6d0fcd9.js",
    "revision": "fd259590f2d6e7e2a13dcb3b202db65e"
  },
  {
    "url": "assets/js/9.ff031e20.js",
    "revision": "0c3186b34f7b68f751d16bb3e999b70a"
  },
  {
    "url": "assets/js/app.0f2f0a2b.js",
    "revision": "4c14225c6899b89b39262e70bc229368"
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
    "revision": "bfb9bb56c3bd66ec310fb4f99cff8f33"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "99b3c0b46dc249076ed87a219698bcc8"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "132551b8849120952d845ee37814b33b"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "db6615820d05f32a5ce0221f009404b0"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "1f26ad45e44b7d3654d5651cae612279"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "7488d8f7372308bb54d4ceddbb4c1e55"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "c1d6980203fb7d2a3a50fc45f20c0946"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "60f03a6fc56b51fd35ecdcbc7fcf4c2a"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "5422dab0549159cfc311a78e53285617"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "398d7349e87d1e523186f89ce6db4db5"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "1a93c35358e5f7977945997b7b9cdc25"
  },
  {
    "url": "cmdr/index.html",
    "revision": "6f6d4f0b77a28de262f9dd295b857589"
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
    "revision": "d166590a93c1e5c969941db19f3275e0"
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
    "revision": "c00e17525cd1d1802d441c0ed09d4afd"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "4ca7e518ddaecf6b13e118b2efd03998"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "5f36461561882c787f36fee290140fc9"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "4cc252a70756df1919a020e43c010004"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "e950827ff5b5c5fb2a6536a9fb2c5588"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "a08aedf24dbdea4a566058dbf78d30c5"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "de6c20358779f3478812854f9ea7732e"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "f3f3bb3fbac440740fbca94500a4de4f"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "6bdd4b755aaf8dc959b3c64d1a3cacbf"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "23349485977ab8dcd3a86bb3e4316752"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "76acf4a1b06511bf5ed3bdedc5c3d874"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "42a652e37f8f2219684c95513bdcfc7e"
  },
  {
    "url": "zh/index.html",
    "revision": "1856e0cc968c293e9210ce72a2f1c24d"
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
