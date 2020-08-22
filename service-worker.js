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
    "revision": "cda226316951cf0746873be929eacbca"
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
    "url": "assets/js/29.11c2d4df.js",
    "revision": "a035070927464b669c525332360e639a"
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
    "url": "assets/js/37.c6255c5e.js",
    "revision": "d99c21faa2691a2c88e3487f37a79e1b"
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
    "url": "assets/js/app.20f58302.js",
    "revision": "541fb2e8b2d5cbc48d46abe1290455c3"
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
    "revision": "2f1a54bb18af6e2f3cae1b6e28aaf74b"
  },
  {
    "url": "cmdr/getting-started.html",
    "revision": "d1356cc47614c9415bbdc7a6b6b57bf6"
  },
  {
    "url": "cmdr/guide/index.html",
    "revision": "a88830bd8a9116ad11392a8eb85e6292"
  },
  {
    "url": "cmdr/guide/Z01.cli-main.html",
    "revision": "6f8c42df44358edc846ee1d7eed4f253"
  },
  {
    "url": "cmdr/guide/Z05.subcommand.html",
    "revision": "03a844608988874b51ea10cfeb344461"
  },
  {
    "url": "cmdr/guide/Z06.actions.html",
    "revision": "8087ec2160286553e524cd55526215b5"
  },
  {
    "url": "cmdr/guide/Z07.flags.html",
    "revision": "635aa7dbfbff9077b7ed4ced6d6f2c98"
  },
  {
    "url": "cmdr/guide/Z15.adv.html",
    "revision": "15f1050e48a2f978335a16eb5148f274"
  },
  {
    "url": "cmdr/guide/Z30.option-store.html",
    "revision": "74c3ea107732cea3c79b38c20b6d6d3d"
  },
  {
    "url": "cmdr/guide/Z81.helpers.html",
    "revision": "bc7a83da70203418c4ba7daf5ac8c63d"
  },
  {
    "url": "cmdr/guide/Z91.others.html",
    "revision": "2df4edcad5c24cf5cdba6583f26d497e"
  },
  {
    "url": "cmdr/index.html",
    "revision": "9354e186a08f072ce282ab8a3f88d20d"
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
    "revision": "05dee67fc7f682a1a2e2a6073bb55413"
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
    "revision": "56854fcaea927ef5b5d7dd859c8af77a"
  },
  {
    "url": "zh/cmdr/getting-started.html",
    "revision": "4b06879b092337b60829d9cb0ca78d53"
  },
  {
    "url": "zh/cmdr/guide/index.html",
    "revision": "3cdca0cdf434436aabc2bdf4d466d39a"
  },
  {
    "url": "zh/cmdr/guide/Z01.cli-main.html",
    "revision": "0df2ac9e33a420eb37b2a206cfd75d42"
  },
  {
    "url": "zh/cmdr/guide/Z05.subcommand.html",
    "revision": "7c2605ed2817835ae78a700d167674d7"
  },
  {
    "url": "zh/cmdr/guide/Z06.actions.html",
    "revision": "5e805a42eca9e1d6bf25e92e47e9d6f2"
  },
  {
    "url": "zh/cmdr/guide/Z07.flags.html",
    "revision": "48d48332820f70bec5196770f6277fc9"
  },
  {
    "url": "zh/cmdr/guide/Z15.adv.html",
    "revision": "21b1619abe610ed163dbf1525d1c99b5"
  },
  {
    "url": "zh/cmdr/guide/Z30.option-store.html",
    "revision": "d298da00c4733e68253c892d54e0f378"
  },
  {
    "url": "zh/cmdr/guide/Z81.helpers.html",
    "revision": "95906455bb67eb814cabed05f0a97824"
  },
  {
    "url": "zh/cmdr/guide/Z91.others.html",
    "revision": "e7fb712c9539ae502d1e01d13992b3bb"
  },
  {
    "url": "zh/cmdr/index.html",
    "revision": "54bb298b3f225ce11865725270530844"
  },
  {
    "url": "zh/cmdr/markdown-demo.html",
    "revision": "73be2d4effc0b295f8f2f6b4ed554aeb"
  },
  {
    "url": "zh/index.html",
    "revision": "392754055509306aedf59de31d9f3f19"
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
