import { createRouter, createWebHistory } from "vue-router";
import GridView from "../views/GridView.vue";
import PatternGrid from "../components/PatternGrid.vue";
import PatternDetail from "../components/PatternDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: PatternGrid,
    },
    {
      path: "/gridview",
      name: "gridview",
      component: GridView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: '/patterns/:id',
      name: "patterndetails",
      component: PatternDetail,
    }
  ],
});

export default router;
