<template>
    <div class="wrap">
      <el-card class="box-card">
        <div slot="header" class="head clearfix">
          <img class="logo" src="../.././assets/img/cardlogo.jpg" alt="">
          <span class="title">洲际酒店集团</span>
          <el-button class="btn" size="mini" type="primary" @click="detail">进入</el-button>
        </div>
        <div class="text item">
          <img src="../../assets/img/card.jpg" alt="">
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="head clearfix">
          <img class="logo" src="../../assets/img/cardlogo2.png" alt="">
          <span class="title">丽思·卡尔顿</span>
          <el-button class="btn" size="mini" type="primary" @click="detail">进入</el-button>
        </div>
        <div class="text item">
          <img class="image" src="../../assets/img/card2.jpg" alt="">
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        methods: {
          detail: function () {
            this.$router.push({path:"/detail"})
          }
        }
    }
</script>

<style lang="stylus">
.wrap
  width 100%
  height 95%
  .box-card
    margin-bottom 15px
    .el-card__header
      padding 4px 20px
      .head
        width 100%
        vertical-align 50%
        font-size 16px
        .logo
          vertical-align middle
          width 10%
          height 50px
        .title
          display inline-block
          text-align center
          width 65%
        .btn
          width 20%
      .item
        .image
          width 100%
          height 100%
@media screen and (max-width:1080px){
 .box-card{
   display none
 }
}

</style>
