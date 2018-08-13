<template>
  <div class="container">
    <div class="content">
      <div class="hotels">Hotels.更多目的地,更多精彩体验,更多您想要的。</div>
      <div class="pic">
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="(item, index) in srcs" :key="index">
            <img :src="item" alt="">
            <button>立即预定</button>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="advan">
        <div class="title">平台优势</div>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in advans" :key="index">

        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      data () {
        return {
          srcs:[
            "./static/img/m1.jpg",
            "./static/img/m2.jpg",
            "./static/img/m3.jpg",
            "./static/img/m4.jpg",
            "./static/img/m5.jpg",
            "./static/img/m6.jpg"
          ],
          advans:[
            {url:"./static/img/a1.png",name:"个性化定制",intro:"根据您的需要，联系客服，告诉我们您的需求，为您提供个性化定制"},
            {url:"./static/img/a2.png",name:"品牌众多",intro:"合作品牌众多，任意挑选您喜欢的入住"},
            {url:"./static/img/a3.png",name:"价格优惠",intro:"优惠促销活动不断"},
            {url:"./static/img/a4.png",name:"地理位置",intro:"国内酒店，海外酒店，应有尽有"}
          ]
        }
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 100%
  background #eee
  font-size 0
  .content
    margin 0 auto
    max-width 1080px
    height 400px
    .hotels
      width 100%
      height 50px
      line-height 50px
    .pic
      position relative
      width 100%
      button
        position absolute
        right 0
        bottom 0
        width 80px
        height 25px
        background #E6A23C
        opacity 0.8
        border none
        color white
        font-size 14px
      button:hover
        opacity 1
    .advan
      max-width 1080px
      margin 0 auto
      height 200px
      background #b3d8ff
      .title
        width 100%
        text-align center
        color #232530
        font-size 20px
        padding-bottom 20px

      .item
        box-sizing border-box
        vertical-align top
        display inline-block
        width 25%
        height 200px
        border 1px solid red
        background-size 50% auto

</style>
