<template>
  <div class="container_hot">
    <div class="rank">
      <div class="hot-hotel">
        <!--标题-->
        <div class="title">
          <span class="item" :class="{light: index === currentIndex}" @click="change(index)" v-for="(item, index) in title" :key="index">
            {{item}}
           <i class="dividingLine iconfont icon-fengexian"></i>
          </span>
        </div>
        <!--分界线-->
        <div class="line"></div>
        <!--酒店列表-->
        <my-list :item="item" v-for="(item, index) in newList" :key="index"></my-list>
        <!--分页-->
        <el-pagination class="page"
          :page-size="5"
          :current-page="currentPage"
          @current-change="currentChange"
          layout="prev, pager, next"
          :total="20">
        </el-pagination>
      </div>
      <!--推荐酒店-->
      <div class="search">
        <div class="theme">至尊优享</div>
        <!--分界线-->
        <div class="line"></div>
        <!--卡片-->
        <my-card></my-card>
      </div>
    </div>
  </div>
</template>

<script>
  import myList from '@/components/list/index.vue';
  import myCard from '@/components/card/index.vue';
    export default {
      name: "index",
      data () {
          return {
            title: ["人气最高","入住率最高","星级最高"],
            currentIndex: 0,
            currentPage: 1,
            newList:[],
            url:""
          }
      },
      methods: {
          hotelData: function(x,y) {
          if(x === 0) {
            this.url = 'http://server.haiyangbg.com/list/hot'
          }else if(x === 1) {
            this.url = 'http://server.haiyangbg.com/list/num'
          }else if(x === 2) {
            this.url = 'http://server.haiyangbg.com/list/star'
          }
          this.axios.get( this.url, {params: {begin: (y - 1) * 7 , count: 7}}).then((res) => {
            this.newList = res.data;
          }).catch((res) => {
            console.log(res);
          });
        },
        change: function (index) {
          this.currentIndex = index;
          this.currentPage = 1;
          this.hotelData(this.currentIndex,this.currentPage)
        },
        currentChange: function (index) {
          this.currentPage = index;
          this.hotelData(this.currentIndex,this.currentPage)
        }
      },
      components: {
        myList,
        myCard
      },
      mounted() {
        this.axios.get('http://server.haiyangbg.com/list/hot', {params: {begin: 0, count: 7}}).then((res) => {
          this.newList = res.data;
        }).catch((res) => {
          console.log(res);
        })
      }
    }
</script>

<style lang="stylus">
.container_hot
  padding-top 50px
  width 100%
  font-size 0
  .rank
    margin 0 auto
    max-width 1080px
    padding 20px 0
    .hot-hotel
      display inline-block
      vertical-align top
      width 70%
      .title
        margin-bottom 5px
        color black
        .item
          margin-right 10px
          font-size 16px
          color #00a7f2
          .dividingLine
            color #606266
        .item:hover
          color #ff6800
        .light
          color #ff6800
        .city
          margin-left 30px
        span
          margin-right 30px
          font-size 12px
      .line
        margin-bottom 15px
        height 3px
        background #00a7f2
      .page
        text-align center
    .search
      display inline-block
      width 28%
      margin-left 2%
      .theme
        margin-bottom 5px
        font-size 16px
        color #ff6800
      .line
        height 3px
        background #ff6800
      .box-card
        margin-top 15px
        .el-card__header
          padding 4px 20px
          .head
            width 100%
            vertical-align 50%
            font-size 16px
            .logo
              vertical-align middle
              width 30%
              height 60px
            .title
              display inline-block
              text-align center
              width 46%
            .btn
              width 20%
@media screen and (max-width:1080px){
  .container_hot .rank .hot-hotel{
    width 100%
  }
  .container_hot .rank .search{
    width 0
  }
  .container_hot .rank .search .theme, .container_hot .rank .search .line{
    display none
  }
}
@media screen and (max-width:530px) {
  .container_hot .rank .hot-hotel .title .item {
    font-size 14px
  }
  .container_hot .rank .search .theme {
    font-size 14px
  }
}
@media screen and (max-width:470px) {
  .container_hot .rank .hot-hotel .title .item {
    margin-right 1px
  }
}
@media screen and (max-width:400px) {
  .container_hot .rank .hot-hotel .title .item {
    font-size 12px
  }
  .container_hot .rank .search .theme {
    font-size 12px
  }
}
@media screen and (max-width:350px) {
  .container_hot .rank .hot-hotel .title .item {
    margin-right -1px
  }
  .iconfont {
    font-size 1px
  }
}
</style>
