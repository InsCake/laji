import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./../views/home/home')
    },
    {
      path: '/commodity',
      name: 'Commodity',
      component: require('./../views/data/commodity')
    }
  ]
})
