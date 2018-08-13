<template>
  <div id="app">
    <my-nav></my-nav>
    <my-content></my-content>
    <router-view/>
  </div>
</template>

<script>
  import myNav from './components/nav/index';
  import myContent from './components/content/index'
export default {
  data() {
    return {

    }
  },
  components: {
    myNav,
    myContent
  }
}
</script>

<style lang="stylus">

</style>
