---
sidebarDepth: 3

#layout: single
title: "Overview"
date: 2020-07-13 09:15:11 +0800
Author: hedzr
tags: [commander, command-line, "command-line-parser", command-line-interface,  getops, posix, posix-compatible, hierarchical-configuration, hierarchy, cli, golang]
categories: golang cmdr home
comments: true
toc: true
header:
  overlay_image: /assets/images/cmdr/help-screen.png
  overlay_filter: rgba(128, 128, 0, 0.3)
excerpt: >-
  Index to cmdr, a golang library to interpret/parse the command-line input with POSIX-compliant mode ...
#header:
#  overlay_image: /assets/images/unsplash-image-1.jpg
#  overlay_filter: rgba(0, 0, 0, 0.15)
#  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
#  actions:
#    - label: "More Info"
#      url: "https://unsplash.com"


---





# 概要



`cmdr` 是一个解释命令行输入内容的兼容于 POSIX 命令行风格代码库，以 Golang 编写。

作为 Golang 标准库 `flag` 的一个好的替代品，`cmdr`还提供一个层级式的参数管理器，用于管理应用程序的一切配置参数。




## 特性

- 对开发者友好的多种编程界面：流式调用风格，`flag` 式样的调用风格，以及旧式结构数据定义风格等

- POSIX-兼容的命令行界面：短参数，长参数，以及额外提供的 `别名`

- 可多级嵌套的命令和子命令

- 直接支持多种数据类型的命令行参数。例如：bool, int, uint, string, string slice, ...

- 可分组、可排序的命令列表、参数列表

- 用户错误输入时的智能建议与提示：  

  从 v1.1.3 起，使用更强大的 [Jaro-Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) 算法来提供更精准的建议

- 可从环境变量自动获得参数值

- 可以智能合并外部配置文件中的参数集合  

  开箱即用的符合 Linux/macOS 惯例	的配置文件布局方案

- 自动输出可读性强的帮助屏幕

- 提供一系列调试性工具帮助你管理大量的命令行参数定义：`~~tree`, `--debug`, ....

- 内置集成了 `Options Store`，从而提供层级化的配置参数管理功能，不要再定义一堆的全局变量了，好的编码风格从此开始



## 示例

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

[Play on Go Playground](https://play.golang.org/p/1yDj-dCJ0bB)


### 更多的示例

我们已经准备了一组样板性的小型项目，用以演示 cmdr 的某一个或者多个特性有何用途、如何使用。你可以在 <https://github.com/hedzr/cmdr-examples> 中找到它们。



## 许可证

MIT！最大限度自行取用



🔚