<template>
    <div class="container_d">
      <div class="content">
        <!--酒店介绍-->
        <div class="hotel">
          <div class="pic"></div>
          <div class="introduce">
            <div class="name">
              文华东方
              <el-rate
                v-model="value5"
                disabled
                text-color="#ff9900"
                score-template="{value}">
              </el-rate>
              <el-button class="btn" size="mini" @click="detail">{{atten}}</el-button>
            </div>
            <div class="background"><span class="title">酒店介绍：</span>文华东方酒店秉承东方传统，提供传奇式优质服务而著称。旗下豪华酒店，度假村以及酒店服务式公寓，遍布亚太、欧洲及北美。多家酒店的米其林餐厅，Spa，快捷的交易方式。根植于东方价值观的传奇服务，名流如云。</div>
            <address><span class="title">地理位置：</span>从印度洋到太平洋，亚洲流露出独有的东方灵性和热情。泰国的寺庙和佛像，日本绽放的樱花，这里的景色绝不会让您失望。在繁华的都市中，传统的生活方式与现代理念互相融合。</address>
          </div>
        </div>
        <!--客房-->
        <my-room></my-room>
      </div>
    </div>
</template>

<script>
import myRoom from '@/components/room/index.vue';
    export default {
      name: "index",
      data() {
        return {
          value5: 5,
          atten: "关注"
        }
      },
      methods: {
        detail: function () {
          if (this.$store.state.loading === false) {
              this.$store.state.bulletBox = true;
              this.$store.state.foo = () => {
                this.$router.push({path:"/detail"});
                this.atten = '已关注'
              }

            } else if (this.$store.state.loading === true) {
              this.atten = "已关注"
            }

          }
        },
      components: {
        myRoom
      }
    }
</script>

<style lang="stylus">
.container_d
  padding-top 50px
  font-size 0
  .content
    margin 0 auto
    max-width 1080px
    padding 10px 0
    .hotel
      height 300px
      font-size 0
      margin-bottom 10px
      border-radius 5px
      border 1px solid #ddd
      .pic
        width 30%
        display inline-block
        text-align center
        height 100%
        background-image url("../../assets/img/wenhua.jpg")
        background-size 80% 80%
        background-position 50% 50%
        background-repeat no-repeat
      .introduce
        width 70%
        height 300px
        display inline-block
        vertical-align top
        .name
          vertical-align top
          margin-top 30px
          font-size 22px
          height 50px
          .btn
            vertical-align middle
            outline none
            border none
            color white
            background  #f56c6c
          .btn:hover
            background #fd5661
          .el-rate
            display inline-block
            margin-left 10px
        .background
          margin-bottom 20px
          font-size 16px
          line-height 2
          height 100px
          .title
            font-size 18px
        address
          font-size 16px
          line-height 2
          .title
            font-size 18px
@media screen and (max-width:1010px){
  .container_d .content .hotel,.container_d .content .hotel .introduce{
    height: 250px;
  }
  .container_d .content .hotel .pic {
    width: 26%;
  }
  .container_d .content .hotel .introduce {
    width: 74%;
  }
  .el-button--mini, .el-button--mini.is-round {
    padding: 6px 12px;
  }
  .container_d .content .hotel .introduce .name {
    margin-top: 20px;
    font-size 20px
    height: 35px;
  }
  .container_d .content .hotel .introduce .background .title , .container_d .content .hotel .introduce address .title{
    font-size: 16px;
  }
  .container_d .content .hotel .introduce .background {
    font-size: 15px;
    height: 90px;
    margin-bottom: 12px;
  }
  .container_d .content .hotel .introduce .background ,.container_d .content .hotel .introduce address {
    font-size: 15px;
  }
}
@media screen and (max-width:900px){
  .container_d .content .hotel,.container_d .content .hotel .introduce {
    height: 220px;
  }
  .container_d .content .hotel .introduce .name {
    font-size 18px
    height: 30px;
  }
  .el-button--mini, .el-button--mini.is-round {
    padding: 4px 7px;
  }
  .container_d .content .hotel .introduce .background{
    margin-bottom: 2px;
  }
  .container_d .content .hotel .introduce .background ,.container_d .content .hotel .introduce address {
    font-size: 14px;
  }
}//
@media screen and (max-width:840px){
  .container_d .content .hotel,.container_d .content .hotel .introduce{
    height: 180px;
  }
  .container_d .content .hotel .pic {
    width: 22%;
  }
  .container_d .content .hotel .introduce {
    width: 78%;
  }
  .container_d .content .hotel .introduce .name {
    margin-top 15px
    font-size 18px
    height: 28px;
  }
  .container_d .content .hotel .introduce .background{
    margin-bottom: 0
    line-height 1.5
    height 70px
  }
  .container_d .content .hotel .introduce address{
    line-height 1.5
  }
}
@media screen and (max-width:800px){
  .container_d .content .hotel .introduce .background {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
 .container_d .content .hotel .introduce address {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
@media screen and (max-width:750px){
  .container_d .content .hotel .pic {
    width: 0
  }
  .container_d .content .hotel .introduce {
    width: 100%;
  }
  .container_d .content .hotel,.container_d .content .hotel .introduce {
    height: 160px;
  }
  .container_d .content .hotel .introduce .name {
    margin-top 10px
    font-size 16px
    height: 25px;
  }
  .container_d .content .hotel .introduce .background{
    height 68px
  }

}
</style>
