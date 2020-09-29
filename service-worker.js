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
    "revision": "1af94e3b2fc11aa689180cf177e29f2c"
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
    "url": "assets/js/32.def35ea5.js",
    "revision": "21edc5dc4665b44004751563bb80987b"
  },
  {
    "url": "assets/js/33.62a4d52e.js",
    "revision": "8549341480aa26bd35413079c62fe63b"
  },
  {
    "url": "assets/js/34.9cdc2ca0.js",
    "revision": "9dbab980c804e8f88078f8c7bab20cdc"
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
    "url": "assets/js/37.d4e8c5ed.js",
    "revision": "8f5d3f493690c3b4c8c2b5c33b527d6a"
  },
  {
    "url": "assets/js/38.aaf9af62.js",
    "revision": "a0e628bd89cca93103614eec0520d1b5"
  },
  {
    "url": "assets/js/39.08dca53c.js",
    "revision": "dab635b2b9633be2e9aed536ce6658ac"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.47d80f7c.js",
    "revision": "7083550e5d6d4149d49cafe3fbfff81d"
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
    "url": "assets/js/app.282e1630.js",
    "revision": "6f4d5fe24849ae1e00a5345811005adc"
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
    "revision": "57e72e5cfcd604c45dbedcaa32a7c04c"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "24e67067be29d0c7fd9e5796822dc25f"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "f977d975ed200885d7fc70482b243e94"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "349c423c26b96e2a170aa716813e42c3"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "dbc4452f15a97e94e24581f7aa609e8a"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "80fbae8814ccf0656234e51a0651e656"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "5f93fc1c16f5e061a6c1185b1b47e905"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "d630049e13c4c4a6d7aeb6e5a359a620"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "97de4490f403f507dd2b352766650fb1"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "36fed6fcd1fa978b615dbb509a8fd2c5"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "9aab1d46486e2e8481d85b9b26a3a2c2"
  },
  {
    "url": "cmdr/index.html",
    "revision": "1a87f4eaf3d24bc58bec6f5859423422"
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
    "revision": "3a9e0f5acc52d276b92a6972f2bb1a49"
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
    "revision": "a319f061d36764e60b55a377651dcdf9"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "bd14cf85d045f794c0e9c4fcd48eb92b"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "af6798c8a67f8d2eb5368b04c30c636f"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "32d5998b98513c2f4670be04d8060507"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "6a06e48dd688ef0e6c6af6b6c34f5448"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "f39dbe22da862421007397c6ac4e2bdf"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "813f759721f7e8b4759c6e499f150626"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "7448faa68ce2ddc7844f551735442dd5"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "4753fe4bbd16b7c15020d5dcde8313db"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "62dd63eae1d66b974b95e96bc55a316b"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "0f36af0dadbbaae77ed2ec9e76f5a6f1"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "73cc623011aabffc85f64fee3b647250"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "7b1767ff42f969358bb83b331d0b92c3"
  },
  {
    "url": "zh/index.html",
    "revision": "ca20f87474b3024b9a6043494646e0fd"
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
