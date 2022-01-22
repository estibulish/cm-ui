<preview>形状</preview>
<template>
  <cm-avatar :src="imgUrl" shape="square" size="small" />
  <cm-avatar :src="imgUrl" shape="square" size="default" />
  <cm-avatar :src="imgUrl" shape="square" size="large" />
  <cm-avatar :src="imgUrl" shape="square" :size="100" />
</template>
<script setup lang="ts">
import imgUrl from "@/assets/image/avator.png";
</script>
