<template>
  <div class="ui-header">
    <div class="ui-logo">
      <cm-icon type="icon-leaf" ></cm-icon>
    </div>
    <div class="ui-menu">
      <router-link exact to="/home">首页</router-link>
      <router-link to="/doc">文档</router-link>
      <a href="https://github.com/coderyjw/jw-ui" target="_blank">GitHub</a>
      <a href="https://www.npmjs.com/package/f-cm-ui" target="_blank">NPM</a>
    </div>
  </div>
  <div style="height:63px"></div>
</template>

<script setup lang="ts">
// import Icon from '@/components/Icon.vue'
</script>


<style lang="scss" scoped>
.ui-header {
  height: 63px;
  background-color: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(239, 239, 245);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;
  .ui-menu {
    a {
      display: inline-block;
      text-decoration: none;
      padding: 0 20px;
      height: 63px;
      line-height: 63px;
      color: #333;

      &:hover,
      &:active {
        color: rgb(24, 160, 88);
      }
    }

    .router-link-active {
      color: rgb(24, 160, 88);
      border-bottom: 1px solid;
    }

    span {
      color: rgb(51, 54, 57);
      font-size: 14px;
    }
  }
}
</style>