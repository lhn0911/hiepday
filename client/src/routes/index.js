import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import enterpriseRouters from "./enterpriseRoutes";
import managerRouters from "./managerRoutes";

const routes = [...enterpriseRouters, ...managerRouters, ...auth];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
