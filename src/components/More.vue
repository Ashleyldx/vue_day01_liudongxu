<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
    <!-- <DemoMore ref="myDemo"></DemoMore> -->
    <DemoMore></DemoMore>
    <p>3. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button>点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// ref $refs ==> 获取dom元素/组件

// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 给组件/dom 起别名ref 起一个标记的作用
// 3. 获取组件对象/dom元素
import DemoMore from "./Child/DemoMore.vue";
export default {
  name: "DemoMore1", //这个名字不能和其它名字相同
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btn() {
      this.count++;
      console.log(this.count); //Vue dom更新是异步的
      //解决方案
      //$nextTick() //作用拿到异步更新之后的dom元素
      this.$nextTick(() => {
        console.log(this.$refs.myP.innerHTML);
      });
    },
  },
  mounted() {
    console.log(this.$refs.myH);
    console.log(this.$refs.myP);
    console.log(this.$refs.myDemo.msg);
    console.log(this.$refs.myDemo.fn());
  },
  components: {
    DemoMore,
  },
};
</script>
