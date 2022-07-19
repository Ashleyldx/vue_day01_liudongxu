<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
    <!-- <Demo ref="demo"></Demo> -->
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      msg: "hello world",
      arr: [1, 2, 3],
    };
  },
  beforeCreate() {
    this.msg = "Hello vue Hello vue Hello vue";
    // console.log(msg);
  },
  created() {
    this.msg = "Hello vue Hello vue Hello vue";
    //debugger
    //初始化的场景放在这儿 请求接口/全局事件的监听
    this.timer = setInterval(() => {
      console.log("====");
    }, 1000);
  },
  //2、挂载
  //真实DOM挂载之前
  beforeMount() {
    //挂载前无法操作dom
    console.log(document.querySelector("#myE")); //null
    console.log("beforeMount 执行");
    //在此处更改数据触发不了更新阶段
    this.msg = "asdasd";
  },
  mounted() {
    //挂载后 操作dom
    console.log(document.querySelector("#myE")); //dom E
    console.log("mounted 执行");
    //初始化操作 可以操作到对应的dom
    //触发原因：修改data的值
  },

  //3、更新阶段 数据更新会触发
  //beforeUpdate 数据变了，视图没有变
  beforeUpdate() {
    console.log(document.querySelector("#myE"));
    console.log("beforeUpdate 执行");
  },
  Updated() {
    //Updated数据变了，视图也变
    console.log("Updated 执行");
  },

  //销毁阶段
  beforeDestroy() {
    console.log("beforeDestroy", this.msg);
    clearInterval(this.timer); //定时器难以清除
  },
  destroyed() {
    console.log("destroyed", this.msg);
  },
};
</script>

<style></style>
