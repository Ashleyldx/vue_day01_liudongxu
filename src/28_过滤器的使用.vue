<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ msg | toUp | reverse("*") }}</h1>
    <h1>{{ msg | toLow }}</h1>
    <h1>{{ msg | reverse }}</h1>
    <p v-bind:title="msg | reverse">asdasdasd</p>
  </div>
</template>

<script>
// 过滤器作用： 可被用于一些常见的文本格式化。
// 过滤器(filter)的使用分两步:
// 1. 注册过滤器
// 1.1 局部注册
// filters: {
//   过滤器的名字: (需要处理的值) => {
//     return "处理之后的值";
//   },
// },

// 1.2 全局注册
// Vue.filter("过滤器名", (值) => {return "处理之后的值"});

// 2.过滤器的使用 只可以在插值表达式{{}} 和 v-bind中使用， 通过 ｜ 方式使用
export default {
  name: "DemoTest",
  data() {
    return {
      msg: "Hello word",
    };
  },
  filters: {
    //局部，只可以在这个文件里用
    toUp: (val) => {
      //val是传递过来需要处理的值
      //return处理之后的值
      return val.toUpperCase();
    },
    reverse: (val, a = "") => {
      return val.split("").reverse().join(a);
    },
  },
};
//过滤器进阶：1、过滤器串联使用；2、过滤器接收参数
</script>
