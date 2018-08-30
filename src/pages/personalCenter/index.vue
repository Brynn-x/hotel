<template>
    <div class="container_s">
      <div class="content">
        <div class="personalInfo">
          <div class="background"></div>
          <div class="info">
            <div class="avatar">
              <img class="avatarImg" src="../../assets/img/avatar.jpg" alt="">
            </div>
            <div class="name">
              <h3>夏天的风</h3>
              <div class="Signature">暂无个人资料</div>
            </div>
            <div class="edit">
              <el-button class="btn" size="medium">编辑个人资料</el-button>
            </div>
          </div>
        </div>
        <div class="detail">
          <my-small-nav></my-small-nav>
          <div class="history">
            <div class="myAtten">
              <div class="title">我的关注</div>
              <div class="item" v-for="(item, index) in myAtten" :key="index">
                <el-col :span="22">
                  <el-card shadow="hover">
                    <i class="iconfont icon-love icon"></i>{{item.name}}
                    <span class="smallWord">{{item.state}}</span>
                  </el-card>
                </el-col>
              </div>
            </div>
            <div class="forAtten">
              <div class="title">未关注</div>
              <div class="item" v-for="(item, index) in forAtten" :key="index">
                <el-col :span="22">
                  <el-card shadow="hover">
                    <i class="iconfont icon-love icon"></i>{{item.name}}
                    <span class="smallWord">{{item.state}}</span>
                  </el-card>
                </el-col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import mySmallNav from '@/components/smallNav/index.vue'
    export default {
      name: "index",
      data() {
        return {
          myAtten:[
            {name:"文华东方",state:"(已关注)"},
            {name:"悦榕庄",state:"(已关注)"},
            {name:"香格里拉",state:"(已关注)"},
            {name:"洲际集团",state:"(已关注)"},
            {name:"希尔顿",state:"(已关注)"}
          ],
          forAtten:[
            {name:"四季酒店",state:"(未关注)"},
            {name:"万豪集团",state:"(未关注)"},
            {name:"喜来登",state:"(未关注)"},
            {name:"金陵酒店",state:"(未关注)"}
          ]
        }
      },
      components: {
        mySmallNav
      }
    }
</script>

<style lang="stylus">
.container_s
  padding-top 50px
  width 100%
  font-size 16px
  background  #f6f6f6
  .content
    margin 0 auto
    max-width 1080px
    padding 10px 0
    height 1150px
    .personalInfo
      height 350px
      margin-bottom 10px
      border-radius 5px
      background-image url("../../assets/img/back2.jpg")
      background-size 1080px 350px
      .background
        height 240px
      .info
        vertical-align bottom
        height 110px
        font-size 0
        background #fff
        border-radius 0 0 5px 5px
        .avatar
          width 20%
          box-sizing border-box
          display inline-block
          .avatarImg
            width 65%
            position relative
            top -50px
            left 30px
            height 130px
            border-radius 5%
            border 3px solid #fff
        .name
          width 67%
          vertical-align top
          box-sizing border-box
          display inline-block
          h3
            font-size 26px
            margin 10px 0
          .Signature
            font-size 14px
            color #8590a9
        .edit
          width 13%
          vertical-align 50px
          box-sizing border-box
          display inline-block
          font-size 16px
          .btn
            color #409eff
            border 1px solid #409eff
    .detail
      height 750px
      font-size 0
      .history
        width 29%
        padding 0 50px
        box-sizing border-box
        display inline-block
        vertical-align top
        margin-left 1%
        margin-bottom 10px
        height 750px
        background white
        .myAtten,.forAtten
          .title
            height 55px
            line-height 55px
            font-size 16px
            color #409eff
            border-bottom 1px solid #dde
          .item
            font-size 16px
            padding 10px
            .el-card
              margin-bottom 5px
              .el-card__body
                padding 10px
                .icon
                  margin-right 10px
                  font-size 16px
                .smallWord
                  margin-left 5px
                  font-size 14px
        .myAtten
          height 350px
          .icon
            color #ff2222
          .smallWord
            color darkorange
        .forAtten
          height 400px
          .icon
            color black
          .smallWord
            color #6f7180
</style>
