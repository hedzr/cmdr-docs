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
    "revision": "4381e55c140fffaa82ced1d66385c889"
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
    "url": "assets/js/32.3c514f0f.js",
    "revision": "10b3c4aa5f859b315610f5ba84a3b2cb"
  },
  {
    "url": "assets/js/33.c286cd67.js",
    "revision": "641824dc260067fccfcfd710a7408807"
  },
  {
    "url": "assets/js/34.0b82f3c4.js",
    "revision": "b774e135079b3168c8bbed858441ef93"
  },
  {
    "url": "assets/js/35.6bdac347.js",
    "revision": "56c21f1b11fffab4eb8251e614518a25"
  },
  {
    "url": "assets/js/36.e887dde5.js",
    "revision": "e7ad72bf4356ccf61c83aa588043154a"
  },
  {
    "url": "assets/js/37.7aa7e9e2.js",
    "revision": "6a08f62a185a14be8af98cb726b0f5e0"
  },
  {
    "url": "assets/js/38.cc5367c0.js",
    "revision": "fe2f25f23dc10f1d3f03023e8964e58b"
  },
  {
    "url": "assets/js/39.a7aacc80.js",
    "revision": "0610120fa19353fb5b89e8b5911fce0a"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.82f607b3.js",
    "revision": "a353fe425a1573d141f6daddf570e205"
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
    "url": "assets/js/app.52608ca7.js",
    "revision": "7154fa2f1b55e432223698a5703b0e49"
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
    "revision": "e073f80e9770fad8782e0474f184406b"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "9fbb93e291835a73e65c4bfffeb0f987"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "02cb777200309e78d1be0d2e58327e85"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "f342f6299365cdeb037ebf589735efb4"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "11c13ac1a01feb58b7dce80bc0b37c77"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "6759e44cdf6be1bbfae18f70dd656b97"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "903631f1bb1d8908f2d0658fcbafe9c9"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "6905510ef89d6229c7b9baa7878cfbdb"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "9f962955d2abe086b522e7af92247f2d"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "bc6031d8f74b15b62932780a4f8fa123"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "f84553e2366d35f698bed03e57cc4b7d"
  },
  {
    "url": "cmdr/index.html",
    "revision": "91fd09ac18dfb134e2bd84603bc8031e"
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
    "revision": "6699f459b006ce3e3db45f77b3b229b9"
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
    "revision": "a13d190fe70111a91aa1355b1a5d03bd"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "031e568a9500ccfcd6f863a679a63fcd"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "0b043453a4e00134ac16690edbf50601"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "443eec1e1038c3f38fdf7cbd119078d1"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "e74d905615c8882903d766c8f93c0568"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "1029f6bfe9a2fe0501cb423f011694da"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "ed01a0bad53e7d142befaa23cdbed539"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "f70fd6f5a6819190d8f7603e8b046f49"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "4fbdf7634101d54534de02042d42d326"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "0905378d4167d23984dd1a8438786b53"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "df1cc65e9f91d5d56d260360d94efae6"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "f92400911178140229b51b17fa5c15d1"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "5e23befd74a4fd69e89824a30e72701e"
  },
  {
    "url": "zh/index.html",
    "revision": "2a41872e64d1df7f63654b5ed7ba8667"
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
