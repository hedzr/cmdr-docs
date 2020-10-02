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
    "revision": "e8b1e5095a4c5b3cd58ce8e2cfa2b3c5"
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
    "url": "assets/js/11.6d65c087.js",
    "revision": "72e1cfa9b7c5268c8ca6bca926abf63e"
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
    "url": "assets/js/15.fbc25d7e.js",
    "revision": "279ff667b5ac4ab0f0cab307846998cf"
  },
  {
    "url": "assets/js/16.162c5f10.js",
    "revision": "ddbce00d3904b01974dd578999c866b1"
  },
  {
    "url": "assets/js/17.6ed8d822.js",
    "revision": "3db4a5cdf87b16f8709b7623f1d42e1c"
  },
  {
    "url": "assets/js/18.aa0dfdf7.js",
    "revision": "601be3016c005de60909e0e32d9c0b43"
  },
  {
    "url": "assets/js/19.9e513cac.js",
    "revision": "de18c5793df92ec1bec40a724eb91743"
  },
  {
    "url": "assets/js/20.9eec7c9e.js",
    "revision": "bba4d9ea60ea614d17becea27f571e01"
  },
  {
    "url": "assets/js/21.ded297ea.js",
    "revision": "2b8f185e69f93a44704686c52cafd4de"
  },
  {
    "url": "assets/js/22.71ebb61a.js",
    "revision": "c528e0264dac5c9a3a19b54ef4f01a25"
  },
  {
    "url": "assets/js/23.a8a8b8bc.js",
    "revision": "4a594d8aae6d169a31972d56ff442435"
  },
  {
    "url": "assets/js/24.454425f0.js",
    "revision": "b75d49183795591db4fed8f5c8921381"
  },
  {
    "url": "assets/js/25.f6425a30.js",
    "revision": "101f65f82dcddb7a6397c65ad933ac7d"
  },
  {
    "url": "assets/js/26.8171ac89.js",
    "revision": "df8a4369ac5e6560842ce12114ba64ab"
  },
  {
    "url": "assets/js/27.2add1010.js",
    "revision": "9c8c83501d7b9277d7f0fd4d7a10dea5"
  },
  {
    "url": "assets/js/28.63b17f43.js",
    "revision": "621f28843185e9a2639d5990133eb028"
  },
  {
    "url": "assets/js/29.b8950af1.js",
    "revision": "0e02333f2340933c5fe6eff63c625a8c"
  },
  {
    "url": "assets/js/30.76b0b6c1.js",
    "revision": "aebd2e9662cd4e1f6dd80f7589c1fef4"
  },
  {
    "url": "assets/js/31.0d543954.js",
    "revision": "484003df2647e1c0b5f28cacaeb3aaf7"
  },
  {
    "url": "assets/js/32.9645e2c5.js",
    "revision": "6508132107c99d8fbbff84ec50fb4782"
  },
  {
    "url": "assets/js/33.9993319a.js",
    "revision": "ff257f3c2a919316ce28a63d81e04565"
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
    "url": "assets/js/36.6d589996.js",
    "revision": "c635e4da838cf61aba6996417e0ec978"
  },
  {
    "url": "assets/js/37.ee892bc0.js",
    "revision": "aed642f0c97225b018470932535b2684"
  },
  {
    "url": "assets/js/38.ab9dd8ea.js",
    "revision": "b0ec6be4dd9f966c905efa58317bfca0"
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
    "url": "assets/js/41.424a6d4d.js",
    "revision": "705612cb1ee83538bc11abb37e9a1a57"
  },
  {
    "url": "assets/js/42.7a4b92ca.js",
    "revision": "c5acf74ade3fc0d8b658a95f1574af68"
  },
  {
    "url": "assets/js/43.b2425c31.js",
    "revision": "e689ea1b54708e2bfbe407a3be38d828"
  },
  {
    "url": "assets/js/44.aeb3e295.js",
    "revision": "d6777a4d40de0306d6e03383bf85c34a"
  },
  {
    "url": "assets/js/5.55d90ec4.js",
    "revision": "9344cef6d521a120c1e648b9f1d84522"
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
    "url": "assets/js/8.d4f83a88.js",
    "revision": "4fda38a4a3317c354d122af9dc4fdad8"
  },
  {
    "url": "assets/js/9.8db88d53.js",
    "revision": "3ba97d9c9f04d81de38cbc0d2eda2f24"
  },
  {
    "url": "assets/js/app.1a736242.js",
    "revision": "34ceaa67b80011bb5e57eda1bff4aed4"
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
    "revision": "d7733b3567f244e2c1c8eaedae823ae1"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "c0a5a6023134e2ea0c51f78ea9bd9eeb"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "fba8db5d244aba23f98a734e9292b314"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "e706d5f611adb7149c29cac053ab141e"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "b0cfcb93524e5efa57ccc8016623f09e"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "1909118fdf525e264c07af8ad3cc5d61"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "beac6f58795a620315cc42a018b39ad8"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "f220ed78f10f3f72a00045a7113d866f"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "9e1661792a081861c25a4c59d987a28c"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "53fe7463bad5982962772630df7b784d"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "5899b31ae0f2531df4585a0a69c591e3"
  },
  {
    "url": "cmdr/index.html",
    "revision": "4709ff606a38f7c43fe8c780ca3af324"
  },
  {
    "url": "cmdr/refs.html",
    "revision": "5a9187e00d15b2dd3249c1271f184ddf"
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
    "revision": "2962d128660cae09268fcf8889a20d4d"
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
    "revision": "52000578c0bb1fb3c14e1db413854dba"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "0fc913028b12e7867d475effe6d8dc9a"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "540569b950412f88bb43bcc08fd4789f"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "1c6a6a1b1975e12c6c15fb84fd41bb51"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "8d21c1983e729f5937dbc8e2669b3a4f"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "b558f856afcd8c19b94cafdb379875ae"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "1b3c64d3efe527fe6717bd25f76906b2"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "22243b6f87ad31548dab209d18184537"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "b14502f7724bf36ee27e20330d22d055"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "0418a89e7b723a3576337dff2a77013e"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "56997b5d66ede289c7b9026e685b099b"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "6769839766b472251f98de47de4d5de2"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "c9834ed4fcfdff07daba0436eddb3e29"
  },
  {
    "url": "zh/cmdr/refs.html",
    "revision": "60cc811bac7825d7f8488bd5f79f5ddb"
  },
  {
    "url": "zh/index.html",
    "revision": "a46def5e67d1aee97fd4b1f2f2675dac"
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
