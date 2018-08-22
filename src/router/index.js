import Vue from 'vue'
import Router from 'vue-router'
import myHome from '../pages/home/index.vue'
import myHotRank from '../pages/hotRank/index.vue'
import myPersonalCenter from '../pages/personalCenter/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: myHome
    },
    {
      path: '/hotRank',
      component: myHotRank
    },
    {
      path: '/personalCenter',
      component: myPersonalCenter
    }
 ]
})
