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
    "revision": "8f38bafeefab9823e702de5aae84dae1"
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
    "url": "assets/js/21.ded297ea.js",
    "revision": "2b8f185e69f93a44704686c52cafd4de"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.a8a8b8bc.js",
    "revision": "4a594d8aae6d169a31972d56ff442435"
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
    "url": "assets/js/29.682002cf.js",
    "revision": "edf13daa6280ac962075d732d5e1f54a"
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
    "url": "assets/js/32.9d5b8a33.js",
    "revision": "fee5030c4f2c645dba401ec335cb3c0d"
  },
  {
    "url": "assets/js/33.245f80d9.js",
    "revision": "497f209c9c7dee45fc7243bce29ed996"
  },
  {
    "url": "assets/js/34.684bd73c.js",
    "revision": "065eeb38cd8110a18e47f0b87d3c79e4"
  },
  {
    "url": "assets/js/35.e7934f1b.js",
    "revision": "e2cc79c7ff704684251a5d6a133091a9"
  },
  {
    "url": "assets/js/36.b023c0f0.js",
    "revision": "07d3736ed68d81e62782989e9aff8e19"
  },
  {
    "url": "assets/js/37.c0d1d71b.js",
    "revision": "dc312ddfaad389b434f32dc6e1082894"
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
    "url": "assets/js/40.5617814c.js",
    "revision": "431b63bfb0819b9597b3962376f16e35"
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
    "url": "assets/js/app.d2e2e07d.js",
    "revision": "f6512d7048359cea2fcefde36a7c30c6"
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
    "revision": "77a3ea87f70bb3fc656ebcd97f9cff59"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "9470f84dd7f36c34c0ab7729219be617"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "b47512fe91f9059f7af6a09481d25412"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "dfc858e1e22b854f6689d51726317023"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "caba9d3f4c98e89336ae3542b749e4bf"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "5b1a2ce9ac106182b312cf73f21fb6b3"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "b0f4b6956e38ad173350a63a1a28365e"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "84eec6ae348d04a9f28d06f9931e2ff9"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "96e87bbbffc52d5cbc2ff541a0fadd15"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "7d96e85721f70109252f1212962cf17c"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "58ea24ab5b8dbd613d41bf9df63ddaa5"
  },
  {
    "url": "cmdr/index.html",
    "revision": "28a1242fb36ddb36488699669fc98c5f"
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
    "revision": "5ccdc84d86acb74f9e949097900ba7de"
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
    "revision": "96f4c1b6f02a83def2b1f21d8e167ee6"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "9362e8e865c2c17af6aa23c8ddf3d7b5"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "f9d04db4560247339ea4333a9ff92954"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "137501c4b13991acc7e796bca6a99ee2"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "356f9901fabb7819cfce3f9280f7f54a"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "643f68c210402bbf13732d0a248eb5df"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "967654bad6cca73623e0efd383d418d2"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "c9eb07cec2c3fa2ae0cbc3ab97b4cb03"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "a0b034952c6e7cfd5732458c32ac6308"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "259eef45aa6f9b857c25e7c731ef6c7b"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "87fda2cf6a075b2e10beff04b775c76f"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "1933bf535a2ffd3ec9eefb9c59aa3d92"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "07e10825030373f2fde02fe068a3b315"
  },
  {
    "url": "zh/index.html",
    "revision": "bcd9ede24a710cebaf65e7c9d448af02"
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
