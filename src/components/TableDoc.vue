<template>
  <h2>{{ title }}</h2>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in headerProps" :key="index">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in body" :key="index">
        <td v-for="(items, indey) in item" :key="indey">{{ items }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
    default: "prop",
  },
  body: {
    type: Array,
    default: () => []
  }
});

const { type } = props;
const headerProps = computed(() => {
  switch (type) {
    case "prop":
      return ["属性", "说明", "类型", "可选值", "默认值"];
    case "slot":
      return ["插槽名", "说明"];
    case "event":
      return ["事件名", "说明", "回调函数"];
  }
});
</script>

<script lang="ts">
export default {
  name: "tabledoc",
};
</script>

<style lang="scss" scoped>
$bg-color: #fafafa;
$border-color: #f0f0f0;
table {
  width: 100%;
  border: 1px solid $border-color;
  border-radius: 5px;
  padding: 0;
  text-align: left;
  white-space: nowrap;
  // color: #909399;
  color: #333;
  font-weight: 400;
  border-collapse: collapse;
  background-color: #fff;
  font-size: 14px;
  thead {
    background-color: $bg-color;
    line-height: 3;
  }
  tbody {
    line-height: 3;
    tr {
      border-bottom: 1px solid $border-color;
    }
  }
  tr {
    display: table-row;
  }

  th,
  td {
    padding-left: 10px;
  }
}
</style>

