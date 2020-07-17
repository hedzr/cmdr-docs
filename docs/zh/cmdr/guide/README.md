---
layout: single
title: "概览"
date: 2020-07-13 11:15:11 +0800
Author: hedzr
tags: [commander, command-line, "command-line-parser", command-line-interface,  getops, posix, posix-compatible, hierarchical-configuration, hierarchy, cli, golang]
categories: golang cmdr guide
comments: true
toc: true
header:
  overlay_image: /assets/images/cmdr/help-screen.png
  overlay_filter: rgba(128, 128, 0, 0.3)
excerpt: >-
  Guide and References for cmdr ...
#header:
#  overlay_image: /assets/images/unsplash-image-1.jpg
#  overlay_filter: rgba(0, 0, 0, 0.15)
#  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
#  actions:
#    - label: "More Info"
#      url: "https://unsplash.com"


---



# `cmdr` 开发指南

在这个指南里，我们会遍历 `cmdr` 的各个特性来向你展示它可以做到些什么。我们将会解说如下（但也不限于此）的主要话题：

- 一个 `cmdr` CLI 应用程序的基本布局结构

- 建立子命令（`Sub-command`）以及附加的功能性

- 定义子命令的响应函数（`Action`）并执行到它

- 向你的应用程序添加命令行标志（`flags`）

- 使用环境变量

- 使用外部配置文件

- 使用 `cmdr` 的高级特性，诸如：可自动翻转的标志组，...

- 使用 `Option Store` 来管理应用程序的层级化的配置数据

  从 Option Store 中提取配置数据，观察数据





🔚


