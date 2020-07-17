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
    "revision": "46f26b1f97f09df39f1bfd94bdf26b43"
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
    "url": "assets/js/15.a79d986d.js",
    "revision": "1ca6ff0c5ef5d37e8118d16a8781e7a5"
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
    "url": "assets/js/28.3fa51bf5.js",
    "revision": "4fe84b042079c71a0f6aa482d51d61c2"
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
    "url": "assets/js/app.ffdb9d5c.js",
    "revision": "f82a6e50d6a6757239708150d2891b53"
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
    "revision": "1b106e54942387d78fabaecfed919ac5"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "646f6a7b86aecbe79b897d0c0ef065e5"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "7a977f93cf28c49a434e48b7b6124c34"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "629958aeae875cb20ad7608bbfb489e2"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "903ba081248c17295cf8d10f87bf2a27"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "bf8fde520b77d5be10a5887160af84d3"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "3ddc9fc54c59d5b404eb90a0e7c9ccc3"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "6042945b47a8cdbef7af9ab700c5cf28"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "dff0a18f0fbffff6ea4ef963c9de36f4"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "79eb033182a2bab886f28e8dbddc079a"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "c0e3a3f0fef2d6483d3badc116a17d11"
  },
  {
    "url": "cmdr/index.html",
    "revision": "636ab72fa78e4da1cb1528b4075613e4"
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
    "revision": "62fd8033994ff19856100db8852540e1"
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
    "revision": "f108302c51aec4ed6bc21e5afa591856"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "c44c074f9e372d09b63a8030e739105e"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "0663cd67436e4aea640b541244112894"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "5649289d067a3f9a64ff9d5d3a113286"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "14572e72f355949a85f9b0eed6c0c3a1"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "238b1ab9f623e3de89cb6d01a8d3239a"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "aeb6d2a034c027c7bd6e311e018248a3"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "91645979886dd186ea7b222fb3f1f442"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "0be70086fd35a81df3b4c855667bd72f"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "039204c6419b06c9548d44fde65e6b3d"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "dcd5362c14ff84e9bb9ba43d66f32024"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "e53e11dfc729aea8459e2d18da62491a"
  },
  {
    "url": "zh/index.html",
    "revision": "4e9f6e9fe30c0dbc8aa72a708dd1eb1e"
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
