import{P as i,T as v}from"./TableDoc.40a9b102.js";import{d as _,x as p,r as n,o as d,c as b,w as e,j as t,k as c,b as h,i as A}from"./vendor.a9eeee09.js";import"./index.2b93dd2f.js";function f(o){o.__sourceCode=`<template>\r
  <cm-tabs v-model="selected">\r
    <cm-tab title="\u5E72\u561B">\u5E72\u561B</cm-tab>\r
    <cm-tab title="\u542C">\u542C</cm-tab>\r
    <cm-tab title="\u82E6\u60C5\u6B4C" :disabled="true">\u82E6\u60C5\u6B4C</cm-tab>\r
    <cm-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</cm-tab>\r
  </cm-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,o.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const V=c("\u5E72\u561B"),$=c("\u542C"),x=c("\u82E6\u60C5\u6B4C"),y=c("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),E=_({setup(o){const a=p("\u5E72\u561B");return(m,s)=>{const u=n("cm-tab"),r=n("cm-tabs");return d(),b(r,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l)},{default:e(()=>[t(u,{title:"\u5E72\u561B"},{default:e(()=>[V]),_:1}),t(u,{title:"\u542C"},{default:e(()=>[$]),_:1}),t(u,{title:"\u82E6\u60C5\u6B4C",disabled:!0},{default:e(()=>[x]),_:1}),t(u,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:e(()=>[y]),_:1})]),_:1},8,["modelValue"])}}});typeof f=="function"&&f(E);function C(o){o.__sourceCode=`<template>\r
  <cm-tabs v-model="selected" type="card">\r
    <cm-tab title="\u5E72\u561B">\u5E72\u561B</cm-tab>\r
    <cm-tab title="\u542C">\u542C</cm-tab>\r
    <cm-tab title="\u82E6\u60C5\u6B4C">\u82E6\u60C5\u6B4C</cm-tab>\r
    <cm-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</cm-tab>\r
  </cm-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,o.__sourceCodeTitle="\u5361\u7247\u98CE\u683C"}const T=c("\u5E72\u561B"),k=c("\u542C"),w=c("\u82E6\u60C5\u6B4C"),j=c("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),B=_({setup(o){const a=p("\u5E72\u561B");return(m,s)=>{const u=n("cm-tab"),r=n("cm-tabs");return d(),b(r,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=l=>a.value=l),type:"card"},{default:e(()=>[t(u,{title:"\u5E72\u561B"},{default:e(()=>[T]),_:1}),t(u,{title:"\u542C"},{default:e(()=>[k]),_:1}),t(u,{title:"\u82E6\u60C5\u6B4C"},{default:e(()=>[w]),_:1}),t(u,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:e(()=>[j]),_:1})]),_:1},8,["modelValue"])}}});typeof C=="function"&&C(B);const D={class:"preview-wrapper"},F=A("h1",null,"Tabs \u6807\u7B7E\u9875",-1),U=_({setup(o){const a=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","-"],["type","\u98CE\u683C\u7C7B\u578B","string","line / card","-"]];return(m,s)=>(d(),h("div",D,[F,t(i,{component:E}),t(i,{component:B}),t(v,{title:"\u5C5E\u6027",type:"prop",body:a})]))}});export{U as default};
