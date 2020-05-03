importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
  {
    "url": "bringiton.3c660ff1.mp3",
    "revision": "c8e9c4535dbcd07db1f9ae390621cbba"
  },
  {
    "url": "congrats.16068947.mp3",
    "revision": "886a0be1296b8360206ce8586d99b3a5"
  },
  {
    "url": "data/default/apple.mp3",
    "revision": "e3b8ab1ca63e44cebc740aec6f5c2ef0"
  },
  {
    "url": "data/default/fig.mp3",
    "revision": "70c59a5f47faf3387507a9fab0ff95b0"
  },
  {
    "url": "data/default/grape.mp3",
    "revision": "8041506396645da7a4048fe11158becd"
  },
  {
    "url": "data/default/kiwi.mp3",
    "revision": "459951580a36ad2907ffb56f400a4a0b"
  },
  {
    "url": "data/default/lemon.mp3",
    "revision": "017562d786d36540d7540e826e52ec46"
  },
  {
    "url": "data/default/lime.mp3",
    "revision": "52665e7c55f0050a19602c66ee815e0f"
  },
  {
    "url": "data/default/mango.mp3",
    "revision": "e00121ba5831b444d40a51f9682ee0aa"
  },
  {
    "url": "data/default/melon.mp3",
    "revision": "24c0c7ac47e30a7857cde4a3ab830189"
  },
  {
    "url": "data/default/orange.mp3",
    "revision": "74caca8f10a2b150a4b271f08ec7a90d"
  },
  {
    "url": "data/default/peach.mp3",
    "revision": "69c519a174b115253cbf6c8f578bc295"
  },
  {
    "url": "data/default/pear.mp3",
    "revision": "707f4287691dcbdb6226cc441e90cf8a"
  },
  {
    "url": "data/default/pinapple.mp3",
    "revision": "9ac753730d44576afe6b9256f28dc5d9"
  },
  {
    "url": "data/default/plum.mp3",
    "revision": "323a3396ea342177d921331223ccd62e"
  },
  {
    "url": "data/default/raspberry.mp3",
    "revision": "08232c4098af0299ed32c8121ee4c8c6"
  },
  {
    "url": "data/default/script.js",
    "revision": "49034d5c5747a0b8f721e01080775912"
  },
  {
    "url": "data/default/strawberry.mp3",
    "revision": "925917a0df2acd45447d4a468fb65299"
  },
  {
    "url": "default.js",
    "revision": "f667cba74fbcccff714a49eb15db62b8"
  },
  {
    "url": "doh.d94704d2.mp3",
    "revision": "404bf5d6d2ff632a541563bf6abe71fe"
  },
  {
    "url": "eee.09f2aa1f.mp3",
    "revision": "831a9eea5881dc15bc2dbc4a702cf89c"
  },
  {
    "url": "eep.0d521ce3.mp3",
    "revision": "6bde71b0eaac3b4e1862bc1943a5034a"
  },
  {
    "url": "enough.869eba70.mp3",
    "revision": "bb9392958d1cab9b4390034c2f8085e8"
  },
  {
    "url": "ergh.4599d1ee.mp3",
    "revision": "77e5f7bea63983888f195b5480314366"
  },
  {
    "url": "fontyMcFontFace.ae89b17a.woff2",
    "revision": "0a60ba455bfef1ed27f05bc09b2890f2"
  },
  {
    "url": "gameon.faea8e66.mp3",
    "revision": "5ae68abb91a7affdc54fbcec1ec0b14c"
  },
  {
    "url": "gameoverman.b29caa05.mp3",
    "revision": "27a4c81cac4e61fc0863ef3c9d8759bd"
  },
  {
    "url": "highscore.2022f0bd.mp3",
    "revision": "fd352ffe14093a89b22a61e415ef7c7c"
  },
  {
    "url": "impressive.b26add6c.mp3",
    "revision": "ea74be3fe606a65ab6a851ff4f0680c5"
  },
  {
    "url": "index.html",
    "revision": "4a44476862ef28fcb1fc82e2fe4764b4"
  },
  {
    "url": "intro.aa768d78.mp3",
    "revision": "60234debdf48c573bac24c593941661e"
  },
  {
    "url": "letsdothis.a08d0fbe.mp3",
    "revision": "71b33d852920e6fa693ef9f931d7c6a4"
  },
  {
    "url": "letsgo.ff8fcb75.mp3",
    "revision": "6b36a949de94bc2709b8d9a9446f3605"
  },
  {
    "url": "meanie.58082afe.mp3",
    "revision": "edf708ea9c34cd5c2b8cce56c96f3b60"
  },
  {
    "url": "mummy.f6105724.mp3",
    "revision": "4eb19c3cdec953fb9479f16a438d93e2"
  },
  {
    "url": "oof.2543af1f.mp3",
    "revision": "b8d9c954898f5fd6ec4062e4559e384a"
  },
  {
    "url": "ooo.dc9593da.mp3",
    "revision": "1393573a63ff1b86e3c624b768eabe8d"
  },
  {
    "url": "ooo2.96b9121d.mp3",
    "revision": "5cf74d7dc3787471a7b2def1c47e2b9e"
  },
  {
    "url": "ouch.1988d6e9.mp3",
    "revision": "571a2cf7133bea3a9bb115e6c731008d"
  },
  {
    "url": "ouchie.b57cf0cf.mp3",
    "revision": "3be4f639bca2d0462507905e25a7a86e"
  },
  {
    "url": "ow.66dabc61.mp3",
    "revision": "d83854372962ca87d3aed279d816b72c"
  },
  {
    "url": "retreat.f2f452ff.mp3",
    "revision": "be12a177ef027923e1417cb1dbc7fa70"
  },
  {
    "url": "runaway.8a9641f2.mp3",
    "revision": "444fce9c05030c68cd29edb71d450390"
  },
  {
    "url": "src.16e959f0.js",
    "revision": "d527d3244e35d79064162612242efabe"
  },
  {
    "url": "surrender.000652f6.mp3",
    "revision": "d4a7e502d1e1b09e36de352f84c4f353"
  },
  {
    "url": "waa.daaa4132.mp3",
    "revision": "99af578552a058506807b8d28efbab6f"
  },
  {
    "url": "waa2.c1c6d2dd.mp3",
    "revision": "7280a7b9353fa6b7a9a3f1998a6cfb3d"
  },
  {
    "url": "welldone.fbd98a53.mp3",
    "revision": "612141d2dc2725a37fb9d5499fade331"
  },
  {
    "url": "woah.71339eff.mp3",
    "revision": "9eb778121a75ea6b8d6b699b0616dfcd"
  },
  {
    "url": "ya.7d699edf.mp3",
    "revision": "67cca36ae7474a560cc3220df0928c32"
  },
  {
    "url": "yoreadyforthis.c0e6c701.mp3",
    "revision": "bf08073a87a67ab052f596028d606ac7"
  },
  {
    "url": "youthebest.007f96a5.mp3",
    "revision": "3cc0b15e11b81c50633ad84cceab5f12"
  }
]);

workbox.routing.registerNavigationRoute("./index.html");
