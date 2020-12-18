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
    "revision": "854eb06e71ceac92041c3af83bf8e226"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.ff3e8ec9.css",
    "revision": "a03adaaf82c92af5e13b769da79e1f9b"
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
    "url": "assets/js/11.2d1440d3.js",
    "revision": "3d193f1ad779b49bee06222fb2f0d35e"
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
    "url": "assets/js/15.9a8b941c.js",
    "revision": "e7886b4532e57b58ffda62a3abf17952"
  },
  {
    "url": "assets/js/16.c6c1602e.js",
    "revision": "d726ff908a9b5f6c1878bd625af37c96"
  },
  {
    "url": "assets/js/17.7cbb6436.js",
    "revision": "37c528b6f26bcfc84d071f8314e290f3"
  },
  {
    "url": "assets/js/18.a2b8aef9.js",
    "revision": "97fd01ba429a6e8b62436d92399afb97"
  },
  {
    "url": "assets/js/19.13b41408.js",
    "revision": "5c327c816f47851012518939510d242e"
  },
  {
    "url": "assets/js/20.68ada2b2.js",
    "revision": "de7d587fffca8024f934270204527d94"
  },
  {
    "url": "assets/js/21.ded297ea.js",
    "revision": "2b8f185e69f93a44704686c52cafd4de"
  },
  {
    "url": "assets/js/22.13cab528.js",
    "revision": "80c3cada40b41220e9951df1b1d79ef1"
  },
  {
    "url": "assets/js/23.a8a8b8bc.js",
    "revision": "4a594d8aae6d169a31972d56ff442435"
  },
  {
    "url": "assets/js/24.1d3e0137.js",
    "revision": "49db1611968e33f3b0c64c26f124bb6e"
  },
  {
    "url": "assets/js/25.7a74d1cf.js",
    "revision": "c87ffdc68f165fa20ca122d5426e3a08"
  },
  {
    "url": "assets/js/26.db29a2c4.js",
    "revision": "7a920ac2325da959dcea750d7d5c3cac"
  },
  {
    "url": "assets/js/27.9dcb9383.js",
    "revision": "da295655ce367408422589387451c72b"
  },
  {
    "url": "assets/js/28.8b78b944.js",
    "revision": "718519df20ea9017fc6eda82ec495378"
  },
  {
    "url": "assets/js/29.584a1a60.js",
    "revision": "5e091c70e917869351863addbe283447"
  },
  {
    "url": "assets/js/30.f0a9c5c4.js",
    "revision": "d070c35e081ad8def5558eeb6c96ce13"
  },
  {
    "url": "assets/js/31.a52b1967.js",
    "revision": "0c1eb50ae764a14fe7984018eb996701"
  },
  {
    "url": "assets/js/32.2f51da66.js",
    "revision": "2e571cfcddc3ae340d18fe8a2e4cec1b"
  },
  {
    "url": "assets/js/33.f2010489.js",
    "revision": "3e6bc42aee4ac69e03907139fc420c1c"
  },
  {
    "url": "assets/js/34.d02f511d.js",
    "revision": "4d4b57ffeaa6a869f79f3cbebe5a2ded"
  },
  {
    "url": "assets/js/35.73c08f28.js",
    "revision": "31feb4fe9c8d09733b98442105c460ac"
  },
  {
    "url": "assets/js/36.5c4261e0.js",
    "revision": "528831583527e109815dd105fd41678c"
  },
  {
    "url": "assets/js/37.ee892bc0.js",
    "revision": "aed642f0c97225b018470932535b2684"
  },
  {
    "url": "assets/js/38.1e34cbd6.js",
    "revision": "b89d68b8a1460cfcb182d8ec62e2175d"
  },
  {
    "url": "assets/js/39.dffc14b5.js",
    "revision": "4a0d5ef939b1b2c1a3d5599d992f192f"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.eea9096d.js",
    "revision": "20b5062b64f3ab18afcf3d0be794f16a"
  },
  {
    "url": "assets/js/41.10e81467.js",
    "revision": "bf29cfe23c2c23df659de62704a761a1"
  },
  {
    "url": "assets/js/42.5c8528cc.js",
    "revision": "0fb349729584d659db17421a96580084"
  },
  {
    "url": "assets/js/43.d2a0bb9c.js",
    "revision": "8c6f274773b981714776a247a422af82"
  },
  {
    "url": "assets/js/44.f3486b34.js",
    "revision": "fc5769c512b1c799bdea3175e5726b52"
  },
  {
    "url": "assets/js/45.a7844bee.js",
    "revision": "81913ea09bff1b7b819646887182c853"
  },
  {
    "url": "assets/js/46.e1f43aab.js",
    "revision": "2a717e9bdb2d81ccf06581f1d3a97e16"
  },
  {
    "url": "assets/js/47.6b95be9d.js",
    "revision": "2fe1a9dcc35c117d5ef3362105d7bed1"
  },
  {
    "url": "assets/js/5.dee3447c.js",
    "revision": "3d472b6b81492b2089433480ff3651c4"
  },
  {
    "url": "assets/js/6.7628c712.js",
    "revision": "2c46e4cb256f141fb6240c091b43b92f"
  },
  {
    "url": "assets/js/7.cbc7f3fd.js",
    "revision": "681d2b504c8dcd8e6ae364f886b22ec8"
  },
  {
    "url": "assets/js/8.f1155829.js",
    "revision": "45a6556a2f9ab2cdff4870d8327a785b"
  },
  {
    "url": "assets/js/9.4b69f138.js",
    "revision": "0c3186b34f7b68f751d16bb3e999b70a"
  },
  {
    "url": "assets/js/app.18a1a50c.js",
    "revision": "3bb36d31957282fe58e3150fc6b76ba6"
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
    "revision": "128251fbf14b4a916853816de8ec7f3e"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "d29d74267daaa963a6fd5b83123ae0f6"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "c8f85dc45a0a3133537036b43868c660"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "b9dfaa65270f3892284b01e7985cbea1"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "6efc68de1b4c453ef1aa749741afaa4a"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "f7a805ba5821953319141f783bb733ad"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "2c5e7e75ae31ae63de0d9ca8b32a6fe8"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "0556ecddb8b99a9d6cdbcb03fe71c035"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "73775f31ec656b58bd1605960aa10951"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "4c920f52607444dd78f7ea3260755299"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "a15ce2b060ae1660322c1a6f9dc65053"
  },
  {
    "url": "cmdr/index.html",
    "revision": "fa370b830d145e27de0b4e885bcd1e98"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "a4594ac646b52d9ebbdd75eba7a30880"
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
    "revision": "6d7e0cac195e8dd890a717e987506c30"
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
    "revision": "6f458ad150a22d6cc57447f153228bdc"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "16ce1200a3c863630247a13f64ee943f"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "53adeaa9405852d7d23715fcb10b2e12"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "c45478eca884b5f3c3953bce8bdb6365"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "f0c7d12761e20110088af664223fd05f"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "df6de68abed98bc812aa5479b477ba06"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "fb49258d9e0963e7b79d656fb9c09b9e"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "23b8cf5e98974bb6dab79d63e67dbc0d"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "5ec477893014424de3aa02d49f81707f"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "0626cd22d41db1d0a1cbed6df123117f"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "6e4dc017582887deeff00ef3bfdd35fa"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "a21b6b1dfb59c999358f7368fbb24c56"
  },
  {
    "url": "zh/cmdr/markdown-demo-blank.html",
    "revision": "2c89b766cb9b4a0531c8e8e8281a538b"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "7c0ecd1d1feb7596324b4eb88f3827a2"
  },
  {
    "url": "zh/cmdr/markdown-page.2.html",
    "revision": "fc08b843c90ea377c735c648bd4c81be"
  },
  {
    "url": "zh/cmdr/markdown-page.html",
    "revision": "7ddf5657bb3750f62eca3a987a68c76a"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "98a5be71c6b7a2a48bdb63c3851a59d1"
  },
  {
    "url": "zh/index.html",
    "revision": "bcb1ce451784018adf6f571feb3891b5"
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
