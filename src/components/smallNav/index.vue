<template>
  <div class="toolbar_s">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
            <div style="padding: 14px;">
              <span style="font-size: 18px">复式房</span>
              <div class="bottom ">
                <time class="time">入住时间：<span style="color:#ff7f27">2018.10.1-2018.10.5</span></time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="myCollect" v-if="('2' === currentIndex)">
      <div class="itemFirst" v-for="(item, index) in collectFirst" :key="item.id">
        <div class="title">{{item.title}}</div>
        <img  class="image" :src="item.src" alt="">
        <div class="decorate">{{item.name}}</div>
      </div>
      <div class="itemSecond" v-for="(item, index) in collectSecond" :key="item.id">
        <div class="title">{{item.title}}</div>
        <img  class="image" :src="item.src" alt="">
        <div class="decorate">{{item.name}}</div>
      </div>
    </div>
    <div class="myVip" v-if="('3' === currentIndex)">
      <template>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="酒店名称" width="180"></el-table-column>
          <el-table-column prop="rank" label="会员等级" width="180"></el-table-column>
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
           collectFirst:[
             {id:"1",title:"Marriott：豪华大床房",src:"../.././static/img/collect.jpg",name:"Marriott"},
             {id:"2",title:"Hilton：观景房",src:"../.././static/img/collect1.jpg",name:"Hilton"}
           ],
           collectSecond:[
             {id:"3",title:"悦榕庄：主题单人房",src:"../.././static/img/collect2.jpg",name:"悦榕庄"},
             {id:"4",title:"文华东方：豪华家庭房",src:"../.././static/img/collect3.jpg",name:"文华东方"}
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
      padding 50px
      font-size 16px
      .item
        text-align center
        font-size 16px
        .image
          width 500px
          height 300px
        .el-col:hover
          box-shadow 0 0 1px 1px #eee
    .myCollect
      margin 50px
      .itemFirst
        margin 0 15% 5% 0
      .itemSecond
        margin 5% 0 10% 15%
      .itemFirst,.itemSecond
        position relative
        display inline-block
        width 35%
        height 180px
        .title
          width 100%
          height 20%
          font-size 16px
        .image
          width 100%
          height 80%
        &:hover
          transform scale(1.1,1.1)
          transition 1s
        .decorate
          position absolute
          left 10%
          top 30%
          width 80%
          height 60%
          font-size 16px
          color #fab6b6
          border 1px solid white
    .myVip
      padding 50px
      .has-gutter
        color #606266
    .myHistory
      padding 50px
      .name
        color #66b1ff
      .date
        color #8c939d
</style>
