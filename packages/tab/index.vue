<template>
  <slot />
</template>

<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
const props = defineProps({
  title: String,
  disabled: {
    type: Boolean,
    default: false
  }
});

onMounted(()=> {
    console.log(props.disabled,'dis');
})
</script>
<script lang="ts">
export default {
  name: "CmTab",
};
</script>

<style lang="scss" scoped>

</style>>