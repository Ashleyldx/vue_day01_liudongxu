//webpack打包的入口文件
import Vue from "vue"; //引入vue
import App from "./App.vue"; //引入组件

//引入bootstrap的css
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

//全局配置axios
import axios from "axios";
//全局配置一个baseUrl
axios.defaults.baseURL = "http://123.57.109.30:3006/";

Vue.prototype.$axios = axios; //vue原型上
//所有的Vue的实例 都可以使用$axios
//Vue.directive("指令名称"，{ })

Vue.directive("gfocus", {
  inserted(el) {
    el.focus();
  },
});

// 1.2 全局注册
// Vue.filter("过滤器名", (值) => {return "处理之后的值"});
Vue.filter("toLow", (val) => {
  return val.toLowerCase();
});

new Vue({
  //构造函数，生成一个实例
  render: (h) => h(App), //createElement
  //render渲染app
}).$mount("#app");
