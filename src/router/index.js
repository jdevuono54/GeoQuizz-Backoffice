import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../views/Home";
import SeriesCreation from "../views/SeriesCreation";
import Library from "../views/Library";

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    alias: "/",
    component: Home
  },
  {
    path: '/create',
    name: 'Create',
    component: SeriesCreation
  },
  {
    path: '/library',
    name: 'Library',
    component: Library
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let publicPages = ['/signup','/signin'];
  let authRequired = !publicPages.includes(to.path);
  let loggedIn =  null;

  if(localStorage.getItem('backoffice'))
  {
    loggedIn = JSON.parse(localStorage.getItem('backoffice')).user
  }

  if (authRequired && !loggedIn) {
    return next({
      path: '/signin',
      query: { returnUrl: to.path }
    });
  }

  next();
})

export default router
