import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/index.vue";
import Location from "../views/location.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:UID",
    name: "Location",
    component: Location,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
