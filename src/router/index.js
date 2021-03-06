import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion'
import Inscription from "../views/Inscription";
import PostConnexion from "../views/PostConnexion";
import NouvelleSerie from "../views/NouvelleSerie";
import ListSerie from "../views/ListSerie";
import SeriePage from "../components/SeriePage";
import ListPicture from "../views/ListPicture";
import ListPicturePage from "../components/ListPicturePage";

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
  {
    path: '/NouvelleSerie',
    name: 'NouvelleSerie',
    component: NouvelleSerie
  },
  {
    path: '/ListSerie',
    name: 'ListSerie',
    component: ListSerie
  },
  {
    path: '/SeriePage',
    name: 'SeriePage',
    component: SeriePage
  },
  {
    path: '/ListPicture',
    name: 'ListPicture',
    component: ListPicture
  },
  {
    path: '/ListPicturePage',
    name: 'ListPicturePage',
    component: ListPicturePage
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
