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
    <!-- 
      Vue.set(target, propertyName/index, value)
      或
      vm.$set(target, propertyName/index, value)

    作用：向响应式对象中添加一个 属性，并确保这个新 属性
    同样是响应式的，且触发视图更新 
    
    target: 不能是 Vue 实例，或者 Vue 实例的根数据对象-->
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
      //slice()不会改变原数组

      //解决方案：
      //1、直接重新赋值
      // this.arr = this.arr.slice(0, 3);
      //2、splice(开始的位置，删除的长度，替换元素)
      this.arr.splice(0, 3); //！！！splice会改变原数组
      //只要、可以、改变原数组，就会触发视图更新
      //vue把这几个方法重写了
    },
    btn2() {
      // this.arr[0] = 1000;
      // console.log(this.arr);
      //vm.$set(target,propertyName/index,value)
      //target目标对象，propertyName/index 属性和索引号
      this.$set(this.arr, 0, 1000);
    },
  },
};
</script>
