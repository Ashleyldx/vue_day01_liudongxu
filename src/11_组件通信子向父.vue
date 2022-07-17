<template>
  <div>
    <!-- 目标: 子传父 -->
    <!-- 1. 父组件, @自定义事件名="父methods函数" -->
    <MyProduct2
      v-for="(obj, ind) in list"
      :key="obj.id"
      :title="obj.proname"
      :price="obj.proprice"
      :info="obj.info"
      :index="ind"
      @subprice="fn"
    ></MyProduct2>
  </div>
</template>

<script>
// 1. 创建组件 (.vue文件)
// 2. 引入组件
import MyProduct2 from "./components/11_MyProduct2";
export default {
  components: { MyProduct2 },
  data() {
    return {
      list: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
      ],
    };
  },
  methods: {
    fn(item, price) {
      //
      this.list[item].proprice > 1 &&
        (this.list[item].proprice = (this.list[item].proprice - price).toFixed(
          2
        ));
    },
  },
  // 3. 注册组件 // MyProduct: MyProduct // key和value变量名同名 - 简写
};
</script>
