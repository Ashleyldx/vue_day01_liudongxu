<template>
  <div>
    <button :type="type" :class="[activeClass]">{{ title }}</button>
  </div>
</template>

<script>
export default {
  props: ["type", "title"],
  data() {
    return { activeClass: this.type };
  },
};
</script>

<style>

.packageBtn {
  width: 200px;
  height: 10px;
  margin-left: 20px;
}

</style>
