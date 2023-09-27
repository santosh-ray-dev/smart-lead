import { createRouter, createWebHistory } from "vue-router";
import authLayout from "../layout/AuthLayout.vue"
import publicLayout from "../layout/PublicLayout.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: publicLayout,
      children:[
        {
          path: "/",
          name: "dashboard",
          component: () => import("../views/DashboardView.vue"),
        },
      ]
    },
    {
      path: "/login",
      component: authLayout,
      children:[
        {
          path: "/",
          name: "login",
          component: () => import("../views/LoginView.vue"),
        },
      ]
    },
  ],
});

export default router;
