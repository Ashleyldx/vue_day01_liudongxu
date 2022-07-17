<template>
  <div>
    <!-- 组件名被当成标签使用 -->
    <PanelList></PanelList>
    <PanelList></PanelList>
  </div>
</template>

<script>
//目标：局部注册
//1、创建组件-文件名.vue
//2、引入组件
import PanelList from "./components/08_PanelList";
export default {
  components: { PanelList },
};
</script>
