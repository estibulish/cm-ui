<template>
  <div class="icon-doc-wrapper">
    <h1>Icon 图标</h1>
    <p>
      CM-UI 推荐使用
      <a
        style="text-decoration: underline; color: #18a058"
        href="https://www.xicons.org/#/"
        target="_blank"
        >xicons</a
      >
      作为图标库。
    </p>
    <div class="preview-wrapper">
      <Preview :component="IconBase" />
      <Preview :component="IconCustom" />
      <TableDoc title="属性" type="prop" :body="propDoc" />
      <TableDoc title="插槽" type="slot" :body="slotDoc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import IconBase from "./preview/IconBase.preview.vue"
import IconCustom from "./preview/IconCustom.preview.vue"

const propDoc = [
  ["color", "图标颜色", "string", "-", "-"],
  ["depth", "图标深度", "number", "-", "10"],
  [
    "size",
    "图标大小（当不指定单位时，默认单位: px）",
    "number / string",
    "-",
    "40px",
  ],
];

const slotDoc = [["defalut", "自定义默认内容"]];
</script>

<style lang="scss">
.icon-doc-wrapper {
    width:80%;
  .cm-icon {
    margin-right: 8px;
    margin-top: 8px;
  }
}
</style>
