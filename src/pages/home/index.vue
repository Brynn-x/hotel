<template>
  <div class="container_h">
   <!--标语-->
    <div class="hotels">Hotels.更多目的地,更多精彩体验,更多您想要的。</div>
    <!--轮播图-->
    <div class="pic">
      <template>
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="(item, index) in pics" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <!--优势-->
    <div class="advantages">
      <div class="content">
        <div class="title">平台优势</div>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in advantages" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
    </div>
    <!--步骤-->
    <div class="steps">
      <div class="content">
        <div class="title">预定步骤</div>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in steps" :key="index">
          <div class="name">{{item.title}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
    </div>
    <!--种类-->
    <div class="kinds">
      <div class="content">
        <div class="title">酒店选择</div>

        <div class="item" v-for="(item, index) in kinds" :key="index" @click="jump">
            <el-row>
              <el-card class="introduce" :body-style="{ padding: '0px' }">
                <img :src="item.url" class="image">
                <div class="name">
                  <span class="nameDetail">{{item.name}}</span>
                  <div class="bottom clearfix; intro" >
                    <time class="time">{{item.content}}</time>
                  </div>
                </div>
              </el-card>
            </el-row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      data () {
        return {
          pics:[
            "./static/img/s1.jpg",
            "./static/img/s2.jpg",
            "./static/img/s3.jpg",
            "./static/img/s4.jpg",
            "./static/img/s5.jpg",
            "./static/img/s6.jpg",
            "./static/img/s7.jpg",
          ],
          advantages:[
            {url:"./static/img/a1.png",name:"个性化",intro:"告知需求，提供个性化定制"},
            {url:"./static/img/a3.png",name:"价格优惠",intro:"优惠促销，活动不断"},
            {url:"./static/img/a4.png",name:"地理位置",intro:"国内酒店，海外酒店，应有尽有"},
            {url:"./static/img/a2.png",name:"品牌众多",intro:"合作品牌众多，挑选喜欢的入住"},
          ],
          steps:[
            {url:"./static/img/ste1.png",title:"1.登陆",intro:"点击个人中心，进行用户登陆"},
            {url:"./static/img/ste2.png",title:"2.输入信息",intro:"输入相关个人信息"},
            {url:"./static/img/ste3.png",title:"3.预定",intro:"挑选入住的酒店，点击预定。"},
            {url:"./static/img/ste4.png",title:"4.提交",intro:"确保信息无误，点击提交"}
          ],
          kinds:[
            {url:"./static/img/k1.jpg",name:"商务型酒店",content:"特点：以接待从事商务活动的客人为主。对地理位置要求较高，靠近城区或商业中心区。"},
            {url:"./static/img/k2.jpg",name:"度假型酒店",content:"特点：以接待休假的客人为主。多兴建在海滨、风景区附近。"},
            {url:"./static/img/k3.jpg",name:"长住型酒店",content:"特点：为租居者提供较长时间的食宿服务。客房多采取家庭式结构，以套房为主。"},
            {url:"./static/img/k4.jpg",name:"会议型酒店",content:"特点：以接待会议旅客为主。除食宿娱乐外还为会议代表提供接送站、资料打印等服务。"},
            {url:"./static/img/k5.jpg",name:"观光型酒店",content:"特点：主要为观光旅游者服务。多建造在旅游点。"},
          ]
        }
      },
      methods: {
        jump: function () {
          this.$router.push({path:"/hotHotel"});
          this.$store.state.currentIndexLight = 1;
        }
      }
    }
</script>

<style lang="stylus">
.container_h
  padding-top 50px
  font-size 0
  .hotels
    margin 0 auto
    text-align center
    width 100%
    height 100%
    line-height 60px
    font-size 16px
    background #eee
  .pic
    width 100%
    height 100%
    .el-carousel__container
      height 600px
      .el-carousel__arrow
        top 50%
    img
      width 100%
      height 100%
  .advantages
    background #f7f8fa
  .advantages,.steps
    width 100%
    padding 50px 0
    height 300px
    .content
      margin 0 auto
      max-width 1080px
      height 300px
      .title
        text-align center
        font-size 26px
        padding-bottom 50px
      .item
        box-sizing border-box
        vertical-align top
        display inline-block
        padding 20px
        margin-right 6.6%
        width 20%
        height 70%
        background no-repeat
        background-size 25%
        background-position 50% 20%
        border-radius 5%
        cursor pointer
        &:hover
          box-shadow: 0 0 8px 2px rgba(0,0,0,0.2)
        &:last-child
          margin-right 0
        .name
          padding 80px 0 10px 0
          text-align center
          font-size 18px
        .intro
          text-align center
          font-size 14px
  .kinds
    width 100%
    height 460px
    background #f7f8fa
    font-size 0
    .content
      margin 0 auto
      max-width 1080px
      padding  50px 0
      .title
        text-align center
        font-size 26px
        padding-bottom 40px
      .item
        vertical-align top
        display inline-block
        width 19%
        margin-right 1%
        font-size 16px
        .introduce
          height 190px
          width 100%
          transition height 1s
          overflow hidden
          .image
            height 150px
            width 100%
          .name
            padding 5px 10px 10px 10px
            text-align center
            .nameDetail
              font-weight 600
              letter-spacing 10px
            .intro
              padding 5px
              text-align left
              letter-spacing 3px
              .time
                font-size 14px
        .introduce:hover
          height 280px
      .item:last-child
        margin-rignt 0
