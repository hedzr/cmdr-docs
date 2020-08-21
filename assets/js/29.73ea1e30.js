(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{410:function(t,s,n){"use strict";n.r(s);var a=n(13),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"概要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),n("p",[n("code",[t._v("cmdr")]),t._v(" 是一个解释命令行输入内容的兼容于 POSIX 命令行风格代码库，以 Golang 编写。")]),t._v(" "),n("p",[t._v("作为 Golang 标准库 "),n("code",[t._v("flag")]),t._v(" 的一个好的替代品，"),n("code",[t._v("cmdr")]),t._v("还提供一个层级式的参数管理器，用于管理应用程序的一切配置参数。")]),t._v(" "),n("h2",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("对开发者友好的多种编程界面：流式调用风格，"),n("code",[t._v("flag")]),t._v(" 式样的调用风格，以及旧式结构数据定义风格等")])]),t._v(" "),n("li",[n("p",[t._v("POSIX-兼容的命令行界面：短参数，长参数，以及额外提供的 "),n("code",[t._v("别名")])])]),t._v(" "),n("li",[n("p",[t._v("可多级嵌套的命令和子命令")])]),t._v(" "),n("li",[n("p",[t._v("直接支持多种数据类型的命令行参数。例如：bool, int, uint, string, string slice, ...")])]),t._v(" "),n("li",[n("p",[t._v("可分组、可排序的命令列表、参数列表")])]),t._v(" "),n("li",[n("p",[t._v("用户错误输入时的智能建议与提示：")]),t._v(" "),n("p",[t._v("从 v1.1.3 起，使用更强大的 "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaro-Winkler distance"),n("OutboundLink")],1),t._v(" 算法来提供更精准的建议")])]),t._v(" "),n("li",[n("p",[t._v("可从环境变量自动获得参数值")])]),t._v(" "),n("li",[n("p",[t._v("可以智能合并外部配置文件中的参数集合")]),t._v(" "),n("p",[t._v("开箱即用的符合 Linux/macOS 惯例的配置文件布局方案")])]),t._v(" "),n("li",[n("p",[t._v("自动输出可读性强的帮助屏幕")])]),t._v(" "),n("li",[n("p",[t._v("提供一系列调试性工具帮助你管理大量的命令行参数定义："),n("code",[t._v("~~tree")]),t._v(", "),n("code",[t._v("--debug")]),t._v(", ....")])]),t._v(" "),n("li",[n("p",[t._v("内置集成了 "),n("code",[t._v("Options Store")]),t._v("，从而提供层级化的配置参数管理功能，不要再定义一堆的全局变量了，好的编码风格从此开始")])])]),t._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/hedzr/cmdr"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error: %+v\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildRootCmd")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootCmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RootCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\troot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Root")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copyright")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-app is powered by cmdr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hedzr"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"desc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"longDesc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Examples")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"examples"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//.Action(func(cmd *cmdr.Command, args []string) (err error) { return; )")]),t._v("\n\trootCmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("RootCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\troot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewSubCommand")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"soundex"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"snd"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sndx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sound"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"soundex test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("TailPlaceholder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[text1, text2, ...]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cmd "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%5d. %s => %s\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cmdr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Soundex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://play.golang.org/p/1yDj-dCJ0bB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Play on Go Playground"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"更多的示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多的示例"}},[t._v("#")]),t._v(" 更多的示例")]),t._v(" "),n("p",[t._v("我们已经准备了一组样板性的小型项目，用以演示 cmdr 的某一个或者多个特性有何用途、如何使用。你可以在 "),n("a",{attrs:{href:"https://github.com/hedzr/cmdr-examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hedzr/cmdr-examples"),n("OutboundLink")],1),t._v(" 中找到它们。")]),t._v(" "),n("h2",{attrs:{id:"许可证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#许可证"}},[t._v("#")]),t._v(" 许可证")]),t._v(" "),n("p",[t._v("MIT！最大限度自行取用")]),t._v(" "),n("p",[t._v("🔚")])])}),[],!1,null,null,null);s.default=r.exports}}]);