<template>
  <div class="container">
    <div class="hotels">Hotels.更多目的地,更多精彩体验,更多您想要的。</div>
    <div class="pic">
      <template>
        <el-carousel indicator-position="inside" height="600px">
          <el-carousel-item v-for="(item, index) in pics" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
    <div class="advantages">
      <div class="content">
        <div class="title">平台优势</div>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in advantages" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
    </div>
    <div class="steps">
      <div class="content">
        <div class="title">预定步骤</div>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in steps" :key="index">
          <div class="name">{{item.title}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
    </div>
    <div class="kinds">
      <div class="content">
        <div class="title">酒店选择</div>
        <div class="item" v-for="(item, index) in kinds" :key="index" @click="jump">
            <el-row>
              <el-card class="introduce" :body-style="{ padding: '0px' }">
                <img :src="item.url" class="image" height="150px" >
                <div style="padding:5px 10px 10px 10px;text-align: center">
                  <span style="font-weight: 600;letter-spacing:5px;">{{item.name}}</span>
                  <div class="bottom clearfix;" style="padding-top: 5px;text-align: left">
                    <time class="time" style="font-size: 14px;">{{item.content}}</time>
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
            {url:"./static/img/a1.png",name:"个性化定制",intro:"联系客服，告诉我们您的需求，为您提供个性化定制"},
            {url:"./static/img/a3.png",name:"价格优惠",intro:"优惠促销，活动不断"},
            {url:"./static/img/a4.png",name:"地理位置",intro:"国内酒店，海外酒店，应有尽有"},
            {url:"./static/img/a2.png",name:"品牌众多",intro:"合作品牌众多，任意挑选您喜欢的入住"},
          ],
          steps:[
            {url:"./static/img/ste1.png",title:"1.点击登陆",intro:"点击个人中心，进行用户登陆"},
            {url:"./static/img/ste2.png",title:"2.输入信息",intro:"输入相关个人信息"},
            {url:"./static/img/ste3.png",title:"3.预定",intro:"挑选您想入住的酒店，输入入住时间，并点击预定。"},
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
          this.$router.push({path:"/hotHotel"})
        }
      }
    }
</script>

<style lang="stylus" scoped>
.container
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
    img
      width 100%
      height 600px
  .advantages
    background #f7f8fa
  .advantages,.steps
    width 100%
    padding 80px 0
    height 300px
    .content
      margin 0 auto
      max-width 1080px
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
        height 200px
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
    height 500px
    background #f7f8fa
    font-size 0
    .content
      margin 0 auto
      max-width 1080px
      padding  50px 0
      .title
        text-align center
        font-size 26px
        padding-bottom 50px
      .item
        vertical-align top
        display inline-block
        width 19%
        margin-right 1%
        font-size 16px
      .item:last-child
        margin-rignt 0
       .introduce
          height 190px
          transition height 1s
          overflow hidden
        .introduce:hover
          height 280px
</style>
