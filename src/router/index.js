import { createRouter, createWebHistory } from "vue-router";
import authLayout from "../layout/AuthLayout.vue"
import publicLayout from "../layout/PublicLayout.vue"
import { useMyStore } from "@/store";

export const protectedRoute = [
  {
    path: "/",
    component: authLayout,
    meta: { requiresAuth: true },
    redirect: "/email-campaigns",
    children: [
      
      {
        path: "/all-lead",
        name: "allLead",
        component: () => import("../views/AllLead.vue"),
        meta: { requiresAuth: true, title: 'All Lead', iconName: 'allLeadSvg' },
      },
      {
        path: "/master-index",
        name: "masterIndex",
        component: () => import("../views/MasterIndex.vue"),
        meta: { requiresAuth: true, title: 'Master Index', iconName: 'masterIndexSvg' },
      },
      {
        path: "/email-campaigns",
        name: "emailCampaigns",
        component: () => import("../views/EmailCampaigns.vue"),
        meta: { requiresAuth: true, title: 'Email Campaigns', iconName: 'emailCampaignsSvg' },
      },
    ]
  },
]

export const publicRoutes = [
  {
    path: "/",
    component: publicLayout,
    meta: { requiresAuth: false },
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
      },
    ]
  },
]
const getCookie_ = (cookieName) => {
  let cookies = document.cookie.split(';')
  // Loop through the cookies to find the one with the specified name
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim() // Trim any leading/trailing spaces
    const cookieParts = cookie.split('=')

    // Check if the cookie name matches the input cookieName
    if (cookieParts[0] === cookieName) {
      // Return the cookie value
      return cookieParts[1]
    }
  }

  // If the cookie with the specified name is not found, return null
  return null
}


const router = createRouter({
  history: createWebHistory(),
  routes: [...protectedRoute, ...publicRoutes],
});

router.beforeEach((to, from, next) => {
  console.log(getCookie_('user'));
  let loggedIn = useMyStore().currentUser || getCookie_('user')!=undefined;
  if (to.meta.requiresAuth && !loggedIn) {
    next({ name: "login" });
  } else {
    if(to.path == '/login'){
      next({ path: "/" });
    }
    next();
  }
})



export default router;