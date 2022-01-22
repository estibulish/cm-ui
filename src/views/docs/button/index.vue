<template>
  <div class="preview-wrapper">
    <h2>Button 按钮</h2>
    <Preview :component="CmButton"></Preview>
    <Preview :component="PreviewSize"></Preview>
    <Preview :component="PreviewDisable"></Preview>
    <Preview :component="PreviewIcon"></Preview>
    <Preview :component="PreviewLoading"></Preview>
    <TableDoc title="属性" type="prop" :body="propDoc" />
    <TableDoc title="插槽" type="slot" :body="slotDoc" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import CmButton from './preview/Button.preview.vue'
import PreviewSize from "./preview/ButtonSize.preview.vue";
import PreviewDisable from "./preview/ButtonDisable.preview.vue";
import PreviewIcon from "./preview/ButtonIcon.preview.vue";
import PreviewLoading from "./preview/ButtonLoading.preview.vue";
import TableDoc from "@/components/TableDoc.vue";

const propDoc = [
  [
    "theme",
    "类型",
    "string",
    "default / primary / info / success / warning / error",
    "default",
  ],
  ["dashed", "是否虚线为按钮", "boolean", "-", "false"],
  ["size", "大小", "string", "small / default / large", "default"],
  ["round", "是否为圆角按钮", "boolean", "-", "false"],
  ["circle", "是否为圆形按钮", "boolean", "-", "false"],
  ["disabled", "是否禁用", "boolean", "-", "fasle"],
  ["loading", "是否显示加载中", "boolean", "-", "fasle"],
  ["icon-placement", "按钮中图标的位置", "string", "left / right", "left"],
];
const slotDoc = [
  ["default", "自定义默认内容"],
  ["icon", "按钮的图标"],
];
</script>

<style lang="scss">
.preview-wrapper {
  width: 80%;
}
.cm-button {
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
