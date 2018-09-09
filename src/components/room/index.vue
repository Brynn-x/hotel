<template>
      <div class="allRoom_r">
        <div class="nav">
          <span class="roomType">房型</span>
          <span class="bedType">床型</span>
          <span class="breakfast">早餐</span>
          <span class="roomPrice">房价（含服务）</span>
        </div>
        <div class="room">
          <div class="name">
            <div class="roomType"  v-for="(item, index) in room" :key="index" :style="'background-image:url('+ item.url +');'">
              {{item.name}}
              <span class="detail">
                <template>
                  <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                    <div>{{msg}}</div>
                    <img :src="item.url" style="width: 350px;height: 200px" alt="">
                    <a slot="reference">查看详情<i class="el-icon-caret-bottom"></i></a>
                  </el-popover>
                </template>
              </span>
            </div>
          </div>
          <div class="intro">
            <div class="item" v-for="(item, index) in intro" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini" @click="book(index)">{{item.bookRoom}}</el-button></span>
              </span>
            </div>

          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
              room:[
                {name:"普通房",url:"../.././static/img/commonRoom.jpg"},
                {name:"单人房",url:"../.././static/img/singleRoom.jpg"},
                {name:"商务大床房",url:"../.././static/img/businessRoom.jpg"},
                {name:"家庭房",url:"../.././static/img/familyRoom.jpg"},
                {name:"儿童主题房",url:"../.././static/img/childRoom.jpg"}
              ],
              intro:[
                {bedType:"大床",breakfast:"含早 ",math:"388",bookRoom:"预定"},
                {bedType:"大床",breakfast:"不含早 ",math:"358",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"388",bookRoom:"预定"},
                {bedType:"小床",breakfast:"含早 ",math:"358",bookRoom:"预定"},
                {bedType:"小床",breakfast:"不含早 ",math:"308",bookRoom:"预定"},
                {bedType:"小床",breakfast:"含早 ",math:"358",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"518",bookRoom:"预定"},
                {bedType:"大床",breakfast:"不含早 ",math:"496",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"518",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"558",bookRoom:"预定"},
                {bedType:"大床",breakfast:"不含早 ",math:"528",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"558",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"608",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"608",bookRoom:"预定"},
                {bedType:"大床",breakfast:"含早 ",math:"608",bookRoom:"预定"}
              ],
                msg: "客房设备：独立淋浴间，浴室，浴缸，书桌，空调小冰箱，熨衣设备，咖啡壶/茶壶，雨伞 ，手动窗帘，" +
                "免费洗漱用品(6样以内)，食品饮品(7)，24小时热水，浴衣，电热水壶，唤醒服务。"
            }
      },
      methods: {
        book(index) {
            if(this.$store.state.loading === true) {
              this.intro[index].bookRoom = "已预定"
            }else if(this.$store.state.loading === false) {
              this.$store.state.bulletBox = true;
              this.$store.state.foo =  () => {
              //"我是预定 登陆成功的回调"
                this.$router.push({path:"/detail"});
                this.intro[index].bookRoom = "已预定"
              }
            }
          }
     }
    }
</script>

