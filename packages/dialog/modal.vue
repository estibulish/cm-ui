<template>
  <template v-if="modelValue">
    <Teleport to="body">
      <div
        class="cm-dialog-overlay"
        v-if="overlay"
        @click="onOverlayClick"
      ></div>
      <div class="cm-dialog">
        <div class="cm-dialog-wrapper">
          <main class="main">
            <cm-icon :type="icon" :color="iconColor[ModalType]"></cm-icon>
            <div>
                <h3 class="modal-title">
                    <slot name="title">
                        Do you want to delete these items?
                    </slot>
                </h3>
                <div class="modal-content">
                    <slot name="content">
                        When clicked the OK button, this dialog will be closed after 1 second
                    </slot>
                </div>
                
            </div>
          </main>
          <footer>
            <slot name="footer">
              <cm-button  @click="cancel">取消</cm-button>
              <cm-button theme="primary" @click="confirm">确认</cm-button>
            </slot>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watchEffect } from "vue";
import CmButton from "lib/button/index.vue";
import CmIcon from "lib/icon/index.vue";

interface Method {
  [key: string]: string
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  overlay: {
    type: true,
    default: true,
  },
  title: {
    type: String,
    default: "标题",
  },
  overlayClosable: {
    type: Boolean,
    default: true,
  },
  ModalType: {
    type: String,
    default: 'info',
    value: ['info','success','error','warning','confirm']
  },
  icon: {
    type: String,
    default: 'icon-gantanhao-quan'
  },
  onOk: {
    type: Function,
  },
  cancel: {
    type: Function,
  },
});

const iconColor: Method = reactive({
    info: '#909399',
    success: '#67c23a',
    warning: '#f0a020',
    error: '#d03050',
    confirm: '#4098fc'
})

const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};

const onOverlayClick = () => {
  if (props.overlayClosable) {
    close();
  }
};

const confirm = () => {
  if (props.onOk?.() !== false) {
    close();
  }
};

const cancel = () => {
  if (props.cancel?.() !== false) {
    close();
  }
};

watchEffect(() => {
  if (props.modelValue) {
    document.body.style.overflow = 'hidden' 
  } else {
    document.body.style.overflow = 'auto' 
  }
})
</script>
<script lang="ts">
export default {
  name: "CmModal",
};
</script>

<style lang="scss" scoped>
$radius: 3px;
$border-color: #d9d9d9;
$primary-color: #36ad6a;


.cm-dialog {
  box-sizing: border-box;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);

  &-overlay {
    background-color: #00000080;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    z-index: 10;
    width: 100%;
    overflow: auto;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    max-width: calc(100vw - 32px);
    width: 446px;
    background: white;

    > header {
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      border-bottom: 1px solid #f0f0f0;
    }
    > main {
      padding: 30px 20px;
      display: flex;
      > div {
          margin-left: 10px;
      }
      .modal-title {
          margin-bottom: 10px;
      }
      .modal-content {
          color: #4e4e4e;
      }
    }
    > footer {
      padding: 10px 20px;
      text-align: right;
      box-sizing: border-box;
      .cm-button + .cm-button {
        margin-left: 12px;
      }
    }
    
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      display: inline-block;
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:hover::before,
    &:hover:after {
      background: $primary-color;
    }
  }
}
</style>
