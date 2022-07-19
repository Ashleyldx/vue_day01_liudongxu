<template>
  <div>
    <input v-focus v-number="qwe1" v-model="qwe1" />
    <p v-color="colorStr">修改文字颜色</p>
    <!-- expression表达式对应的是：colorStr给颜色变量 -->
    <button @click="colorStr = 'red'">click</button>
  </div>
</template>

<script>
// 自定义指令的使用
// 1.注册
// 1.1 全局 Vue.directive('指令名称', {})
// 1.2 局部 directives: {}

// 2.使用 v-指令名称

// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
// /[^\d.]/g

// 需求：
// 1. 实现表单自动获取焦点的自定义指令
// 2. 实现一个修改标签颜色的指令
// 3. 解决 v-model.number修饰符的问题
export default {
  name: "UseDirective",
  data() {
    return {
      colorStr: "green",
      qwe: "",
    };
  },
  directives: {
    focus: {
      //指令的名称: {
      inserted(el) {
        // el 指令所在的dom元素
        // 指令所在标签, 被插入到网页上触发(一次)
        console.log(el);
        el.focus();
      },
    },
    color: {
      //后接回调函数
      inserted(el, binding) {
        //指令所在标签，被插入到网页上触发（一次）
        console.log(binding); //指令的集合
        el.style.color = binding.value;
      },
      update(el, binding) {
        //指令对应数据/标签更新时，此方法执行
        el.style.color = binding.value;
      },
    },
    number: {
      inserted(el, binding, vNode) {
        console.log(binding); //el input
        console.log(el.value.replace(/[^\d.]/g, ""));
        el.value = el.value.replace(/[^\d.]/g, "");
        //console.log(this); //vm实例
        //vm.qwe = el.value;
        //console.log(vNode);
        vNode.context[binding.expression] = el.value;
      },
      update(el, binding, vNode) {
        console.log(binding); //el,input
        console.log(el.value.replace(/[^\d.]/g, ""));
        el.value = el.value.replace(/[^\d.]/g, "");
        //console.log(this); //this指vm实例
        // vm.qwe = el.value;
        // console.log(vNode);
        vNode.context[binding.expression] = el.value;
      },
    },
  },
};
//};//动态绑定颜色
</script>

<style></style>
