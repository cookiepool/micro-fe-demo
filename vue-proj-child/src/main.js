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

// 声明渲染函数
function render(props = {}) {
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
        parentVuex: props.store || {}
      };
    },
    mounted() {},
    render: h => h(App)
  }).$mount("#appChild");
}

// 如果应用是独立运行的则直接运行（不作为子应用）
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 调用qiankun的三个钩子函数
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
// 通常我们可以在这里做一些全局变量的初始化。
export async function bootstrap() {
  console.log("vue app bootstraped");
}

// 触发应用的渲染方法
export async function mount(props) {
  console.log("vue app mount", props);
  render(props);
}

// 卸载微应用的应用实例
export async function unmount() {
  console.log("vue app unmount");
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
