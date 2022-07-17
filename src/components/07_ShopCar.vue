<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <!-- 全选事件 -->
            <input type="checkbox"/>
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>{{ selectAll }}</td>
          <td>{{ name }}</td>
          <td>{{ price }}</td>
          <td>
            <button @click="decrement">-</button>{{ num
            }}<button @click="increment">+</button>
          </td>
          <td>{{ sumPrice }}</td>
          <td>
            <!-- 删除事件 -->
            <button @click="delFn">删除</button>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ sumPrice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["sumPrice", "num", "price", "name", "selectAll"],
  methods: {
    decrement() {
      this.$emit("decrement", this.index);
    },
    increment() {
      this.$emit("increment", this.index);
    },
    delFn() {
      this.$emit("delFn", this.index);
    },
    change() {
      this.$emit("change", this.index);
    },
  },
};
</script>

<style></style>
