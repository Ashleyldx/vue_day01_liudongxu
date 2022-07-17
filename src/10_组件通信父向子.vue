<template>
  <div>
    <!-- 
      目标: 父(App.vue) -> 子(MyProduct.vue) 分别传值进入
      需求: 每次组件显示不同的数据信息
      步骤(口诀):
        1. 子组件 - props - 变量 (准备接收)
        2. 父组件 - 传值进去
     -->
    <MyProduct1
      v-for="obj in list"
      :key="obj.id"
      :title="obj.proname"
      :price="obj.proprice"
      :info="obj.info"
    ></MyProduct1>
  </div>
</template>

<script>
// 1. 创建组件 (.vue文件)
// 2. 引入组件
import MyProduct1 from "./components/10_MyProduct1";
export default {
  components: { MyProduct1 },
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    };
  },
  // 3. 注册组件 // MyProduct: MyProduct // key和value变量名同名 - 简写
};
</script>
