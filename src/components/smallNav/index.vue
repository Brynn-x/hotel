<template>
  <div class="toolbar_s">
    <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">我的预订</el-menu-item>
      <el-menu-item index="2">我的收藏</el-menu-item>
      <el-menu-item index="3">我的会员</el-menu-item>
      <el-menu-item index="4">历史订单</el-menu-item>
    </el-menu>
    <div class="myBook" v-if="('1' === currentIndex)">
      <el-row class="item">
        <el-col :span="16" >
          <el-card :body-style="{ padding: '0px' }">
            <img src="../.././assets/img/myBook.jpg" class="image">
            <div class="intro">
              <span class="room">复式房</span>
              <div class="bottom ">
                <time class="time">入住时间：<span style="color:#ff7f27">2018.10.1-2018.10.5</span></time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="myCollect" v-if="('2' === currentIndex)">
      <div class="item" v-for="(item, index) in collect" :key="item.id">
        <div class="name">{{item.title}}</div>
        <img  class="image" :src="item.src" alt="">
        <div class="decorate">{{item.logo}}</div>
      </div>
    </div>
    <div class="myVip" v-if="('3' === currentIndex)">
        <template>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="酒店名称" ></el-table-column>
            <el-table-column prop="rank" label="会员等级"></el-table-column>
            <el-table-column prop="dist" label="会员折扣" ></el-table-column>
          </el-table>
        </template>
    </div>
    <div class="myHistory" v-if="('4' === currentIndex)" >
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item  :title="item.title" v-for="(item, index) in myHistory" :key="index">
          <div class="name">{{item.name}}</div>
          <div>入住时间：<span class="date">{{item.date}}</span></div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
    export default {
       data () {
         return {
           activeIndex: '1',
           activeName: '1',
           show: false,
           currentIndex: '1',
           collect:[
              {id:"1",title:"Marriott：豪华大床房",src:"../.././static/img/collect.jpg",logo:"Marriott"},
              {id:"3",title:"悦榕庄：主题单人房",src:"../.././static/img/collect2.jpg",logo:"悦榕庄"},
              ],
           tableData: [{
             name: '文华东方',
             rank: '白金会员',
             dist: '8.2折 '
           }, {
             name: '悦榕庄',
             rank: '黄金会员',
             dist: '9.2折(特价房 9.0折)'
           }, {
             name: 'Ritz-Carlton',
             rank: '白金会员',
             dist: '8.5折'
           }, {
             name: 'Marriott',
             rank: '普通会员',
             dist: '9.5折(特价房 9.0折)'
           }],
           myHistory:[
             {title:"香格里拉酒店",name:"豪华复式房",date:"2018.2.1-2018.2.3"},
             {title:"Ritz-Carlton",name:"观景房",date:"2018.1.5-2018.1.6"},
             {title:"四季酒店",name:"单人房",date:"2017.10.1-2017.1.6"},
             {title:"Hilton",name:"主题家庭房",date:"2017.3.3-2017.3.6"}
           ]
         }
       },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
          this.currentIndex = key;
          console.log(this.currentIndex)
        }
      }
    }
</script>

<style lang="stylus">
  .toolbar_s
    width 70%
    display inline-block
    vertical-align top
    margin-bottom 10px
    height 750px
    background white
    .myBook
      padding 10% 8%
      font-size 16px
      .item
        text-align center
        font-size 16px
        .el-col-16
          width 99.66667%
        .image
          width 100%
          height 100%
        .intro
          padding 14px
          .room
            font-size 18px
        .el-col:hover
          box-shadow 0 0 1px 1px #eee
    .myCollect
      height 750px
      padding 7% 20%
      .item
        position relative
        text-align center
        margin-bottom 20%
        width 100%
        height 30%
        border-radius 5px
        .name
          font-size 18px
          margin-bottom 2%
        .image
          width 100%
          height 100%
          border-radius 5px
        .decorate
          position absolute
          padding 1% 3%
          bottom 0
          right 5%
          letter-spacing 2px
          font-size 16px
          color white
          border-top 1px solid white
          border-bottom 1px solid white
    .myVip
      padding 7% 10%
      .name
        width 180px
      .rank
        width 180px
      .has-gutter
        color #606266
    .myHistory
      padding 5%
      .name
        color #66b1ff
      .date
        color #8c939d
