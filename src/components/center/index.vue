<template>
    <div class="container">
      <div class="content">
        <my-land></my-land>
      </div>
    </div>
</template>

<script>
  import myLand from '@/components/land/index.vue';
    export default {
        name: "index",
      data () {
          return {

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
  background  #eee
  .content
    margin 0 auto
    max-width 1080px
    height 1000px
    background #fde2e2


</style>
