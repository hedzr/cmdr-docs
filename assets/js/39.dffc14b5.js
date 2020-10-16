(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{403:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"options-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-store"}},[t._v("#")]),t._v(" Options Store")]),t._v(" "),a("p",[t._v("Option Store, 或者 Options Store，管理着一个应用程序的全部配置数据。\n这些数据可能来自于环境变量、命令行输入、配置文件，甚至是从外部配置中心装载。它们可以有任意的层级和嵌套关系。它们可以包含布尔量，整数，浮点数，字符串，数组，Map 等多种格式的值。")]),t._v(" "),a("h2",{attrs:{id:"基本定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本定义"}},[t._v("#")]),t._v(" 基本定义")]),t._v(" "),a("h3",{attrs:{id:"keypath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keypath"}},[t._v("#")]),t._v(" "),a("code",[t._v("keyPath")])]),t._v(" "),a("p",[a("code",[t._v("keyPath")]),t._v(" 是 "),a("code",[t._v("Option Store")]),t._v(" 中的专属概念，一个选项能够被通过 "),a("code",[t._v("前缀.子命令序列.标志长格式")]),t._v(" 的方式被访问，这个格式就被称作 "),a("code",[t._v("keyPath")]),t._v("。")]),t._v(" "),a("p",[t._v("例如 "),a("code",[t._v("app.cert.create.cacert")]),t._v(" 中，app 是内置的前缀，cert.create 代表着 cert 命令及其 create 子命令，cacert 除了是标志的长格式字串之外，也表达出了从属于 cert.create 子命令的含义。")]),t._v(" "),a("h4",{attrs:{id:"选项-option-和标志-flag-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项-option-和标志-flag-的关系"}},[t._v("#")]),t._v(" 选项(Option)和标志(Flag)的关系")]),t._v(" "),a("p",[t._v("一个标志（Flag），指的是通过 "),a("code",[t._v("cmdr.NewBool()")]),t._v(" 等接口函数定义的实体，这个实体被用于命令行参数的解释，对应着一个特定的命令行参数选项。")]),t._v(" "),a("p",[t._v("一个选项（Option），指的是储存在 "),a("code",[t._v("Option Store")]),t._v(" 中的一个条目，例如 "),a("code",[t._v("“app.debug” => true")]),t._v("。")]),t._v(" "),a("p",[t._v("一个选项可能和一个标志相关联，但也可能不。但一个标志一定会对应着一个选项。")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("app.debug")]),t._v(" 这个选项来说，由于 "),a("code",[t._v("app")]),t._v(" 是内部设定的选项前缀（所以在体现到标志时不予考虑），故顶级标志 "),a("code",[t._v("--debug")]),t._v(" 与其是关联的。它的 yaml 表示能够体现出层级关系：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("而对于多级子命令的标志，例如 子命令 "),a("code",[t._v("cert / create")]),t._v(" 的标志 "),a("code",[t._v("--cacert")]),t._v("，会对应着 "),a("code",[t._v("app.cert.create.cacert")]),t._v(" 这个选项。它的 yaml 表示如同这样：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cacert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ca.pem\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert.pem\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert.key\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"getxxx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getxxx"}},[t._v("#")]),t._v(" "),a("code",[t._v("GetXXX")])]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("GetXXX")]),t._v(" 来获取选项值时，R版本能够忽略 "),a("code",[t._v("app")]),t._v(" 前缀的指定，从而简化你的编程思路。也就是说，"),a("code",[t._v('GetBoolR("debug")')]),t._v(" 将会取得 "),a("code",[t._v("app.debug")]),t._v(" 的布尔量值。")]),t._v(" "),a("p",[t._v("一般来说，我们支持如下几种 GetXXX 的变体：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.server.start.debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ncmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBoolR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server.start.debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ncmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBoolP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app.server.start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ncmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBoolRP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"server.start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("根据你的上下文代码的便利性，你可以选取最恰当的一种变体。")]),t._v(" "),a("p",[t._v("在多数情况下，为了代码逻辑的清晰性，或者 R 变体版本是最佳的选择。")]),t._v(" "),a("h3",{attrs:{id:"app-前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-前缀"}},[t._v("#")]),t._v(" "),a("code",[t._v("app")]),t._v(" 前缀")]),t._v(" "),a("p",[a("code",[t._v("app")]),t._v(" 前缀是为了在序列化 Option Store 为 YAML 或者其他外部格式时而特别建立的前缀，这样能够保证 Option Store 的序列化内容能够被恰当地包含到外部配置中心里（无论是 YAML，JSON，TOML，抑或是显式的微服务外部配置中心）。")]),t._v(" "),a("p",[a("code",[t._v("cmdr.WithOptionsPrefix(prefixes...)")]),t._v(" 允许你定制前缀，你可以不必使用内置的 "),a("code",[t._v("app")]),t._v(" 前缀而是使用 "),a("code",[t._v("voxr.app-gateway.")]),t._v(" 作为前缀：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n              cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithOptionsPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"voxr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app-gateway"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error: %+v\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("而对于同一个系统 voxr 的 api 服务，则可以使用 "),a("code",[t._v("voxr.api.")]),t._v(" 作为前缀：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithOptionsPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"voxr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"构造过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造过程"}},[t._v("#")]),t._v(" 构造过程")]),t._v(" "),a("p",[t._v("Option Store 包含了一整颗键值对的树结构。")]),t._v(" "),a("p",[t._v("这棵树是在 cmdr.Exec() 的初始化部分被构造的。")]),t._v(" "),a("h3",{attrs:{id:"来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[t._v("#")]),t._v(" 来源")]),t._v(" "),a("p",[t._v("Option Store 中的配置数据来自这些地方：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.NewBool")]),t._v(", "),a("code",[t._v("cmdr.NewString")]),t._v(" 等接口定义的命令行标志信息中提供的缺省值。例如：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enable-ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnvKeys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENABLE_UEH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enables the unhandled exception handler?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这里定义了一个 Bool 类型的标志（Flag），其默认值为 false，如果终端用户没有作出指定，则 Option Store 中会包含该条目且具有 bool 值 false。你可以通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得该值。")]),t._v(" "),a("blockquote",[a("p",[t._v("标志总是带有默认值 false，一般较少会使用 true值。")]),t._v(" "),a("p",[t._v("Toggleable Flags Group 例外，通常在组里会有一个 Flag 具有默认值 true。")])])]),t._v(" "),a("li",[a("p",[t._v("通过命令行参数指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ go run ./cli --enable-ueh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里会通过命令行将 enable-ueh 的值设置为 true。")]),t._v(" "),a("p",[t._v("此时，通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得的值将会为 true。")])]),t._v(" "),a("li",[a("p",[t._v("通过环境变量指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_UEH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" go run /cli\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果在定义 Flag 是没有通过 "),a("code",[t._v(".EnvKeys()")]),t._v(" 指定环境变量名，"),a("code",[t._v("cmdr")]),t._v(" 会试图查找自动化命名的环境变量名。例如此例中，自动化的环境变量名应该是 "),a("code",[t._v("APP_ENABLE_UEH")]),t._v("，请参考 "),a("code",[t._v("cmdr.WithEnvPrefix()")]),t._v(" 的相关说明。")])]),t._v(" "),a("li",[a("p",[t._v("通过配置文件装入的。例如在主配置文件中包含有如下条目：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是配置文件的前缀，可以通过 cmdr.WithOptionsPrefix() 自定义")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是通过 cmdr.Root(appName, version) 所指定的应用程序名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-ueh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字段名称应该等于 Flag 的 Full 字段值")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.Set(keyPath, value)")]),t._v(" 设置的。")])])]),t._v(" "),a("h3",{attrs:{id:"构造-xref-索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造-xref-索引"}},[t._v("#")]),t._v(" 构造 Xref 索引")]),t._v(" "),a("p",[t._v("在从来源构建键值对的树状结构的同时，cmdr 也会建立内部使用的索引表。这些索引表有多种用途，其中之一是完善用户定义的数据结构，将各命令、标志以及彼此之间的关联关系构造完整。")]),t._v(" "),a("p",[t._v("所以对于 Developers 来说，你可以较为宽松地定义命令或标志，不必太多操心各种细节。")]),t._v(" "),a("p",[t._v("例如你可以定义 "),a("code",[t._v('ToggleGroup("fruits")')]),t._v("，但可以略过 "),a("code",[t._v('Group("fruits")')]),t._v(" 定义，因为在 Xref 构造期间这样的缺省关联关系会被自动补全。")]),t._v(" "),a("h3",{attrs:{id:"外部配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外部配置文件"}},[t._v("#")]),t._v(" 外部配置文件")]),t._v(" "),a("p",[t._v("cmdr 自动查找一系列预定义的路径中符合要求的主配置文件（其文件名应该等于应用程序名，并且带有 .yml|yaml|json|toml 后缀），并自动载入其中的参数定义，同时监视该文件所在位置的名为 "),a("code",[t._v("conf.d")]),t._v(" 的子目录中的任何配置文件，只要它们带有 .yml|yaml|json|toml 后缀 。")]),t._v(" "),a("h4",{attrs:{id:"控制对配置文件的监视策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制对配置文件的监视策略"}},[t._v("#")]),t._v(" 控制对配置文件的监视策略")]),t._v(" "),a("p",[t._v("默认时，cmdr 不会监视主配置文件，但 "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L133",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithWatchMainConfigFileToo"),a("OutboundLink")],1),t._v(" 能够改变这一行为。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/hedzr/cmdr?tab=doc#WithNoWatchConfigFiles",target:"_blank",rel:"noopener noreferrer"}},[t._v("func WithNoWatchConfigFiles(b bool)"),a("OutboundLink")],1),t._v(" 可以关闭 cmdr 对配置文件或/及其子目录的监视。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://pkg.go.dev/github.com/hedzr/cmdr?tab=doc#WithNoLoadConfigFiles",target:"_blank",rel:"noopener noreferrer"}},[t._v("func WithNoLoadConfigFiles(b bool)"),a("OutboundLink")],1),t._v(" 则完全跳过载入配置文件的环节。")]),t._v(" "),a("h4",{attrs:{id:"预定义位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预定义位置"}},[t._v("#")]),t._v(" 预定义位置")]),t._v(" "),a("p",[t._v("默认时，预定位置为如下的数组：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./ci/etc/%s/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for developer")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/%s/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regular location")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/etc/%s/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regular macOS HomeBrew location")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$HOME/.config/%s/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// per user")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$HOME/.%s/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ext location per user")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$THIS/%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// executable's directory")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s.yml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current directory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("其中的 "),a("code",[t._v("$HOME")]),t._v("，"),a("code",[t._v("$THIS")]),t._v(" 会通过环境变量展开，"),a("code",[t._v("$THIS")]),t._v(" 表示执行文件所在的目录。"),a("code",[t._v("%s")]),t._v(" 会被展开为 应用程序名。")]),t._v(" "),a("p",[t._v("通过 "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L115",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithPredefinedLocations"),a("OutboundLink")],1),t._v(" 你可以定制这个数组，从而自定义 cmdr 如何去寻找主配置文件，包括当你想要主配置文件不一定采用应用程序名称时，也能从此处进行改变。")]),t._v(" "),a("h4",{attrs:{id:"更新后处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新后处理"}},[t._v("#")]),t._v(" 更新后处理")]),t._v(" "),a("p",[t._v("如果你愿意提供对外部依赖资源（例如 redis 服务）的动态重新初始化的能力的话，通过 "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L154",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithConfigLoadedListener"),a("OutboundLink")],1),t._v(" 可以实现这样的特性，当然具体实施依然会是很复杂的，你需要有正确的解决数据竞争的代码逻辑。")]),t._v(" "),a("h3",{attrs:{id:"handlers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handlers"}},[t._v("#")]),t._v(" Handlers")]),t._v(" "),a("h4",{attrs:{id:"withxrefbuildinghooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withxrefbuildinghooks"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L23",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithXrefBuildingHooks"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("WithXrefBuildingHooks")]),t._v(" 可以在 cmdr 的 Xref 索引构造前后设置拦截器。")]),t._v(" "),a("p",[t._v("一般的说，后置拦截器是一个很有用的拦截点。因为在这个时候，所有常规途径的命令行参数定义都被预处理过了，所有环境变量值都已经被关联到对应的选项了，所有的外部配置文件中的值都已经被解释并构造到 Option Store 中了。所以此时如果你要追加针对整棵树的操作的话，这里就是最佳的切入点。")]),t._v(" "),a("h4",{attrs:{id:"withafterargsparsed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withafterargsparsed"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L387",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithAfterArgsParsed"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("cmdr 在 Xref 索引构建完成之后会开始解释命令行参数。而当命令行参数被有效地解释之后，"),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L387",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithAfterArgsParsed"),a("OutboundLink")],1),t._v(" 所定义的回调函数将获得执行机会，如果回调函数无错地返回，则 cmdr 将会转去执行已经命中的 子命令的响应函数（Action），否则的话 cmdr 放弃进一步操作退出应用程序。")]),t._v(" "),a("p",[t._v("所以这里可以做全局的身份鉴定，参数有效性验证等操作——根据你的实际需要。")]),t._v(" "),a("h4",{attrs:{id:"withconfigloadedlistener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withconfigloadedlistener"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L154",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithConfigLoadedListener"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在 cmdr 执行命中子命令的 Action 函数的过程中，外部配置文件也处于被监视的状态中。如果外部配置文件发生了变化，那么对应的文件将被自动载入并合并到 "),a("code",[t._v("Option Store")]),t._v(" 的现有参数树中，然后 "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L154",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithConfigLoadedListener"),a("OutboundLink")],1),t._v(" 所指定的回调函数将会获得一个阐述这些变更的机会。")]),t._v(" "),a("p",[t._v("如果你愿意提供对外部依赖资源（例如 redis 服务）的动态重新初始化的能力的话，通过 "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L154",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithConfigLoadedListener"),a("OutboundLink")],1),t._v(" 可以实现这样的特性，当然具体实施依然会是很复杂的，你需要有正确的解决数据竞争的代码逻辑。")]),t._v(" "),a("h4",{attrs:{id:"withautomaticenvhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#withautomaticenvhooks"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithAutomaticEnvHooks"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在外部配置文件被解释之后，cmdr 的初始化代码也会扫描环境变量并完成映射。")]),t._v(" "),a("p",[t._v("在完成了匹配的环境变量的映射操作之后， "),a("a",{attrs:{href:"https://github.com/hedzr/cmdr/blob/v1.6.49/exec_with_options.go#L37",target:"_blank",rel:"noopener noreferrer"}},[t._v("WithAutomaticEnvHooks"),a("OutboundLink")],1),t._v(" 所指定的回调函数会获得执行机会。你可以借助这个回调函数对默认的映射结果进行审视。")]),t._v(" "),a("p",[t._v("🔚")])])}),[],!1,null,null,null);s.default=n.exports}}]);