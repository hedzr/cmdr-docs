---
home: true
heroImage: 
actionText: Getting Started →
actionLink: /zh/cmdr/getting-started.html
features:
- title: Keep It Simple
  details: Define the CLI arguments with fluent style
- title: POSIX-Compliant
  details: Be compliant with POSIX Command-line conventions
- title: Coding Loosely
  details: Simply to migrate from standard library `flag`
- title: Strong Hierarchical Configurations
  details: Manage any hierarchical configurations with `Option Store`
- title: Useful Debugging Information
  details: Print full commands tree with `~~tree`, Dump the hit/parsed info with `~~debug`
- title: Ready for Interceptions
  details: Hook and customize the behaviors of `cmdr`
footer: MIT Licensed | Copyright © 2018-2021 by hedzr

---

## News

 - english documentation not completed yet
 

## Using [`cmdr`](https://github.com/hedzr/cmdr)

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

The screen looks like:

![image-20210920154132341](https://raw.githubusercontent.com/hzimg/blog-pics/master/uPic/image-20210920154132341.png)

That's it!
