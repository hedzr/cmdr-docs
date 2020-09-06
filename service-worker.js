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
    "revision": "aa5debdebbb586d2b6e6bdc5f0a4c362"
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
    "url": "assets/js/17.a40df0e7.js",
    "revision": "0709c67770accd4adfe97783a1f624db"
  },
  {
    "url": "assets/js/18.49a830df.js",
    "revision": "2f52f3f86e5c84f35224d772654b701b"
  },
  {
    "url": "assets/js/19.41901d78.js",
    "revision": "23f5fc5abad7d434875c9ebf47bdd573"
  },
  {
    "url": "assets/js/20.ba77941d.js",
    "revision": "7fab7e4e354cf734a9ee75e2efb8e208"
  },
  {
    "url": "assets/js/21.c54e613e.js",
    "revision": "dcbc1a80e78477b61daf3479a556152e"
  },
  {
    "url": "assets/js/22.af18378e.js",
    "revision": "e170f3d68121959a7b86036e9a97864d"
  },
  {
    "url": "assets/js/23.22759051.js",
    "revision": "2e080524b5b1162ae8d0355b41beaa6f"
  },
  {
    "url": "assets/js/24.95bf9f23.js",
    "revision": "6200f5d64491dc30dbe91bbc5eaedded"
  },
  {
    "url": "assets/js/25.8cee27d5.js",
    "revision": "d15502d9530b43244a3c317340878c63"
  },
  {
    "url": "assets/js/26.1fb6bd98.js",
    "revision": "2f975f759f3a8809c63f431a6d8ffc91"
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
    "url": "assets/js/29.f33ada55.js",
    "revision": "a1e198836531e2744a84535e8ab14775"
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
    "url": "assets/js/33.a0ba75b3.js",
    "revision": "c07e81d5a3b94d2e4df80cb8e3f612e4"
  },
  {
    "url": "assets/js/34.0b8284f2.js",
    "revision": "a57a1d7468eec5bbbb41062ad54cda16"
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
    "url": "assets/js/app.30e98ace.js",
    "revision": "1bfb05f1b9fa5dd1b43275dfcbadad8e"
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
    "revision": "085553be30beefc217b216c72fb39668"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "7d23a8a319269ad78049ad579f9b2a6e"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "9d140e3518c093cb6e2ce0488adffd81"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "bccdeb6d2e5a253edb35f7845f7f96fe"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "77ca391c3069381bedd9c2a4cf1f0dbe"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "34067c8e7e2d652182af8be556613034"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "ea8346e1f2fcf17b10b240ede8c97cce"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "63ee57ffefd49e20140561455bd8f114"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "2375b0b7bd11f19005a9858f2c700933"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "cd1b5725023e7405e1c328fb324b2124"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "3885637163cdbe52ec316aed8eceac5b"
  },
  {
    "url": "cmdr/index.html",
    "revision": "f3da3dac883f990e9a8fb9e199de5a13"
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
    "revision": "e1a47ba6e8d622b1150bb24761f6802b"
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
    "revision": "feb9dce3eef2991e1fb1dc9e8b162f9f"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "f3007b8c7a35e633b7507084b4c7a99e"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "198ec3591967b18fb3f46dfbc0c9cd8a"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "d1b91c06d78af68ea837dca768e1ce93"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "611d1b250be82556051affc3d82d378d"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "a04b341a52eaa16f91a14e3ea1e10023"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "a3a501dd07accd740e183e845771aa58"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "1522c90326f2501ebef40ac7346cea8f"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "597d1b91ebd8d75658044ec2973723ce"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "ae88caa075fd2e201b2c6c1592d35d03"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "e058c6ef0e086a468aa0b285c635046c"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "8088a5e9802a8c0038d2fe99a2198346"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "4093e67cccb3f30c3f48da8ddbd66a65"
  },
  {
    "url": "zh/index.html",
    "revision": "446da9b9f360d4a02153b4fc7da53af8"
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
