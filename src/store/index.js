import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
  state:{
    // 是否登陆
    loading: false,
    //弹窗是否出现
    bulletBox: false
  }
})
