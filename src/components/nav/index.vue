<template>
  <div class="container_p">
    <div class="nav">
      <!--左侧-->
      <div class="left">
        <div class="logo">
          <img src="../.././assets/img/logo.png" alt="">
        </div>
        <div class="item" v-for="(item, index) in titles" :key="index" :class="{active:index === currentIndex}" @click="light(index)">
          <router-link :class="{active2:index === currentIndex}" :to="item.path" :key="index">{{item.name}}</router-link>
        </div>
        <div class="search">
          <div class="search-s">
            <i class="el-icon-search"></i>
            <input type="text" placeholder="酒店名称"/>
          </div>
        </div>
      </div>
      <!--中间-->
      <div class="center"></div>
      <!--右侧-->
      <div class="right">
        <button class="book item" @click="book">立即预定</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return{
          currentIndex: 0,
          arr: [],
        }
      },
      methods: {
        light: function (index) {
          this.currentIndex = index;
        },
        book: function () {
          this.$router.push({path:"/hotHotel"});
          this.currentIndex = 1
        }
      },
      computed: {
        titles() {
          return [
            {name:"首页",path:"/"},
            {name:"热门酒店",path:"/hotHotel"},
            {name:"合作酒店",path:"/cooperateHotel"},
            {name: this.$store.state.loading ? "个人中心" : "登陆/注册" ,path:"/personalCenter"}
          ]
        },
      },
      created () {
        if ( localStorage.name  === "123" && localStorage.psd === "123" ) {
          this.$store.state.loading = true
        } else {
          this.$store.state.loading = false
        }
        this.$router.push({path:"/"})
      },
      mounted() {
      }
    }
</script>

<style lang="stylus">
.container_p
  position fixed
  z-index 99999
  width 100%
  font-size 0
  height 50px
  line-height 50px
  background #434a50
  .nav
    margin 0 auto
    max-width 1080px
    color white
    .left,.center,.right,.logo,.item,.search
      vertical-align top
      display inline-block
      height 50px
      line-height 50px
    .left
      width 60%
      .logo
        text-align center
        width 10%
        font-size 14px
        img
          margin-top 4px
          width 40px
          height 40px
      .item
        text-align center
        width 15%
        font-size 14px
        &:hover
          color #ffd04b
          background #545c64
        &:hover a
          color #ffd04b
        a
          text-decoration none
          color #fff
      .active
        background #545c64
        .active2
          color #ffd04b
      .search
        width 30%
        text-align center
        .search-s
          display inline-block
          vertical-align middle
          width 90%
          height 22px
          line-height 22px
          background white
          i
            vertical-align top
            margin-top 4px
            width 20%
            height 22px
            font-size 16px
            color #6f7180
          input
            width 80%
            border none
            outline none
            font-size 14px
            height 22px
            line-height 22px
          input:focus::-webkit-input-placeholder
            color transparent
    .center
      width 30%
    .right
      width 10%
      text-align center
      .book
        margin-top 12%
        border 0
        outline none
        width 80px
        height 25px
        line-height 25px
        font-size 12px
        color white
        background #e6a23c
        border-radius 5%
      .book:hover
        background #efb153
        cursor pointer
@media screen and (max-width:1000px){
  .container_p .nav .left{
    width 60%
  }
  .container_p .nav .center{
    width 28%
  }
  .container_p .nav .right{
    width 12%
  }
}
@media screen and (max-width:800px){
  .container_p .nav .left{
      width 70%
    }
  .container_p .nav .center{
    width 15%
  }
  .container_p .nav .right{
    width 15%
  }
}
@media screen and (max-width:700px){
  .container_p .nav .left{
    width 80%
  }
  .container_p .nav .center{
    width 2%
  }
  .container_p .nav .right{
    width 18%
  }
}
@media screen and (max-width:550px){
  .container_p .nav .left{
    width 80%
  }
  .container_p .nav .left .logo{
    width 16%
  }
  .container_p .nav .left .item{
    width 21%
  }
  .container_p .nav .left .search{
    width 0
  }
  .container_p .nav .left .search .search-s i {
    font-size 0
  }
  .container_p .nav .center{
    width 0
  }
  .container_p .nav .right{
    width 20%
  }
  .container_p .nav .right .book{
    width 70%
  }
}
@media screen and (max-width:400px){
  .container_p .nav .left .item {
    font-size 12px
  }
  .container_p .nav .right .book{
   margin-top 17%
  }
}
@media screen and (max-width:360px){
  .container_p .nav .left{
    width 80%
  }
  .container_p .nav .right{
    width 20%
  }
  .container_p .nav .left .item {
    font-size 10px
  }
  .container_p .nav .right .book{
    width 80%
  }
}
@media screen and (max-width:316px){
  .container_p .nav .left{
    width 81%
  }
  .container_p .nav .right{
    width 19%
  }
  .container_p .nav .right .book{
    width 90%
  }
}



</style>
