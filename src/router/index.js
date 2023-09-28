import { createRouter, createWebHistory } from "vue-router";
import authLayout from "../layout/AuthLayout.vue"
import publicLayout from "../layout/PublicLayout.vue"

export const  protectedRoute=[
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
        meta: { requiresAuth: true, title:'Email Campaigns',iconName:'emailCampaignsSvg' },
      },
      {
        path: "/all-lead",
        name: "allLead",
        component: () => import("../views/AllLead.vue"),
        meta: { requiresAuth: true, title:'All Lead',iconName:'allLeadSvg' },
      },
      {
        path: "/master-index",
        name: "masterIndex",
        component: () => import("../views/MasterIndex.vue"),
        meta: { requiresAuth: true, title:'Master Index',iconName:'masterIndexSvg' },
      },
    ]
  },
]

export const publicRoutes=[
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
]


const router = createRouter({
  history: createWebHistory(),
  routes: [...protectedRoute,...publicRoutes],
});

export default router;
