<template>
  <div id="app">
    <my-nav></my-nav>
    <my-content></my-content>
    <my-foot></my-foot>
    <router-view/>
  </div>
</template>

<script>
  import myNav from './components/nav/index';
  import myContent from './components/content/index';
  import myFoot from './components/foot/index';
export default {
  data() {
    return {

    }
  },
  components: {
    myNav,
    myContent,
    myFoot
  }
}
</script>

<style lang="stylus">

</style>
