<template>
  <div class="container">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <img src="../.././assets/img/logo.png" alt="">
        </div>
        <div class="main item">首页</div>
        <div class="rank item">酒店排行</div>
        <div class="discount item">精选优惠</div>
        <div class="user item">个人中心</div>
        <div class="search">
          <i class=" el-icon-search"></i>
          <input type="text" placeholder="酒店名称"/>
        </div>
      </div>
      <div class="center"></div>
      <div class="right">
        <div class="book">立即预订</div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      data() {
        return{

        }
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 100%
  background #232530
  font-size 0
  height 40px
  line-height 40px
  .nav
    margin 0 auto
    max-width 1080px
    color white
    height 40px
    .left,.center,.right,.logo,.item,.search
      vertical-align top
      display inline-block
    .left
      width 60%
      height 40px
      .logo
        width 15%
        text-align left
        font-size 14px
        height 40px
        line-height 40px
        img
          width 40px
          height 40px
          vertical-align top
      .item
        text-align left
        width 15%
        font-size 14px
      .search
        position relative
        margin-top 8px
        width 25%
        font-size 14px
        height 25px
        line-height 25px
        background white
        .el-icon-search
          color #857870
        input
          position absolute
          left 20px
          top 5px
          background none
          border none
          outline none
          font-size 14px
        input:focus::-webkit-input-placeholder
          color transparent
    .center
      width 20%
    .right
      width 20%
      text-align right
      .book
        font-size 14px
</style>
