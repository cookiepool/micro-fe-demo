import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 引入乾坤
import { registerMicroApps, start, initGlobalState } from "qiankun";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

function genActiveRule(routerPrefix) {
  return location => location.hash.startsWith("#" + routerPrefix);
}

// 数据通讯
// 注册一个action
let initState = {
  num: 0
};
const actions = initGlobalState(initState);
Vue.prototype.$qiankunActions = actions;

// 注册微应用
registerMicroApps([
  {
    name: "vue-proj-child",
    entry: "http://localhost:3080",
    container: "#frame",
    activeRule: genActiveRule("/vue-proj-child"),
    props: {
      store
    }
  },
  {
    name: "react-proj-child",
    entry: "http://localhost:9866",
    container: "#frame",
    activeRule: genActiveRule("/react-proj-child")
  }
]);

// 启动乾坤
start();
