//webpack打包的入口文件
import Vue from "vue"; //引入vue
import App from "./App.vue"; //引入组件

//引入bootstrap的css
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

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
