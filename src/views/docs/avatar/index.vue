<template>
  <div class="avatar-doc-wrapper">
    <h1>Avatar 头像</h1>
    <div class="preview-wrapper">
      <Preview :component="AvatarSize" />
      <Preview :component="AvatarShape" />
      <Preview :component="AvatarColor" />
      <!-- <Preview :component="AvatarPreview4" /> -->
      <TableDoc title="属性" type="prop" :body="propsDoc" />
      <TableDoc title="事件" type="event" :body="eventDoc" />
      <TableDoc title="插槽" type="slot" :body="slotDoc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import AvatarSize from "./preview/AvatarSize.preview.vue";
import AvatarShape from "./preview/AvatarShape.preview.vue";
import AvatarColor from "./preview/AvatarColor.preview.vue";

const propsDoc = [
  [
    "icon",
    "设置头像的大小",
    "number / string",
    "number / large / default /small",
    "default",
  ],
  ["shape", "设置头像的形状", "string", "circle / square", "circle"],
  ["src", "图片头像的资源地址", "string", "-", "-"],
  ["alt", "描述图像的替换文本", "string", "-", "-"],
];
const eventDoc = [
  [
    "error",
    "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
    "(e: Event)",
  ],
];
const slotDoc = [["default", "自定义头像展示内容"]];
</script>

<style lang="scss">
.avatar-doc-wrapper {
  width: 80%;
  .cm-avatar {
    margin-right: 8px;
    margin-top: 8px;
  }
}
</style>
