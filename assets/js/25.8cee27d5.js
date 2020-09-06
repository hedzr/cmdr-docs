(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{417:function(t,s,a){"use strict";a.r(s);var e=a(13),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[t._v("#")]),t._v(" Guide")]),t._v(" "),a("p",[t._v("In this guide we will walk through the various parts of "),a("code",[t._v("cmdr")]),t._v(". We will cover:")]),t._v(" "),a("ul",[a("li",[t._v("The basic layout of a "),a("code",[t._v("cmdr")]),t._v(" application")]),t._v(" "),a("li",[t._v("Adding flags to your app")]),t._v(" "),a("li",[t._v("Define actions that get run")]),t._v(" "),a("li",[t._v("Create SubCommands for additional functionality")]),t._v(" "),a("li",[t._v("Define a custom banner")]),t._v(" "),a("li",[t._v("使用环境变量")]),t._v(" "),a("li",[t._v("使用外部配置文件")]),t._v(" "),a("li",[t._v("Uses the advanced features of "),a("code",[t._v("cmdr")]),t._v(", such as Toggleable Flags Group, ...")]),t._v(" "),a("li",[t._v("Using the "),a("code",[t._v("Option Store")]),t._v(" to get the app's Options")]),t._v(" "),a("li",[t._v("从 Option Store 中提取配置数据")])]),t._v(" "),a("p",[t._v("Option Store 中的配置数据来自这些地方：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.NewBool")]),t._v(", "),a("code",[t._v("cmdr.NewString")]),t._v(" 等接口定义的命令行标志信息中提供的缺省值。例如：")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("\tcmdr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewBool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Titles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enable-ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ueh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("EnvKeys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENABLE_UEH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enables the unhandled exception handler?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AttachTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这里定义了一个 Bool 类型的标志（Flag），其默认值为 false，如果终端用户没有作出指定，则 Option Store 中会包含该条目且具有 bool 值 false。你可以通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得该值。")]),t._v(" "),a("blockquote",[a("p",[t._v("标志总是带有默认值 false，一般较少会使用 true值。")]),t._v(" "),a("p",[t._v("Toggleable Flags Group 例外，通常在组里会有一个 Flag 具有默认值 true。")])])]),t._v(" "),a("li",[a("p",[t._v("通过命令行参数指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ go run ./cli --enable-ueh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这里会通过命令行将 enable-ueh 的值设置为 true。")]),t._v(" "),a("p",[t._v("此时，通过 "),a("code",[t._v("cmdr.GetBoolR('enable-ueh')")]),t._v(" 取得的值将会为 true。")])]),t._v(" "),a("li",[a("p",[t._v("通过环境变量指定的。例如：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ENABLE_UEH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" go run /cli\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果在定义 Flag 是没有通过 "),a("code",[t._v(".EnvKeys()")]),t._v(" 指定环境变量名，"),a("code",[t._v("cmdr")]),t._v(" 会试图查找自动化命名的环境变量名。例如此例中，自动化的环境变量名应该是 "),a("code",[t._v("APP_ENABLE_UEH")]),t._v("，请参考 "),a("code",[t._v("cmdr.WithEnvPrefix()")]),t._v(" 的相关说明。")])]),t._v(" "),a("li",[a("p",[t._v("通过配置文件装入的。例如在主配置文件中包含有如下条目：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是配置文件的前缀，可以通过 cmdr.WithOptionsPrefix() 自定义")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("simple")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这是通过 cmdr.Root(appName, version) 所指定的应用程序名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable-ueh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字段名称应该等于 Flag 的 Full 字段值")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("cmdr.Set(keyPath, value)")]),t._v(" 设置的。")])])]),t._v(" "),a("h2",{attrs:{id:"end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" END")]),t._v(" "),a("h2",{attrs:{id:"🔚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔚"}},[t._v("#")]),t._v(" 🔚")])])}),[],!1,null,null,null);s.default=n.exports}}]);