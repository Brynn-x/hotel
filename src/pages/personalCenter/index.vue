<template>
    <div class="container_s">
      <div class="content">
        <!--背景区-->
        <div class="personalInfo">
          <div class="background"></div>
          <div class="info">
            <!--头像-->
            <div class="avatar">
              <img class="avatarImg" src="../.././assets/img/avatar.jpg" alt="">
            </div>
            <!--网名-->
            <div class="name">
              <h3>柑橘与柠檬啊</h3>
              <div class="Signature">暂无个人资料</div>
            </div>
            <!--编辑-->
            <div class="edit">
              <el-button class="btn" size="medium">编辑个人资料</el-button>
            </div>
          </div>
        </div>
        <div class="detail">
          <!--小导航栏-->
          <my-small-nav></my-small-nav>
          <!--关注区-->
          <div class="history">
            <div class="myAttention">
              <div class="title">我的关注</div>
              <div class="item" v-for="(item, index) in myAttention" :key="index">
                <el-col :span="22">
                  <el-card shadow="hover">
                    <span class="hotelName"><i class="iconfont icon-weibiaoti- icon"></i>{{item.name}}</span>
                    <span class="smallWord">{{item.state}}</span>
                  </el-card>
                </el-col>
              </div>
            </div>
            <div class="forAttention">
              <div class="title">未关注</div>
              <div class="item" v-for="(item, index) in forAttention" :key="index">
                <el-col :span="22">
                  <el-card shadow="hover">
                   <span class="hotelName"><i class="iconfont icon-weibiaoti- icon"></i>{{item.name}}</span>
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
          myAttention:[
            {name:"文华东方",state:"(已关注)"},
            {name:"悦榕庄",state:"(已关注)"},
            {name:"香格里拉",state:"(已关注)"},
            {name:"洲际集团",state:"(已关注)"},
            {name:"希尔顿",state:"(已关注)"}
          ],
          forAttention:[
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
      background-size 100% 100%
      background-repeat no-repeat
      .background
        height 65%
      .info
        position relative
        vertical-align top
        height 35%
        font-size 0
        background #fff
        border-radius 0 0 5px 5px
        .avatar
          width 19%
          height 100%
          box-sizing border-box
          display inline-block
          .avatarImg
            width 65%
            height 100%
            position relative
            top -50px
            left 30px
            border-radius 5%
            border 3px solid #fff
        .name
          width 68%
          height 100%
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
          position absolute
          width 13%
          height 100%
          box-sizing border-box
          display inline-block
          font-size 16px
          .btn
            position absolute
            bottom 8%
            right 8%
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
        .myAttention,.forAttention
          .title
            height 60px
            line-height 55px
            font-size 16px
            color #409eff
            border-bottom 1px solid #dde
          .item
            text-align center
            padding 10px
            .el-col
              width 100%
              font-size 0
              .el-card
                margin-bottom 5px
                .el-card__body
                  padding 10px
                  .hotelName
                    text-align left
                    display inline-block
                    width 60%
                    font-size 16px
                    .icon
                      margin-right 10px
                      font-size 16px
                  .smallWord
                    display inline-block
                    width 40%
                    font-size 14px
        .myAttention
          height 40%
          .icon
            color #ff2222
          .smallWord
            color darkorange
        .forAttention
          padding 20% 0
          height 60%
          .icon
            color black
          .smallWord
            color #6f7180
@media screen and (max-width: 1137px) {
  .container_s .content .personalInfo{
    height 320px
  }
  .container_s .content{
    height 1100px
  }
  .container_s .content .detail .history {
    height 730px
  }
}
@media screen and (max-width: 1062px) {
  .container_s .content .personalInfo{
    height 290px
  }
  .container_s .content{
    height 1070px
  }
  .container_s .content .detail .history {
    padding 0 35px
  }
}

@media screen and (max-width: 986px) {
  .container_s .content .detail .history {
    padding 0 25px
  }
  .container_s .content{
    height 1020px
  }
  .container_s .content .detail{
    height 680px
  }
  .container_s .content .detail .history{
    height 680px
  }
}
@media screen and (max-width: 909px) {
  .container_s .content{
    height 940px
  }
  .container_s .content .detail{
    height 630px
  }
  .container_s .content .detail .history{
    height 630px
  }
  .container_s .content .personalInfo{
    height 260px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size 24px
  }
  .el-button--medium {
    padding 8px 4px
    font-size 13px
  }
  .container_s .content .personalInfo.edit.btn{
    width 50px
    height 50px
  }
  .container_s .content .detail .history {
    padding 0 15px
  }
}
@media screen and (max-width: 834px) {
  .container_s .content{
    height 930px
  }
  .container_s .content .personalInfo{
    height 250px
  }
  .container_s .content .detail .history {
    padding 0 5px
  }
}
@media screen and (max-width:798px) {
  .container_s .content .detail .history {
    padding 0
  }
}
@media screen and (max-width:760px) {
  .container_s .content{
    height 920px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size 23px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    top -49px
    left 27px
  }
  .container_s .content .personalInfo .info .name .Signature {
    font-size 13px
  }
  .el-button--medium {
    padding 8px 4px
    font-size 12px
  }
  .container_s .content .detail .history {
    width 32%
  }
}
@media screen and (max-width:690px) {
  .container_s .content{
    height 880px
  }
  .container_s .content .personalInfo{
    height 220px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    top -47px
    left 25px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size: 22px
  }
  .container_s .content .personalInfo .info .name .Signature {
    font-size: 12px
  }
  .container_s .content .detail .history .myAttention .item .el-col .el-card .el-card__body .hotelName{
    font-size 14px
  }
  .container_s .content .detail .history .forAttention .item .el-col .el-card .el-card__body .hotelName{
    font-size 14px
  }
}
@media screen and (max-width:648px) {
  .container_s .content{
    height 860px
  }
  .container_s .content .personalInfo{
    height 200px
  }
  .container_s .content .detail .history .myAttention .item .el-col .el-card .el-card__body .hotelName{
    font-size 12px
  }
  .container_s .content .detail .history .forAttention .item .el-col .el-card .el-card__body .hotelName{
    font-size 12px
  }
  .container_s .content .detail .history .myAttention .item .el-col .el-card .el-card__body .smallWord,
  .container_s .content .detail .history .forAttention .item .el-col .el-card .el-card__body .smallWord{
    font-size 12px
  }
}
@media screen and (max-width:561px){
  .container_s .content{
    height 740px
  }
  .container_s .content .personalInfo{
    height 180px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    left 16px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size 20px
  }
  .el-button--medium {
    padding 4px 2px
    font-size 11px
  }
  .container_s .content .detail{
    height 500px
  }
  .container_s .content .detail .history {
    width 0
    height 0
    overflow hidden
  }
}
@media screen and (max-width:500px){
  .container_s .content{
    height 680px
  }
  .container_s .content .personalInfo{
    height 160px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    top -33px
    left 12px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size 16px
  }
  .container_s .content .personalInfo .info .name .Signature {
    font-size: 10px
  }
}
@media screen and (max-width:430px){
  .container_s .content{
    height 600px
  }
  .el-button--medium {
    font-size 9px
  }
}
@media screen and (max-width:400px){
  .container_s .content{
    height 570px
  }
  .container_s .content .personalInfo{
    height 130px
  }
  .container_s .content .personalInfo .info .name h3 {
    margin 4px 0
  }
  .el-menu-item {
    font-size 12px
  }
  .el-button--medium {
    padding 2px 2px
    font-size 8px
  }
}
@media screen and (max-width:350px){
  .container_s .content{
    height 510px
  }
  .container_s .content .personalInfo{
    height 110px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    top -28px
    left 10px
  }
  .container_s .content .personalInfo .info .name h3 {
    font-size 14px
    margin 0
  }
  li.el-menu-item {
    font-size 11px
    padding 0 8px
  }
  .el-button--medium {
    font-size 7px
  }
}
@media screen and (max-width:290px){
  .container_s .content{
    height 440px
  }
  .container_s .content .personalInfo{
    height 90px
  }
  .container_s .content .personalInfo .info .avatar .avatarImg{
    top -22px
    left 8px
  }
  .el-button--medium {
    padding 1px 1px
    font-size 6px
  }
}
</style>
