<template>
  <div class="my_div">
    <img :src="imgUrl" alt="" />
    <p>{{ dogname }}</p>
  </div>
</template>

<script>
export default {
  props: ["imgUrl", "dogname"],
  methods: {
    btn() {
      //触发父级事件
      this.$emit("love", this.dogname);
    },
  },
};
</script>

<style scoped>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
