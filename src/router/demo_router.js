export default [
  {
    path: "/login",
    name: "login",
    meta: {
      isAuthority: false
    },
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue")
  }
];
