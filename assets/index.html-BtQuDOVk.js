import{_ as n,c as a,f as e,o as i}from"./app-C-kwE-6W.js";const l="/yevin-notes-blog/assets/image-4-CDiB_BP1.png",p={};function d(t,s){return i(),a("div",null,s[0]||(s[0]=[e('<p>在Vue3官方文档中，我们可以看到，它列举了几种常见的包管理器：</p><p><img src="'+l+`" alt="NPM"></p><p><code>npm</code>、<code>pnpm</code> 和 <code>yarn</code> 是 JavaScript 生态系统中常用的包管理工具。下面，简单介绍一下它们的区别和特点。</p><h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm"><span>npm</span></a></h2><p>npm（Node Package Manager） 是 Node.js 社区中广泛使用的包管理工具。它是一个基于 JavaScript 的包管理工具，用于在项目中安装和管理第三方库。他会和 Node.js 一起安装，可以通过 <code>npm -v</code> 查看当前版本以及是否安装。</p><p><strong>优点</strong></p><ul><li><p>生态系统：拥有全球最大的开源库注册中心，用户可以轻松找到和使用数以万计的开源包，极大地促进了开发者的协作和共享。</p></li><li><p>易于使用：npm 提供了丰富的命令行工具和 API，使得开发者可以方便地安装、更新和卸载包。常用命令如 <code>npm install</code>、<code>npm update</code> 和 <code>npm uninstall</code> 等都很容易理解。</p></li><li><p>社区支持：作为 Node.js 的默认包管理器，npm 拥有庞大的用户基础和丰富的文档资源。而且有大量的社区支持和资源，易于获取帮助。</p></li><li><p>版本控制：npm 支持版本控制，可以轻松地管理包的版本号，确保项目的稳定性和可靠性。</p></li></ul><p><strong>缺点</strong></p><ul><li>安装缓慢：在处理大量依赖时，npm 的安装速度可能较慢，尤其是在没有缓存的情况下。</li><li>依赖冲突：在某些情况下，可能会出现依赖版本冲突，导致项目无法正常运行。</li></ul><p><strong>常用命令</strong></p><ul><li>初始化项目：<code>npm init</code>，引导创建 package.json 文件，用于记录项目的依赖和配置信息。</li><li>安装所有包：<code>npm install</code>，根据 package.json 文件中的依赖进行安装。</li><li>安装指定包：<code>npm install &lt;package-name&gt;</code></li><li>卸载指定包：<code>npm uninstall &lt;package-name&gt;</code></li><li>更新指定包：<code>npm update &lt;package-name&gt;</code></li><li>查看包信息：<code>npm info &lt;package-name&gt;</code></li><li>查看全局包：<code>npm ls -g</code></li><li>查看本地包：<code>npm ls</code>，查看当前项目所有依赖树</li><li>运行脚本：<code>npm run &lt;script-name&gt;</code> ，运行 package.json 中 script 定义的脚本</li></ul><p>package-lock.json 是 npm 的依赖锁定文件，用于记录项目中所有依赖的版本号和哈希值。如果在项目中使用了不同版本的依赖，package-lock.json 会自动更新，以确保项目的稳定性和可靠性。</p><h2 id="cnpm" tabindex="-1"><a class="header-anchor" href="#cnpm"><span>cnpm</span></a></h2><p>cnpm 是一个中国地区的 npm 镜像工具，旨在解决 npm 在中国大陆使用时的网络问题。由于 npm 官方注册表的访问速度较慢，<code>cnpm</code> 提供了一个更快的镜像，帮助开发者更顺利地安装和管理 Node.js 包。</p><p><strong>优点</strong></p><ul><li>快速安装：cnpm 镜像提供了更快的下载速度，解决了 npm 在中国大陆使用时的网络问题。</li><li>兼容性：cnpm 的命令行接口与 npm 兼容，用户可以使用与 npm 相同的命令来安装、卸载和管理包。</li></ul><p>总的来说，cnpm 只是一个 npm 镜像，它的主要作用是加速 npm 的下载速度。对于 npm 的一些问题和缺点，并没有解决。</p><p><strong>安装</strong></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> cnpm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --registry=https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>cnpm 的常用命令和 npm 一致，只是把 <code>npm</code> 替换成了 <code>cnpm</code> 。需要注意的是，cnpm 不生成 版本锁定 lock 文件，也不会识别项目下的 lock 文件，所以还是推荐使用 npm 或者其他包管理工具，通过绑定镜像源的方式来管理项目的包。</p><p>设置镜像源</p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> config</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> set</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> registry</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> https://registry.npmmirror.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="npx" tabindex="-1"><a class="header-anchor" href="#npx"><span>npx</span></a></h2><p>npx 是一个随 npm 5.2.0 版本引入的命令行工具，旨在简化 Node.js 包的执行过程。它允许用户直接运行在 npm 注册表中安装的包，而无需全局安装这些包。</p><p><strong>特点</strong></p><p>1.直接执行包</p><ul><li>npx 允许用户直接运行在 npm 注册表中找到的包，而不需要先将其安装到全局或本地项目中。例如，可以使用 npx 直接运行 <code>create-react-app</code> 来创建一个新的 React 应用，而无需全局安装该工具。</li></ul><ol start="2"><li>临时安装</li></ol><ul><li>如果指定的包未安装，npx 会自动下载并执行该包，然后在执行完成后将其删除。这使得用户可以临时使用某些工具，而不必担心全局环境的污染。</li></ul><ol start="3"><li>版本控制</li></ol><ul><li>npx 允许用户指定要运行的包的版本。例如，可以通过 <code>npx create-react-app@latest</code> 来确保使用最新版本的 <code>create-react-app</code>。</li></ul><ol start="4"><li>执行本地包</li></ol><ul><li>npx 会优先查找项目的 node_modules/.bin 目录中的可执行文件，这样用户可以直接运行本地安装的包，而无需指定完整路径。</li></ul><h2 id="pnpm" tabindex="-1"><a class="header-anchor" href="#pnpm"><span>pnpm</span></a></h2><p>pnpm（Performant NPM）是一个高效的JavaScript包管理工具，旨在提高依赖管理的速度和效率。它与 npm 和 Yarn 类似，但在处理依赖时采用了不同的策略。</p><p><strong>优点</strong></p><ul><li><p>节省磁盘空间：通过硬链接和符号链接的方式，避免重复安装相同的依赖，节省磁盘空间。</p><ul><li>共享依赖：当多个项目使用相同的依赖的时候，pnpm 只会在磁盘上保留一份依赖。</li><li>符号链接：当一个项目安装了某个包的时候 pnpm 会在项目的 node_modules 目录下创建一个符号链接指向全局的依赖目录，这样多个项目可以共享一个依赖而不是每个项目都拥有一份独立的依赖副本。</li></ul></li><li><p>快速安装：在多项目中共享依赖时，安装速度非常快。</p></li><li><p>一致性：使用 pnpm-lock.yaml 文件确保依赖版本的一致性。</p></li></ul><p><strong>缺点</strong></p><ul><li>兼容性问题：某些 npm 包可能依赖于 npm 的特定行为，使用 pnpm 时可能会遇到问题。</li></ul><p><strong>常用命令</strong></p><ul><li>初始化项目：<code>pnpm init</code></li><li>安装所有包：<code>pnpm install</code></li><li>安装指定包：<code>pnpm add &lt;package-name&gt;</code></li><li>查看包信息：<code>pnpm info &lt;package-name&gt;</code></li><li>卸载指定包：<code>pnpm remove &lt;package-name&gt;</code></li><li>更新指定包：<code>pnpm update &lt;package-name&gt;</code></li><li>查看全局包：<code>pnpm global list</code></li><li>查看本地包：<code>pnpm list</code></li></ul><p><strong>安装</strong></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -g</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 检查是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">pnpm</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn"><span>yarn</span></a></h2><p>yarn 是由 Facebook 开发的一个 JavaScript 包管理器，旨在解决 npm 的一些性能和安全性问题。它提供了更快的安装速度和更好的依赖管理。npmjs 上的包会同步到 yarn ，因此可以直接使用 yarn 安装 npm 上的包。</p><p><strong>优点</strong></p><ul><li>快速安装：使用缓存机制，安装速度通常比 npm 快，尤其是在重复安装相同依赖时。</li><li>离线安装：可以在没有网络的情况下安装之前已安装的依赖。</li><li>锁文件：yarn 会生成一个 lock 文件，记录了每个包的版本号和哈希值，确保在后续的安装和更新过程中，包的版本不会发生变化。</li><li>并行安装：支持并行安装多个依赖，进一步提高安装速度。</li></ul><p><strong>缺点</strong></p><ul><li>兼容性问题：yarn 目前还不支持所有的 npm 命令，因此在一些情况下可能会出现兼容性问题。</li></ul><p><strong>常用命令</strong></p><ul><li>初始化项目：<code>yarn init</code></li><li>安装所有包：<code>yarn install</code></li><li>安装指定包：<code>yarn add &lt;package-name&gt;</code></li><li>查看包信息：<code>yarn info &lt;package-name&gt;</code></li><li>卸载指定包：<code>yarn remove &lt;package-name&gt;</code></li><li>更新指定包：<code>yarn upgrade &lt;package-name&gt;</code></li><li>查看全局包：<code>yarn global list</code></li><li>查看本地包：<code>yarn list</code></li></ul><p><strong>安装</strong></p><div class="language-sh line-numbers-mode" data-ext="sh" data-title="sh"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --global</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">//</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 检查是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">yarn</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>yarn.lock 是 yarn 生成的一个依赖锁定文件，用于记录每个包的版本号和哈希值。如果在项目中使用了不同版本的依赖，yarn.lock 会自动更新，以确保项目的稳定性和可靠性。</p><h2 id="依赖树" tabindex="-1"><a class="header-anchor" href="#依赖树"><span>依赖树</span></a></h2><p>npm早期使用嵌套结构，每个项目都有自己的 node_modules 目录，随着项目规模的扩大，node_modules 目录会变得非常庞大，导致安装速度和磁盘空间的浪费。</p><p>嵌套结构：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>└─ package1</span></span>
<span class="line"><span>   ├─ index.js</span></span>
<span class="line"><span>   ├─ package.json</span></span>
<span class="line"><span>   └─ node_modules</span></span>
<span class="line"><span>      └─ package3</span></span>
<span class="line"><span>         ├─ index.js</span></span>
<span class="line"><span>         └─ package.json</span></span>
<span class="line"><span>└─ package2</span></span>
<span class="line"><span>   ├─ index.js</span></span>
<span class="line"><span>   ├─ package.json</span></span>
<span class="line"><span>   └─ node_modules</span></span>
<span class="line"><span>      └─ package3</span></span>
<span class="line"><span>         ├─ index.js</span></span>
<span class="line"><span>         └─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，每个项目都有自己的 node_modules 目录，会导致可能重复安装相同的依赖。</p><p>扁平化结构：</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>├─ package1</span></span>
<span class="line"><span>│  ├─ index.js</span></span>
<span class="line"><span>│  └─ package.json</span></span>
<span class="line"><span>├─ package2</span></span>
<span class="line"><span>│  ├─ index.js</span></span>
<span class="line"><span>│  └─ package.json</span></span>
<span class="line"><span>└─ package3</span></span>
<span class="line"><span>   ├─ index.js</span></span>
<span class="line"><span>   └─ package.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm 后期版本 和 yarn 都采用扁平化结构，每个项目都有一个 node_modules 目录，所有的依赖都放在这个目录下，避免了重复安装相同的依赖。</p><p>但是，如果有多个版本的依赖包，包提升的时候只会提升一个版本，其他的版本依然会存在多个。</p><p><strong>软硬链接</strong></p><p>pnpm 使用硬链接和符号链接来管理依赖包。所有的依赖包都存储在一个全局的存储目录中，而项目的 node_modules 目录中只包含指向这些依赖的链接。这种方式确保了每个依赖包只存储一次，减少了重复，同时也使得依赖关系更加清晰。</p><p>pnpm 也使用是扁平的依赖树结构，但与传统的扁平结构不同的是，pnpm 会在 node_modules 中保留不同版本的同一个包。每个包的不同版本会被安装在其各自的目录中(通过链接操作，实际上还是只下载了一次)，确保每个依赖都能找到它所需的版本。</p><p>例如，如果项目中有两个依赖包 package-a 和 package-b，它们分别依赖于 lodash 的不同版本，pnpm 会在 node_modules 中创建如下结构:</p><div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>node_modules/</span></span>
<span class="line"><span>  ├── package-a/</span></span>
<span class="line"><span>  │   └── node_modules/</span></span>
<span class="line"><span>  │       └── lodash@3.x/（通过链接，指向对应的包）</span></span>
<span class="line"><span>  ├── package-b/</span></span>
<span class="line"><span>  │   └── node_modules/</span></span>
<span class="line"><span>  │       └── lodash@4.x/（通过链接，指向对应的包）</span></span>
<span class="line"><span>  └── lodash@3.x/</span></span>
<span class="line"><span>  └── lodash@4.x/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68)]))}const o=n(p,[["render",d],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/NPM/b54c2715/","title":"包管理器基础知识","lang":"zh-CN","frontmatter":{"title":"包管理器基础知识","author":"耶温","createTime":"2024/08/19 16:52:31","permalink":"/NPM/b54c2715/","tags":["npm","pnpm","yarn"]},"headers":[],"readingTime":{"minutes":8.14,"words":2441},"git":{"updatedTime":1732180273000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"notes/NPM/包管理器基础知识.md","bulletin":false}');export{o as comp,r as data};
