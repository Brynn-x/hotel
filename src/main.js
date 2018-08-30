// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import './assets/base/stylus_base.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';

import vuex from 'vuex'
import store from './store'

Vue.use(vuex);

Vue.use(ElementUI);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>',
  render: h => h(App),
  created() {
    router.beforeEach((to, from, next) => {
      if (to.path === "/personalCenter") {
        if(this.$store.state.loading === false) {
          this.$store.state.bulletBox = true;
        }
        else if (this.$store.state.loading === true) {
          next()
        }
      }
      else{
        next()
      }
    });
    router.afterEach((to,from,next) => {
      window.scrollTo(0,0);
    });
  }
});

