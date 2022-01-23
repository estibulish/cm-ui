import{P as a,T as b}from"./TableDoc.40a9b102.js";import{d as c,x as d,r as i,o as r,b as m,j as n,F as p,c as w,i as C}from"./vendor.a9eeee09.js";import"./index.2b93dd2f.js";function _(o){o.__sourceCode=`<template>\r
  <cm-switch v-model="checked" />\r
  <cm-switch v-model="checked" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,o.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const f=c({setup(o){const e=d(!1);return(s,l)=>{const u=i("cm-switch");return r(),m(p,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},null,8,["modelValue"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),disabled:""},null,8,["modelValue"])],64)}}});typeof _=="function"&&_(f);function v(o){o.__sourceCode=`<template>\r
  <cm-switch v-model="checked" active-color="red" inactive-color="pink" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,o.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u989C\u8272"}const h=c({setup(o){const e=d(!1);return(s,l)=>{const u=i("cm-switch");return r(),w(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),"active-color":"red","inactive-color":"pink"},null,8,["modelValue"])}}});typeof v=="function"&&v(h);function k(o){o.__sourceCode=`<template>\r
  <cm-switch v-model="checked" size="small" />\r
  <cm-switch v-model="checked" size="default" />\r
  <cm-switch v-model="checked" size="large" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,o.__sourceCodeTitle="\u5C3A\u5BF8"}const V=c({setup(o){const e=d(!1);return(s,l)=>{const u=i("cm-switch");return r(),m(p,null,[n(u,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),size:"small"},null,8,["modelValue"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),size:"default"},null,8,["modelValue"]),n(u,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value=t),size:"large"},null,8,["modelValue"])],64)}}});typeof k=="function"&&k(V);const g={class:"preview-wrapper"},F=C("h1",null,"Switch \u5F00\u5173",-1),B=c({setup(o){const e=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","false"],["active-color","\u5728\u5F00\u542F\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#18a058"],["inactive-color","\u5728\u5173\u95ED\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#dbdbdb"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"]];return(s,l)=>(r(),m("div",g,[F,n(a,{component:f}),n(a,{component:h}),n(a,{component:V}),n(b,{title:"\u5C5E\u6027",type:"prop",body:e})]))}});export{B as default};
