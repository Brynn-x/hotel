<template>
  <div class="container">
    <div class="content">
      <div class="hotels">Hotels.更多目的地,更多精彩体验,更多您想要的。</div>
      <div class="pic">
        <template>
          <el-carousel indicator-position="outside" height="500px">
            <el-carousel-item v-for="(item, index) in pics" :key="index">
              <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
        </template>
      </div>
      <div class="advantages">
        <h3>平台优势</h3>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in advantages" :key="index">
          <div class="name">{{item.name}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
      <div class="steps">
        <h3>预定步骤</h3>
        <div class="item" :style="'background-image:url('+item.url+');'" v-for="(item, index) in steps" :key="index">
          <div class="name">{{item.title}}</div>
          <div class="intro">{{item.intro}}</div>
        </div>
      </div>
      <div class="kinds">
        <h3>酒店选择</h3>
        <div class="item" v-for="(item, index) in kinds" :key="index" >
        <el-row>
          <el-row>
            <el-card :body-style="{ padding: '0px' }" height="400px">
            <img :src="item.url" class="image" height="200px" >
              <div style="padding: 14px;">
                <span style="font-weight: bold;">{{item.name}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{item.content}}</time>
                  </div>
              </div>
            </el-card>
           </el-row>
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
            {url:"./static/img/a1.png",name:"个性化定制",intro:"根据您的需要，联系客服，告诉我们您的需求，为您提供个性化定制"},
            {url:"./static/img/a3.png",name:"价格优惠",intro:"优惠促销活动不断"},
            {url:"./static/img/a4.png",name:"地理位置",intro:"国内酒店，海外酒店，应有尽有"},
            {url:"./static/img/a2.png",name:"品牌众多",intro:"合作品牌众多，任意挑选您喜欢的入住"},
          ],
          steps:[
            {url:"./static/img/ste1.png",title:"1.点击登陆",intro:"点击页面右上角登陆"},
            {url:"./static/img/ste2.png",title:"2.输入信息",intro:"输入相关个人信息"},
            {url:"./static/img/ste3.png",title:"3.预定",intro:"挑选您想入住的酒店，输入入住时间，并点击预定。"},
            {url:"./static/img/ste4.png",title:"4.提交",intro:"确保信息无误，点击提交"}
          ],
          kinds:[
            {url:"./static/img/k1.jpg",name:"商务型酒店",content:"它主要以接待从事商务活动的客人为主。这类客人对酒店的地理位置要求较高，要求酒店靠近城区或商业中心区。"},
            {url:"./static/img/k2.jpg",name:"度假型酒店",content:"它以接待休假的客人为主，多兴建在海滨、风景区附近。其经营的季节性较强。度假性酒店要求有较完善的娱乐设备。"},
            {url:"./static/img/k3.jpg",name:"长住型酒店",content:"为租居者提供较长时间的食宿服务。此类酒店客房多采取家庭式结构，以套房为主，小者有仅供一人使用的单人房间。"},
            {url:"./static/img/k4.jpg",name:"会议型酒店",content:"它是以接待会议旅客为主的酒店，除食宿娱乐外还为会议代表提供接送站、会议资料打印、录像摄像、旅游等服务。"},
            {url:"./static/img/k5.jpg",name:"观光型酒店",content:"主要为观光旅游者服务，多建造在旅游点，还要求有公共服务设施，以满足旅游者休息、娱乐、购物的综合需要。"},
          ]
        }
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 100%
  font-size 0
  .content
    margin 0 auto
    max-width 1080px
    .hotels
      width 100%
      height 100%
      line-height 50px
      font-size 16px
    .pic
      width 100%
      img
        width 100%
        height 500px
    .advantages,.steps
      max-width 1080px
      padding-top 20px
      height 300px
      h3
        text-align center
        color #232530
        font-size 24px
        padding-bottom 20px
      .item
        box-sizing border-box
        vertical-align top
        display inline-block
        margin-right 6.6%
        width 20%
        height 200px
        background no-repeat
        background-size 25%
        background-position 50% 20%
        border-radius 5%
        &:hover
          box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);
        &:last-child
          margin-right 0
        .name
          padding 100px 0 10px 0
          text-align center
          font-size 18px
        .intro
          text-align center
          font-size 14px
    .kinds
      max-width 1080px
      height 450px
      h3
        text-align center
        color #232530
        font-size 24px
        padding-bottom 20px
      .item
        vertical-align top
        text-align center
        display inline-block
        width 20%
        font-size 16px


</style>
