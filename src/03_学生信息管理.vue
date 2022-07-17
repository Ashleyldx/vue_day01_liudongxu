<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" class="form-control" v-model="name" />
      <!-- v-for="(item, names) in list"
        :key="names" -->
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" class="form-control" v-model="age" />
      <!-- v-for="(item, ages) in list"
        :key="ages" -->
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button class="btn btn-primary" @click.prevent="addTab">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="delFn(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "1",
      name: "tom",
      age: "13",
      gender: "male",
      list: [{}],
    };
  },
  methods: {
    addTab() {
      //判断是否为空
      if (this.name.trim().length == 0 || this.age == 0) {
        this.name = "";
        this.age = 0;
        return alert("please enter the msg");
      }
      //用户点击添加和修改
      if (!this.flag) {
        this.list.push({
          id: this.list[this.list.length - 1].id + 1,
          name: this.name,
          age: this.age,
          gender: this,
        });
      }
      // else {
      // }
    },
    //用户点击编辑按钮时，修改
    edit() {},
    delFn(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>
