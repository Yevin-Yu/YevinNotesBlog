---
title: HTML - Elements 元素
author: 耶温
createTime: 2024/07/25 19:16:52
permalink: /HTML/k1drz01w/
---

## Basic HTML 基础
| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<!DOCTYPE>` | 声明文档类型，告诉浏览器使用的 HTML 版本。 | 确保浏览器以正确的模式解析文档。 |
| `<html>` | 文档的根元素，包含整个 HTML 文档。 | 包含文档的所有内容。 |
| `<head>` | 包含文档的元数据，如标题、样式表链接等。 | 定义文档的头部信息。 |
| `<title>` | 定义文档的标题，显示在浏览器的标题栏或标签页上。 | 设置文档的标题。 |
| `<body>` | 包含文档的实际内容，如文本、图片、链接等。 | 定义文档的主体内容。 |
| `<h1>` to `<h6>` | 定义标题，从最重要到最不重要。 | 组织文档内容，创建标题层次结构。 |
| `<p>` | 定义段落。 | 创建文本段落。 |
| `<br>` | 插入换行符，强制换行而不形成一个新的段落。 | 强制换行。 |
| `<hr>` | 插入水平线，用于分隔文档内容。 | 分隔文档的不同部分。 |
| `<!--...-->` | 注释，用于添加不会显示给用户的注释信息。 | 添加注释以帮助理解代码。 |

## Formatting HTML 格式化

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<acronym>` | 已废弃的元素，用于定义缩写词。 | 不再推荐使用，应使用 `<abbr>` 替代。 |
| `<abbr>` | 定义缩写词或首字母缩略词。 | 显示缩写词，并提供完整的解释。 |
| `<address>` | 定义联系信息，如作者或文章的联系信息。 | 显示作者或文档的联系信息。 |
| `<b>` | 定义粗体文本，通常没有语义含义。 | 显示加粗文本。 |
| `<bdi>` | 用于隔离文本的方向性，以确保文本方向的正确显示。 | 处理文本方向不确定的内容，如用户输入。 |
| `<bdo>` | 用于覆盖文本的默认方向，强制文本从右向左或从左向右显示。 | 显示具有特定方向性的文本。 |
| `<big>` | 已废弃的元素，用于定义大号文本。 | 不再推荐使用，应使用 CSS 来改变文本大小。 |
| `<br>` | 插入换行符，强制换行而不形成一个新的段落。 | 强制换行。 |
| `<blockquote>` | 定义长的引用文本，通常会缩进显示。 | 显示长引用或摘录。 |
| `<center>` | 已废弃的元素，用于居中文本或元素。 | 不再推荐使用，应使用 CSS 来居中内容。 |
| `<cite>` | 定义作品的标题，如书籍或电影的标题。 | 显示作品的标题。 |
| `<code>` | 定义计算机代码片段。 | 显示编程代码或命令。 |
| `<del>` | 定义已被删除的文本。 | 显示已删除的文本。 |
| `<dfn>` | 定义术语的定义，通常用于定义文档中的术语。 | 定义术语或词汇。 |
| `<em>` | 定义强调文本，通常以斜体显示。 | 强调文本的重要性。 |
| `<font>` | 已废弃的元素，用于定义字体、颜色和大小。 | 不再推荐使用，应使用 CSS 来定义字体样式。 |
| `<i>` | 定义斜体文本，通常没有语义含义。 | 显示斜体文本。 |
| `<ins>` | 定义已被插入或添加的文本。 | 显示已插入的文本。 |
| `<kbd>` | 定义键盘输入。 | 显示键盘输入的文本。 |
| `<mark>` | 定义标记或高亮的文本。 | 高亮显示文本。 |
| `<meter>` | 定义度量范围内的数值。 | 显示度量值，如进度条。 |
| `<pre>` | 定义预格式化的文本。 | 显示保留空格和换行的文本。 |
| `<progress>` | 定义进度条。 | 显示任务完成的进度。 |
| `<q>` | 定义短引用。 | 显示短引用。 |
| `<rp>` | 定义Ruby注释的可选父标签。 | 显示Ruby注释的可选部分。 |
| `<rt>` | 定义Ruby文本。 | 显示Ruby文本。 |
| `<ruby>` | 定义Ruby注释，用于显示亚洲文字的发音指南。 | 显示亚洲文字的发音指南。 |
| `<s>` | 定义不再准确或相关的文本。 | 显示过时的文本。 |
| `<samp>` | 定义样本输出。 | 显示程序或命令的样本输出。 |
| `<small>` | 定义较小的文本。 | 显示较小的文本，如版权声明。 |
| `<strike>` | 定义被划掉的文本。 | 显示被划掉的文本。 |
| `<strong>` | 定义重要的文本。 | 强调文本的重要性。 |
| `<sub>` | 定义下标文本。 | 显示化学公式中的下标。 |
| `<sup>` | 定义上标文本。 | 显示数学公式中的上标。 |
| `<template>` | 定义文档或应用程序的模板。 | 存储可重复使用的 HTML 片段。 |
| `<time>` | 定义日期或时间。 | 显示日期或时间。 |
| `<tt>` | 已废弃的元素，用于定义等宽字体。 | 不再推荐使用，应使用 CSS 来定义等宽字体。 |
| `<u>` | 定义带有下划线的文本。 | 显示带有下划线的文本。 |
| `<var>` | 定义变量。 | 显示变量的名称。 |
| `<wbr>` | 定义可选的换行机会。 | 指定文本中的可选换行点。 |

