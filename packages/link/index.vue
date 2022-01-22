<template>
  <a class="cm-link" :class="classes">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  underline: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    deafult: false,
  }
});

const { type, underline, disabled } = props;

const classes = computed(() => {
  return {
    [`cm-link-${type}`]: type,
    ["cm-link-underline"]: underline,
    ["cm-link-disabled"]: disabled,
  };
});
</script>
<script lang="ts">
export default {
  name: "CmLink",
};
</script>

<style lang="scss" scoped>
$default-color: #333;
$primary-color: #36ad6a;
$info-color: #4098fc;
$success-color: #85ce61;
$warning-color: #f0a020;
$error-color: #d03050;

$font-size: 16px;
.cm-link {
  font-size: $font-size;
  position: relative;
  display: flex;
  align-items: center;
  height: calc($font-size + 5px);
  > span {
    padding-bottom: 5px;
  }

  &.cm-link-default {
    color: $default-color;
    &:hover {
      color: $primary-color;
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid $primary-color;
    }

    &.cm-link-disabled {
      color: lighten($default-color, 50%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-primary {
    color: $primary-color;
    &:hover {
      color: lighten($primary-color, 20%);
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid lighten($primary-color, 20%);
    }

    &.cm-link-disabled {
      color: lighten($primary-color, 30%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-info {
    color: $info-color;
    &:hover {
      color: lighten($info-color, 20%);
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid lighten($info-color, 20%);
    }

    &.cm-link-disabled {
      color: lighten($info-color, 20%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-success {
    color: $success-color;
    &:hover {
      color: lighten($success-color, 20%);
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid lighten($success-color, 20%);
    }

    &.cm-link-disabled {
      color: lighten($success-color, 20%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-warning {
    color: $warning-color;
    &:hover {
      color: lighten($warning-color, 20%);
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid lighten($warning-color, 20%);
    }

    &.cm-link-disabled {
      color: lighten($warning-color, 20%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-error {
    color: $error-color;
    &:hover {
      color: lighten($error-color, 20%);
    }
    &.cm-link-underline:hover:after {
      border-bottom: 1px solid lighten($error-color, 20%);
    }

    &.cm-link-disabled {
      color: lighten($error-color, 30%);

      &.cm-link-underline:hover:after {
        border-bottom: none;
      }
    }
  }

  &.cm-link-underline:hover:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 0;
    bottom: 0;
  }

  &.cm-link-disabled {
    cursor: not-allowed;
  }
}
</style>
