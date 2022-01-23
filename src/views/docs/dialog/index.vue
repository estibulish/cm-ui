<template>
  <div class="preview-wrapper">
    <h1>Dialog 对话框</h1>
    <Preview :component="DialogBase" />
    <Preview :component="DialogClick" />
    <Preview :component="Dialog" />
    <Preview :component="DialogConfirm" />
    <TableDoc title="属性" type="prop" :body="propDoc" />
    <TableDoc title="插槽" type="slot" :body="slotDoc" />
    <TableDoc title="事件" type="event" :body="eventDoc" />
  </div>
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue";
import TableDoc from "@/components/TableDoc.vue";
import DialogBase from "./preview/DialogBase.preview.vue"
import DialogClick from "./preview/DialogClick.preview.vue"
import Dialog from "./preview/Dialog.preview.vue"
import DialogConfirm from "./preview/DialogConfirm.preview.vue"


const propDoc = [
  ["v-model", "绑定值", "boolean", "-", "flase"],
  ["overlay", "是否需要背景遮罩", "boolean", "-", "true"],
  ["title", "标题", "string", "-", "标题"],
  [
    "overlay-closebale",
    "是否可以通过点击overlay关闭对话框",
    "boolean",
    "-",
    "true",
  ],
];

const slotDoc = [
  ["-", "Dialog 的内容"],
  ["title", "Dialog 标题区的内容"],
  ["footer", "Dialog 按钮操作区的内容"],
];

const eventDoc = [
  ["onOk", "点击确认按钮的回调", "-"],
  ["cancel", "点击取消按钮的回调", "-"],
  ["onOverlayClick", "点击遮罩的回调", "-"],
];
</script>

<style lang="scss">
.preview-wrapper {
    width: 80%;
}
</style>
