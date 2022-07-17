<template>
  <div class="packageBtn">
    <PackageBtn @click="approveBtn" title="默认按钮"></PackageBtn>
    <PackageBtn @click="mainBtn" title="主要按钮"></PackageBtn>
    <PackageBtn @click="successBtn" title="成功按钮"></PackageBtn>
    <PackageBtn @click="infoBtn" title="信息按钮"></PackageBtn>
    <PackageBtn @click="warningBtn" title="警告按钮"></PackageBtn>
    <PackageBtn @click="dangerBtn" title="危险按钮"></PackageBtn>
  </div>
</template>

<script>
import PackageBtn from "./components/12_PackageBtn";
export default {
  components: { PackageBtn },
  data() {
    return {};
  },
};
</script>

<style></style>
