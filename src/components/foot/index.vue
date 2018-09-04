<template>
  <div class="container_f">
    <div class="t-line"></div>
    <div class="foot">
      <div class="item" v-for="(item, index) in messages" :key="index">
        <span>{{item.name}}</span>
        <div>{{item.content1}}</div>
        <div>{{item.content2}}</div>
        <div>{{item.content3}}</div>
      </div>
      <div class="item">
        <span>在线预定或电话预订<i class="iconfont icon-dianhua"></i></span>
        <div class="phone">400 137 1218</div>
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
            {name:"联系我们",content1:"优酷",content2:" 新浪微博 ",content3:"微信公众号"}
          ]
        }
      }
    }
</script>

<style lang="stylus">
.container_f
  width 100%
  font-size 0
  .t-line
    width 100%
    height 2px
    background #b69e4f
  .foot
    max-width 1080px
    padding 0 4%
    margin 0 auto
    height 180px
    .item
      vertical-align top
      margin-top 10px
      display inline-block
      width 23%
      font-size 14px
      color #606266
    .item div
      margin-top 8px
      font-size 12px
      color #6f7180
    i
      margin-left 5px
      font-size 20px
    .phone
      font-size 18px !important
.b-line
    width 100%
    height 25px
    background #232530
  @media screen and (max-width:1000px){
    .container_f .foot{
      height 160px
    }
  }
@media screen and (max-width:750px){
  .container_f .foot{
    height 140px
  }
}
@media screen and (max-width:570px){
  .container_f .foot{
    height 110px
  }
  .container_f .foot .item{
    font-size 12px
  }
  .container_f .foot .item div{
    font-size 10px
  }
  .container_f .foot .phone {
    font-size: 15px !important;
  }
}
</style>
