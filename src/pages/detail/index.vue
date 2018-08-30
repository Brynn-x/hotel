<template>
    <div class="container">
      <div class="content">
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

<style lang="stylus" scoped>
.container
  padding-top 50px
  font-size 0
  .content
    margin 0 auto
    max-width 1080px
    padding 10px 0
    height 1200px
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
        height 300px
        background-image url("../../assets/img/wenhua.jpg")
        background-size 80% 80%
        background-position 50% 50%
        background-repeat no-repeat
      .introduce
        width 70%
        display inline-block
        vertical-align top
        .name
          vertical-align top
          margin-top 30px
          font-size 22px
          height 50px
          .btn
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

</style>
