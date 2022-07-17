<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <MyProduct
      title="好吃的口水鸡"
      price="50"
      intro="开业大酬宾, 全场8折"
    ></MyProduct>
    <MyProduct
      title="好可爱的可爱多"
      price="20"
      intro="老板不在家, 全场1折"
    ></MyProduct>
    <MyProduct title="好贵的北京烤鸭" price="290" :intro="str"></MyProduct>
  </div>
</template>

<script>
// 1. 创建组件 (.vue文件)
// 2. 引入组件
import MyProduct from "./components/09_MyProduct";
export default {
  data() {
    return {
      str: "好贵啊, 快来啊, 好吃",
    };
  },
  // 3. 注册组件 // MyProduct: MyProduct // key和value变量名同名 - 简写
  components: { MyProduct },
};
</script>

<style></style>
