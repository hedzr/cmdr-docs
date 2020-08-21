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
    "revision": "ac51acf269ed346c540c457e23f5841e"
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
    "url": "assets/js/29.73ea1e30.js",
    "revision": "5adff1346797facc7ab1444a1c793519"
  },
  {
    "url": "assets/js/30.bfb4c9d5.js",
    "revision": "534f596794c937f93ff2bb3aa89d727c"
  },
  {
    "url": "assets/js/31.cbe4ac15.js",
    "revision": "79a19345060625e0aa9b5f610936cfd2"
  },
  {
    "url": "assets/js/32.3c514f0f.js",
    "revision": "10b3c4aa5f859b315610f5ba84a3b2cb"
  },
  {
    "url": "assets/js/33.c286cd67.js",
    "revision": "641824dc260067fccfcfd710a7408807"
  },
  {
    "url": "assets/js/34.0b8284f2.js",
    "revision": "a57a1d7468eec5bbbb41062ad54cda16"
  },
  {
    "url": "assets/js/35.abf80822.js",
    "revision": "ad955fdc453934021c16755e3de0297a"
  },
  {
    "url": "assets/js/36.80217456.js",
    "revision": "bc99811f59e0ee47c78eb2ba7d634e3c"
  },
  {
    "url": "assets/js/37.7d900522.js",
    "revision": "d8f899a06a6f27ed029e4ce27ced217b"
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
    "url": "assets/js/40.0269d5e2.js",
    "revision": "f715209505563d630d43183d95e1681f"
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
    "url": "assets/js/app.050ca3a8.js",
    "revision": "b9ab5d28ad5f2478f1057c39e0ea795c"
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
    "revision": "5299a635ac5372343d9a49a38a842323"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "ce9e1dd4ed5e447fd7010441bdceba12"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "b5e1fefa35677019b1fd6e9ef260d635"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "24b5a990643c95731d79811bd319ff3d"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "71d2ea88d3a6371dafab5b1258fde1c8"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "1566b50aab7f2eb9a8e7a7a83be66843"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "21c93cde4b0f44cb99802202cc544481"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "fbdf8bff777fb2591c6b1dee050e24b3"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "665422d9983e5dc7615d96d988567ada"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "6b9872c9273ee16a7a449abba9d9bebb"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "0f15b95e4a773895cd47ca42f7700692"
  },
  {
    "url": "cmdr/index.html",
    "revision": "54e123809b81ab325d81d663cf88404d"
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
    "revision": "b401fb6d26bf1590218b16571cbff207"
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
    "revision": "ce6f8a8b421ffacb19427c31fac64688"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "de376c1a6dd8d5119cc30e24ab9eeeeb"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "8e570294130ae2786467d85a83273c24"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "783e9d3d460027c54036e8d20a5bb445"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "559e3b5ecdbc2f94ca5354085f11e52d"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "ff2dcfc99c64ab9d645c98358e3b00c7"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "8782fa34e7b67b06b2d16b579bd889e9"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "86cf51cfd6ac97e0461c84c5d31eed28"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "47ffcebd505fce3595279db3f3bf823d"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "80f2ccc5ad2055b61368dd7f120c97e6"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "8256a0afed7f4efe66fbe7acb14cca33"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "bdedf7e6629bc5bbc0839ea7af6e63b9"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "7ba30cb24a11c816cf100791496596c5"
  },
  {
    "url": "zh/index.html",
    "revision": "a5cd03b4f150744cea4278159674f344"
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
