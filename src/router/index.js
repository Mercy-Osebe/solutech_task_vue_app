import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TaskIndex from "../views/task/TaskIndex.vue";
import { getLocalStorageFromKey } from "../utilities/useLocalStorage";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/taskIndex",
      name: "taskIndex",
      component: TaskIndex,
      meta: { requiresAuth: true },
    },
    {
      path: "/createTask",
      name: "createTask",
      component: () => import("../views/task/CreateTask.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/showTask/:id",
      name: "showTask",
      component: () => import("../views/task/ShowTask.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/editTask/:id/edit",
      name: "editTask",
      component: () => import("../views/task/EditTask.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/Login.vue"),
      meta: { requiresUnauth: true },
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/auth/Register.vue"),
      meta: { requiresUnauth: true },
    },
    { path: '/:catchAll(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  const token  = getLocalStorageFromKey('user-token')
  if (to.meta.requiresAuth && !Boolean(token)) {
    next("/login");
  } else if (to.meta.requiresUnauth && token) {
    next("/taskIndex");
  } else {
    next();
  }
});

export default router;
