<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}</p>
    <p>{{ intro }}</p>
  </div>
</template>

<script>
export default {
  //props定义变量，在子组件内使用变量
  //props作用，将子组件里面的值收集起来传递给父组件
  props: ["title", "price", "intro"],
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
