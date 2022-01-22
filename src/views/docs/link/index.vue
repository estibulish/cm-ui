<template>
  <div class="link-doc-wrapper">
    <h1>Link 链接</h1>
    <div class="preview-wrapper">
      <Preview :component="LinkBase" />
      <Preview :component="LinkDisabled" />
      <Preview :component="LinkUnderline" />
      <TableDoc title="属性" type="prop" :body="propDoc" />
      <TableDoc title="插槽" type="slot" :body="slotDoc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import LinkBase from "./preview/LinkBase.preview.vue"
import LinkDisabled from "./preview/LinkDisabled.preview.vue"
import LinkUnderline from "./preview/LinkUnderline.preview.vue"

const propDoc = [
  [
    "type",
    "类型",
    "string",
    "primary / success / warning / danger / info",
    "default",
  ],
  ["underline", "是否下划线", "boolean", "-", "true"],
  ["disabled", "是否禁用状态", "boolean", "-", "false"],
  ["href", "原生 href 属性", "string", "-", "-"],
  ["icon", "图标组件", "string / Component", "-", "-"],
  ["icon-placement", "图标组件位置", "string", "left / right", "left"],
  ["icon-size", "图标组件大小", "string / number", "-", "18px"],
];

const slotDoc = [["default", "自定义默认内容"]];
</script>

<style lang="scss">
.link-doc-wrapper {
    width: 80%;
  .cm-link {
    margin-right: 10px;
  }
}
</style>
