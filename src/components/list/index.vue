<template>
  <div class="list_hot">
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
      ]
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
    width 20%
    vertical-align top
    display inline-block
    .pic
      display inline-block
  .center
    width 65%
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
    width 15%
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
</style>
