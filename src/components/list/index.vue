<template>
  <!--一个酒店的详情-->
  <div class="list_hot" @click="detail">
    <div class="left">
      <img class="pic" :src="item.url" alt="">
    </div>
    <div class="center">
      <div class="name">
        {{item.name}}
        <div class="star">
          <el-rate
            v-model="item.value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}">
          </el-rate>
        </div>
      </div>
      <div class="address">{{item.address}}</div>
      <div class="score">
        <span>{{item.score}}</span>
        <span class="icon"></span>
        <span>{{item.people}}</span>
      </div>
      <div class="assess">{{item.assess}}</div>
    </div>
    <div class="right">
      <div class="price">
        <span class="symbol">￥</span><span class="math">{{item.price}}</span><span class="word">起</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: [
        "item"
      ],
      methods: {
       detail: function () {
         this.$router.push({
           path: "/detail"
         })
       }
      }
    }
</script>

<style lang="stylus">
.list_hot
  width 100%
  box-sizing border-box
  padding 10px 10px
  margin-bottom 15px
  height 150px
  font-size 0
  border-radius 5px
  border 1px solid #bbb
  &:hover
    background #e8f4ff
    box-shadow 0 0 6px 1px rgba(0,0,0,0.2)
  .left
    width 23%
    vertical-align top
    display inline-block
    .pic
      width 90%
      display inline-block
      height 130px
  .center
    width 57%
    display inline-block
    font-size 12px
    .name
      font-size 14px
      color #2676e3
      margin-bottom 10px
      .star
        display inline-block
        .el-rate__icon
          font-size 14px
    .score
      padding-top  5px
      .icon
        display inline-block
        margin-right 5px
        width 2px
        height 12px
        background #ddd
    .assess
      padding-top 10px
      color #999
  .right
    width 20%
    display inline-block
    text-align right
    vertical-align top
    font-size 10px
    .symbol
      vertical-align  60%
    .math
      font-size 22px
      color #ff6600
    .word
      vertical-align text-bottom
      margin-left 5px
      color #ff6600
@media screen and (max-width:1080px){
  .list_hot .left{
    width 17%
  }
  .list_hot .center {
    width 61%
  }
}
@media screen and (max-width:1000px){
  .list_hot .left{
    width 20%
  }
  .list_hot .center {
    width 60%
  }
}
@media screen and (max-width:950px){
  .list_hot .left{
    width 22%
  }
  .list_hot .center {
    width 58%
  }
}
@media screen and (max-width:850px){
  .list_hot{
    height 130px
  }
  .list_hot .left .pic {
    height 110px
  }
}
@media screen and (max-width:780px){
  .list_hot .left{
    width 22%
  }
  .list_hot .center {
    width 58%
  }
}
@media screen and (max-width:630px){
  .list_hot .left{
    width 25%
  }
  .list_hot .center {
    width 55%
  }
}
@media screen and (max-width:600px) {
  .list_hot .center .name .star {
    display: none !important
  }
}
@media screen and (max-width:560px){
  .list_hot{
    height 110px
  }
  .list_hot .left .pic {
    height 90px
  }
  .list_hot .center .name {
    margin-bottom 2px
  }
  .list_hot .center .assess {
    padding-top 8px
  }
  .list_hot .center .name {
    font-size 12px
  }
  .list_hot .center {
    font-size 10px
  }
  .list_hot .center .name .star .el-rate__icon {
    font-size 12px
  }
}
@media screen and (max-width:500px){
  .list_hot .right .math {
    font-size 20px
  }
  .address,.list_hot .center .assess,.score{
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  }
}
@media screen and (max-width:490px){
  .list_hot .center .name{
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
  }
}
@media screen and (max-width:470px){
  .list_hot .left{
    width 27%
  }
  .list_hot .center {
    width 52%
  }
}
@media screen and (max-width:425px){
  .list_hot .right .math {
    font-size 16px
  }
}
@media screen and (max-width:380px){
  .list_hot .left{
    width 35%
  }
  .list_hot .center{
    width 40%
  }
  .list_hot .right {
   width 25%
  }
  .list_hot{
    height 105px
  }
  .list_hot .left .pic {
    height 85px
  }
}
</style>
