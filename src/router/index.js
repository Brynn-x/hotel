import Vue from 'vue'
import Router from 'vue-router'
import myHome from '../pages/home/index.vue'
import myHotHotel from '../pages/hotHotel/index.vue'
import myCooperateHotel from '../pages/cooperateHotel/index.vue'
import myPersonalCenter from '../pages/personalCenter/index.vue'
import myDetail from '../pages/detail/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: myHome
    },
    {
      path: '/hotHotel',
      component: myHotHotel
    },
    {
      path: '/cooperateHotel',
      component: myCooperateHotel
    },
    {
      path: '/personalCenter',
      component: myPersonalCenter
    },
    {
      path: '/detail',
      component: myDetail
    }
 ]
})
