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
    "revision": "1c31edb5b249a8b72deed4ba72f59079"
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
    "url": "assets/js/31.3098e38a.js",
    "revision": "7aad6e515cf7ad0632b7f96fb443be5f"
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
    "url": "assets/js/34.d145b08a.js",
    "revision": "7b66d70bcc4c3ef56b0364c35cbff611"
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
    "url": "assets/js/37.d9ac00ba.js",
    "revision": "ab4e45bc2cc781e3d989be0ed299c439"
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
    "url": "assets/js/app.57e07a9b.js",
    "revision": "9eb5785859b464b448095b6fa98fad98"
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
    "revision": "6939353789e4d7eca4c011838f82b618"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "e95cb2260d1e556c1fde9343011c13f5"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "4bc7510cce36b1cdaa2e310ec60c5485"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "2b67cf882a692e5916c98f05b82498e1"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "638095bd278c006337ce95a0e23d1928"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "205a534f1776e1708e7f32962f21e266"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "2f0d347b12ac94b01073a6411b5d374c"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "ae8fa07dbc1ebcd28fb77853d012728d"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "55a7614a9d4d78fe2083a5bf970eddbd"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "c994c71bcb6affc47219742fe2e13254"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "47127af95b9eece07f3acc6bfd56194e"
  },
  {
    "url": "cmdr/index.html",
    "revision": "97ee2502cf57a591478052168909465d"
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
    "revision": "1bdf5bc0a520b75ec2cef1b23431df47"
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
    "revision": "5bd5bdaef7b1406ccc0fb8bfb8223687"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "89ce885d374d200aafadd651dddf22b2"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "52feacaee8054a8cb2a46d7d04f3387c"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "3ab0956eb708e2a3e4cf74d4be95f638"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "165a9080e1c634c969f6c946d7352f06"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "3f46f821761df0a058ab0713151a581e"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "3f72b183783f19a61d9a6a4fb658fe21"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "cc746ab7e21ce3a6ea29f304d05680e2"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "30375519caff219e63b953aae7a216f2"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "5f2e7d2e2bb5a3a1b270daf6edec7ec9"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "00934fe8169a3f914eca9b487ecc9013"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "24c44b31f446b494dd3428d7502e39f7"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "df3fd3b7bfcdd331251db204f58488f1"
  },
  {
    "url": "zh/index.html",
    "revision": "1e8d44c8d8551ff0614c170184428f25"
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
