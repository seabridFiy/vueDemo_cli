import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import demo_router from "./demo_router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        isAuthority: turn
      }
    },
    ...demo_router
  ]
});

router.beforeEach((to, from, next) => {
  next();
});
export default router;
