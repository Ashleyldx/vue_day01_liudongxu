<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
    <button @click="btn">数组翻转</button>
    <button @click="btn1">截取前3个</button>
    <button @click="btn2">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "Demo02Test",
  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods: {
    btn() {
      this.arr.reverse();
      //reverse是会改变原数组
    },
    btn1() {
      this.arr.slice(0, 3);
      // this.arr = this.arr.slice(0, 3);
      console.log(this.arr.slice(0, 3));
      //vue把这几个方法重写了
    },
    btn2() {},
  },
};
</script>