<style lang="stylus">
  .allRoom_r
    max-width 1080px
    font-size 0
    .nav
      width 100%
      height 30px
      line-height 30px
      font-size 0
      text-align center
      background #a0cfff
      .roomType,.bedType,.breakfast,.roomPrice
        vertical-align top
        display inline-block
        font-size 16px
      .roomType
        width 20%
      .bedType
        width 25%
      .breakfast
        width 25%
      .roomPrice
        width 30%
    .room
      width 100%
      font-size 0
      height 750px
      text-align center
      .name
        width 20%
        display inline-block
        vertical-align top
        .roomType
          width 100%
          box-sizing border-box
          padding 15px 0
          height 150px
          font-size 16px
          font-weight bold
          color dodgerblue
          background-size 80% 60%
          background-repeat no-repeat
          background-position 50% 70%
          border 1px solid #ddd
          border-top none
          .detail
            font-size 12px
            color black
            font-weight normal
      .intro
        width 80%
        display inline-block
        box-sizing border-box
        height 750px
        border-right 1px solid #ddd
        .item
          width 100%
          box-sizing border-box
          height 50px
          line-height 50px
          border-bottom 1px solid #ddd
          .bedType
            width 30%
          .breakfast
            width 35%
          .roomPrice
            width 35%
          .bedType,.breakfast,.roomPrice
            display inline-block
            vertical-align top
            font-size 14px
            .free
              color #ff8c27
          .roomPrice
            font-size 0
            .price
              width 50%
              display inline-block
              text-align right
              .logo
                vertical-align top
                font-size 12px
              .math
                display inline-block
                font-size 18px
                color #ff6600
            .book
              width 50%
              display inline-block
              vertical-align top
              text-align center
              .btn
                vertical-align middle
                outline none
                border none
                font-size 14px
                color white
                background #ff9a14
              .btn:hover
                background #ff731f
  @media screen and (max-width:900px){
    .allRoom_r .room .name .roomType{
      font-size 15px
      padding 10px 0
      background-size 90% 70%
      background-position 50% 80%
    }
  }
  @media screen and (max-width:800px){
    .allRoom_r .room .name .roomType{
      font-size 14px
    }
    .allRoom_r .room .name .roomType .detail {
      font-size 10px
    }
    .allRoom_r .nav .roomType, .allRoom_r .nav .bedType, .allRoom_r .nav .breakfast, .allRoom_r .nav .roomPrice {
      font-size 15px
    }
  }
  @media screen and (max-width:750px){
    .allRoom_r .room .name, .allRoom_r .nav .roomType {
      width 25%
    }
    .allRoom_r .room .intro {
      width 75%
    }
   .allRoom_r .nav .bedType, .allRoom_r .nav .breakfast, .allRoom_r .nav .roomPrice{
     width 25%
   }
  }
  @media screen and (max-width:580px){
    .allRoom_r .room .name {
      width 30%
    }
    .allRoom_r .room .intro {
      width 70%
    }
    .allRoom_r .nav .roomType {
      width 31%
    }
    .allRoom_r .nav .bedType, .allRoom_r .nav .breakfast, .allRoom_r .nav .roomPrice{
      width 23%
    }
    .allRoom_r .nav .roomType, .allRoom_r .nav .bedType, .allRoom_r .nav .breakfast, .allRoom_r .nav .roomPrice {
      font-size 14px
    }
  }
  @media screen and (max-width:480px){
    .allRoom_r .room .name {
      width 34%
    }
    .allRoom_r .room .intro {
      width 66%
    }
    .allRoom_r .nav .roomType {
      width 34%
    }
    .allRoom_r .nav .bedType {
      width 15%
    }
    .allRoom_r .nav .breakfast {
      width 21%
    }
    .allRoom_r .nav .roomPrice {
      width 30%
    }
    .allRoom_r .room .name .roomType {
      height 120px
    }
    .allRoom_r .room .intro .item {
      height 40px
      line-height 40px
    }
    .allRoom_r .room {
      height 600px
    }
    .allRoom_r .room .intro .item .roomPrice .price .math {
      font-size 16px
    }
  }
  @media screen and (max-width:430px){
    .allRoom_r .room .name .roomType .detail{
      display block
    }
    .allRoom_r .room .name .roomType{
      padding 0
      background-size 90% 60%
    }

  }
  @media screen and (max-width:380px){
    .allRoom_r .room .intro .item .bedType, .allRoom_r .room .intro .item .breakfast, .allRoom_r .room .intro .item .roomPrice {
      font-size 12px
    }
    .item .roomPrice .book .btn {
      font-size 12px
    }
    .allRoom_r .room .intro .item .bedType {
      width 17%
    }
    .allRoom_r .room .intro .item .breakfast {
      width 33%
    }
    .allRoom_r .room .intro .item .roomPrice {
      width 45%
    }
    .allRoom_r .room .intro .item .roomPrice .book {
      width 45%
    }
  }

</style>
