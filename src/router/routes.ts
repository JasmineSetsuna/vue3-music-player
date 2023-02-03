
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "discover",
      component: () => import("@/views/discover/Discover.vue"),
      meta: {
        menu: "discover",
        keepAlive: true,
      },
    },
  ],
});

export default router