<preview>尺寸</preview>
<template>
  <cm-avatar :src="imgUrl" size="small" />
  <cm-avatar :src="imgUrl" size="default" />
  <cm-avatar :src="imgUrl" size="large" />
  <cm-avatar :src="imgUrl" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "@/assets/image/avator.png";
</script>