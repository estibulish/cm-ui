<template>
  <aside :style="{ left: asideVisble ? '-255px' : '0px' } ">
    <div class="aside-menu">
      <ul>
        <li v-for="(item,index) in docRoutes" :key="index">
          <span class="menu-group-title text-overflow">
            {{index}}
          </span>
          <router-link class="menu-item text-overflow" :to="itemRouter.path" v-for="(itemRouter,indexRouter) in item" :key="indexRouter">
            {{itemRouter.name}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="toggle-button" @click="toggleAside" >
      <CmIcon :type=" asideVisble ? 'icon-arrow-right' : 'icon-arrow-left'" />
    </div>
  </aside>
  <main :style="{ marginLeft: asideVisble ? '17px' : '272px' }">
    <router-view></router-view>
  </main>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import docRoutes from "@/router/docs"

const asideVisble = ref<boolean>(false)
const toggleAside = () => {asideVisble.value = !asideVisble.value}

</script>

<style lang="scss" scoped>
aside {
  flex-shrink: 0;
  width: 272px;
  padding: 16px;
  height: calc(100% - 63px);
  background-color: #fff;
  border-right: 1px solid #efeff5;
  transition: all 250ms ease;
  position: fixed;
  top: 63px;
  left: 0;
  box-sizing: border-box;
}
main {
  height: 100%;
  padding: 20px 50px;
  transition: all 250ms ease, transform 0.1s ease;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}
.markdown-body {
  width: 100%;
}
.toggle-button {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgb(239, 239, 245);
  position: absolute;
  right: -13px;
  top: calc(50% - 13px);
  background-color: #fff;
  box-shadow: 0 2px 4px 0px rgb(0 0 0 / 6%);
  transition: left 250ms ease, transform 0.1s ease;
  z-index: 10;

  > .icon {
    width: 12px;
    height: 12px;
  }

  @media (max-width: 500px) {
    display: none;
  }
}

.menu-group-title {
  display: inline-block;
  padding-left: 30px;
  color: #767c82;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}

.menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  color: rgb(51, 54, 57);
  font-size: 14px;
  padding-left: 48px;
  box-sizing: border-box;
  &:hover {
    color: #18a058 !important;
  }
}

.router-link-exact-active {
  color: #18a058 !important;
  background-color: #e7f5ee;
  border-radius: 3px;
}


</style>
