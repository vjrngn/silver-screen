import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'

import auth from './services/auth'

/**
 * Register VueResource with Vue.
 * This allows us to access the $http service on every component using this.$http*
 */
Vue.use(VueResource)

/**
 * Register Router with Vue and instantiate a new router.
 */
Vue.use(Router)
const router = new Router({})

/** Instantiate Vue */
const App = Vue.extend({})

router.beforeEach(transition => {
  if (transition.to.auth && !auth.isLoggedIn) {
    transition.redirect('login')
  } else {
    transition.next()
  }
})
/** Routes */
router.map({
  '/': {
    auth: true,
    component: Vue.component('silver-screen', require('./App.vue'))
  },
  '/login': {
    component: Vue.component('silver-screen-login', require('./components/Login.vue'))
  }
})

router.start(App, '#app')
