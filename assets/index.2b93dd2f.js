import{r as h,o as p,c as f,d as g,a as v,l as E,b as y,u as j,h as A,e as w,f as b,g as L,C as q}from"./vendor.a9eeee09.js";const P=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};P();var k=(n,c)=>{const r=n.__vccOpts||n;for(const[t,e]of c)r[t]=e;return r};const D={};function I(n,c){const r=h("router-view");return p(),f(r)}var O=k(D,[["render",I]]);const R="modulepreload",l={},x="./",s=function(c,r){return!r||r.length===0?c():Promise.all(r.map(t=>{if(t=`${x}${t}`,t in l)return;l[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":R,e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e)return new Promise((m,_)=>{a.addEventListener("load",m),a.addEventListener("error",_)})})).then(()=>c())};const C=["innerHTML"],T=g({props:{content:{type:String,required:!0}},setup(n){const c=n,{content:r}=c;return v(()=>{const t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,E.highlightBlock)}),(t,e)=>(p(),y("article",{class:"markdown-body",innerHTML:j(r)},null,8,C))}}),V=`<h1>\u5FEB\u901F\u4F7F\u7528</h1>
<p>\u8BF7\u5148<a href="#/doc/install">\u5B89\u88C5</a>\u672C\u7EC4\u4EF6\u5E93\u3002</p>
<h3>\u5B8C\u6574\u5F15\u5165</h3>
<pre><code class="language-javascript">// main.ts
import { createApp } from &quot;vue&quot;;
import App from &quot;./App.vue&quot;;

import JwUi from &quot;yjw-ui&quot;;
import &quot;yjw-ui/dist/lib/yjw-ui.css&quot;;

const app = createApp(App);

app.use(JwUi);
app.mount(&quot;#app&quot;);
</code></pre>
<h3>\u5F15\u5165\u67D0\u4E2A\u7EC4\u4EF6</h3>
<pre><code class="language-javascript">import { JwButton } from &quot;yjw-ui&quot;;
import &quot;yjw-ui/dist/lib/yjw-ui.css&quot;;
</code></pre>
<p>\u5B8C\u6210\u5F15\u5165\u5C31\u53EF\u4EE5\u4F7F\u7528\u6211\u63D0\u4F9B\u7684\u7EC4\u4EF6\u5566\u3002</p>
<h4>Vue \u5355\u6587\u4EF6\u7EC4\u4EF6</h4>
<p>\u4EE3\u7801\u793A\u4F8B\uFF1A</p>
<pre><code class="language-html">&lt;template&gt;
  &lt;jw-button&gt;\u6309\u94AE&lt;/jw-button&gt;
&lt;/template&gt;
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/avatar">Avatar \u5934\u50CF</a></p>
`,B=`<h1>\u5B89\u88C5</h1>
<p>\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\uFF1A</p>
<pre><code class="language-shell"># NPM
$ npm install yjw-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># Yarn
$ yarn add yjw-ui
</code></pre>
<p>\u6216</p>
<pre><code class="language-shell"># pnpm
$ pnpm install yjw-ui
</code></pre>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/get-started">\u5FEB\u901F\u4F7F\u7528</a></p>
`,F=`<h1>JW UI</h1>
<p>CM UI \u662F\u4E00\u4E2A Vue3 \u7684\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\uFF0C\u56E0\u6B64\u6211\u975E\u5E38\u9A84\u50B2\u7684\u7528\u6211\u7684\u540D\u5B57\u4E3A\u5176\u547D\u540D!</p>
<h1>\u4ECB\u7ECD</h1>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u662F\u6211\u5728\u5B66\u4E60\u4E86 vue3 \u7684\u65B0\u7279\u6027\u540E\u5E76\u4E14\u7ED3\u5408\u81EA\u5DF1\u8FD1\u4E24\u5E74\u7684\u5DE5\u4F5C\u7ECF\u9A8C\u6240\u5199\u7684\uFF0C<code>\u5168\u7A0B\u4EB2\u624B\u7F16\u5199</code>\uFF0C\u5C3D\u91CF<code>\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93</code>\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u51E0\u4E4E\u90FD\u662F\u6211\u81EA\u5DF1\u5199\u7684\u3002</p>
<p>\u76EE\u524D\u6211\u8FD8\u662F<code>\u4E0D\u5EFA\u8BAE</code>\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F<code>\u503C\u5F97\u4E00\u770B</code>\u7684\u3002</p>
<p>\u6E90\u4EE3\u7801\u653E\u5728\u4E86<a href="https://github.com/coderyjw/jw-ui">\u6211\u7684 github</a>\uFF0C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\uFF0C\u5386\u53F2\u63D0\u4EA4\u4FE1\u606F\u975E\u5E38\u89C4\u8303\uFF0C\u4F60\u53EF\u4EE5\u6309\u63D0\u4EA4\u7684\u987A\u5E8F\u9010\u4E2A\u67E5\u770B\uFF1B</p>
<p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u867D\u7136\u76EE\u524D\u7EC4\u4EF6\u4E0D\u591A\uFF0C\u4F46\u662F\u6211\u4F1A\u6162\u6162\u7684\u66F4\u65B0\u54D2(<em>^\u25BD^</em>)</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/install">\u5B89\u88C5</a></p>
`,u=n=>A(T,{content:n,key:n});var d={\u6587\u6863:[{path:"/doc/intro",component:u(F),name:"\u4ECB\u7ECD"},{path:"/doc/install",component:u(B),name:"\u5B89\u88C5"},{path:"/doc/get-started",component:u(V),name:"\u5FEB\u901F\u4F7F\u7528"}],\u901A\u7528:[{path:"/doc/button",component:()=>s(()=>import("./index.2c9acf1e.js"),["assets/index.2c9acf1e.js","assets/index.8081e91e.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"button \u6309\u94AE"},{path:"/doc/avatar",component:()=>s(()=>import("./index.2304da0f.js"),["assets/index.2304da0f.js","assets/index.c1a12f73.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"avatar \u5934\u50CF"},{path:"/doc/icon",component:()=>s(()=>import("./index.fe9bff7a.js"),["assets/index.fe9bff7a.js","assets/index.d15632a8.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"icon \u56FE\u6807"},{path:"/doc/link",component:()=>s(()=>import("./index.13fbb7ea.js"),["assets/index.13fbb7ea.js","assets/index.959cb5a3.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"link \u94FE\u63A5"}],\u6570\u636E\u5F55\u5165:[{path:"/doc/switch",component:()=>s(()=>import("./index.639740c9.js"),["assets/index.639740c9.js","assets/index.5715d47e.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"switch \u5F00\u5173"}],\u53CD\u9988:[{path:"/doc/dialog",component:()=>s(()=>import("./index.f385aa2c.js"),["assets/index.f385aa2c.js","assets/index.da097784.css","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js","assets/index.85e9127e.js","assets/index.2daf1a76.css"]),name:"dialog \u5BF9\u8BDD\u6846"}],\u6570\u636E\u5C55\u793A:[{path:"/doc/tabs",component:()=>s(()=>import("./index.31c4a34e.js"),["assets/index.31c4a34e.js","assets/TableDoc.40a9b102.js","assets/TableDoc.5157318a.css","assets/vendor.a9eeee09.js"]),name:"tabs \u6807\u7B7E\u9875"}]};let i=[];for(const n in d)i=[...i,...d[n]];const $=[{path:"/",redirect:"/home",component:()=>s(()=>import("./Index.98a86587.js"),["assets/Index.98a86587.js","assets/Index.7e9ed6e9.css","assets/vendor.a9eeee09.js"]),children:[{path:"/home",name:"home",component:()=>s(()=>import("./Home.efcc02a8.js"),["assets/Home.efcc02a8.js","assets/Home.5516f29c.css","assets/vendor.a9eeee09.js","assets/index.85e9127e.js","assets/index.2daf1a76.css"])},{path:"/doc",redirect:"/doc/intro",component:()=>s(()=>import("./Index.ac470f57.js"),["assets/Index.ac470f57.js","assets/Index.06de5c53.css","assets/vendor.a9eeee09.js"]),children:[...i]}]}],M=w({history:b(),routes:$});L(O).use(M).use(q).mount("#app");export{k as _,d};
