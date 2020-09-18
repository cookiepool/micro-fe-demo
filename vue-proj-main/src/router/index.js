import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/app-main",
    children: [
      {
        path: "app-main",
        name: "Home",
        component: () => import("../views/home.vue")
      },
      {
        path: "show-msg",
        name: "Msg",
        component: () => import("../views/msg.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

const childRoute = ["/vue-proj-child"];
const isChildRoute = path => childRoute.some(item => path.startsWith(item));
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;
router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目
  if (isChildRoute(from.path) && !isChildRoute(to.path)) {
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  next();
});

export default router;
