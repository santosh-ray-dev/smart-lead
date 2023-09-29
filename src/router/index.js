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
  const store = useMyStore(); // Replace with your actual store name

  console.log('User from store:', store.currentUser);
  console.log('User from cookie:', getCookie_('user'));

  const loggedIn =
    (store.currentUser !== null && store.currentUser !== undefined) ||
    (getCookie_('user') !== undefined && getCookie_('user') !== null);

  console.log('loggedIn:', loggedIn);
  console.log('requiresAuth:', to.meta.requiresAuth);

  if (to.meta.requiresAuth && !loggedIn) {
    console.log('Redirecting to login because requiresAuth and not logged in');
    next({ name: "login" });
  } else if (loggedIn && to.path === '/login') {
    console.log('Redirecting to home because user is logged in and trying to access login page');
    next({ path: "/" });
  } else {
    console.log('Navigating to the requested page');
    next();
  }
});



export default router;