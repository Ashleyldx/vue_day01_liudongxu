<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getBooks" :disabled="disabled">点击-查看控制台</button>
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookname" />
    <!-- disabled要写在methods里面 -->
    <button @click="searchBooks">查询</button>
    <p @click="addBooks">3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button>发布</button>
  </div>
</template>

<script>
// 目标1: 获取所有图书信息
// 1. 下载axios
// yarn add axios/ npm i axios/ cnpm i axios
// 2. 引入axios 做接口请求

// 3. 发起axios请求
// 4. 全局配置
export default {
  data() {
    return {
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: "",
        author: "",
        publisher: "",
      },
      bookname: "",
      disabled: false,
    };
  },
  methods: {
    async getBooks() {
      this.disabled = true;
      this.$axios({
        url: "api/getbooks",
      })
        .then((res) => {
          console.log(res);
        })
        .finally(() => {
          this.disabled = false;
        });

      //axios()返回一个promise
      // try {
      //   this.disabled = true;
      //   const res = await axios({
      //     url: "api/getbooks",
      //   });
      //   this.disabled = false;
      //   console.log(res);
      // } catch (e)      //////////// { //try{...catch()..}
      //   console.log(e);
      // }
    },
    searchBooks() {
      this.$axios({
        url: "api/getbooks",
        params: {
          bookname: this.bookname,
        },
      }).then((res) => {
        console.log(res.data.data);
      });
    },
    addBooks() {
      this.$axios({
        url: "api/addbook",
        methods: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          //bookname:this.bookObj.bookname
          //author:this.bookObj
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style></style>