@media screen and (max-width:1300px){
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container{
    height 510px
  }
}
@media screen and (max-width:1100px){
  .container_h .kinds .content .item .introduce:hover {
    height 300px
  }
}
@media screen and (max-width:1000px){
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container {
    height 450px
  }
}
@media screen and (max-width:900px){
  .container_h .kinds .content .item .introduce{
    height 280px
  }
  .container_h .kinds .content .item .introduce:hover {
    height 280px
  }
  .container_h .advantages .content .item .name, .container_h .steps .content .item .name {
    padding: 70px 0 10px 0
  }
  .container_h .kinds .content .item .introduce .name .intro{
    overflow hidden
    text-overflow ellipsis
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
}
@media screen and (max-width:800px) {
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container {
    height 390px
  }
  .container_h .hotels {
    line-height 50px
  }
  .container_h .advantages .content .title, .container_h .steps .content .title,.container_h .kinds .content .title{
    font-size 24px
  }
  .container_h .advantages .content .title, .container_h .steps .content .title {
    padding-bottom 40px
  }
  .container_h .advantages .content .item, .container_h .steps .content .item {
    height 60%
    padding 10px
  }
  .container_h .advantages, .container_h .steps {
    padding 50px 0 20px 0
  }
  .container_h .kinds{
    height 420px
  }
  .container_h .kinds .content .item .introduce{
    height 270px
  }
  .container_h .kinds .content .item .introduce:hover{
    height 270px
  }
  .container_h .kinds .content .item .introduce .image {
    height 120px
  }
  .container_h .kinds .content .item .introduce .name .nameDetail{
    letter-spacing 5px
  }
}
@media screen and (max-width:700px) {
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container{
    height 330px
  }
  .container_h .advantages, .container_h .steps {
    padding 40px 0 20px 0
    height 440px
  }
  .container_h .advantages .content .title, .container_h .steps .content .title {
    padding-bottom 30px
  }
  .container_h .advantages .content .item , .container_h .steps .content .item {
    margin 0 0 0 13.3%
    width 30%
    height 58%
    background-size: 20%;
  }
  .container_h .advantages .content .title, .container_h .steps .content .title,.container_h .kinds .content .title{
    font-size 22px
  }
  .container_h .advantages .content .item .name , .container_h .steps .content .item .name{
    font-size 16px
  }
  .container_h .kinds {
    height 400px
  }
  .container_h .kinds .content {
    padding 40px 0
  }
  .container_h .kinds .content .item .introduce {
    height 250px
  }
  .container_h .kinds .content .item .introduce:hover {
    height 250px
  }
  .container_h .kinds .content .item .introduce .image {
    height 100px
  }
  .container_h .kinds .content .item .introduce .name .nameDetail{
    letter-spacing 3px
  }
  }
@media screen and (max-width:650px){
  .container_h .kinds .content .item .introduce .name .nameDetail{
    letter-spacing 1px
  }
}
@media screen and (max-width:585px){
  .container_h .kinds .content .item .introduce .name .nameDetail{
    font-size 15px
  }
  .container_h .kinds .content .item .introduce {
    height 240px
  }
  .container_h .kinds .content .item .introduce:hover {
    height 240px
  }
}
@media screen and (max-width:550px){
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container{
    height 300px
  }
  .container_h .advantages .content .item , .container_h .steps .content .item {
    margin 0 0 0 8%
    width 38%
    height 40%
    background-size 20%
  }
  .container_h .advantages .content .item .name, .container_h .steps .content .item .name {
    padding 55px 0 10px 0
  }
  .container_h .advantages, .container_h .steps {
    padding 50px 0 20px 0
    height 390px
  }
  .container_h .advantages .content .item , .container_h .steps .content .item {
    height 55%
  }
  .container_h .kinds {
    height 360px
  }
  .container_h .kinds .content .item .introduce {
    height 220px
  }
  .container_h .kinds .content .item .introduce:hover {
    height 220px
  }
  .container_h .kinds .content .item .introduce .image {
    height 80px
  }
  .container_h .kinds .content .item .introduce .name{
    font-size 14px
  }
  .container_h .kinds .content .item .introduce .name .intro {
    padding 3px
  }
  .container_h .kinds .content .item{
    margin-right 3.3%
    width 30%
    height 70%
  }
  .container_h .kinds .content .item:nth-child(n+5){
    width 0
    height 0
    overflow hidden
  }
}
@media screen and (max-width:400px){
  .container_h .pic ,.container_h .pic .el-carousel .el-carousel__container{
    height 270px
  }
  .container_h .advantages .content .item , .container_h .steps .content .item {
    margin 0 0 0 6.6%
    width 40%
    height 50%
    background-size 20%
  }
}

</style>
