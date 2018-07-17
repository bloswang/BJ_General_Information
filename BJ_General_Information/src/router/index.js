import Vue from 'vue'
import Router from 'vue-router'

import home from '../home.vue'
import login from '../login.vue'
import form from '../form.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'moren',
      component: login
    },
     {
      path: '/home',
      name: 'one',
      component: home
     },
      {
          path: '/form',
          name: 'form',
          component: form
      }
  ]
})
