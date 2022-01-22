<template>
    <div class="cm-tabs" :class="classes">
    <div class="cm-tabs-header" ref="container">
      <div
        class="cm-tabs-header-item"
        :class="{ 'is-active': modelValue === title }"
        v-for="(title, index) in titles"
        :key="index"
        @click="handleTabsItemClick(title)"
        :ref="getHeaderItemRef(title)"
      >
        {{ title }}
      </div>
      <div
        class="cm-tabs-header-indicator"
        v-if="type === 'line'"
        ref="indicator"
      ></div>
    </div>
    <div class="cm-tabs-content">
      <component
        v-if="current"
        :is="current"
        :key="current.props.title"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useSlots, watchEffect } from '@vue/runtime-core'
import cmTab from 'lib/tab/index.vue'

const props = defineProps({
    modelValue: {
        type: String
    },
    type: {
        type: String,
        default: "line"
    }
})

const slots = useSlots().default()
const emits = defineEmits(["update:modelValue"])
const { type } = props

const classes = {
  [`cm-tabs-${type}`]: type,
};

slots.forEach((tag) => {
  // @ts-ignore
  if (tag.type.name !== cmTab.name) {
    throw new Error("cmTabs 子标签必须是cmTab");
  }
});
const selectedItem = ref<HTMLDivElement>();
const indicator = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();
onMounted(() => {
  watchEffect(() => {
    renderIndicator();
  });
});

const renderIndicator = () => {
  if (selectedItem.value && props.type === "line") {
    const { width } = selectedItem.value.getBoundingClientRect();
    indicator.value && (indicator.value.style.width = width + "px")

    const { left: left1 } = container.value ? container.value.getBoundingClientRect() : {left: 0};

    const { left: left2 } = selectedItem.value.getBoundingClientRect();
    const left = left2 - left1;
    indicator.value && (indicator.value.style.left = left + "px")
  }
};


const titles = slots.map((tag: any) => tag.props.title);
const current = computed(() => { 
  return slots.find((tag: any) => tag.props.title === props.modelValue);
});

const handleTabsItemClick = (title: string) => {
  emits("update:modelValue", title);
};

const getHeaderItemRef = (title: string) => {
  return (e: any) => {
    if (title === props.modelValue) selectedItem.value = e;
  };
};
</script>

<script lang="ts">
export default {
  name: "cmTabs",
};
</script>

<style lang="scss">
$active-color: #36ad6a;
$color: #333;
$border-color: #d9d9d9;
$card-background: #f7f7fa;
$white: #fff;
$radius: 3px;
$h: 40px;

.cm-tabs {
  width: 100%;
  &.cm-tabs-line {
    .cm-tabs-header {
      display: flex;
      border-bottom: 1px solid $border-color;
      color: $color;
      position: relative;
      height: $h;

      &-item {
        margin: 0 16px;
        height: $h;
        line-height: $h;
        font-size: 14px;
        cursor: pointer;
        white-space: nowrap;

        &.is-active,
        &:hover {
          color: $active-color;
        }
      }
      &-item:first-of-type {
        padding-left: 0;
      }

      &-indicator {
        position: absolute;
        height: 3px;
        background: $active-color;
        left: 0;
        bottom: -1px;
        transition: all 250ms;
      }
    }
  }
  &.cm-tabs-card {
    .cm-tabs-header {
      display: flex;
      background-color: $card-background;
      border-radius: $radius;
      $color: #333;
      align-items: center;
      height: $h;
      padding: 3px;
      &-item {
        flex-basis: 0;
        flex-grow: 1;
        flex-wrap: nowrap;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $radius;
        height: 100%;
        font-size: 14px;
        cursor: pointer;
        transition: all 250ms ease;

        &.is-active {
          background-color: $white;
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
        }
      }
    }
  }
}

.cm-tabs-content {
  padding: 8px 0;
}
</style>