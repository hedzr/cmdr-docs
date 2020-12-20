(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{415:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[t._v("#")]),t._v(" Flags")]),t._v(" "),a("h3",{attrs:{id:"什么是标志-flag-、选项-option"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是标志-flag-、选项-option"}},[t._v("#")]),t._v(" 什么是标志（Flag）、选项（Option）")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("cmdr")]),t._v(" 中，标志和选项常常是混用的。但它们对于 "),a("code",[t._v("cmdr")]),t._v(" 来说，确实有分别。")]),t._v(" "),a("p",[t._v("一个标志（Flag），指的是通过 "),a("code",[t._v("cmdr.NewBool()")]),t._v(" 等接口函数定义的实体，这个实体被用于命令行参数的解释，对应着一个特定的命令行参数选项。")]),t._v(" "),a("p",[t._v("一个选项（Option），指的是储存在 "),a("code",[t._v("Option Store")]),t._v(" 中的一个条目，例如 "),a("code",[t._v("“app.debug” => true")]),t._v("。它的 yaml 表示能够体现出层级关系：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"和-option-store-相集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#和-option-store-相集成"}},[t._v("#")]),t._v(" 和 "),a("code",[t._v("Option Store")]),t._v(" 相集成")]),t._v(" "),a("p",[t._v("一个选项可能和一个标志相关联，但也可能不。但一个标志一定会对应着一个选项。")]),t._v(" "),a("p",[t._v("对于 "),a("code",[t._v("app.debug")]),t._v(" 这个选项来说，由于 "),a("code",[t._v("app")]),t._v(" 是内部设定的选项前缀（所以在体现到标志时不予考虑），故顶级标志 "),a("code",[t._v("--debug")]),t._v(" 与其是关联的。")]),t._v(" "),a("p",[t._v("而对于多级子命令的标志，例如 子命令 "),a("code",[t._v("cert / create")]),t._v(" 的标志 "),a("code",[t._v("--cacert")]),t._v("，会对应着 "),a("code",[t._v("app.cert.create.cacert")]),t._v(" 这个选项。")]),t._v(" "),a("p",[t._v("当使用 "),a("code",[t._v("GetXXX")]),t._v(" 来获取选项值时，R版本能够忽略 "),a("code",[t._v("app")]),t._v(" 前缀的指定，从而简化你的编程思路。也就是说，"),a("code",[t._v('GetBoolR("debug")')]),t._v(" 将会取得 "),a("code",[t._v("app.debug")]),t._v(" 的布尔量值。")]),t._v(" "),a("p",[a("code",[t._v("app")]),t._v(" 前缀是为了在序列化 Option Store 为 YAML 或者其他外部格式时而特别建立的前缀，这样能够保证 Option Store 的序列化内容能够被恰当地包含到外部配置中心里（无论是 YAML，JSON，TOML，抑或是显式的微服务外部配置中心）。")]),t._v(" "),a("h4",{attrs:{id:"keypath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keypath"}},[t._v("#")]),t._v(" keyPath")]),t._v(" "),a("p",[a("code",[t._v("keyPath")]),t._v(" 是 "),a("code",[t._v("Option Store")]),t._v(" 中的专属概念，一个选项能够被通过 "),a("code",[t._v("前缀.子命令序列.标志长格式")]),t._v(" 的方式被访问，这个格式就被称作 "),a("code",[t._v("keyPath")]),t._v("。")]),t._v(" "),a("p",[t._v("例如 "),a("code",[t._v("app.cert.create.cacert")]),t._v(" 中，app 是内置的前缀，cert.create 代表着 cert 命令及其 create 子命令，cacert 除了是标志的长格式字串之外，也表达出了从属于 cert.create 子命令的含义。")]),t._v(" "),a("h2",{attrs:{id:"define-a-flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-a-flag"}},[t._v("#")]),t._v(" Define a flag")]),t._v(" "),a("p",[t._v("增加一个标志（Flag）定义非常容易。")]),t._v(" "),a("h3",{attrs:{id:"bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bool"}},[t._v("#")]),t._v(" Bool")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"V"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"display the version of Wget and exit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tcmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrintVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrShouldBeStopException\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("blockquote",[a("p",[t._v("在标志的 Action 函数体中，"),a("code",[t._v("retun cmdr.ErrShouldBeStopException")]),t._v(" 能够立即终止 "),a("code",[t._v("cmdr")]),t._v("的处理循环并退出应用程序，剩余的命令行参数将被放弃。")])]),t._v(" "),a("p",[t._v("通过 NewBool完成了定义的最后，你一定要使用 "),a("code",[t._v("AttachTo(parent)")]),t._v(" 的方式将这个标志挂接给某个命令或子命令。")]),t._v(" "),a("h4",{attrs:{id:"默认值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[t._v("#")]),t._v(" 默认值")]),t._v(" "),a("p",[a("code",[t._v("NewBool(defaultValue...)")]),t._v(" 要求一个（甚至是多个）可选的默认值作为其参数。")]),t._v(" "),a("p",[t._v("但一般情况下，我们定义一个布尔量的标志总是带有 false 默认值，因此命令行中的 "),a("code",[t._v("--falg")]),t._v(" 才能翻转其值为 true。例外的情况有两个：")]),t._v(" "),a("ol",[a("li",[t._v("按照 POSIX 兼容来说，在命令行中针对短标志可以采用 "),a("code",[t._v("-f+")]),t._v(" 和 "),a("code",[t._v("-f-")]),t._v(" 的格式来强制其值为 true 和 false。这样的话，我们可以输入这样的命令行："),a("code",[t._v("-f+ -f- -f -f+ -f-")]),t._v("。")]),t._v(" "),a("li",[t._v("对于 Toggleable Flags Group 的情况，一组可以像 Radio Button 一样翻转的标志组合中，通常总是有一个标志带有默认的 true 值。")])]),t._v(" "),a("h4",{attrs:{id:"titles-full-short-aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titles-full-short-aliases"}},[t._v("#")]),t._v(" "),a("code",[t._v("Titles(full, short, aliases...)")])]),t._v(" "),a("p",[a("code",[t._v("full")]),t._v(" 指定了标志的长格式文字表示。")]),t._v(" "),a("p",[a("code",[t._v("full")]),t._v(" 不可以缺省，它同时被用作 keyPath 的一部分（参见 Option Store 的 keyPath）。")]),t._v(" "),a("p",[t._v("由于 Golang 的限制，short 参数无法被省去，但你可以指定 "),a("code",[t._v('""')]),t._v(" 空串给它。")]),t._v(" "),a("h4",{attrs:{id:"description-desc-longdesc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-desc-longdesc"}},[t._v("#")]),t._v(" "),a("code",[t._v("Description(desc, longDesc...)")])]),t._v(" "),a("p",[t._v("长格式的描述文字块是可选参数，如果提供的话，在标志的专属帮助屏中会被显示出来。")]),t._v(" "),a("h4",{attrs:{id:"短标志的组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#短标志的组合"}},[t._v("#")]),t._v(" 短标志的组合")]),t._v(" "),a("p",[t._v("对于布尔量的短标志来说，POSIX 要求它们能够被组合到i一起。其含义是：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-azro 等价于 -a -z -r -o，或者等价于 -a -zr -o\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h5",{attrs:{id:"cmdr-的增强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmdr-的增强"}},[t._v("#")]),t._v(" cmdr 的增强")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("cmdr 的短标志不会被限定在单个字母。")]),t._v(" "),a("p",[t._v("我们支持多个字母数字符号作为短标志。")]),t._v(" "),a("p",[t._v("换句话说，你可以令长短标志的界限模糊，从而提供同时兼容于 golang flag 风格和 getopt 风格的标志集合。")]),t._v(" "),a("blockquote",[a("p",[t._v("Golang flag 风格：命令行参数总是单短横线引导的，如："),a("code",[t._v("-host abc -port 9999")])]),t._v(" "),a("p",[t._v("getopt 风格：允许单、双短横线引导，分别代表短、长标志，通常短标志使用单个字母或数字，如："),a("code",[t._v("-d -t --retry 3")]),t._v("。")]),t._v(" "),a("p",[t._v("cmdr 风格：在完全兼容 getopt 风格的基础上，通过解除单字母短标志限制，使得 cmdr cli app 也能支持 "),a("code",[t._v("-host abc")]),t._v(" 这样的 golang flag 风格，甚至是 "),a("code",[t._v("-host abc --retry 3")]),t._v(" 这样的混合风格（wget 采用这样的混合性风格）")])])]),t._v(" "),a("li",[a("p",[t._v("在无歧义的情况下，cmdr甚至支持你组合任何短标志。")]),t._v(" "),a("p",[t._v("所以，"),a("code",[t._v("-dr3t")]),t._v(" 能够被解释为 "),a("code",[t._v("--debug --retry 3 --timeout")]),t._v("。")]),t._v(" "),a("p",[t._v("cmdr 采取特别的反向回溯算法来解决这个场景下的多级子命令的多级标志的智能匹配。")])])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"some desc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Placeholder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HOST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这个标志在帮助屏中的输出为：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  -host,  --host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("HOST           some desc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"占位符-placeholder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#占位符-placeholder"}},[t._v("#")]),t._v(" 占位符（Placeholder）")]),t._v(" "),a("p",[t._v("占位符 "),a("code",[t._v("HOST")]),t._v(" 被应用到长标题的表达形式上。")]),t._v(" "),a("p",[t._v("在命令行中输入时，以下的格式都是有效的：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("--host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localhost\n--host localhost\n--hostlocalhost\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("这些格式中，单引号或双引号包围具体值均为有效形式，如 "),a("code",[t._v("--host'localhost'")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"自动化的数值拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化的数值拆箱"}},[t._v("#")]),t._v(" 自动化的数值拆箱")]),t._v(" "),a("p",[a("code",[t._v("cmdr.GetXXX")]),t._v(" 函数将会从 "),a("code",[t._v("Option Store")]),t._v(" 中抽出一个选项/标志值，按照你期待的数据类型，必要时 GetXXX 会自动进行拆箱处理。例如当你抽取值 "),a("code",[t._v("1,2,3,4")]),t._v(" 时，GetString会取得一个逗号分隔的列表，而 GetIntSlice 会取得 "),a("code",[t._v("[]int{1,2,3,4}")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"int-int64-uint-uint64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-int64-uint-uint64"}},[t._v("#")]),t._v(" Int, Int64, Uint, Uint64")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"r"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retry-times"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"retry times"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Placeholder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COUNT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"float32-float64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#float32-float64"}},[t._v("#")]),t._v(" Float32, Float64")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewFloat32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"complex64-complex128"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complex64-complex128"}},[t._v("#")]),t._v(" Complex64, Complex128")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("  cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewComplex64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("  cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewDuration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"period"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"period"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在命令行中输入时，可以使用 "),a("code",[t._v("3s")]),t._v("，"),a("code",[t._v("8m20s")]),t._v(" 等这样的语法，它们将会翻译为等价的 "),a("code",[t._v("time.Duration")]),t._v(" 值。")]),t._v(" "),a("h3",{attrs:{id:"string-slice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-slice"}},[t._v("#")]),t._v(" String Slice")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("  cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewStringSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add classes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("对于所有 Slice 数组数据类型来说，命令行输入允许两种形式：")]),t._v(" "),a("ol",[a("li",[t._v("多次输入："),a("code",[t._v("-a s1 -a s2 -a s3")])]),t._v(" "),a("li",[t._v("逗号分隔："),a("code",[t._v("-a s1,s2,s3")])])]),t._v(" "),a("p",[t._v("同时也允许上述两种形式任意组合。")]),t._v(" "),a("h3",{attrs:{id:"int-slice-uint-slilce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#int-slice-uint-slilce"}},[t._v("#")]),t._v(" Int Slice, Uint Slilce")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("  cmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewIntSlice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add classes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"values-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#values-from"}},[t._v("#")]),t._v(" Values From")]),t._v(" "),a("p",[t._v("(TODO)")]),t._v(" "),a("h3",{attrs:{id:"from-the-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-the-environment"}},[t._v("#")]),t._v(" from the Environment")]),t._v(" "),a("h3",{attrs:{id:"from-config-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config-files"}},[t._v("#")]),t._v(" from config files")]),t._v(" "),a("h3",{attrs:{id:"from-config-center"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-config-center"}},[t._v("#")]),t._v(" from Config Center")]),t._v(" "),a("h2",{attrs:{id:"more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[t._v("#")]),t._v(" More")]),t._v(" "),a("h3",{attrs:{id:"defaultvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultvalue"}},[t._v("#")]),t._v(" DefaultValue")]),t._v(" "),a("h3",{attrs:{id:"deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[t._v("#")]),t._v(" Deprecated")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"externaltool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#externaltool"}},[t._v("#")]),t._v(" ExternalTool")]),t._v(" "),a("h3",{attrs:{id:"headlike"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#headlike"}},[t._v("#")]),t._v(" HeadLike")]),t._v(" "),a("h3",{attrs:{id:"hidden"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden"}},[t._v("#")]),t._v(" Hidden")]),t._v(" "),a("h3",{attrs:{id:"placeholder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#placeholder"}},[t._v("#")]),t._v(" PlaceHolder")]),t._v(" "),a("h3",{attrs:{id:"togglegroup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#togglegroup"}},[t._v("#")]),t._v(" ToggleGroup")]),t._v(" "),a("h3",{attrs:{id:"validargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validargs"}},[t._v("#")]),t._v(" ValidArgs")]),t._v(" "),a("h2",{attrs:{id:"option-store-配置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#option-store-配置数据"}},[t._v("#")]),t._v(" Option Store 配置数据")]),t._v(" "),a("p",[t._v("Option Store 中的配置数据来自这些地方：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.NewBool")]),t._v(", "),a("code",[t._v("cmdr.NewString")]),t._v(" 等接口定义的命令行标志信息中提供的缺省值。例如：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enable-ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnvKeys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENABLE_UEH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enables the unhandled exception handler?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这里定义了一个 Bool 类型的标志（Flag），其默认值为 false，如果终端用户没有作出指定，则 Option Store 中会包含该条目且具有 bool 值 false。你可以通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得该值。")]),t._v(" "),a("blockquote",[a("p",[t._v("标志总是带有默认值 false，一般较少会使用 true值。")]),t._v(" "),a("p",[t._v("Toggleable Flags Group 例外，通常在组里会有一个 Flag 具有默认值 true。")])])]),t._v(" "),a("li",[a("p",[t._v("通过命令行参数指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ go run ./cli --enable-ueh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里会通过命令行将 enable-ueh 的值设置为 true。")]),t._v(" "),a("p",[t._v("此时，通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得的值将会为 true。")])]),t._v(" "),a("li",[a("p",[t._v("通过环境变量指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_UEH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" go run /cli\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果在定义 Flag 是没有通过 "),a("code",[t._v(".EnvKeys()")]),t._v(" 指定环境变量名，"),a("code",[t._v("cmdr")]),t._v(" 会试图查找自动化命名的环境变量名。例如此例中，自动化的环境变量名应该是 "),a("code",[t._v("APP_ENABLE_UEH")]),t._v("，请参考 "),a("code",[t._v("cmdr.WithEnvPrefix()")]),t._v(" 的相关说明。")])]),t._v(" "),a("li",[a("p",[t._v("通过配置文件装入的。例如在主配置文件中包含有如下条目：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是配置文件的前缀，可以通过 cmdr.WithOptionsPrefix() 自定义")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是通过 cmdr.Root(appName, version) 所指定的应用程序名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-ueh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字段名称应该等于 Flag 的 Full 字段值")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.Set(keyPath, value)")]),t._v(" 设置的。")])])]),t._v(" "),a("p",[t._v("🔚")])])}),[],!1,null,null,null);s.default=e.exports}}]);