<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view/>
    <my-foot></my-foot>
    <my-land></my-land>
  </div>
</template>

<script>
  import myNav from './components/nav/index';
  import myFoot from './components/foot/index';
  import myLand from './components/land/index';
export default {
  data() {
    return {

    }
  },
  components: {
    myNav,
    myFoot,
    myLand
  },

}
</script>

<style lang="stylus">

</style>
