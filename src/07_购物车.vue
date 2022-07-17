<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <tbody>
        <ShopCar />
      </tbody>
    </table>
  </div>
</template>

<script>
import ShopCar from "./components/07_ShopCar";
export default {
  components: { ShopCar },
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  methdos: {},
  computed: {
    selectAll: {
      get() {
        return this.goodList.every((item) => item.checked === true);
      },
      set(val) {
        this.goodList.forEach((item) => {
          item.checked = val;
        });
      },
    },
    sumPrice: {}  ////将来会写了再补上吧
    }
  },
},
</script>

<style></style>
