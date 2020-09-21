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
    "revision": "3a9b993c47fdd0ea621662297d2f54df"
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
    "url": "assets/js/29.d4ee98f5.js",
    "revision": "beae3873cd3f0bb5ff2f9beba00b340d"
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
    "url": "assets/js/33.58ed0c7c.js",
    "revision": "003150b985dcf3d7969772f1c0cac89d"
  },
  {
    "url": "assets/js/34.3f94fa3c.js",
    "revision": "5f78d649f5b5ea5778d9eb3016e201ed"
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
    "url": "assets/js/37.9f802ddf.js",
    "revision": "c6561269a1da6032ed138a3c47de1939"
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
    "url": "assets/js/app.6cc2cad6.js",
    "revision": "ee3a415e086918fb62d700df35b68dc7"
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
    "revision": "18f2387242096f2eb978a89222bfe21e"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "9aec213fe9fccfe919db062815525186"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "4f8eda0022c55268313e64cb9f3b11ec"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "261f2f73fb5157f99bb6a302b14085bd"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "1b6ce4e09a4c5a8127dacff139868421"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "bdd03f729cff52139bde57447db95f56"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "39a578af31c8fcd9785ea824688eda09"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "d3ce21085b004bd939145cc0f0865855"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "4c31dbd240472af88bde60efa9e266cb"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "8abe9d9aa0485824ac8a7faf36c2a3cd"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "dcdb095bf2d5002483db7710b417b68e"
  },
  {
    "url": "cmdr/index.html",
    "revision": "355b8c751c14b589729b525fbcf7ddab"
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
    "revision": "902fec7fc01e4e2706893c3411ea396a"
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
    "revision": "fb05ec8d97055cfd06afdf40147d44eb"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "1338f45eacf7594a219e99f4866c53aa"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "f6b226356c7b678aac0ca6cf162c21c3"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "640c84e09b4c6e77df0aa0685fc1180c"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "1a7c31a7c26deb306dc6510056fba3bd"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "be99d165c3625be8a114d9b7e0c10cd4"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "c658216aa242d833f476d09d8cf1d6af"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "fe4ab7eac7db65ab85943904389cc70e"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "bf23c968a2448dc35800fb2b9c7d3650"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "999eb2525e887198e08c07eb2d16949c"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "ec700d6de156bfc0fcb7d6405d6b3d7c"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "0f8e4f5e31c4c6505dbece3ff74481d3"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "23e8d681d4d41ff95acc588020b0e553"
  },
  {
    "url": "zh/index.html",
    "revision": "d28a281ef171f98dcbb8d82f01f1f663"
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
