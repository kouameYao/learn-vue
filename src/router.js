import Vue from "vue";
import Router from "vue-router";
import Accueil from "./views/Accueil.vue";
import Create from "./views/Create.vue";
import Update from "./views/Update.vue";
import Read from "./views/Read.vue";
import List from "./views/List.vue";

import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import ForgotPassword from "./views/ForgotPassword.vue";

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
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
    },
  ],
});
