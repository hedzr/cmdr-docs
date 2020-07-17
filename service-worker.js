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
    "revision": "52aade5454d6786b8d43639959580c0d"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.bb2598d3.css",
    "revision": "c13ce2106eb596a9711114bef410b40b"
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
    "url": "assets/js/app.2ab8a0a8.js",
    "revision": "d50c0c59959d82aff1c5a5f1b6a6bc84"
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
    "revision": "be784761eca97488b06021ed01785cab"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "fef0b752546d6667e543b619dfaccfbc"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "04aad7679a20c7ff8405dfeb6976e431"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "f1c6f46d71344e1286dce78450b0d507"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "f3964aab2e289bb1a47f28b0b83dfac2"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "8a11dbe3a87992bc6cbce834faa58f1f"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "b04c904a33e9549a4d5b496698e53308"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "10ba7db11389202e5c67c2d22c1827a8"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "b0ecf6db4b1837fccb50a36e9d3474aa"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "ea855e77d2fb983af8a59c70d14f21de"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "dc59c121f51bc12c874018e685b82d27"
  },
  {
    "url": "cmdr/index.html",
    "revision": "5644529b46a3eefc081b9d7e4f428363"
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
    "revision": "94d1c38b5aa9afcc2d1c3735d5d7ebc1"
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
    "revision": "f81d9c9c05ba2c5e1e56d56674850a4f"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "6c0728b8bbd2a857acdd5746e03fbb6f"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "c6d68644c152bdb2e58d13200cbf4c1e"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "d9f97ad78eb722cdb6fbe2f23ce42c60"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "eec568d660c86084ee2ebdcd248b7812"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "da3fbf9c42f8e88e4ef4fa2e99970563"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "91b6ae1fba9c57fffe77512faef6aea6"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "3196ab3aa09d87d51a523187698f920f"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "bbbb7db2659396db78b0a38134e5eb4c"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "ee49bd113508e1d3935b55f7e32cb1fe"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "89eab1b92744370c3d9cea03c165c870"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "8fa4eda58f6af464b05785d61d4636b1"
  },
  {
    "url": "zh/index.html",
    "revision": "89c0b9fa9fce859a6c8a5470061688df"
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
