import { createRouter, createWebHistory } from "vue-router";
import authLayout from "../layout/AuthLayout.vue"
import publicLayout from "../layout/PublicLayout.vue"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: authLayout,
      meta: { requiresAuth: true },
      required:"/email-campaigns",
      children:[
        {
          path: "/email-campaigns",
          name: "emailCampaigns",
          component: () => import("../views/EmailCampaigns.vue"),
          meta: { requiresAuth: true, title:'Email Campaigns' },
        },
        {
          path: "/all-lead",
          name: "allLead",
          component: () => import("../views/AllLead.vue"),
          meta: { requiresAuth: true, title:'All Lead' },
        },
        {
          path: "/master-index",
          name: "masterIndex",
          component: () => import("../views/MasterIndex.vue"),
          meta: { requiresAuth: true, title:'Master Index' },
        },
      ]
    },
    {
      path: "/",
      component: publicLayout,
      meta: { requiresAuth: false },
      children:[
        {
          path: "/login",
          name: "login",
          component: () => import("../views/LoginView.vue"),
        },
      ]
    },
  ],
});

export default router;
