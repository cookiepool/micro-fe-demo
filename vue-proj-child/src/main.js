import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 配置基准路径
window.base = window.__POWERED_BY_QIANKUN__ ? "/vue-proj-child" : "";

let router = null;
let instance = null;

function render({ data = {} } = {}) {
  router = new VueRouter({
    // mode: "history",
    routes
    // base: window.__POWERED_BY_QIANKUN__ ? "/vue-proj-child" : "/"
  });
  instance = new Vue({
    router,
    store,
    data() {
      return {
        parentRouter: data.router || 233,
        parentVuex: data.store || 23333
      };
    },
    mounted() {
      console.log(this.parentRouter);
      console.log(this.parentVuex);
    },
    render: h => h(App)
  }).$mount("#appChild");
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log("lalal");
  render();
}
//测试全局变量污染
console.log("window.a", window.a);

export async function bootstrap() {
  console.log("vue app bootstraped");
}

export async function mount(props) {
  console.log("props from main framework", props.data);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
