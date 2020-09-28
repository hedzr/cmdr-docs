(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{412:function(t,s,n){"use strict";n.r(s);var a=n(13),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"概要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),n("p",[n("code",[t._v("cmdr")]),t._v(" 是一个解释命令行输入内容的兼容于 POSIX 命令行风格代码库，以 Golang 编写。")]),t._v(" "),n("p",[t._v("作为 Golang 标准库 "),n("code",[t._v("flag")]),t._v(" 的一个好的替代品，"),n("code",[t._v("cmdr")]),t._v("还提供一个层级式的参数管理器，用于管理应用程序的一切配置参数。")]),t._v(" "),n("h2",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("对开发者友好的多种编程界面：流式调用风格，"),n("code",[t._v("flag")]),t._v(" 兼容风格，以及旧式的结构数据定义风格等")])]),t._v(" "),n("li",[n("p",[t._v("POSIX-兼容（Unix "),n("a",{attrs:{href:"http://man7.org/linux/man-pages/man3/getopt.3.html",target:"_blank",rel:"noopener noreferrer"}},[n("em",[t._v("getopt")]),t._v("(3)"),n("OutboundLink")],1),t._v("）的命令行界面：短参数，长参数，以及额外提供的 "),n("code",[t._v("别名")])]),t._v(" "),n("ul",[n("li",[t._v("短参数可以组合："),n("code",[t._v("-aux")]),t._v(" = "),n("code",[t._v("-a -u -x")])]),t._v(" "),n("li",[t._v("短参数可以不限于单个字符："),n("code",[t._v("-aurpx")]),t._v(" = "),n("code",[t._v("-a -u -rp -x")])]),t._v(" "),n("li",[t._v("布尔标志允许 "),n("code",[t._v("+")]),t._v("/"),n("code",[t._v("-")]),t._v(" 后缀："),n("code",[t._v("-v-")]),t._v(" = "),n("code",[t._v("-v=false")])])])]),t._v(" "),n("li",[n("p",[t._v("可多级嵌套的命令和子命令")]),t._v(" "),n("p",[n("em",[t._v("多级子命令允许下级标志参数覆盖上级同名参数，免除设计时的headache")])])]),t._v(" "),n("li",[n("p",[t._v("直接支持多种数据类型的命令行参数。"),n("em",[t._v("例如：bool, int, uint, string, string slice, ...")])])]),t._v(" "),n("li",[n("p",[t._v("可分组、可排序的命令列表、参数列表。")])]),t._v(" "),n("li",[n("p",[t._v("提供预制的 "),n("RouterLink",{attrs:{to:"/zh/cmdr/Z15.adv.html#builtin-commands-and-flags"}},[t._v("内建命令以及标志组")])],1)]),t._v(" "),n("li",[n("p",[t._v("用户错误输入时的智能建议与提示：")]),t._v(" "),n("p",[n("em",[t._v("从 v1.1.3 起，使用更强大的 "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaro-Winkler distance"),n("OutboundLink")],1),t._v(" 算法来提供更精准的建议")])])]),t._v(" "),n("li",[n("p",[t._v("用户输入时的命令行界面更鲁棒：")]),t._v(" "),n("ul",[n("li",[t._v("使用 "),n("code",[t._v("app commands options arguments")]),t._v(" 输入结构，用户可以打乱参数输入顺序如 "),n("code",[t._v("./my-cli cmd1 subcmd2 -a subcmd3 -b --c11")]),t._v("。但我们建议将标志全部后置，并在其后在放置剩余参数")]),t._v(" "),n("li",[t._v("多级子命令的相关标志可以打乱顺序输入，自动识别上级命令的标志，同名的上级命令的标志被自动遮盖。无需在挑拣字母和单词时痛苦。")]),t._v(" "),n("li",[t._v("组合的短参数输入：非单字符的短参数在组合形式中被自动识别")])])]),t._v(" "),n("li",[n("p",[t._v("可从环境变量自动获得参数值")])]),t._v(" "),n("li",[n("p",[t._v("可以智能合并外部配置文件中的参数集合")]),t._v(" "),n("p",[n("em",[t._v("开箱即用的符合 Linux/macOS 惯例的配置文件布局方案")])])]),t._v(" "),n("li",[n("p",[t._v("自动输出可读性强的帮助屏幕")])]),t._v(" "),n("li",[n("p",[t._v("提供一系列调试性工具帮助你管理大量的命令行参数定义："),n("code",[t._v("~~tree")]),t._v(", "),n("code",[t._v("--debug")]),t._v(", ....")])]),t._v(" "),n("li",[n("p",[t._v("内置集成了 "),n("code",[t._v("Options Store")]),t._v("，从而提供层级化的配置参数管理功能，不要再定义一堆的全局变量了，好的编码风格从此开始")])]),t._v(" "),n("li",[n("p",[t._v("支持动态扩充命令和标志："),n("RouterLink",{attrs:{to:"/zh/cmdr/z15.adv.html#动态扩充命令"}},[t._v("动态扩充命令")])],1),t._v(" "),n("ul",[n("li",[n("p",[t._v("提供内置的可插拔的扩展（Extensions）支持")]),t._v(" "),n("p",[n("em",[t._v("自动合并外部程序到 "),n("code",[t._v("Extensions 子命令分组")])])]),t._v(" "),n("blockquote",[n("p",[t._v("从 v1.7.21 起，主程序能够扫描扩展文件夹中的可执行的外部程序作为自己的 Extensions 子命令分组，从而允许动态扩展子命令集合、建立统一的 CLI 界面。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://i.loli.net/2020/09/20/bdvhoMjH6elENOT.png",alt:"image-20200920174339255"}})]),t._v(" "),n("p",[t._v("可参考："),n("RouterLink",{attrs:{to:"/zh/cmdr/guide/Z05.subcommand.html#extensions-子命令分组"}},[t._v("子命令 - Extentsions 子命令分组")]),t._v(" 有关章节。")],1)])]),t._v(" "),n("li",[n("p",[t._v("支持 "),n("code",[t._v("cmdr-addons")]),t._v(" Golang 插件："),n("RouterLink",{attrs:{to:"/zh/cmdr/Z15.adv.html#_2-通过-golang-插件机制进行扩充"}},[t._v("cmdr-addons 插件")]),t._v(" （"),n("em",[t._v("since v1.7.23")]),t._v("）")],1)]),t._v(" "),n("li",[n("p",[t._v("支持从配置文件中加载命令定义："),n("RouterLink",{attrs:{to:"/zh/cmdr/Z15.adv.html#_3-通过配置文件定义别名段"}},[t._v("命令别名")]),t._v(" （"),n("em",[t._v("since v1.7.25")]),t._v("）")],1)])])])]),t._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/hedzr/cmdr"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error: %+v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootCmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RootCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\troot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copyright")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-app is powered by cmdr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hedzr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longDesc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Examples")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"examples"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.Action(func(cmd *cmdr.Command, args []string) (err error) { return; )")]),t._v("\n\trootCmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RootCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\troot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewSubCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"soundex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"snd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sndx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sound"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"soundex test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TailPlaceholder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[text1, text2, ...]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%5d. %s => %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Soundex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://play.golang.org/p/1yDj-dCJ0bB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Play on Go Playground"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"更多的示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多的示例"}},[t._v("#")]),t._v(" 更多的示例")]),t._v(" "),n("p",[t._v("我们已经准备了一组样板性的小型项目，用以演示 cmdr 的某一个或者多个特性有何用途、如何使用。你可以在 "),n("a",{attrs:{href:"https://github.com/hedzr/cmdr-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hedzr/cmdr-examples"),n("OutboundLink")],1),t._v(" 中找到它们。")]),t._v(" "),n("h2",{attrs:{id:"许可证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#许可证"}},[t._v("#")]),t._v(" 许可证")]),t._v(" "),n("p",[t._v("MIT！最大限度自行取用")]),t._v(" "),n("p",[t._v("🔚")])])}),[],!1,null,null,null);s.default=r.exports}}]);