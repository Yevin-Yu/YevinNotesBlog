import{_ as l,c as e,f as a,o as r}from"./app-C-kwE-6W.js";const t={};function p(o,i){return r(),e("div",null,i[0]||(i[0]=[a('<h2 id="浏览器发展史" tabindex="-1"><a class="header-anchor" href="#浏览器发展史"><span>浏览器发展史</span></a></h2><ul><li>1991 Berners Lee（互联网发明者之一） 建立了第一代网络浏览器 WordWideWeb（显示文本图片）</li><li>1994 网景浏览器发布（Netscape Navigator）</li><li>1995 IE 浏览器发布（Internet Explorer）后与 Windows 操作系统绑定，占据大部分市场份额</li><li>2003 Safari 浏览器发布</li><li>2004 Mozilla 推出火狐浏览器（Firefox）</li><li>2005 苹果开源了 Safari 内核，webkit</li><li>2006 谷歌以 webkit 作为内核创建了一个新的 Chromium（发布浏览器 Chrome）</li><li>至今 Chrome 占据市场份额 一半以上。如今主要浏览器有：Chrome，Firefox，Safari，Edge。</li></ul><h2 id="浏览器内核" tabindex="-1"><a class="header-anchor" href="#浏览器内核"><span>浏览器内核</span></a></h2><ul><li>Blink：基于 Webkit 改造，由 Google 开发的开源内核，现在 Chrome，Opera，Edge 都使用 Blink 内核。</li><li>Webkit：开源内核，最初由苹果开发，现在 主要是 Safari 浏览器使用。</li><li>Gecko：由 Mozilla 开发打造的开源内核，主要用于 Firefox 浏览器。</li><li>Trident：由微软开发，主要用于早期版本的 IE 浏览器。</li></ul><p>现在开发项目，一般不在考虑兼容 IE 浏览器，所以主要考虑 Blink 和 Webkit 内核的浏览器。</p><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程"><span>进程和线程</span></a></h2><p><strong>进程（Process）</strong></p><p>进程是操作系统分配资源的基本单位，每个进程都有自己的内存空间、数据栈和其他用于跟踪进程执行的辅助数据。</p><p>浏览器中的进程：</p><ul><li>多进程架构：现代浏览器通常采用多进程架构，每个标签页、扩展和插件可能在独立的进程中运行。这种设计提高了浏览器的稳定性和安全性。</li><li>隔离：如果一个标签页崩溃，其他标签页和浏览器本身不会受到影响，因为它们在不同的进程中运行。</li><li>安全性：通过将不同的网页和扩展隔离在不同的进程中，浏览器可以防止恶意网页访问其他网页的数据。</li></ul><p><strong>线程（Thread）</strong></p><p>线程是进程中的一个执行单元，多个线程可以共享同一进程的资源（如内存），但每个线程有自己的执行栈和程序计数器。</p><p>浏览器中的线程：</p><ul><li>主线程：浏览器通常有一个主线程，负责处理用户界面（UI）事件、渲染页面和执行 JavaScript 代码。</li><li>工作线程：为了提高性能，浏览器可以创建多个工作线程来处理一些耗时的任务，如网络请求、图像解码和 JavaScript 的异步执行。这些工作线程可以在后台运行，不会阻塞主线程。</li><li>Web Workers：浏览器还支持Web Workers，允许开发者创建后台线程来执行 JavaScript 代码，从而避免阻塞主线程。这对于处理复杂计算或大数据处理非常有用。</li></ul><p><strong>两者区别</strong></p><ul><li>资源分配：进程是资源分配的基本单位，每个进程有独立的内存空间；而线程是执行的基本单位，多个线程可以共享同一进程的资源。</li><li>开销：创建和管理进程的开销通常比线程大，因为进程需要独立的内存空间和资源；线程的创建和切换开销较小。</li><li>稳定：进程之间相互独立，一个进程的崩溃不会影响其他进程；而线程之间共享资源，可能会因为一个线程的错误导致整个进程崩溃。</li></ul><p>在现代浏览器中，进程和线程的合理使用是实现高性能和高安全性的关键。多进程架构提高了浏览器的稳定性和安全性，而多线程则提高了资源的利用效率和响应速度。通过这种设计，浏览器能够更好地处理复杂的Web应用和用户交互。</p><h2 id="浏览器结构" tabindex="-1"><a class="header-anchor" href="#浏览器结构"><span>浏览器结构</span></a></h2><p><strong>用户界面（User interface）</strong></p><p>主要是用户与浏览器交互的部分，通常包括：</p><ul><li>地址栏：用于输入网址和显示当前页面的 URL。</li><li>工具栏：包含常用功能的按钮，如返回、前进、刷新、书签等。</li><li>标签页：允许用户同时打开多个网页，每个网页在一个标签页中显示。</li><li>菜单：提供额外的功能和设置选项。</li></ul><p><strong>浏览器引擎（Browser engine）</strong></p><p>浏览器引擎是用户界面与渲染引擎之间的桥梁，负责：</p><ul><li>处理用户输入。</li><li>将请求传递给渲染引擎。</li><li>接收渲染引擎的输出并更新用户界面。</li></ul><p><strong>渲染引擎（Rendering engine）</strong></p><p>渲染引擎的主要任务是将网页内容呈现给用户，具体步骤包括：</p><ul><li>解析 HTML：将 HTML 文档解析为 DOM（文档对象模型）树。</li><li>解析 CSS：将 CSS 规则解析为 CSSOM（CSS 对象模型）树。</li><li>构建渲染树：结合 DOM 和 CSSOM，构建渲染树，表示页面的可视化结构。</li><li>布局：计算每个节点的确切位置和大小。</li><li>绘制：将渲染树中的节点绘制到屏幕上。</li></ul><p><strong>网络模块（Networking）</strong></p><p>网络模块负责处理网络请求，包括：</p><ul><li>发送请求：通过 HTTP/HTTPS 协议向服务器发送请求。</li><li>接收响应：处理服务器返回的数据。</li><li>缓存管理：管理缓存以提高加载速度，减少网络请求。</li><li>Cookie 管理：处理与用户会话相关的 Cookie。</li></ul><p><strong>JavaScript 引擎（JavaScript engine）</strong></p><p>JavaScript 引擎负责执行网页中的 JavaScript 代码，主要功能包括：</p><ul><li>解析：将 JavaScript 代码解析为抽象语法树（AST）。</li><li>编译：将 AST 编译为字节码或机器码。</li><li>执行：执行编译后的代码。</li><li>内存管理：管理 JavaScript 对象的内存分配和回收。</li></ul><p><strong>数据存储（Data storage）</strong></p><p>数据存储模块负责在本地存储数据，包括：</p><ul><li>Cookie：存储在用户浏览器中的小型文本文件，用于跟踪用户会话。</li><li>本地存储（Local Storage）：在用户浏览器中存储数据，数据不会过期，除非用户手动清除。</li><li>会话存储（Session Storage）：与本地存储类似，但数据只在浏览器会话期间有效，一旦用户关闭浏览器，数据将被清除。</li><li>IndexedDB：一个强大的、基于事务的存储系统，用于存储大量结构化数据。</li></ul><p><strong>安全模块（Security）</strong></p><p>安全模块负责处理与安全相关的事项，包括：</p><ul><li>SSL/TLS：加密网络通信，保护用户数据的安全。</li><li>内容安全策略（CSP）：防止跨站脚本攻击（XSS）和其他安全漏洞。</li><li>跨域资源共享（CORS）：管理跨域请求，确保数据的安全传输。</li><li>恶意软件检测：检测和阻止恶意软件和广告。</li></ul><p><strong>插件和扩展（Plugins and Extensions）</strong></p><p>插件和扩展模块允许用户安装和运行浏览器插件和扩展，以增强浏览器的功能。插件通常由第三方开发，而扩展则由浏览器开发者或第三方开发者提供，用于添加新的功能或修改现有功能。</p><h2 id="浏览器进程" tabindex="-1"><a class="header-anchor" href="#浏览器进程"><span>浏览器进程</span></a></h2><p>单进程浏览器：</p><ul><li>不稳定，当一个线程或者进程卡死，浏览器就会崩溃，无法正常运行。</li><li>不安全，因为进程间数据共享，js 可以随意访问浏览器进程内的所有数据。</li><li>不流畅，一个进程负责太多东西，会导致效率问题，运行不流畅</li></ul><p>现在浏览器基本上都是多进程结构。（以 Chrome 为例）</p><ul><li>浏览器主进程：负责浏览器界面的显示，用户交互，子进程管理，文件存储等功能。</li><li>渲染器进程：负责将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，每个标签页一个渲染器进程。</li><li>网络进程：负责网络请求，每个标签页一个网络进程。</li><li>GPU 进程：负责 GPU 加速，每个标签页一个 GPU 进程。</li><li>插件进程：负责插件运行，每个插件一个进程。</li></ul><h2 id="完整渲染过程" tabindex="-1"><a class="header-anchor" href="#完整渲染过程"><span>完整渲染过程</span></a></h2><p>浏览器的渲染过程是将网页内容从 HTML、CSS 和 JavaScript 转换为用户可见的页面的复杂过程。</p><p>以下是浏览器完整渲染过程的详细步骤：</p><ol><li><p>解析 HTML</p><ul><li>获取 HTML 文档：浏览器通过网络模块发送 HTTP 请求，获取服务器返回的 HTML 文档。</li><li>构建 DOM 树：浏览器解析 HTML 文档，构建一个称为 DOM（文档对象模型）的树结构。每个 HTML 元素、属性和文本节点都对应于 DOM 树中的一个节点。</li></ul></li><li><p>解析 CSS</p><ul><li>获取 CSS：浏览器在解析 HTML 时，会发现 <code>&lt;link&gt;</code> 标签和 <code>&lt;style&gt;</code> 标签中的 CSS。它会发送请求获取外部 CSS 文件。</li><li>构建 CSSOM 树：浏览器解析 CSS 规则，构建一个称为 CSSOM（CSS 对象模型）的树结构。CSSOM 树表示了所有样式规则及其对应的选择器。</li></ul></li><li><p>构建渲染树</p><ul><li>合并 DOM 和 CSSOM：浏览器将 DOM 树和 CSSOM 树结合，构建渲染树。渲染树只包含可见的节点（即在屏幕上显示的元素），并且每个节点都包含样式信息。</li><li>排除不可见元素：例如，<code>display: none;</code> 的元素不会出现在渲染树中。</li></ul></li><li><p>布局（Layout）</p><ul><li>计算节点位置和大小：浏览器根据渲染树中的信息计算每个节点的确切位置和大小。这一过程称为布局（或重排）。</li><li>流式布局：浏览器根据 CSS 规则（如盒模型、浮动、定位等）确定元素的排列方式。</li></ul></li><li><p>绘制（Painting）</p><ul><li>绘制渲染树：浏览器将渲染树中的每个节点转换为实际的像素，绘制到屏幕上。这个过程称为绘制。</li><li>分层绘制：现代浏览器通常会将页面分成多个层（layer），每个层可以独立绘制。这有助于提高性能，特别是在处理复杂的动画和变换时。</li></ul></li><li><p>合成（Compositing）</p><ul><li>合成层：在绘制完成后，浏览器会将不同的层合成到一起，形成最终的图像。这一过程通常在 GPU 中进行，以提高性能。</li><li>合成顺序：浏览器根据层的 z-index 和其他属性确定合成的顺序。</li></ul></li><li><p>处理 JavaScript</p><ul><li>执行 JavaScript：在渲染过程中，浏览器会遇到 JavaScript 代码。JavaScript 引擎会解析和执行这些代码。</li><li>DOM 操作：JavaScript 可以动态修改 DOM 和 CSSOM，这可能会导致重新渲染（reflow）和重新绘制（repaint）。例如，添加、删除或修改元素会影响布局和样式。</li></ul></li><li><p>重新渲染</p><ul><li>重排和重绘：如果 JavaScript 修改了 DOM 或 CSSOM，浏览器可能需要重新计算布局（重排）和重新绘制（重绘）页面。这可能会影响性能，尤其是在频繁更新的情况下。</li><li>优化：现代浏览器会尽量优化重排和重绘的过程，以减少性能损失。例如，合并多个 DOM 操作，使用 <code>requestAnimationFrame</code> 来协调动画等。</li></ul></li></ol><p>浏览器的渲染过程是一个复杂而高效的流程，涉及多个步骤，从解析 HTML 和 CSS 到构建渲染树、布局、绘制和合成。理解这一过程有助于我们优化网页性能和用户体验。</p><p>通过合理使用 CSS、JavaScript 和优化技术，可以减少重排和重绘的次数，提高页面的响应速度。</p>',52)]))}const s=l(t,[["render",p],["__file","index.html.vue"]]),S=JSON.parse('{"path":"/Computer/aoxbq9ut/","title":"浏览器是运作原理","lang":"zh-CN","frontmatter":{"title":"浏览器是运作原理","author":"耶温","createTime":"2024/05/10 16:02:38","permalink":"/Computer/aoxbq9ut/","tags":["计算机基础","浏览器"]},"headers":[],"readingTime":{"minutes":9.58,"words":2875},"git":{"updatedTime":1732258650000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":2,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/Computer/浏览器是运作原理.md","bulletin":false}');export{s as comp,S as data};