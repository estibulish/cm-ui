<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
const Prism = (window as any).Prism;
const markProps = defineProps({
  content: {
    type: String,
    required: true
  }
})

const { content } = markProps

onMounted(()=>{
  const blocks = document.querySelectorAll('pre code:not(.hljs)');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
})
</script>
