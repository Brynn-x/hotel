<template>
    <div class="container">
      <my-land></my-land>
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
          <div class="toolbar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">我的预订</el-menu-item>
              <el-menu-item index="2" >我的收藏</el-menu-item>
              <el-menu-item index="3">我的会员</el-menu-item>
              <el-menu-item index="4">历史订单</el-menu-item>
            </el-menu>
            <div class="line"></div>
          </div>
          <div class="history"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import myLand from '@/components/land/index.vue';
    export default {
      name: "index",
      data() {
        return {
          imageUrl: '',
          activeIndex: '1'
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
      components: {
        myLand
      }
    }
</script>

<style lang="stylus" scoped>
.container
  width 100%
  font-size 16px
  background  #f6f6f6
  .content
    margin 0 auto
    max-width 1080px
    padding 10px 0
    height 1200px
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
        border-radius 5px
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
      height 800px
      font-size 0
      .toolbar
        width 70%
        display inline-block
        margin-bottom 10px
        height 800px
        background white
      .history
        width 29%
        display inline-block
        margin-left 1%
        margin-bottom 10px
        height 800px
        background white

</style>
