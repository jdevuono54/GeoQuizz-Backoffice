import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion'
import Inscription from "../views/Inscription";
import PostConnexion from "../views/PostConnexion";

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/Inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/PostConnexion',
    name: 'PostConnexion',
    component: PostConnexion
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
