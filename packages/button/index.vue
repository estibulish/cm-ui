<template>
  <button class="cm-button" :class="classes">
    <span v-if="loading" class="cm-loadingIndicator"></span>
    <cm-icon :type="icon" :style="iconStyle" v-if="icon && !loading && iconPosition == 'left' "></cm-icon>
    <slot></slot>
    <cm-icon :type="icon" :style="iconStyle" v-if="icon && !loading && iconPosition == 'right'"></cm-icon>
  </button>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import CmIcon from "../icon/index.vue";
const props = defineProps({
  theme: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  circle: {
    type: Boolean,
    default: false,
  },
  iconStyle: {
    type: Object,
    default: {},
  },
  iconPosition: {
    type: String,
    default: 'left',
    value: ['left','right']
  }
});

const { theme, dashed, size, round, disabled, circle,icon,iconStyle } = props;
const classes = computed(() => {
  return {
    [`cm-theme-${theme}`]: theme,
    [`is-dashed`]: dashed,
    [`cm-button-${size}`]: size,
    [`is-round`]: round,
    [`is-circle`]: circle,
    [`is-disabled`]: disabled,
  };
});
</script>

<script lang="ts">
export default {
  name: "CmButton",
};
</script>


<style lang="scss" scoped>
$h-default: 40px;
$h-small: 32px;
$h-large: 48px;
$white: #fff;
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;
$grey: grey;

$default-border-color: #d9d9d9;

$radius: 3px;
$green: #18a058;

.cm-button {
  box-sizing: border-box;
  height: $h-default;
  font-size: 14px;
  background-color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  color: $default-color;
  border: 1px solid $default-border-color;
  user-select: none;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.is-circle {
    padding: 0;
  }

  &.is-circle.cm-button-default {
    border-radius: 50%;
    height: $h-default;
    width: $h-default;
  }
  &.is-circle.cm-button-small {
    border-radius: 50%;
    height: $h-small;
    width: $h-small;
  }
  &.is-circle.cm-button-large {
    border-radius: 50%;
    height: $h-large;
    width: $h-large;
  }
  &.is-round.cm-button-default {
    border-radius: calc($h-default / 2);
  }
  &.is-round.cm-button-large {
    border-radius: calc($h-large / 2);
  }
  &.is-round.cm-button-small {
    border-radius: calc($h-small / 2);
  }

  &.cm-theme-default {
    &:hover {
      color: $green;
      border-color: $green;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $green $green $green transparent;
      }
    }
    &:active {
      color: darken($green, 20%);
      border-color: darken($green, 20%);

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: darken($green, 20%) darken($green, 20%)
          darken($green, 20%) transparent;
      }
    }
    &.is-dashed {
      border-style: dashed;
    }
    > .cm-loadingIndicator {
      border-style: dashed;
      border-color: $default-color $default-color $default-color transparent;
    }
  }
  &.cm-theme-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    color: $white;

    &:hover {
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
    }
    &:active {
      background-color: darken($primary-color, 20%);
      border-color: darken($primary-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($primary-color, 20%);
      border-color: lighten($primary-color, 20%);
      &:hover {
        background: lighten($primary-color, 20%);
        border-color: lighten($primary-color, 20%);
      }
    }

    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $primary-color;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $primary-color $primary-color $primary-color transparent;
      }
    }
  }

  &.cm-theme-info {
    background-color: $info-color;
    border-color: $info-color;
    color: $white;
    &:hover {
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
    }
    &:active {
      background-color: darken($info-color, 20%);
      border-color: darken($info-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($info-color, 20%);
      border-color: lighten($info-color, 20%);
      &:hover {
        background: lighten($info-color, 20%);
        border-color: lighten($info-color, 20%);
      }
    }

    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $info-color;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $info-color $info-color $info-color transparent;
      }
    }
  }

  &.cm-theme-success {
    background-color: $success-color;
    border-color: $success-color;
    color: $white;
    &:hover {
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
    }
    &:active {
      background-color: darken($success-color, 20%);
      border-color: darken($success-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($success-color, 20%);
      border-color: lighten($success-color, 20%);
      &:hover {
        background: lighten($success-color, 20%);
        border-color: lighten($success-color, 20%);
      }
    }

    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $success-color;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $success-color $success-color $success-color transparent;
      }
    }
  }

  &.cm-theme-warning {
    background-color: $warning-color;
    border-color: $warning-color;
    color: $white;
    &:hover {
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
    }
    &:active {
      background-color: darken($warning-color, 20%);
      border-color: darken($warning-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($warning-color, 20%);
      border-color: lighten($warning-color, 20%);
      &:hover {
        background: lighten($warning-color, 20%);
        border-color: lighten($warning-color, 20%);
      }
    }

    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $warning-color;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $warning-color $warning-color $warning-color transparent;
      }
    }
  }

  &.cm-theme-error {
    background-color: $error-color;
    border-color: $error-color;
    color: $white;
    &:hover {
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
    }
    &:active {
      background-color: darken($error-color, 20%);
      border-color: darken($error-color, 20%);
    }

    &.is-disabled {
      cursor: not-allowed;
      background: lighten($error-color, 20%);
      border-color: lighten($error-color, 20%);
      &:hover {
        background: lighten($error-color, 20%);
        border-color: lighten($error-color, 20%);
      }
    }

    &.is-dashed {
      border-style: dashed;
      background-color: $white !important;
      color: $error-color;

      > .cm-loadingIndicator {
        border-style: dashed;
        border-color: $error-color $error-color $error-color transparent;
      }
    }
  }

  &.cm-button-large {
    font-size: 24px;
    height: $h-large;
    padding: 0 16px;
  }
  &.cm-button-small {
    font-size: 12px;
    height: $h-small;
    padding: 0 8px;
  }
  > .cm-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $white $white $white transparent;
    border-style: solid;
    border-width: 2px;
    animation: cm-spin 1s infinite linear;
  }
  > .slot-icon-left {
    margin-right: 5px;
  }
  > .slot-icon-right {
    margin-left: 5px;
  }
}

@keyframes cm-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>