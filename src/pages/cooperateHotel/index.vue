<template>
    <div class="container">
      <div class="animateShow">
        <template>
          <el-carousel indicator-position="none" :interval="4000" type="card" height="350px">
            <el-carousel-item v-for="(item, index) in animateShow" :key="index">
              <img class="pic" :src="item.src" alt="">
              <div class="brand">{{item.brand}}</div>
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="introFirst">
        <div class="introBig">多家品牌酒店，多种预订方式，盛情款待您到来</div>
        <div class="introSmall">我们与您一同追求高品质的服务</div>
      </div>
      <div class="kindFirst">
        <div class="content">
          <div class="logo"  v-for="(item, index) in kindFirst" :key="index">
              <img class="logoPic" @click="detail" :src="item.src" alt=""/>
          </div>
        </div>
      </div>
      <div class="introSecond">
        <div class="introBig">“我们以绅士淑女的态度为绅士淑女服务”</div>
        <div class="introSmall">我们竭尽全力为您所想</div>
      </div>
      <div class="kindSecond">
        <div class="content">
          <div class="logo"  v-for="(item, index) in kindSecond" :key="index">
            <img class="logoPic" @click="detail"  :src="item.src" alt="">
          </div>
        </div>
      </div>
      <div class="word">欢迎加入Hotels</div>
      <div class="end">
        <img class="pic" src="../.././assets/img/picture.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            animateShow:[
              {src:"../.././static/img/Ritz-Carlton.jpg",brand:"Ritz-Carlton"},
              {src:"../.././static/img/marriott.jpg",brand:"Marriott"},
              {src:"../.././static/img/siji.jpg",brand:"四季酒店"},
              {src:"../.././static/img/wenhuaC.jpg",brand:"文华东方"},
              {src:"../.././static/img/hilton.jpg",brand:"Hilton"},
              {src:"../.././static/img/yurong.jpg",brand:"悦榕庄"},
            ],
            kindFirst:[
              {src:"../.././static/img/logo1.jpg"},
              {src:"../.././static/img/logo2.jpg"},
              {src:"../.././static/img/logo3.jpg"},
              {src:"../.././static/img/logo4.jpg"},
              ],
            kindSecond:[
              {src:"../.././static/img/logo5.jpg"},
              {src:"../.././static/img/logo6.jpg"},
              {src:"../.././static/img/logo7.jpg"},
              {src:"../.././static/img/logo8.jpg"},
            ]
          }
        },
      methods: {
          detail: function () {
            this.$router.push({
              path: "/detail"
            })
          }
      }
    }
</script>

<style lang="stylus" scoped>
.container
  padding-top 50px
  height 2000px
  .animateShow
    margin 0 auto
    background #f7f8fa
    .pic
      position relative
      width 690px
      height 350px
    .brand
      margin-left 30px
      position absolute
      left 0
      bottom 50px
      height 25px
      line-height 25px
      color white
      letter-spacing 3px
      border-top 1px solid white
      border-bottom 1px solid white
  .introFirst,.introSecond
    text-align center
    height 280px
    .introBig
      font-size 40px
      height 180px
      line-height 180px
    .introSmall
      font-size 22px
  .kindFirst,.kindSecond
    height 270px
    background #f7f8fa
    .content
      margin 0 auto
      max-width 1080px
      font-size 0
      .logo
        width 25%
        display inline-block
        text-align center
        vertical-align top
        height 270px
        .logoPic
          margin-top 25%
          width 50%
          height 50%
          cursor pointer
          border-radius 50%
          box-shadow  0 0 8px 2px rgba(0,0,0,0.2)
        &:hover
          transition 0.4s
          transform scale(1.1,1.1)
  .word
    text-align center
    height 120px
    line-height 120px
    font-size 40px
  .end
    .pic
      width 100%
      height 400px
</style>