## Forms and Input HTML 表单输入

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<form>` | 定义表单，用于收集用户输入的数据。 | 创建表单以收集用户数据。 |
| `<input>` | 定义表单控件，如文本框、按钮、复选框等。 | 创建各种类型的输入控件。 |
| `<textarea>` | 定义多行文本输入控件。 | 创建多行文本输入区域。 |
| `<button>` | 定义按钮。 | 创建按钮以提交表单或执行其他操作。 |
| `<select>` | 定义下拉列表。 | 创建下拉列表供用户选择选项。 |
| `<optgroup>` | 定义 `<select>` 元素内的选项组。 | 将 `<select>` 内的选项分组。 |
| `<option>` | 定义 `<select>` 元素中的一个选项。 | 创建下拉列表中的选项。 |
| `<label>` | 定义标签，与表单控件关联。 | 创建与表单控件关联的标签。 |
| `<fieldset>` | 定义表单内的一个区域，通常与 `<legend>` 元素一起使用。 | 分组表单控件并添加标题。 |
| `<legend>` | 定义 `<fieldset>` 元素的标题。 | 为 `<fieldset>` 提供标题。 |
| `<datalist>` | 定义输入控件的选项列表。 | 为 `<input>` 提供一个选项列表。 |
| `<output>` | 定义计算结果或脚本输出。 | 显示计算结果或脚本输出。 |


## Frames HTML 框架


| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<frame>` | 已废弃的元素，定义框架内的文档窗口。 | 创建多文档布局的一部分。 |
| `<frameset>` | 已废弃的元素，定义一组框架的布局。 | 创建包含多个文档的多文档布局。 |
| `<noframes>` | 已废弃的元素，定义当浏览器不支持框架时显示的内容。 | 显示替代内容以支持不支持框架的浏览器。 |
| `<iframe>` | 定义内联框架，可以在页面内嵌入另一个文档。 | 嵌入外部文档或广告等内容。 |

## Images HTML 图片

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<img>` | 定义图像。 | 显示图像。 |
| `<map>` | 定义图像映射，与 `<img>` 元素结合使用。 | 创建图像热点。 |
| `<area>` | 定义 `<map>` 元素内的图像热点。 | 创建可点击的图像热点。 |
| `<canvas>` | 定义绘图区域，用于绘制图形和图像。 | 动态生成图像和动画。 |
| `<figcaption>` | 定义 `<figure>` 元素的标题。 | 显示图像或图表的标题。 |
| `<figure>` | 定义独立的内容，如图像、图表或脚注。 | 包含图像或图表及其标题。 |
| `<picture>` | 定义图像源，用于根据不同的条件或设备显示不同的图像。 | 为不同设备提供合适的图像。 |
| `<svg>` | 定义矢量图形。 | 创建可缩放的矢量图形。 |

## Audio / Video HTML 音频视频

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<audio>` | 定义音频内容。 | 在网站中插入音频文件，播放音频文件。 |
| `<source>` | 为 `<audio>` `<video>` 提供多个媒体资源。 | 支持多种格式的媒体文件，以适应不同的浏览器。 |
| `<track>` | 为 `<audio>` `<video>` 提供字幕或注释轨道。 | 添加字幕、章节标题或其他元数据。 |
| `<video>` | 定义视频内容。 | 在网站中插入视频文件，播放视频文件。 |

