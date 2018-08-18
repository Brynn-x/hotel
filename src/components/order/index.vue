<template>
    <div>
      <div class="toolbar">
        <div class="order">
          <div><i class="iconfont icon-order" style="font-size: 22px;margin-right: 5px"></i>我的订单</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>酒店订单</div>
        </div>
        <div class="count">
          <div><i class="iconfont icon-count" style="font-size: 22px;font-weight:bold;margin-right: 5px"></i>我的账户</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>个人信息</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>积分管理</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>优惠卷</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>账户安全</div>
        </div>
        <div class="vip">
          <div><i class="iconfont icon-order" style="font-size: 22px;margin-right: 5px"></i>关于会员</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>会员等级</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>会员权益</div>
          <div class="item"><i style="font-size: 18px; margin-right: 5px">·</i>常见问题</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="stylus" scoped>
  .toolbar
    width 20%
    box-sizing border-box
    height 800px
    font-size 16px
    color #585858
    border-top 3px solid #409eff
    background white
    .order,.count,.vip
      padding 20px 50px 20px 20px
      .item
        font-size 12px
        margin-left 30px
    .order
      height 50px
      border-left 1px solid #aaa
      border-right 1px solid #aaa
    .count
      height 120px
      border 1px solid #aaa
    .vip
      height 100px
      border 1px solid #aaa
      border-top none
</style>
