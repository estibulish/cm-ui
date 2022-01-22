<template>
  <slot />
</template>

<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<script lang="ts">
export default {
  name: "CmTab",
};
</script>

<style lang="scss" scoped>

</style>>