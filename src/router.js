import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Todo from './views/Todo.vue'
import start from './views/start.vue'
import learning from './views/learning.vue'
import listimg from './views/listimg.vue'
import pictureList from './views/pictureList.vue'
import storeListImages from './views/storeListImages.vue'
<<<<<<< HEAD
import elementUiTable from './views/elementUiTable.vue'
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/listimg',
      name: 'listimg',
      component: listimg
    },
    {
      path: '/pictureList',
      name: 'pictureList',
      component: pictureList
    },
    {
      path: '/storeListImages',
      name: 'storeListImages',
      component: storeListImages
<<<<<<< HEAD
    },
    {
      path: '/elementUiTable',
      name: 'elementUiTable',
      component: elementUiTable
=======
>>>>>>> b489bf2fe01618c2d882d1e12e8c47f796152126
    }

  ]
})
