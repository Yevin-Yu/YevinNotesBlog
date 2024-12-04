import{_ as n,c as e,f as t,b as h,d as k,r as d,o as r,a as i,e as s}from"./app-C-kwE-6W.js";const p={};function g(y,l){const a=d("CodeDemo");return r(),e("div",null,[l[2]||(l[2]=t(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>在移动端浏览器中，当用户滚动页面时，浏览器会自动显示滚动条。但是，当用户滚动停止滚动时，滚动条会自动隐藏。这是因为浏览器会根据用户的滚动位置来自动判断是否需要显示或隐藏滚动条。</p><p>但是，在某些情况下，我们可能希望在用户刚进入页面或者在当前页面停止滚动时，滚动条仍然保持显示状态。一般情况下，这可以通过设置 <code>overflow-y</code> 属性为 <code>scroll</code> 来实现。</p><p>但是问题并未解决。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>经过测试研究发现，仅仅设置 <code>overflow</code> 属性为 <code>auto</code> 无法实现移动端滚动条一直显示，还需要辅助设置 <code>::-webkit-scrollbar</code> 和 <code>::-webkit-scrollbar-thumb</code> 。</p><ul><li><code>::-webkit-scrollbar</code>：设置滚动条的整体样式。</li><li><code>::-webkit-scrollbar-thumb</code>：设置滚动条的滑块样式。</li></ul><p>示例：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    overflow-y</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> auto</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /* Webkit 浏览器的滚动条样式 */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">-webkit-scrollbar</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /* Webkit 浏览器的滚动条样式 */</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  .</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">-webkit-scrollbar-thumb</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">888</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="演示" tabindex="-1"><a class="header-anchor" href="#演示"><span>演示</span></a></h2>`,10)),h(a,{id:"code-demo-37",type:"normal",title:"zoom%20%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%20%E6%A8%AA%E5%90%91%E6%BB%9A%E5%8A%A8",code:"eJy9kDFOwzAUhq/yZLaKkAYJqTKh12DJ4jhubNW1o8RtQFU3BsTSmUpIMNELIAa4TgLHwG3iNAPqWC/P+v3e7+/9S8TNTCKMwkQsgEpSFDcRoloZIhTLIzSOFNgT8mDMmZQ69O3tNFroWyZb0TmiRWEZ4aIDg2UzMyN5KhQeApkbfd1oesHyidQl7oulSAzHcDUcZnetlIgik+Qew0Qyp3EmUm4wBL2+mNBpmuu5Sjyqpc4xZEJN94+rSO0KDxxP5ymUtJxeLDVtWi2rUF6LEVwe7DOSJEKlGHpau5btO0JxxhjrU/gDuGXxVBioP9a/74/V8/Zn81B/baqnbf3yVr9+Vt9rGPi73kOSGHvlfsoraK6ljEkXrsusY3DpOKX9+KiZZ/h8FjvLf7YYjUbODK3+APqJ2nM="},{default:k(()=>l[0]||(l[0]=[i("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"container"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    margin"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," auto"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    overflow"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," auto"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 500"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    display"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," flex"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 100"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," pink"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"  h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    display"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," inline-block"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    min-width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 120"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    padding"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    margin"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 12"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"eee"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /* Webkit 浏览器的滚动条样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"::"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"-webkit-scrollbar"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 5"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 5"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"::"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"-webkit-scrollbar-thumb"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"888"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),h(a,{id:"code-demo-41",type:"normal",title:"zoom%20%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA%20%E7%AB%96%E5%90%91%E6%BB%9A%E5%8A%A8",code:"eJy9kDFOwzAUhq9ima0ipKmEFJnQa7BkcRwTW3HsyHEapKobA2LpTCUkmOgFEANcJ4Fj4LRJGgnUsV6e9fm9//3+l5CZTEAEg5gvABG4KK5DSJQ0mEuqQzgPJbAnYN6cUSFU4NrbaVjgWk+2wnNIisJ6BBeDMbDcz2RYJ1yiKcClUVd7phZU3wpVoTGseGwYApfTaX7XIUZ5wgwCsxGLMEkTrUoZO0QJpRHIuUx3j6tQtoV5w24unU7Wmx0kchzHXCat7sA6m7bvyKYzSul4kzsBNzRKuQHN+/rn7aF+2n5v7pvPTf24bZ5fm5eP+msNJm7be0gGIafaTTkF0UqICA9h9Rn8SaAn3eKjYo5hZRb1kv/8wvf9XgyufgHbecpk"},{default:k(()=>l[1]||(l[1]=[i("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"<"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," class"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"container"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    <"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"hello"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"</"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"div"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),i("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    margin"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}},"0"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," auto"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    overflow"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," auto"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 500"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 200"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," pink"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"  h1"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    min-width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 120"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    padding"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 20"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    margin"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 12"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"eee"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  /* Webkit 浏览器的滚动条样式 */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"::"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"-webkit-scrollbar"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    width"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 5"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    height"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#2F798A","--shiki-dark":"#4C9A91"}}," 5"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"px"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  ."),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"container"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"::"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"-webkit-scrollbar-thumb"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    background-color"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," #"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"888"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  }")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1})])}const o=n(p,[["render",g],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/article/1jo8l6m9/","title":"H5移动端  - 浏览器滚动条自动隐藏问题","lang":"zh-CN","frontmatter":{"title":"H5移动端  - 浏览器滚动条自动隐藏问题","author":"耶温","createTime":"2024/07/17 16:40:53","permalink":"/article/1jo8l6m9/","tags":["H5"]},"headers":[],"readingTime":{"minutes":1.6,"words":481},"git":{"updatedTime":1733132502000,"contributors":[{"name":"Yevin Yu","email":"yuwb0521@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/Yevin Yu?v=4","url":"https://github.com/Yevin Yu"}]},"filePathRelative":"Blog/HTML/H5浏览器滚动条自动隐藏问题.md","categoryList":[{"id":"be8df1","sort":10002,"name":"Blog"},{"id":"768757","sort":10009,"name":"HTML"}],"bulletin":false}');export{o as comp,A as data};
