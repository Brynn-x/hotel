<template>
    <div class="container_c">
      <div class="animateShow">
        <template>
          <el-carousel class="animate" indicator-position="none" :interval="4000" type="card">
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
              {src:"./static/img/Ritz-Carlton.jpg",brand:"Ritz-Carlton"},
              {src:"./static/img/marriott.jpg",brand:"Marriott"},
              {src:"./static/img/siji.jpg",brand:"四季酒店"},
              {src:"./static/img/wenhuaC.jpg",brand:"文华东方"},
              {src:"./static/img/hilton.jpg",brand:"Hilton"},
              {src:"./static/img/yurong.jpg",brand:"悦榕庄"},
            ],
            kindFirst:[
              {src:"./static/img/logo1.jpg"},
              {src:"./static/img/logo2.jpg"},
              {src:"./static/img/logo3.jpg"},
              {src:"./static/img/logo4.jpg"},
              ],
            kindSecond:[
              {src:"./static/img/logo5.jpg"},
              {src:"./static/img/logo6.jpg"},
              {src:"./static/img/logo7.jpg"},
              {src:"./static/img/logo8.jpg"},
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

<style lang="stylus" >
.container_c
  padding-top 50px
  height 2070px
  .animateShow
    margin 0 auto
    background #f7f8fa
    height 400px
    .el-carousel__container
      height 400px
      .pic
        position relative
        width 100%
        height 100%
      .brand
        margin-left 30px
        position absolute
        left 0
        bottom 10%
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
      position relative
      top 25%
      margin 0 auto
      max-width 1080px
      font-size 0
      height 50%
      .logo
        width 25%
        height 100%
        text-align center
        display inline-block
        .logoPic
          width 135px
          height 100%
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
      height 450px
@media screen and (max-width:1300px){
  .container_c .animateShow{
    height 350px
  }
  .container_c .animateShow .el-carousel__container {
    height 350px
  }
  .container_c .animateShow .pic {
    height 350px
  }
  .container_c {
    height 1960px
  }
  .container_c .end .pic {
    height 390px
  }
}
@media screen and (max-width:1100px){
  .container_c .animateShow{
    height 300px
  }
  .container_c .animateShow .el-carousel__container {
    height 300px
  }
  .container_c .animateShow .pic {
    height 300px
  }
  .container_c {
    height 1900px
  }
  .container_c .end .pic {
    height 380px
  }
}
@media screen and (max-width:900px){
  .container_c .animateShow{
    height 250px
  }
  .container_c .animateShow .el-carousel__container {
    height 250px
  }
  .container_c .animateShow .pic {
    height 250px
  }
  .container_c .introFirst .introBig, .container_c .introSecond .introBig {
    font-size 32px
    height 145px
  }
  .container_c .introFirst, .container_c .introSecond{
    height 240px
  }
  .container_c .kindFirst, .container_c .kindSecond {
    height 240px
  }
  .container_c .kindFirst .content .logo .logoPic, .container_c .kindSecond .content .logo .logoPic {
    width 120px
  }
  .container_c .word {
    height 110px
    line-height 110px
    font-size 32px
  }
  .container_c {
    height 1670px
  }
  .container_c .end .pic {
    height 350px
  }
}
@media screen and (max-width:700px){
  .container_c .animateShow{
    height 200px
  }
  .container_c .animateShow .el-carousel__container{
    height 200px
  }
  .container_c .animateShow .pic {
    height 200px
  }
  .container_c .introFirst .introBig, .container_c .introSecond .introBig {
    font-size 26px
    height 120px
    line-height 150px
  }
  .container_c .introFirst .introSmall, .container_c .introSecond .introSmall {
    font-size 20px
  }
  .container_c .introFirst, .container_c .introSecond{
    height 210px
  }
  .container_c .kindFirst, .container_c .kindSecond {
    height 210px
  }
  .container_c .kindFirst .content .logo .logoPic, .container_c .kindSecond .content .logo .logoPic {
    width 105px
  }
  .container_c .word {
    height 90px
    line-height 90px
    font-size 26px
  }
  .container_c {
    height 1410px
  }
  .container_c .end .pic {
    height 280px
  }
}
@media screen and (max-width:580px){
  .container_c .introFirst .introBig, .container_c .introSecond .introBig {
    font-size 22px
    height 95px
    line-height 120px
  }
  .container_c .introFirst .introSmall, .container_c .introSecond .introSmall {
    font-size 18px
  }
  .container_c .introFirst, .container_c .introSecond{
    height 170px
  }
  .container_c .kindFirst, .container_c .kindSecond {
    height 170px
  }
  .container_c .kindFirst .content .logo .logoPic, .container_c .kindSecond .content .logo .logoPic {
    width 85px
  }
  .container_c .word {
    height 70px
    line-height 70px
    font-size 22px
  }
  .container_c {
    height 1210px
  }
  .container_c .end .pic {
    height 260px
  }
}
@media screen and (max-width:500px){
  .container_c .animateShow{
    height 150px
  }
  .container_c .animateShow .el-carousel__container {
    height 150px
  }
  .container_c .animateShow .pic {
    height 150px
  }
  .container_c .introFirst .introBig, .container_c .introSecond .introBig {
    font-size 18px
    height 80px
    line-height 115px
  }
  .container_c .introFirst .introSmall, .container_c .introSecond .introSmall {
    font-size 14px
  }
  .container_c .introFirst, .container_c .introSecond{
    height 150px
  }
  .container_c .kindFirst, .container_c .kindSecond {
    height 150px
  }
  .container_c .kindFirst .content .logo .logoPic, .container_c .kindSecond .content .logo .logoPic {
    width 75px
  }
  .container_c .word {
    height 50px
    line-height 50px
    font-size 18px
  }
  .container_c {
    height 1020px
  }
  .container_c .end .pic {
    height 220px
  }
}
@media screen and (max-width:400px){
  .container_c .animateShow{
    height 120px
  }
  .container_c .animateShow .el-carousel__container {
    height 120px
  }
  .container_c .animateShow .pic {
    height 120px
  }
  .brand{
    font-size 14px
  }
  .container_c .introFirst .introBig, .container_c .introSecond .introBig {
    font-size 14px
    height 70px
    line-height 95px
  }
  .container_c .introFirst, .container_c .introSecond{
    height 130px
  }
  .container_c .introFirst .introSmall, .container_c .introSecond .introSmall {
    font-size 10px
  }
  .container_c .kindFirst, .container_c .kindSecond {
    height 130px
  }
  .container_c .kindFirst .content .logo .logoPic, .container_c .kindSecond .content .logo .logoPic {
    width 65px
  }
  .container_c .word {
    height 40px
    line-height 40px
    font-size 14px
  }
  .container_c {
    height 860px
  }
  .container_c .end .pic {
    height 180px
  }
}
</style>