@media screen and (max-width:1137px)  {
     .container_s .content .toolbar_s {
       height 750px
     }
  }
 @media screen and (max-width:986px) {
   .toolbar_s .myVip.name{
     width 170px
   }
   .toolbar_s .myCollect .item {
     height 25%
   }
  .container_s .content .toolbar_s {
       height 680px
     }
   }
@media screen and (max-width: 909px) {
  .toolbar_s .myCollect .item {
    height 22%
  }
   .container_s .content .toolbar_s {
     height 630px
   }
}
@media screen and (max-width:798px) {
  .toolbar_s .myCollect .item {
    height 20%
  }
    .toolbar_s .myBook .item .intro{
      padding 5px
    }
  }
@media screen and (max-width:760px) {
  .toolbar_s .myCollect .item {
    height 18%
  }
  .toolbar_s .myCollect .item .name{
    font-size 16px
  }
  .toolbar_s .myCollect .item .decorate{
    font-size 14px
  }
    .container_s .content .toolbar_s {
     width 67%
    }
  }
@media screen and (max-width:690px){
    .toolbar_s .myCollect .item {
      height 15%
    }
    .toolbar_s .myBook .item .intro{
      font-size 14px
    }
    .toolbar_s .myBook .item .intro .room {
      font-size 16px
    }
    .el-menu-item{
       padding 0 16px
    }
  }
@media screen and (max-width:596px){
   .el-menu-item{
      padding 0  12px
    }
  }
@media screen and (max-width:561px){
  .toolbar_s .myCollect .item {
    height 20%
  }
   .container_s .content .toolbar_s {
     width 100%
   }
  }
  @media screen and (max-width:500px){
    .el-table.el-table--fit.el-table--border.el-table--enable-row-hover.el-table--enable-row-transition{
      font-size 12px
    }
    .toolbar_s .myCollect .item {
      height 16%
    }
  }
 @media screen and (max-width:430px){
   .el-collapse-item__header{
     font-size 12px
   }
   .toolbar_s .myHistory .name{
     font-size 12px
   }
   .el-collapse-item__content{
     font-size 12px
   }
   .toolbar_s .myCollect .item .name{
     font-size 12px
   }
   .toolbar_s .myCollect .item .decorate{
     font-size 12px
   }
   .toolbar_s .myCollect .item {
     height 13%
   }
   .toolbar_s .myBook .item .intro .room {
     font-size: 14px
   }
   .toolbar_s .myBook .item .intro {
     font-size 12px
   }
 }
@media screen and (max-width:350px){
  .el-collapse-item__header{
    font-size 10px
  }
  .toolbar_s .myHistory .name{
    font-size 10px
  }
  .el-collapse-item__content{
    font-size 10px
  }
  .toolbar_s .myVip {
    padding: 7% 1%
  }
  .el-table--enable-row-transition .el-table__body td{
    padding 0
  }
  .el-table.el-table--fit.el-table--border.el-table--enable-row-hover.el-table--enable-row-transition{
    font-size 10px
  }
  .toolbar_s .myCollect .item .name{
    font-size 12px
  }
  .toolbar_s .myCollect .item .decorate{
    font-size 10px
  }
  .toolbar_s .myCollect .item {
    height 10%
  }
  .toolbar_s .myBook .item .intro .room{
    font-size 12px
  }
  .toolbar_s .myBook .item .intro {
   font-size 10px
  }
  .toolbar_s .myBook .item .intro {
     padding 0
  }
}
@media screen and (max-width:290px){
  .toolbar_s .myCollect .item {
    height 8%
  }
}
</style>
