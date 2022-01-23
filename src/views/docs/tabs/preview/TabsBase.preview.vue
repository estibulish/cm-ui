<preview>基础用法</preview>
<template>
  <cm-tabs v-model="selected">
    <cm-tab title="干嘛">干嘛</cm-tab>
    <cm-tab title="听">听</cm-tab>
    <cm-tab title="苦情歌" :disabled="true">苦情歌</cm-tab>
    <cm-tab title="以为多烂漫">以为多烂漫</cm-tab>
  </cm-tabs>
</template>
<script setup lang="ts">
import { ref } from "vue";

const selected = ref("干嘛");
</script>
