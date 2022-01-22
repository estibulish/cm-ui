<template>
  <div class="preview-wrapper">
    <h1>Switch 开关</h1>
    <Preview :component="SwitchBase" />
    <Preview :component="SwitchCustom" />
    <Preview :component="SwitchSize" />
    <TableDoc title="属性" type="prop" :body="propDoc" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import SwitchBase from "./preview/SwitchBase.preview.vue"
import SwitchCustom from "./preview/SwitchCustom.preview.vue"
import SwitchSize from "./preview/SwitchSize.preview.vue"

const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "false"],
  ["active-color", "在开启状态时的背景颜色", "string", "-", "#18a058"],
  ["inactive-color", "在关闭状态时的背景颜色", "string", "-", "#dbdbdb"],
  ["disabled", "是否禁用", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
];
</script>

<style lang="scss">
.preview-wrapper {
    width: 80%;
}
.cm-switch {
  margin-right: 8px;
  margin-top: 8px;
}
</style>
