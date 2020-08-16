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
    "revision": "1d77b73f45f6a682b78b8aa85ed970d3"
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
    "url": "assets/js/11.9cb4d720.js",
    "revision": "b268fa018fa4470405b78402fb679638"
  },
  {
    "url": "assets/js/12.367bd933.js",
    "revision": "c216369482165d8e6f192fea66d26172"
  },
  {
    "url": "assets/js/13.49f75b1c.js",
    "revision": "af88fb6b1d3c4be7bf1ccdc5dbdd1190"
  },
  {
    "url": "assets/js/14.3261001f.js",
    "revision": "33e51fb29c68e815ff22af3f6ab51e4e"
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
    "url": "assets/js/21.f71e7440.js",
    "revision": "ab4242349572751294ae2f86e2e6e25d"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.471fd795.js",
    "revision": "5b82a7ead24571d06f8017aa68573a19"
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
    "url": "assets/js/29.44981763.js",
    "revision": "f0113a86c87ee2c4c10d2989a0e9ad22"
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
    "url": "assets/js/32.ff223ef1.js",
    "revision": "3d742637589b919197fb65dc415157c6"
  },
  {
    "url": "assets/js/33.c286cd67.js",
    "revision": "641824dc260067fccfcfd710a7408807"
  },
  {
    "url": "assets/js/34.2bb1f76f.js",
    "revision": "cade2946bc3414f16c80e7086ef16c96"
  },
  {
    "url": "assets/js/35.aef025e4.js",
    "revision": "6f950dad824c2166df2cdd29d72509a2"
  },
  {
    "url": "assets/js/36.e887dde5.js",
    "revision": "e7ad72bf4356ccf61c83aa588043154a"
  },
  {
    "url": "assets/js/37.b07fb075.js",
    "revision": "b0962b752f49da566f9607a0ab1e07e1"
  },
  {
    "url": "assets/js/38.9892a3ff.js",
    "revision": "5e51d49ca5bcef5a991c45304d23acee"
  },
  {
    "url": "assets/js/39.7faf0179.js",
    "revision": "4d8ef04102c38ffd0fbfa1ca8286d399"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.61e7fd31.js",
    "revision": "b8b17febbf2defffacdc11402725f1c1"
  },
  {
    "url": "assets/js/41.e7ebd02e.js",
    "revision": "aed07e7a4bd3e9646bee2c3d66c3800d"
  },
  {
    "url": "assets/js/42.b8738acd.js",
    "revision": "963c67085d7ad39eec36d421fff0529d"
  },
  {
    "url": "assets/js/5.dee3447c.js",
    "revision": "3d472b6b81492b2089433480ff3651c4"
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
    "url": "assets/js/app.faaab7f5.js",
    "revision": "fb92334986f74962c119db60da12247a"
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
    "revision": "d8d619747dfa8af2774bc2fbd394fd67"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "76522f3842a55fb0c13f4e20c581e15a"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "30b05e2586a0fb281414f514f4cdba27"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "9c72239abb57b2f0aa5817d226194857"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "5684dc094fea76fa2f82264a39a4483c"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "f046a81d1fa5b649279b54202046093c"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "5253c198e46d79e827bfd67b0dff7a94"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "3aff115e0de8f7e114256128ca495127"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "78ae2900bfc85512ad2cab4b24fcfd20"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "9b49f302580b1e5feb7beb4c998bc2f0"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "2189106233e40847d0b9fc4305b843d2"
  },
  {
    "url": "cmdr/index.html",
    "revision": "72401a2be9fced33ea03f96b549a3563"
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
    "revision": "632aa31ea14ba044d3b925afdcd49755"
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
    "revision": "1eab35176f80c64629406d382a78a50a"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "80ad71ece95d53d2f2715262c98f2301"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "c9bdb351390f6ebb5c1ec3aac8f7956e"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "7bae04a05e793699c8bf993599625f85"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "22f815c08c25a53d5a12d2f83a8d881b"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "355f5326072b70174b14b6bf57c9e434"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "1f4ff428206659f18bb0991fae84f08d"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "2f912ab56e3567232c1e00c5b9d82f1e"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "7b836a275ac3e4f3155f763bdfadce2c"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "cd3fbe208055e95a6994800f7835e3e7"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "e9b6417d9c2f5836a57a63cd9ac1c05b"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "7a88feb1472d73efd4df20152e46bf39"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "ff9d7f278518fdf4120b5f910e9bfc7a"
  },
  {
    "url": "zh/index.html",
    "revision": "d25d8b6220f9575f5d0a0c904ef040ce"
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
