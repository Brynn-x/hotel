import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
  state:{
    // 是否登陆
    loading: false,
    //弹窗是否出现
    bulletBox: false,
    //当前导航栏高亮项对应索引值
    currentIndexLight: 0,
    //回调函数
    foo: function () {},
  }
})
