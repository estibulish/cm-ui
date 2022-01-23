<preview>信息提示</preview>
<template>
  <cm-button @click="toggle('info')">info</cm-button>
  <cm-button @click="toggle('success')">success</cm-button>
  <cm-button @click="toggle('error')">error</cm-button>
  <cm-button @click="toggle('warning')">warning</cm-button>
  <cm-button @click="toggle('confirm')">confirm</cm-button>
</template>

<script setup lang="ts">
import { Modal } from "lib/index"; 
const toggle = (modalType: string) => {
  Modal[modalType]({
    overlay: true,
    overlayClosable: true,
    title: () => "我是标题",
    content: () => `我是${modalType}对话框`,
    onOk: () => {},
    cancel: () => {},
  });
};
</script>

<style lang="scss" scoped>
.cm-button {
  margin-right: 10px;
}
</style>
