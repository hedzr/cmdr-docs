---
#sidebar: 'auto'
#sidebarDepth: 3

#layout: single
title: "Getting Started"
date: 2020-07-13 10:15:11 +0800
Author: hedzr
tags: [commander, command-line, "command-line-parser", command-line-interface,  getops, posix, posix-compatible, hierarchical-configuration, hierarchy, cli, golang]
categories: golang cmdr getting-started
---



# Getting Started




## Installation

`go get -v github.com/hedzr/cmdr`

> `cmdr` can support go v1.11 and later.
>
> To have a full view about our compatibilities to golang version, take a look [go.yml](https://github.com/hedzr/cmdr/blob/master/.github/workflows/go.yml).



## Base Usage

Simple app here:

```go
package main

import (
	"fmt"
	"github.com/hedzr/cmdr"
	cmdrexamples "github.com/hedzr/cmdr-examples"
	"log"
)

func main() {
	if err := cmdr.Exec(buildRootCmd()); err != nil {
		log.Printf("error: %+v\n", err)
	}
}

func buildRootCmd() (rootCmd *cmdr.RootCommand) {
	root := cmdr.
		Root(appName, cmdrexamples.Version).
		Copyright(copyright, "hedzr").
		Description(desc, longDesc).
		Examples(examples)
	rootCmd = root.RootCommand()
	soundex(root)
	return
}

func soundex(root cmdr.OptCmd) {
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
}

const (
	appName   = "getting-start"
	copyright = "getting-start is an effective devops tool"
	desc      = "getting-start is an effective devops tool. It make an demo application for `cmdr`."
	longDesc  = "getting-start is an effective devops tool. It make an demo application for `cmdr`."
	examples  = `
$ {{.AppName}} gen shell [--bash|--zsh|--auto]
  generate bash/shell completion scripts
$ {{.AppName}} gen man
  generate linux man page 1
$ {{.AppName}} --help
  show help screen.
`
)
```

You can get its full source codes at <https://github.com/hedzr/cmdr-examples/blob/master/examples/getting-start>.



### Display the Help Screen

Run it and show the help screen:

```bash
go run ./examples/getting-start
```

The results should be:

![image-20200713140513668](https://i.loli.net/2020/07/13/HwWo1v2JczCEat7.png)



### Run a `Sub-command`

Now we could run the sub-command `soundex` to test:

```bash
$ go run ./examples/getting-start sndx fish bird
    0. fish => f12
    1. bird => b163
```



### All folks

Congrates, you took the shot!













🔚