## Links HTML 链接

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<a>` | 定义超链接，用于从一个页面链接到另一个页面或同一页面内的不同部分。 | 创建链接到其他页面或锚点。 |
| `<link>` | 定义文档与外部资源之间的关系，如样式表或 favicon。 | 链接到外部样式表或图标文件。 |
| `<nav>` | 定义导航链接的容器。 | 创建导航菜单或链接列表。 |


## Lists HTML 列表


| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<menu>` | 定义一个菜单列表。 | 创建一个菜单，通常用于导航或显示选项列表。 |
| `<ul>` | 定义无序列表。 | 创建项目不需要特定顺序的列表。 |
| `<ol>` | 定义有序列表。 | 创建项目需要按特定顺序排列的列表。 |
| `<li>` | 定义列表项，用于 `<ul>`、`<ol>` 或 `<menu>` 中的项目。 | 创建列表中的每一项。 |
| `<dir>` | 已废弃的元素，用于定义目录列表。 | 不再推荐使用，应使用 `<ul>` 或 `<ol>` 替代。 |
| `<dl>` | 定义定义列表。 | 创建一个定义列表，其中包含术语和对应的定义。 |
| `<dt>` | 定义定义列表中的术语。 | 创建定义列表中的术语项。 |
| `<dd>` | 定义定义列表中的定义。 | 创建定义列表中的定义项。 |


## Tables HTML 表格

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<table>` | 定义表格。 | 创建表格以组织数据。 |
| `<caption>` | 定义表格的标题。 | 为表格提供标题。 |
| `<th>` | 定义表格中的表头单元格。 | 创建表格中的表头单元格。 |
| `<tr>` | 定义表格中的一行。 | 创建表格中的一行。 |
| `<td>` | 定义表格中的标准单元格。 | 创建表格中的标准单元格。 |
| `<thead>` | 定义表格的表头部分。 | 创建表格的表头部分。 |
| `<tbody>` | 定义表格的主体部分。 | 创建表格的主体部分。 |
| `<tfoot>` | 定义表格的底部部分。 | 创建表格的底部部分。 |
| `<col>` | 定义表格中的一列。 | 设置表格中一列的样式。 |
| `<colgroup>` | 定义表格中的列组。 | 将表格中的列分组并设置样式。 |

## Styles / Semantics HTMl 样式和语义

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<style>` | 定义文档的内联样式。 | 在文档内部定义样式规则。 |
| `<div>` | 定义一个分区或节。 | 作为容器来分组内容或布局。 |
| `<span>` | 定义文档中的行内元素。 | 用于为小块内容添加样式或语义。 |
| `<header>` | 定义文档或节的头部。 | 显示文档或节的头部信息。 |
| `<hgroup>` | 已废弃的元素，用于组合标题元素。 | 不再推荐使用，应使用多个 `<h1>` 至 `<h6>` 元素替代。 |
| `<footer>` | 定义文档或节的底部。 | 显示文档或节的底部信息。 |
| `<main>` | 定义文档的主要内容。 | 包含文档的主要内容。 |
| `<section>` | 定义文档中的节。 | 用于分组文档中的内容。 |
| `<search>` | 已废弃的元素，用于定义搜索框。 | 不再推荐使用，应使用 `<input type="search">` 替代。 |
| `<article>` | 定义文档中的独立内容。 | 包含独立的文章或博客帖子。 |
| `<aside>` | 定义与周围内容相关但可以独立的边栏内容。 | 包含侧边栏或相关链接。 |
| `<details>` | 定义可以显示或隐藏的详细信息。 | 创建可展开的详细信息。 |
| `<dialog>` | 定义对话框或子窗口。 | 显示模态对话框或提示。 |
| `<summary>` | 定义 `<details>` 元素的摘要或标题。 | 创建可展开内容的标题。 |
| `<data>` | 定义与文本相关联的数据值。 | 显示与文本相关联的数据值。 |

## Meta Info HTML 元信息

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<head>` | 定义文档的头部信息。 | 包含文档的元数据，如标题、样式表链接等。 |
| `<meta>` | 定义文档的元信息。 | 设置文档的字符集、视口、关键词等元数据。 |
| `<base>` | 定义文档的基础 URL，用于相对 URL 的解析。 | 设置文档中所有相对 URL 的基础 URL。 |
| `<basefont>` | 已废弃的元素，用于设置文档的默认字体、大小和颜色。 | 不再推荐使用，应使用 CSS 来设置字体样式。 |


## Programming HTML 脚本

| 元素名称 | 元素介绍 | 应用场景 |
| --- | --- | --- |
| `<script>` | 定义客户端脚本，如 JavaScript。 | 添加交互性或动态内容到网页。 |
| `<noscript>` | 定义在浏览器禁用脚本时显示的内容。 | 显示替代内容给禁用脚本的用户。 |
| `<applet>` | 已废弃的元素，用于定义 Java applet。 | 不再推荐使用，应使用 `<embed>` 或 `<object>` 替代。 |
| `<embed>` | 定义嵌入的内容，如插件。 | 嵌入非 HTML 内容，如 Flash 或 PDF 文件。 |
| `<object>` | 定义嵌入的内容，如插件或图像。 | 嵌入非 HTML 内容，并提供备用内容。 |
| `<param>` | 定义 `<object>` 或 `<applet>` 的参数。 | 为 `<object>` 或 `<applet>` 提供配置参数。 |
