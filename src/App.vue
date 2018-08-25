<template>
  <div id="app">
    <my-nav></my-nav>
    <!--<router-view/>-->
    <my-detail></my-detail>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import myNav from './components/nav/index';
  import myFoot from './components/foot/index';
  import myDetail from './components/detail/index';
export default {
  data() {
    return {

    }
  },
  components: {
    myNav,
    myFoot,
    myDetail
  }
}
</script>

<style lang="stylus">

</style>
