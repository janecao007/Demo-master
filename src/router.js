import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Todo from './views/Todo.vue'
import start from './views/start.vue'
import learning from './views/learning.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/learning',
      name: 'learning',
      component: learning
    }
  ]
})
