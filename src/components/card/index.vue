<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="head clearfix">
          <img class="logo" src="../.././assets/img/cardlogo.jpg" alt="">
          <span class="title">洲际酒店集团</span>
          <el-button class="btn" size="mini" type="primary">进入</el-button>
        </div>
        <div class="text item">
          <img src="../../assets/img/card.jpg" alt="">
        </div>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "index",
    }
</script>

<style lang="stylus">
.box-card
  margin-top 20px
  .el-card__header
    padding 4px 20px
    .head
      width 100%
      vertical-align 50%
      font-size 16px
      .logo
        vertical-align middle
        width 20%
      .title
        display inline-block
        text-align center
        width 56%
      .btn
        width 20%

</style>
