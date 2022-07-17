<template>
  <div class="my_pic">
    <img
      src="https://scpic.chinaz.net/files/pic/pic9/202003/zzpic23514.jpg"
      alt=""
    />
    <p>这是一只可怜的狗狗</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* 加个边框，图片居中，向左浮动，调整图片格式，宽度百分比，高度200 */
.my_pic {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  text-align: center;
  float: left;
  font-size: 20px;
}
.my_pic img {
  width: 100%;
  height: 300px;
}
</style>
