<template>
    <svg class="icon" aria-hidden="true" :style="{color: color,width:fontSize,height: fontSize,opacity:opacity}">
        <use :xlink:href=" '#' + type"></use>
    </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
  color: String,
  fontSize: {
    type: String,
    default: '25px'
  },
  opacity: {
    type: String,
    default: '1'
  }
})
</script>

<script lang="ts">
export default {
  name: "CmIcon",
};
</script>

<style lang="scss">
 .icon {
    width: 25px;
    height: 25px;
    color: #262626;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
 }
</style>