<template>
  <div class="my_div">
    <img :src="imgUrl" alt="" />
    <p>{{ dogname }}</p>
    <!-- btn需要写入引入子件中 -->
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "dogname"],
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}
.my_div img {
  width: 200px;
  height: 200px;
}
</style>
