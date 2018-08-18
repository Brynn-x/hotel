<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view/>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import myNav from './components/nav/index';
  import myFoot from './components/foot/index';
export default {
  data() {
    return {

    }
  },
  components: {
    myNav,
    myFoot
  }
}
</script>

<style lang="stylus">

</style>
