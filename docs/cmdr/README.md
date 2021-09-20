---
title: "Overview"
date: 2020-07-13 09:15:11 +0800
Author: hedzr
tags: [commander, command-line, "command-line-parser", command-line-interface,  getops, posix, posix-compatible, hierarchical-configuration, hierarchy, cli, golang]
categories: golang cmdr home
comments: true

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





# Overview



`cmdr` is a golang library to interpret or parse the command-line input with POSIX-compliant style (the [getopt_long](http://www.gnu.org/s/libc/manual/html_node/Argument-Syntax.html#Argument-Syntax) command line UI). 

`cmdr` is a better replacement to the standard library `flag`.

There is a full `Options Store` (configurations) for your hierarchy configuration data too.


## Features

- Friendly API styles: Fluent, `flag`-like, or old-style (struct)

- POSIX-compliant flags for CLI: short, long and *aliases*

- Nested command and sub-commands

- Strong data types. Such as: bool, int, uint, string, string slice, ...

- Groupable (and sortable) commands and flags

- Smart suggestions for wrong command and flags

  since v1.1.3, using [Jaro-Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance) instead of soundex.

- Environment Variables overriding

- Mergeable external configuration files

- Automatic help screen generation

- Riched debugging tools: `~~tree`, `--debug`, ....

- Integration with `Options Store` which provides riched read/write for hierarchical application configurations.



## Examples

```go
package main

import (
	"fmt"
	"github.com/hedzr/cmdr"
	"github.com/hedzr/cmdr/tool"
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

	cmdr.NewCmd().
		Titles("soundex", "snd", "sndx", "sound").
		Description("soundex test").
		Group("Test").
		TailPlaceholder("[text1, text2, ...]").
		Action(func(cmd *cmdr.Command, args []string) (err error) {
			for ix, s := range args {
				fmt.Printf("%5d. %s => %s\n", ix, s, tool.Soundex(s))
			}
			return
		}).
		AttachTo(root)
	return
}
```

[Play on Go Playground](https://play.golang.org/p/1yDj-dCJ0bB)

The screen looks like:

![image-20210920154132341](https://raw.githubusercontent.com/hzimg/blog-pics/master/uPic/image-20210920154132341.png)



### More Examples

There are lots of small apps to show you what and how to apply a feature  of `cmdr`. They lies at: <https://github.com/hedzr/cmdr-examples>.



## License

MIT and feel free.



🔚