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
    "revision": "5147b4d03590c4e8b3a062a001c0b3af"
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
    "url": "assets/js/21.2d20ecfe.js",
    "revision": "7e7a690b153efc31c60d88cce3c541d5"
  },
  {
    "url": "assets/js/22.f077707c.js",
    "revision": "5f7e9527780cefbe75fe688f961f9d5f"
  },
  {
    "url": "assets/js/23.5f542946.js",
    "revision": "c2f81fd2acd55bd23d23eb08062f5825"
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
    "url": "assets/js/29.679b14c6.js",
    "revision": "2a4a52446171f3e2fea578d6f154ca14"
  },
  {
    "url": "assets/js/30.422cf996.js",
    "revision": "9d665fa5243b36e9e1d7028aa7869385"
  },
  {
    "url": "assets/js/31.35c5c9de.js",
    "revision": "f1a69cf329a7134f4d7bc3e5b5917469"
  },
  {
    "url": "assets/js/32.ff223ef1.js",
    "revision": "3d742637589b919197fb65dc415157c6"
  },
  {
    "url": "assets/js/33.82e2b817.js",
    "revision": "d0b90d612db1281d1cd70fe8fb837b28"
  },
  {
    "url": "assets/js/34.5f1d478c.js",
    "revision": "8c8fc35bf6b25f530a9ef200b9de91aa"
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
    "url": "assets/js/37.f683c7d6.js",
    "revision": "1f37fb662dd3000b422dacb982f0b983"
  },
  {
    "url": "assets/js/38.9892a3ff.js",
    "revision": "5e51d49ca5bcef5a991c45304d23acee"
  },
  {
    "url": "assets/js/39.1d0600d9.js",
    "revision": "002167042134fd12eb34179d04ccb348"
  },
  {
    "url": "assets/js/4.5da0fd51.js",
    "revision": "4448c1cb79e0173be2230aef8f440114"
  },
  {
    "url": "assets/js/40.e9092dc9.js",
    "revision": "fb91cf2870e34e33f1e12d0c403638f0"
  },
  {
    "url": "assets/js/41.99efab62.js",
    "revision": "e596495f1c50d27bfdb544f9eb788f7f"
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
    "url": "assets/js/app.f1cb5f85.js",
    "revision": "242226a7aa171b14d4d31dd87244d633"
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
    "revision": "2eb18b95f32821b1745c8de3b41e627b"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "5b158de1281fe8c31aca2ddab301c0f2"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "dcce476ba01a37a9af6aee36b8cbf58e"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "958f5dc8308f664cfd048b182d05bf9e"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "0bf652d13cf9d98c0b6c0a8543e0feb8"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "490399b133b925fd4f8189061b414cae"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "2253023079f224e8eb5bbca1ec536de4"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "107448a36943529ddc479ca490fad526"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "3477791c43df38480960cb2c2985da10"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "bde241bbbc819f8ddc15bb26963a69fa"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "dd0eef25a345a52802b81d55e498d637"
  },
  {
    "url": "cmdr/index.html",
    "revision": "bb3d8a6bc7102b6b9fe41ec5280f8dd3"
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
    "revision": "8394c19054ecfecca16b653257f71f8a"
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
    "revision": "bec5fa6360520fbe05a070a4d6971340"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "880b1f018e1226f5dad09fe2237d481c"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "fd0b20e22765eb7555b6a36badc606e3"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "92346edb864dabd508ca84208f5c9689"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "68cdfd27bb41ccad08dc6c3c8033b43a"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "e71dcec71ec72bd8d7ec0fa36288a3e0"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "023c61293ffda93ab0cfbb01956fb84d"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "dd8702b189265905739384e361ec6ee9"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "a7e14e5a0a136210237882ebb31d494d"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "37937e3b89cd8371f187970bca24ac2c"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "f17ca284653c96e6cadd859d6e1b5ca3"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "99a3eb289c367fe4b8be4ff1debb1095"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "4bb1c77214f709c904dfa888925eecf6"
  },
  {
    "url": "zh/index.html",
    "revision": "67aab1c6cb01c40cb33d970b49a6e06e"
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
