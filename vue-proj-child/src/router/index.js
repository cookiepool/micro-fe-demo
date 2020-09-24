import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 做一个判断
const base = window.__POWERED_BY_QIANKUN__ ? "/vue-proj-child" : "";

const routes = [
  {
    path: base + "/",
    name: "Home",
    component: Home
  },
  {
    path: base + "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: base + "/test",
    name: "Test",
    component: () => import("../views/Test.vue"),
    children: [
      {
        path: base + "/test/one",
        name: "One",
        component: () => import("../views/One.vue")
      }
    ]
  }
];

export default routes;
