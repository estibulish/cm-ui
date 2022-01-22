<preview>一句话打开Dialog</preview>
<template>
  <cm-button theme="primary" @click="toggle">点击打开对话框</cm-button>
</template>

<script setup lang="ts">
import { openDialog } from "lib/index"; 
const toggle = () => {
  openDialog({
    overlay: true,
    overlayClosable: true,
    title: () => "我是标题",
    content: () => "我是内容",
    confirm: () => {},
    cancel: () => {},
  });
};
</script>
