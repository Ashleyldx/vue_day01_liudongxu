<template>
  <div class="packageBtn">
    <PackageBtn type="default" title="默认按钮"></PackageBtn>
    <PackageBtn type="primary" title="主要按钮"></PackageBtn>
    <PackageBtn type="success" title="成功按钮"></PackageBtn>
    <PackageBtn type="info" title="信息按钮"></PackageBtn>
    <PackageBtn type="warning" title="警告按钮"></PackageBtn>
    <PackageBtn type="danger" title="危险按钮"></PackageBtn>
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
