<template>
  <div>
    <ul>
      <li
        :class="{ active: isActive == index }"
        v-for="(item, index) in navs"
        :key="item"
        @click="clickFn = index"
      >
        <!-- @click="isActive = index" -->
        {{ item }} -{{ index }}
      </li>
      <!-- key属性，item属性值,index:索引值 -->
    </ul>
  </div>
</template>

<script>
// 思路
// 1. 数据渲染到页面
// 2. 默认第一个小li的样式 高亮
// 3. 点击谁，谁高亮
export default {
  name: "DemoApp",

  data() {
    return {
      navs: ["大学起点", "高中起点", "初中起点", "小学起点"],
      //isActive: 0,
    };
  },
  methods: {
    clickFn(val) {
      this.isActive = val;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  border-radius: 10px;
  width: 400px;
  overflow: hidden;
  padding: 0;
}
ul li {
  float: left;
  width: 100px;
  height: 40px;
  background-color: #ccc;
  color: #fff;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
li.active {
  background-color: blue;
}
</style>
