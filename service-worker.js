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
    "revision": "4fbefafee8e801ec85a41395fcfc5b63"
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
    "url": "assets/js/15.5b122970.js",
    "revision": "e0eb624c1e09e175c3b2a970f74005cb"
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
    "url": "assets/js/21.2d20ecfe.js",
    "revision": "7e7a690b153efc31c60d88cce3c541d5"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.5f542946.js",
    "revision": "c2f81fd2acd55bd23d23eb08062f5825"
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
    "url": "assets/js/29.679b14c6.js",
    "revision": "2a4a52446171f3e2fea578d6f154ca14"
  },
  {
    "url": "assets/js/30.422cf996.js",
    "revision": "9d665fa5243b36e9e1d7028aa7869385"
  },
  {
    "url": "assets/js/31.35c5c9de.js",
    "revision": "f1a69cf329a7134f4d7bc3e5b5917469"
  },
  {
    "url": "assets/js/32.ff223ef1.js",
    "revision": "3d742637589b919197fb65dc415157c6"
  },
  {
    "url": "assets/js/33.82e2b817.js",
    "revision": "d0b90d612db1281d1cd70fe8fb837b28"
  },
  {
    "url": "assets/js/34.5f1d478c.js",
    "revision": "8c8fc35bf6b25f530a9ef200b9de91aa"
  },
  {
    "url": "assets/js/35.aef025e4.js",
    "revision": "6f950dad824c2166df2cdd29d72509a2"
  },
  {
    "url": "assets/js/36.07fdf3ff.js",
    "revision": "2f94723f9fb92f06d6341da9244bbfdc"
  },
  {
    "url": "assets/js/37.f683c7d6.js",
    "revision": "1f37fb662dd3000b422dacb982f0b983"
  },
  {
    "url": "assets/js/38.9892a3ff.js",
    "revision": "5e51d49ca5bcef5a991c45304d23acee"
  },
  {
    "url": "assets/js/39.1d0600d9.js",
    "revision": "002167042134fd12eb34179d04ccb348"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.e9092dc9.js",
    "revision": "fb91cf2870e34e33f1e12d0c403638f0"
  },
  {
    "url": "assets/js/41.99efab62.js",
    "revision": "e596495f1c50d27bfdb544f9eb788f7f"
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
    "url": "assets/js/app.753d5916.js",
    "revision": "f4b230b95af5aa7a7caf92b411f8a426"
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
    "revision": "67008fdaab1b428b1a18e1dc295acad1"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "81430a6b11d179c8dd97c994925203e1"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "d15f6bb9e337b1c7dec4d29ec26eed00"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "86073f074bde90ec658bdb4ea92da2cd"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "3d17684c3c658bde57c3f8ac14a0bc8c"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "d7320da9f3eaccc4e8c0dedbac651a25"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "69b503324975da0cfec937c54f5c069c"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "cae8a2e2b2732763b86895d690707d46"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "292d8fbd942219f987d01fd2a4c1e0cc"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "7e38437162460d700f40e33df2162255"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "6722e8e3e71a594d5b7721cd459402b0"
  },
  {
    "url": "cmdr/index.html",
    "revision": "ea0c8892bdd776e6202d8bbbf160983a"
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
    "revision": "5d6cf815acfa374aebc34b645b4b4d82"
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
    "revision": "4b47a41075e41e58164b5e38e8a5721b"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "72b3edf1c553cbe55bd19de0aa1fe2f6"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "f34ef0bf1c81850bd8b65868a1ccbdcb"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "e2e387607259af3541c036416c3eab2c"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "1281264a02a2ab98853effeada61ae9a"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "26d34442c519fa7acb114d6db5c34100"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "82aeddfdb612ac17053f0e39ff80d503"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "a34908ef090d89da896f2df5acac7a99"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "a41084f0b4adfa954d6343f01a44c798"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "14a29a11d4f1e269c83f31b34b304cdb"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "89047e7b72fe0ce4a50c0159e495939f"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "d389530e9ba6414a3da7e3c519882b0a"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "d6eeeef644edba19c86db201deca9645"
  },
  {
    "url": "zh/index.html",
    "revision": "9bc768869edd8f5fe68f10cbc571a9d2"
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
