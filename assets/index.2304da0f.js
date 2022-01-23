import{P as _,T as m}from"./TableDoc.40a9b102.js";import{d as p,r as d,o,b as l,j as e,u as t,F as v,w as n,k as i,i as f}from"./vendor.a9eeee09.js";import{_ as b}from"./index.2b93dd2f.js";var u="./assets/avator.25ce2b58.png";function g(r){r.__sourceCode=`<template>\r
  <cm-avatar :src="imgUrl" size="small" />\r
  <cm-avatar :src="imgUrl" size="default" />\r
  <cm-avatar :src="imgUrl" size="large" />\r
  <cm-avatar :src="imgUrl" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "@/assets/image/avator.png";\r
<\/script>`,r.__sourceCodeTitle="\u5C3A\u5BF8"}const F=p({setup(r){return(c,s)=>{const a=d("cm-avatar");return o(),l(v,null,[e(a,{src:t(u),size:"small"},null,8,["src"]),e(a,{src:t(u),size:"default"},null,8,["src"]),e(a,{src:t(u),size:"large"},null,8,["src"]),e(a,{src:t(u),size:100},null,8,["src"])],64)}}});typeof g=="function"&&g(F);function C(r){r.__sourceCode=`<template>\r
  <cm-avatar :src="imgUrl" shape="square" size="small" />\r
  <cm-avatar :src="imgUrl" shape="square" size="default" />\r
  <cm-avatar :src="imgUrl" shape="square" size="large" />\r
  <cm-avatar :src="imgUrl" shape="square" :size="100" />\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "@/assets/image/avator.png";\r
<\/script>`,r.__sourceCodeTitle="\u5F62\u72B6"}const h=p({setup(r){return(c,s)=>{const a=d("cm-avatar");return o(),l(v,null,[e(a,{src:t(u),shape:"square",size:"small"},null,8,["src"]),e(a,{src:t(u),shape:"square",size:"default"},null,8,["src"]),e(a,{src:t(u),shape:"square",size:"large"},null,8,["src"]),e(a,{src:t(u),shape:"square",size:100},null,8,["src"])],64)}}});typeof C=="function"&&C(h);function z(r){r.__sourceCode=`<template>\r
  <cm-avatar size="large">\u9ED8\u8BA4</cm-avatar>\r
  <cm-avatar size="large">user</cm-avatar>\r
  <cm-avatar size="large" color="yellow" backgroundColor="red">M</cm-avatar>\r
  <cm-avatar size="large" shape="square" color="yellow" backgroundColor="red">\r
    M\r
  </cm-avatar>\r
</template>`,r.__sourceCodeTitle="\u989C\u8272"}const E={},y=i("\u9ED8\u8BA4"),D=i("user"),B=i("M"),k=i(" M ");function q(r,c){const s=d("cm-avatar");return o(),l(v,null,[e(s,{size:"large"},{default:n(()=>[y]),_:1}),e(s,{size:"large"},{default:n(()=>[D]),_:1}),e(s,{size:"large",color:"yellow",backgroundColor:"red"},{default:n(()=>[B]),_:1}),e(s,{size:"large",shape:"square",color:"yellow",backgroundColor:"red"},{default:n(()=>[k]),_:1})],64)}typeof z=="function"&&z(E);var x=b(E,[["render",q]]);const U={class:"avatar-doc-wrapper"},w=f("h1",null,"Avatar \u5934\u50CF",-1),A={class:"preview-wrapper"},V=p({setup(r){const c=[["icon","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F","number / string","number / large / default /small","default"],["shape","\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6","string","circle / square","circle"],["src","\u56FE\u7247\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740","string","-","-"],["alt","\u63CF\u8FF0\u56FE\u50CF\u7684\u66FF\u6362\u6587\u672C","string","-","-"]],s=[["error","\u56FE\u7247\u7C7B\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u8C03\uFF0C \u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A","(e: Event)"]],a=[["default","\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9"]];return($,T)=>(o(),l("div",U,[w,f("div",A,[e(_,{component:F}),e(_,{component:h}),e(_,{component:x}),e(m,{title:"\u5C5E\u6027",type:"prop",body:c}),e(m,{title:"\u4E8B\u4EF6",type:"event",body:s}),e(m,{title:"\u63D2\u69FD",type:"slot",body:a})])]))}});export{V as default};
