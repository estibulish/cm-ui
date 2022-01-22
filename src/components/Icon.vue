<template>
    <svg class="icon" aria-hidden="true" :style="style">
        <use :xlink:href=" '#' + type"></use>
    </svg>
</template>

<script setup lang="ts">
const iconProps = defineProps({
  type: String,
  style: Object
})
const {type,style} = iconProps
</script>

<style lang="scss" scoped>
 .icon {
    width: 30px;
    height: 30px;
    color: #262626;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
 }
</style>