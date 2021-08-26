import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'
import Administrador from '../views/Administrador.vue'
import Coordinador from '../views/Coordinador.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/administrador',
    name: 'Administrador',
    component: Administrador,
    meta: { auth: true, administrador: true, coordinador:false }
  },
  {
    path: '/coordinador',
    name: 'Coordinador',
    component: Coordinador,
    meta: { auth: true, administrador: true, coordinador:true }
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  
  const { auth, administrador, coordinador } = to.meta;

  function getUser() {
    if (localStorage.getItem("currentUser")) {
      return localStorage.getItem("currentUser")
    } else {
      return null
    }
  }
  const currentUser = getUser();

  if (auth) {
    if (currentUser==null) {
      return next({ path: "/",  });
    }
    if (administrador && currentUser.role=='Coordinador'){
      return next({ path: "/coordinador",  });
    }
    if (coordinador && currentUser.role=='Administrador'){
      return next({ path: "/Administrador",  });
    }      


  }


  next();
});



export default router
