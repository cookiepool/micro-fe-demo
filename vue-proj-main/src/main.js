import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 引入乾坤
import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 注册微应用
registerMicroApps([
  {
    name: "vue-proj-child",
    entry: "http://localhost:3080",
    container: "#frame",
    activeRule: "/vue-proj-child",
    props: {
      data: { store, router }
    }
  }
]);

// 启动乾坤
start();
