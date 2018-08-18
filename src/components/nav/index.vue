<template>
  <div class="container">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <img src="../.././assets/img/logo.png" alt="">
        </div>
        <div class="item" v-for="(item, index) in titles" :key="index" :class="{active:index === currentIndex}" @click="active(index)">
          <router-link :class="{active2:index === currentIndex}" :to="item.path">{{item.name}}</router-link>
        </div>
        <div class="search">
          <div class="search-s">
            <i class="el-icon-search"></i>
            <input type="text" placeholder="酒店名称"/>
          </div>
        </div>
      </div>
      <div class="center"></div>
      <div class="right">
        <button class="book item">立即预定</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return{
          currentIndex: 0,
          titles:[
            {name:"首页",path:"/"},
            {name:"热门酒店",path:"/rank"},
            {name:"精选优惠",path:""},
            {name:"个人中心",path:"/personal"}
          ],
          arr: [],
        }
      },
      methods: {
        active: function (index) {
         this.currentIndex = index;
        }
      },
      computed: {},
      mounted() {
        this.arr = document.getElementsByClassName('item');
        this.arr[0].style.width = "10%";
      }
    }
</script>

<style lang="stylus" scoped>
.container
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
        width 15%
        font-size 14px
        img
          margin-top 4px
          width 45%
          height 80%
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
      .main
        width 10%
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
      width 20%
    .right
      width 20%
      text-align right
      .book
        margin-top 12px
        border 0
        outline none
        width 90px
        height 25px
        line-height 25px
        font-size 12px
        color white
        background #e6a23c
        border-radius 5%
      .book:hover
        background #efb153
        cursor:pointer
</style>
