<template>
  <div class="topnavAndBanner">
    <div class="banner">
      <h1>CM UI</h1>
      <p>一个 Vue 3 组件库</p>
      <p>有点儿意思~</p>
      <div class="actions">
        <cm-button>GitHub</cm-button>
        <cm-button @click="$router.push('/doc/intro')" theme="primary"
          >快速使用</cm-button
        >
      </div>
    </div>
  </div>

  <div class="features">
    <ul>
      <li>
        <Icon type="icon-Vue" />
        <div>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li>
        <Icon type="icon-typescript" />
        <div>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </div>
      </li>
      <li>
        <Icon type="icon-dengpao" />
        <div>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Layout from '@/views/layout/Index.vue'
import Icon from '@/components/Icon.vue'
import CmButton from '../../../packages/button/index.vue'
</script>


<style lang="scss" scoped>
.banner {
  padding: 170px 0 0;
  @media (max-width: 500px) {
    padding: 120px 0 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: rgb(44, 62, 80);
    font-size: 80px;
    line-height: 80px;
    font-weight: 500;
    margin-bottom: 18px;
    font-family: Metropolis, sans-serif;
    text-size-adjust: 100%;
    position: relative;
  }

  p {
    color: rgb(51, 54, 57);
    font-size: 16px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 5px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  > .actions {
    padding: 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .jw-button {
      height: 40px;
      padding: 0 18px;
    }
    .jw-button:last-of-type {
      margin-left: 20px;
    }
  }
}

.features {
  margin: 64px auto;
  width: 400px;
  border-top: 1px solid rgb(234, 236, 239);
  padding-top: 20px;
  @media (min-width: 800px) {
    width: 800px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      padding: 0 30px;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      box-sizing: border-box;

      > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
  }
}
.cm-button + .cm-button {
  margin-left: 20px;
}
</style>