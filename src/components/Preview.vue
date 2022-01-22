<template>
  <div class="pre">
    <h2>
      {{ component.__sourceCodeTitle }}
      
    </h2>
    <div class="pre-component">
      <component :is="component" />
    </div>

    <div class="pre-code" v-if="codeVisible">
      <pre class="language-html" v-html="html"></pre>
    </div>
    <div class="pre-btn">
      <p @click="hideCode" v-if="codeVisible">隐藏代码</p>
      <p @click="showCode" v-else>查看代码</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import CmButton from 'lib/button/index.vue'
import { computed, ref } from "vue"
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;

const props = defineProps({
  component: Object,
});

const { component } = props;
const codeVisible = ref(false);
const showCode = () => (codeVisible.value = true);
const hideCode = () => (codeVisible.value = false);
const sourceCode = ref('')

const html = computed(() => {
  return Prism.highlight(
    component?.__sourceCode,
    Prism.languages.html,
    "html"
  );
});
</script>

<script lang="ts">
export default {
  name: "preview",
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.pre {
  border: 1px solid $border-color;
  border-radius: 5px;
  margin: 16px 0px 32px;
  max-width: 1200px;
  min-width: 500px;
  width: 100%;
  // flex: 1;
  > h2 {
    font-size: 20px;
    padding: 16px 16px;
    margin: 0;
    border-bottom: 1px solid $border-color;
    display: flex;
    justify-content: space-between;
  }

  &-component {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    height: auto;
    // padding-left: 10px;
    border-top: 1px dashed $border-color;
    overflow: hidden;
    transition: all 0.3s;

    > pre {
      padding: 8px 20px;
      line-height: 1.5;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
      background-color: #fafafa;
      box-sizing: border-box;
    }
  }

  &-btn {
    color: #b9b9b9;
    border-top: 1px solid $border-color;
    p {
      cursor: pointer;
      text-align: center;
      padding: 10px;
    }
    &:hover {
      color: #18a058;
    }
  }

}


</style>
