---
home: true
heroImage: 
actionText: Getting Started →
actionLink: /zh/cmdr/getting-started.html
features:
- title: Keep it simple
  details: 采用简单的流式调用方式进行命令行参数定义，便于组织和管理。
- title: POSIX-Compliant
  details: 完全符合 POSIX 命令行界面兼容性标准。
- title: Coding Loosely
  details: 你可以非常简单地从 `flag` 代码直接迁移到 `cmdr 方案，几乎无需任何修改。
- title: Strong Hierarchical Configurations
  details: 使用 `Option Store` 管理应用程序的一切参数，层级化它们的逻辑结构。
- title: Useful Debugging Information
  details: 使用命令行参数 `~~tree` 打印完整的命令表。
- title: Ready for Interceptions
  details: 在多个关键节点处都可以埋入回调函数从而定制 cmdr 的相关行为
footer: MIT Licensed | Copyright © 2020 by hedzr

---

# Using `cmdr`

```go
package main

import (
	"fmt"
	"github.com/hedzr/cmdr"
)

func main() {
	if err := cmdr.Exec(buildRootCmd()); err != nil {
		fmt.Printf("error: %+v\n", err)
	}
}

func buildRootCmd() (rootCmd *cmdr.RootCommand) {
	root := cmdr.
		Root("test-app", "1.1").
		Copyright("test-app is powered by cmdr", "hedzr").
		Description("desc", "longDesc").
		Examples("examples")
		//.Action(func(cmd *cmdr.Command, args []string) (err error) { return; )
	rootCmd = root.RootCommand()

	cmdr.NewBool(false).
		Titles("enable-ueh", "ueh").
		EnvKeys("ENABLE_UEH").
		Description("Enables the unhandled exception handler?").
		AttachTo(root)

  root.NewSubCommand("soundex", "snd", "sndx", "sound").
		Description("soundex test").
		Group("Test").
		TailPlaceholder("[text1, text2, ...]").
		Action(func(cmd *cmdr.Command, args []string) (err error) {
			for ix, s := range args {
				fmt.Printf("%5d. %s => %s\n", ix, s, cmdr.Soundex(s))
			}
			return
		})
	return
}
```

