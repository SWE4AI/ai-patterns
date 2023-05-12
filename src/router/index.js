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
      component: PatternGrid
    },
    {
      path: "/gridview",
      name: "gridview",
      component: GridView
    },
    {
      path: "/patterns/:id",
      name: "patterndetails",
      component: PatternDetail
    }
  ]
});

export default router;
