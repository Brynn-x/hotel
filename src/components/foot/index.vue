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
      <!--<div class="logo">-->
        <!--<img :src="item.url" alt="" v-for="(item, index) in cooperates" :key="index">-->
      <!--</div>-->
    </div>
    <div class="b-line"></div>
  </div>

</template>

<script>
    export default {
        name: "foot",
      data () {
        return {
          cooperates:[
            {url:"./static/img/co1.png"},
            {url:"./static/img/co2.png"},
            {url:"./static/img/co3.png"},
            {url:"./static/img/co4.png"},
            {url:"./static/img/co5.png"},
            {url:"./static/img/co6.png"}
          ],
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
    height 200px
    .item
      margin-top 10px
      display inline-block
      width 25%
      font-size 16px
    .item div
      margin-top 5px
      font-size 14px
  .b-line
    width 100%
    height 25px
    background #232530
</style>
