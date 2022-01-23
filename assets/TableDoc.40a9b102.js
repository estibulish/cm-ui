var de=Object.defineProperty,pe=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ae=(f,h,n)=>h in f?de(f,h,{enumerable:!0,configurable:!0,writable:!0,value:n}):f[h]=n,X=(f,h)=>{for(var n in h||(h={}))he.call(h,n)&&ae(f,n,h[n]);if(te)for(var n of te(h))ve.call(h,n)&&ae(f,n,h[n]);return f},Y=(f,h)=>pe(f,fe(h));import{A as ne,d as re,x as ie,q as se,o as w,b as k,i as S,z as R,u as G,c as me,B as ye,s as be,F as q,y as J}from"./vendor.a9eeee09.js";import{_ as ue}from"./index.2b93dd2f.js";var Fe={exports:{}};(function(f){var h=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(o){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,A=0,b={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof y?new y(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++A}),t.__id},clone:function t(e,a){a=a||{};var i,r;switch(s.util.type(e)){case"Object":if(r=s.util.objId(e),a[r])return a[r];i={},a[r]=i;for(var l in e)e.hasOwnProperty(l)&&(i[l]=t(e[l],a));return i;case"Array":return r=s.util.objId(e),a[r]?a[r]:(i=[],a[r]=i,e.forEach(function(c,u){i[u]=t(c,a)}),i);default:return e}},getLanguage:function(t){for(;t;){var e=d.exec(t.className);if(e)return e[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,e){t.className=t.className.replace(RegExp(d,"gi"),""),t.classList.add("language-"+e)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var a in e)if(e[a].src==t)return e[a]}return null}},isActive:function(t,e,a){for(var i="no-"+e;t;){var r=t.classList;if(r.contains(e))return!0;if(r.contains(i))return!1;t=t.parentElement}return!!a}},languages:{plain:b,plaintext:b,text:b,txt:b,extend:function(t,e){var a=s.util.clone(s.languages[t]);for(var i in e)a[i]=e[i];return a},insertBefore:function(t,e,a,i){i=i||s.languages;var r=i[t],l={};for(var c in r)if(r.hasOwnProperty(c)){if(c==e)for(var u in a)a.hasOwnProperty(u)&&(l[u]=a[u]);a.hasOwnProperty(c)||(l[c]=r[c])}var p=i[t];return i[t]=l,s.languages.DFS(s.languages,function(F,C){C===p&&F!=t&&(this[F]=l)}),l},DFS:function t(e,a,i,r){r=r||{};var l=s.util.objId;for(var c in e)if(e.hasOwnProperty(c)){a.call(e,c,e[c],i||c);var u=e[c],p=s.util.type(u);p==="Object"&&!r[l(u)]?(r[l(u)]=!0,t(u,a,null,r)):p==="Array"&&!r[l(u)]&&(r[l(u)]=!0,t(u,a,c,r))}}},plugins:{},highlightAll:function(t,e){s.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,a){var i={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),s.hooks.run("before-all-elements-highlight",i);for(var r=0,l;l=i.elements[r++];)s.highlightElement(l,e===!0,i.callback)},highlightElement:function(t,e,a){var i=s.util.getLanguage(t),r=s.languages[i];s.util.setLanguage(t,i);var l=t.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(l,i);var c=t.textContent,u={element:t,language:i,grammar:r,code:c};function p(C){u.highlightedCode=C,s.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s.hooks.run("after-highlight",u),s.hooks.run("complete",u),a&&a.call(u.element)}if(s.hooks.run("before-sanity-check",u),l=u.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code){s.hooks.run("complete",u),a&&a.call(u.element);return}if(s.hooks.run("before-highlight",u),!u.grammar){p(s.util.encode(u.code));return}if(e&&o.Worker){var F=new Worker(s.filename);F.onmessage=function(C){p(C.data)},F.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else p(s.highlight(u.code,u.grammar,u.language))},highlight:function(t,e,a){var i={code:t,grammar:e,language:a};return s.hooks.run("before-tokenize",i),i.tokens=s.tokenize(i.code,i.grammar),s.hooks.run("after-tokenize",i),y.stringify(s.util.encode(i.tokens),i.language)},tokenize:function(t,e){var a=e.rest;if(a){for(var i in a)e[i]=a[i];delete e.rest}var r=new L;return D(r,r.head,t),I(t,r,e,r.head,0),z(r)},hooks:{all:{},add:function(t,e){var a=s.hooks.all;a[t]=a[t]||[],a[t].push(e)},run:function(t,e){var a=s.hooks.all[t];if(!(!a||!a.length))for(var i=0,r;r=a[i++];)r(e)}},Token:y};o.Prism=s;function y(t,e,a,i){this.type=t,this.content=e,this.alias=a,this.length=(i||"").length|0}y.stringify=function t(e,a){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function(p){i+=t(p,a)}),i}var r={type:e.type,content:t(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a},l=e.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(r.classes,l):r.classes.push(l)),s.hooks.run("wrap",r);var c="";for(var u in r.attributes)c+=" "+u+'="'+(r.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+c+">"+r.content+"</"+r.tag+">"};function $(t,e,a,i){t.lastIndex=e;var r=t.exec(a);if(r&&i&&r[1]){var l=r[1].length;r.index+=l,r[0]=r[0].slice(l)}return r}function I(t,e,a,i,r,l){for(var c in a)if(!(!a.hasOwnProperty(c)||!a[c])){var u=a[c];u=Array.isArray(u)?u:[u];for(var p=0;p<u.length;++p){if(l&&l.cause==c+","+p)return;var F=u[p],C=F.inside,N=!!F.lookbehind,K=!!F.greedy,le=F.alias;if(K&&!F.pattern.global){var oe=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,oe+"g")}for(var Q=F.pattern||F,x=i.next,E=r;x!==e.tail&&!(l&&E>=l.reach);E+=x.value.length,x=x.next){var P=x.value;if(e.length>t.length)return;if(!(P instanceof y)){var M=1,_;if(K){if(_=$(Q,E,t,N),!_||_.index>=t.length)break;var j=_.index,ce=_.index+_[0].length,T=E;for(T+=x.value.length;j>=T;)x=x.next,T+=x.value.length;if(T-=x.value.length,E=T,x.value instanceof y)continue;for(var B=x;B!==e.tail&&(T<ce||typeof B.value=="string");B=B.next)M++,T+=B.value.length;M--,P=t.slice(E,T),_.index-=E}else if(_=$(Q,0,P,N),!_)continue;var j=_.index,O=_[0],Z=P.slice(0,j),ee=P.slice(j+O.length),W=E+P.length;l&&W>l.reach&&(l.reach=W);var H=x.prev;Z&&(H=D(e,H,Z),E+=Z.length),U(e,H,M);var ge=new y(c,C?s.tokenize(O,C):O,le,O);if(x=D(e,H,ge),ee&&D(e,x,ee),M>1){var V={cause:c+","+p,reach:W};I(t,e,a,x.prev,E,V),l&&V.reach>l.reach&&(l.reach=V.reach)}}}}}}function L(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function D(t,e,a){var i=e.next,r={value:a,prev:e,next:i};return e.next=r,i.prev=r,t.length++,r}function U(t,e,a){for(var i=e.next,r=0;r<a&&i!==t.tail;r++)i=i.next;e.next=i,i.prev=e,t.length-=r}function z(t){for(var e=[],a=t.head.next;a!==t.tail;)e.push(a.value),a=a.next;return e}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(t){var e=JSON.parse(t.data),a=e.language,i=e.code,r=e.immediateClose;o.postMessage(s.highlight(i,s.languages[a],a)),r&&o.close()},!1)),s;var v=s.util.currentScript();v&&(s.filename=v.src,v.hasAttribute("data-manual")&&(s.manual=!0));function g(){s.manual||s.highlightAll()}if(!s.manual){var m=document.readyState;m==="loading"||m==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return s}(h);f.exports&&(f.exports=n),typeof ne!="undefined"&&(ne.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(d,A){var b={};b["language-"+A]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[A]},b.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:b}};s["language-"+A]={pattern:/[\s\S]+/,inside:n.languages[A]};var y={};y[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",y)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(o,d){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:n.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(o){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var A=o.languages.markup;A&&(A.tag.addInlined("style","css"),A.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",d=function(v,g){return"\u2716 Error "+v+" while fetching file: "+g},A="\u2716 Error: File does not exist or is empty",b={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",y="loading",$="loaded",I="failed",L="pre[data-src]:not(["+s+'="'+$+'"]):not(['+s+'="'+y+'"])';function D(v,g,m){var t=new XMLHttpRequest;t.open("GET",v,!0),t.onreadystatechange=function(){t.readyState==4&&(t.status<400&&t.responseText?g(t.responseText):t.status>=400?m(d(t.status,t.statusText)):m(A))},t.send(null)}function U(v){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(g){var m=Number(g[1]),t=g[2],e=g[3];return t?e?[m,Number(e)]:[m,void 0]:[m,m]}}n.hooks.add("before-highlightall",function(v){v.selector+=", "+L}),n.hooks.add("before-sanity-check",function(v){var g=v.element;if(g.matches(L)){v.code="",g.setAttribute(s,y);var m=g.appendChild(document.createElement("CODE"));m.textContent=o;var t=g.getAttribute("data-src"),e=v.language;if(e==="none"){var a=(/\.(\w+)$/.exec(t)||[,"none"])[1];e=b[a]||a}n.util.setLanguage(m,e),n.util.setLanguage(g,e);var i=n.plugins.autoloader;i&&i.loadLanguages(e),D(t,function(r){g.setAttribute(s,$);var l=U(g.getAttribute("data-range"));if(l){var c=r.split(/\r\n?|\n/g),u=l[0],p=l[1]==null?c.length:l[1];u<0&&(u+=c.length),u=Math.max(0,Math.min(u-1,c.length)),p<0&&(p+=c.length),p=Math.max(0,Math.min(p,c.length)),r=c.slice(u,p).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(u+1))}m.textContent=r,n.highlightElement(m)},function(r){g.setAttribute(s,I),m.textContent=r})}}),n.plugins.fileHighlight={highlight:function(g){for(var m=(g||document).querySelectorAll(L),t=0,e;e=m[t++];)n.highlightElement(e)}};var z=!1;n.fileHighlight=function(){z||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),z=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Fe);const xe={class:"pre"},Ae={class:"pre-component"},we={key:0,class:"pre-code"},_e=["innerHTML"],ke={class:"pre-btn"},Ee={name:"preview"},Se=re(Y(X({},Ee),{props:{component:Object},setup(f){const h=f,n=window.Prism,{component:o}=h,d=ie(!1),A=()=>d.value=!0,b=()=>d.value=!1;ie("");const s=se(()=>n.highlight((o==null?void 0:o.__sourceCode)||"",n.languages.html,"html"));return(y,$)=>(w(),k("div",xe,[S("h2",null,R(G(o).__sourceCodeTitle),1),S("div",Ae,[(w(),me(ye(G(o))))]),d.value?(w(),k("div",we,[S("pre",{class:"language-html",innerHTML:G(s)},null,8,_e)])):be("",!0),S("div",ke,[d.value?(w(),k("p",{key:0,onClick:b},"\u9690\u85CF\u4EE3\u7801")):(w(),k("p",{key:1,onClick:A},"\u67E5\u770B\u4EE3\u7801"))])]))}}));var Le=ue(Se,[["__scopeId","data-v-4b0e452b"]]);const $e={name:"tabledoc"},Ce=re(Y(X({},$e),{props:{title:{type:String},type:{type:String,default:"prop"},body:{type:Array,default:()=>[]}},setup(f){const h=f,{type:n}=h,o=se(()=>{switch(n){case"prop":return["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"];case"slot":return["\u63D2\u69FD\u540D","\u8BF4\u660E"];case"event":return["\u4E8B\u4EF6\u540D","\u8BF4\u660E","\u56DE\u8C03\u51FD\u6570"]}});return(d,A)=>(w(),k(q,null,[S("h2",null,R(f.title),1),S("table",null,[S("thead",null,[S("tr",null,[(w(!0),k(q,null,J(G(o),(b,s)=>(w(),k("th",{key:s},R(b),1))),128))])]),S("tbody",null,[(w(!0),k(q,null,J(f.body,(b,s)=>(w(),k("tr",{key:s},[(w(!0),k(q,null,J(b,(y,$)=>(w(),k("td",{key:$},R(y),1))),128))]))),128))])])],64))}}));var Be=ue(Ce,[["__scopeId","data-v-5bef3ce0"]]);export{Le as P,Be as T};