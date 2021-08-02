import Vue from "vue";
import Router from "vue-router";
import Accueil from "./views/Accueil.vue";
import Create from "./views/Create.vue";
import Update from "./views/Update.vue";
import Read from "./views/Read.vue";
import List from "./views/List.vue";

import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Register from "./views/Register.vue";
import ForgotPassword from "./views/ForgotPassword.vue";

import PageNotFound from "./views/404.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "accueil",
      component: Accueil,
    },
    // Activite stack
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/read",
      name: "read",
      component: Read,
    },
    {
      path: "/update",
      name: "update",
      component: Update,
    },

    // Auth stack
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
    },
    {
      path: "*",
      name: "Page introuvable",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/forgot-password'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !token) {
    next('/login');
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.path == "/login" && store.getters.isLoggedIn) {
//     next({ name: "Login" });
//     // } else if (to.path == "/login" && store.getters.isLoggedIn) {
//     //   next({ name: "Home" });
//   } else next();
// });


