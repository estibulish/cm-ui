<template>
  <div class="preview-wrapper">
    <h1>Tabs 标签页</h1>
    <Preview :component="TabsBase" />
    <Preview :component="TabsCard" />
    <TableDoc title="属性" type="prop" :body="propDoc" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import TabsBase from "./preview/TabsBase.preview.vue"
import TabsCard from "./preview/TabsCard.preview.vue"

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "-"],
  ["type", "风格类型", "string", "line / card", "-"],
];
</script>
<style scoped></style>
