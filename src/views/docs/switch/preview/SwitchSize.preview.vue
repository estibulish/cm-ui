<preview>尺寸</preview>
<template>
  <cm-switch v-model="checked" size="small" />
  <cm-switch v-model="checked" size="default" />
  <cm-switch v-model="checked" size="large" />
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
</script>
