<template>
      <div class="room">
        <div class="nav">
          <span class="roomType">房型</span>
          <span class="bedType">床型</span>
          <span class="breakfast">早餐</span>
          <span class="roomPrice">房价（含服务）</span>
        </div>
        <div class="commonRoom">
          <div  class="roomType">
            普通房
            <span class="detail">
              <template>
                <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                  <div>{{msg}}</div>
                  <img class="" src="../.././assets/img/commonRoom.jpg" style="width: 350px;height: 200px" alt="">
                  <a slot="reference">查看详情<i class="el-icon-caret-bottom"></i></a>
                </el-popover>
              </template>
            </span>
          </div>
          <div class="intro">
            <span v-for="(item, index) in commonRoom" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini">预定</el-button></span>
              </span>
            </span>
          </div>
        </div>
        <div class="singleRoom">
          <div  class="roomType">
            单人房
            <span class="detail"> <template>
                <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                  <div>{{msg}}</div>
                  <img class="" src="../.././assets/img/singleRoom.jpg" style="width: 350px;height: 200px" alt="">
                  <a slot="reference"> 查看详情<i class="el-icon-caret-bottom"></i></a>
                </el-popover>
              </template>
            </span>
          </div>
          <div class="intro" >
            <span v-for="(item, index) in singleRoom" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini">预定</el-button></span>
              </span>
            </span>
          </div>
        </div>
        <div class="businessRoom">
          <div  class="roomType">
            商务大床房
            <span class="detail">
              <template>
                <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                  <div>{{msg}}</div>
                  <img class="" src="../.././assets/img/businessRoom.jpg" style="width: 350px;height: 200px" alt="">
                  <a slot="reference">查看详情<i class="el-icon-caret-bottom"></i></a>
                </el-popover>
              </template>
            </span>
          </div>
          <div class="intro" >
            <span v-for="(item, index) in businessRoom" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini">预定</el-button></span>
              </span>
            </span>
          </div>
        </div>
        <div class="familyRoom">
          <div  class="roomType">
            家庭房
            <span class="detail">
              <template>
                <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                  <div>{{msg}}</div>
                  <img class="" src="../.././assets/img/familyRoom.jpg" style="width: 350px;height: 200px" alt="">
                  <a slot="reference">查看详情<i class="el-icon-caret-bottom"></i></a>
                </el-popover>
              </template>
            </span>
          </div>
          <div class="intro" >
            <span v-for="(item, index) in familyRoom" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini">预定</el-button></span>
              </span>
            </span>
          </div>
        </div>
        <div class="childRoom">
          <div  class="roomType">
            儿童主题房
            <span class="detail">
               <template>
                <el-popover placement="right" title="客房介绍：" width="350" trigger="hover">
                  <div>{{msg}}</div>
                  <img class="" src="../.././assets/img/childRoom.jpg" style="width: 350px;height: 200px" alt="">
                  <a slot="reference">查看详情<i class="el-icon-caret-bottom"></i></a>
                </el-popover>
              </template>
            </span>
          </div>
          <div class="intro" >
            <span v-for="(item, index) in childRoom" :key="index">
              <span class="bedType">{{item.bedType}}</span>
              <span class="breakfast">{{item.breakfast}}<span class="free">免费</span></span>
              <span class="roomPrice">
                <span class="price"><span class="logo">￥</span><span class="math">{{item.math}}</span></span>
                <span class="book"><el-button class="btn" size="mini">预定</el-button></span>
              </span>
            </span>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: "index",
      data () {
          return {
            commonRoom: [
              {bedType:"大/双",breakfast:"每天双早 ",math:"388"},
              {bedType:"大/单",breakfast:"每天单早 ",math:"358"},
              {bedType:"小/双",breakfast:"每天双早 ",math:"368"}
            ],
            singleRoom: [
              {bedType:"大床",breakfast:"含早 ",math:"358"},
              {bedType:"小床",breakfast:"不含早 ",math:"308"},
              {bedType:"标准",breakfast:"含早 ",math:"328"}
            ],
            businessRoom: [
              {bedType:"大床",breakfast:"每天单早 ",math:"518"},
              {bedType:"大床",breakfast:"不含早 ",math:"496"},
              {bedType:"大床",breakfast:"每天单早 ",math:"518"}
            ],
            familyRoom: [
              {bedType:"大床",breakfast:"含早 ",math:"508"},
              {bedType:"大/单 小/单",breakfast:"不含早 ",math:"528"},
              {bedType:"大/双",breakfast:"含早 ",math:"558"}
            ],
            childRoom: [
              {bedType:"大/双 小/单",breakfast:"含早 ",math:"608"},
              {bedType:"大/单 小/单",breakfast:"含早 ",math:"558"},
              {bedType:"大/双",breakfast:"含早 ",math:"598"}
            ],
            msg: "客房设备：独立淋浴间，浴室，浴缸，书桌，空调小冰箱，熨衣设备，咖啡壶/茶壶，雨伞 ，手动窗帘，" +
            "免费洗漱用品(6样以内)，食品饮品(7)，24小时热水，浴衣，电热水壶，唤醒服务。"
          }
      }
    }
</script>

<style lang="stylus" scoped>
  .room
    font-size 0
    .nav
      width 100%
      height 30px
      line-height 30px
      font-size 0
      text-align center
      background #a0cfff
      .roomType,.bedType,.breakfast,.roomPrice
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
    .commonRoom,.singleRoom,.businessRoom,.familyRoom,.childRoom
      width 100%
      height 150px
      text-align center
    .commonRoom,.singleRoom,.businessRoom,.familyRoom,.childRoom
      .roomType
        width 20%
        box-sizing border-box
        display inline-block
        vertical-align top
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
        border-right 1px solid #ddd
        .bedType
          width 30%
        .breakfast
          width 35%
        .roomPrice
          width 35%
        .bedType,.breakfast,.roomPrice
          box-sizing border-box
          display inline-block
          vertical-align top
          font-size 14px
          height 50px
          line-height 50px
          border-bottom 1px solid #ddd
          .free
            color #ff8c27
        .roomPrice
          font-size 0
          .price
            display inline-block
            text-align right
            width 50%
            .logo
              vertical-align top
              font-size 12px
            .math
              display inline-block
              font-size 18px
              color #ff6600
          .book
            display inline-block
            vertical-align top
            text-align right
            width 50%
            .btn
              margin 10px 30px 0 0
              outline none
              border none
              font-size 14px
              color white
              background #ff9a14
            .btn:hover
              background #ff731f
    .commonRoom
      .roomType
        background-image url("../.././assets/img/commonRoom.jpg")
    .singleRoom
      .roomType
        background-image url("../.././assets/img/singleRoom.jpg")
    .businessRoom
      .roomType
        background-image url("../.././assets/img/businessRoom.jpg")
    .familyRoom
      .roomType
        background-image url("../.././assets/img/familyRoom.jpg")
    .childRoom
      .roomType
        background-image url("../.././assets/img/childRoom.jpg")
</style>
