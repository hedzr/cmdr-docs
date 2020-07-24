(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{404:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[t._v("#")]),t._v(" Others")]),t._v(" "),a("h2",{attrs:{id:"addons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addons"}},[t._v("#")]),t._v(" Addons")]),t._v(" "),a("h3",{attrs:{id:"using-isdelve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-isdelve"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("isdelve")])]),t._v(" "),a("p",[t._v("isdelve 几乎被内置于 "),a("code",[t._v("cmdr")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("几乎，是指如果你会使用到几个特别的 API 调用的话，则 isdelve 会被自动地引用到你的项目中，否则即使你使用了 cmdr 也不会自动包含 isdelve 的相关内容。这几个特别调用是：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("cmdr.InDebugging() bool")])]),t._v(" "),a("li",[a("code",[t._v("cmdr.IsDebuggerAttached() bool")])])]),t._v(" "),a("p",[t._v("isdelve 提供的检测函数，目的在于检测 dlv 调试器有否在线。如果你的 app 被启用于一个 dlv 兼容的调试容器中，那么上述检测会返回 true 值。")]),t._v(" "),a("h4",{attrs:{id:"和-isdebugmode-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-isdebugmode-的区别"}},[t._v("#")]),t._v(" 和 IsDebugMode() 的区别")]),t._v(" "),a("p",[a("code",[t._v("IsDebugMode() bool")]),t._v(" 的功能是测试 "),a("code",[t._v('cmdr.GetBoolR("debug")')]),t._v(" 是否被置位。要设置这个标志，你可以在命令行中输入 "),a("code",[t._v("--debug/-D")]),t._v("，这是在 cmdr 中内建的隶属于 RootCommand 的标志，目的就在于预置一个全局的 "),a("code",[t._v("调试模式")]),t._v("。")]),t._v(" "),a("p",[t._v("一般来说，所谓的 "),a("code",[t._v("调试模式")]),t._v(" 就是为了能够输出更多的 app 运行过程中预埋的调试日志，如果你使用了 logex 集成（这是我们提供的一个用于整合 cmdr 和 logrus 的附加库），那么 "),a("code",[t._v("logrus.Debug(...)")]),t._v(" 将会在 "),a("code",[t._v("--debug")]),t._v(" 为 true 时自动被输出。")]),t._v(" "),a("blockquote",[a("p",[t._v("See also: "),a("code",[t._v("WithLogex()")])])]),t._v(" "),a("h4",{attrs:{id:"debug-vs-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-vs-debug"}},[t._v("#")]),t._v(" "),a("code",[t._v("--debug")]),t._v(" vs "),a("code",[t._v("~~debug")])]),t._v(" "),a("p",[t._v("要注意的是，"),a("code",[t._v("--debug")]),t._v(" 是隶属于 RootCommand 的命令行标志，它和 "),a("code",[t._v("~~debug")]),t._v(" 也有所不同。")]),t._v(" "),a("p",[a("code",[t._v("~~debug")]),t._v(" 采用 cmdr 特有的标志前缀 "),a("code",[t._v("~~")]),t._v("，这会设置一个在 Option Store 中的 "),a("code",[t._v("debug")]),t._v(" 配置项，而 "),a("code",[t._v("--debug")]),t._v(" 会设置的是 Option Store 中的 "),a("code",[t._v("app.debug")]),t._v(" 配置项。")]),t._v(" "),a("p",[t._v("所以通过 "),a("code",[t._v('cmdr.GetBoolR("debug")')]),t._v(" 能够获取到 "),a("code",[t._v("--debug")]),t._v(" 的配置值，但你无法通过 cmdr.GetBoolR() 的方式取得 "),a("code",[t._v("~~debug")]),t._v(" 的值。取而代之的是，你应该用 "),a("code",[t._v('cmdr.GetBool("debug")')]),t._v(" 来获取 "),a("code",[t._v("~~debug")]),t._v(" 的配置值。")]),t._v(" "),a("blockquote",[a("p",[t._v("GetBool(keyPath) 直接取得 keyPath 对应的配置项的值。")]),t._v(" "),a("p",[t._v("GetBoolR(keyPath) 首先为 keyPath 添加所谓的 OptionsPrefix 前缀，然后再取得新的 keyPath 所对应的配置项的值。")]),t._v(" "),a("p",[t._v('默认的 OptionsPrefix 为 "app"。')])]),t._v(" "),a("h3",{attrs:{id:"using-dex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-dex"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("dex")])]),t._v(" "),a("p",[t._v("(TODO)")]),t._v(" "),a("h2",{attrs:{id:"从-flag-迁移"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-flag-迁移"}},[t._v("#")]),t._v(" 从 flag 迁移")]),t._v(" "),a("p",[t._v("请参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hedzr.github.io/golang/cmdr/others/cmdr-migrating-from-flag/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 flag 迁移到 cmdr | hzSomthing"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"使用-flag-等价的命令行界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-flag-等价的命令行界面"}},[t._v("#")]),t._v(" 使用 flag 等价的命令行界面")]),t._v(" "),a("p",[t._v("我们已经熟知 golang 提倡的是短选项类似的命令行界面，每个选项均以短横线引导，选项被建议采用完整的单词而不是缩略语。所以当你使用 flag 时，一个 app 的选项列表往往是这样的风格：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("Usage of flagdemo:\n  -age int\n    \tInput Your Age "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -flagname int\n    \tJust "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" demo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -gender string\n    \tInput Your Gender "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"male"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -name string\n    \tInput Your Name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nick"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("其源码可以参考这里：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://play.golang.org/p/9I0ZcqJ_oRs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://play.golang.org/p/9I0ZcqJ_oRs"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"用-cmdr-来模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用-cmdr-来模拟"}},[t._v("#")]),t._v(" 用 cmdr 来模拟")]),t._v(" "),a("p",[t._v("由于 cmdr 允许短选项不必被限制为单个字母，故而当你不愿采用标准的 POXIS CLI 界面，而是想沿循 Golang 惯例时，也是能够做到的。")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/hedzr/cmdr"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error: %+v\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RootCommand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\troot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("appName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copyright")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("copyright"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hedzr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" longDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Examples")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("examples"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\trootCmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("RootCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input Your Age"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flagname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flagname"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Just for demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"male"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input Your Gender"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nick"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input Your Name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tappName   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag-demo"')]),t._v("\n\tversion   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),t._v("\n\tcopyright "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag-demo is an effective devops tool"')]),t._v("\n\tdesc      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag-demo is an effective devops tool. It make an demo application for `cmdr`."')]),t._v("\n\tlongDesc  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flag-demo is an effective devops tool. It make an demo application for `cmdr`."')]),t._v("\n\texamples  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("``")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br")])]),a("p",[t._v("其界面形如下面的输出：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/07/24/wgFbJzSMeYZ1XNy.png",alt:"image-20200724131056493"}})]),t._v(" "),a("p",[t._v("可以见到，借助 cmdr 的增强的短选项，我们可以实现和 flag 完全等价的 CLI 界面。")]),t._v(" "),a("p",[t._v("🔚")])])}),[],!1,null,null,null);s.default=e.exports}}]);