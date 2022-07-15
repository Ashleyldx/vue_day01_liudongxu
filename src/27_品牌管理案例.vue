<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <!-- 先遍历数组，找到属性及其所对应的值 -->
          <tr v-for="obj in list" :key="obj.id">
            <td>{{ obj.id }}</td>
            <td>{{ obj.name }}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <!-- v-bind:class {{类名：布尔值}} -->
            <td v-bind:class="{ red: obj.price > 100 }">{{ obj.price }}</td>
            <td>{{ obj.time | formatTime }}</td>
            <td><a href="#" @click="del(obj.id)">删除</a></td>
          </tr>
          <!-- <tr style="background-color: #EEE">
              <td>统计:</td>
              <td colspan="2">总价钱为: 0</td>
              <td colspan="2">平均价: 0</td>
          </tr> -->
        </tbody>

        <tfoot v-if="list.length == 0">
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display: flex">
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 铺设页面 1. 表格样式正确展示 2.数据渲染到页面
// 1. 下载bootstrap, main.js引入bootstrap.css
//    yarn add bootstrap
// 2. 把list数组 - 铺设表格
// 3. 修改价格颜色 大于100 颜色为红
import moment from "moment";
export default {
  name: "VueDemo",
  data() {
    return {
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
      name: "",
      price: 0,
    };
  },
  /* 判断用户是否为空给提示 */
  methods: {
    addFn() {
      //资产名默认为空，价格默认为空
      //1.非空判断，如果价格和名称为空,价格为空是指价格不为0
      if (!this.name.trim() || this.price.trim() == 0) {
        this.name = "";
        this.price = 0;
        return alert("please enter msg");
      }
      //2、收集数据，push到list
      //修复删除bug
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: this.name,
        price: this.price,
        time: new Date(),
        id: id,
      });
      //成功之后清除数据
      this.name = "";
      this.price = 0;
    },
    del(id) {
      //根据这个id找到对应的值
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
      //findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
      ///findIndex() 方法为数组中的每个元素都调用一次函数执行：
      ///当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
      //如果没有符合条件的元素返回 -1
    },
  },
  filters: {
    formatTime: (val) => {
      return moment(val).format("YYYY - MM - DD");
    },
  },
};
</script>

<style>
.red {
  color: red;
}
</style>
