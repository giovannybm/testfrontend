import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Administrador from "../views/Administrador.vue";
import Coordinador from "../views/Coordinador.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: Administrador,
    meta: { auth: true },
  },
  {
    path: "/coordinador",
    name: "Coordinador",
    component: Coordinador,
    meta: { auth: true },
  },
  {
    path: "*",
    name: "404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { auth } = to.meta;

  function getUser() {
    if (localStorage.getItem("currentUser")) {
      return JSON.parse(localStorage.getItem("currentUser"));
    } else {
      return null;
    }
  }
  const currentUser = getUser();

  if (auth) {
    if (currentUser == null) {
      next({ path: "/" });
    }
    console.log(currentUser);
  }
  if (to.name == "Administrador" && currentUser.role == "Coordinador") {
    next({ path: "/coordinador" });
  }
  if (to.name == "Coordinador" && currentUser.role == "Administrador") {
    next({ path: "/administrador" });
  }
  if (to.name == "Login" && currentUser) {
    next({ name: currentUser.role });
  }
  if (to.name == "404" && currentUser) {
    next({ name: currentUser.role });
  }

  next();
});

export default router;
