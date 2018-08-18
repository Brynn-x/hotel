import Vue from 'vue'
import Router from 'vue-router'
import myHome from '../pages/home/index.vue'
import myRank from '../pages/hot/index.vue'
import myPersonal from '../pages/personal/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: myHome
    },
    {
      path: '/rank',
      component: myRank
    },
    {
      path: '/personal',
      component: myPersonal
    }
 ]
})
