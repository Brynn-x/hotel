<template>
  <div class="container">
    <div class="t-line"></div>
    <div class="foot">
      <div class="item" v-for="(item, index) in messages" :key="index">
        <span>{{item.name}}</span>
        <div>{{item.content1}}</div>
        <div>{{item.content2}}</div>
        <div>{{item.content3}}</div>
      </div>
    </div>
    <div class="b-line"></div>
  </div>

</template>

<script>
    export default {
        name: "foot",
      data () {
        return {
          messages:[
            {name:"会员",content1:"会员手册",content2:"会员公告",content3:"积分商城"},
            {name:"相关信息",content1:"新闻中心",content2:"职业发展",content3:"品牌价值观"},
            {name:"联系我们",content1:"优酷",content2:" 新浪微博 ",content3:"微信公众号"},
            {name:"在线预定或电话预订",content1:"400 137 1218"}
          ]
        }
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 100%
  font-size 0
  .t-line
    width 100%
    height 2px
    background #b69e4f
  .foot
    max-width 1080px
    margin 0 auto
    height 180px
    .item
      vertical-align top
      margin-top 10px
      display inline-block
      width 25%
      font-size 14px
      color #6f7180
    .item div
      margin-top 5px
      font-size 12px
  .b-line
    width 100%
    height 25px
    background #232530
</style>
