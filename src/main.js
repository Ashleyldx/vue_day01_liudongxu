//webpack打包的入口文件
import Vue from 'vue'; //引入vue
import App from './App.vue'; //引入组件

Vue.config.productionTip = false;

new Vue({
  //构造函数，生成一个实例
  render: (h) => h(App), //createElement
  //render渲染app
}).$mount('#app');
