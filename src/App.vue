<template>
    <div id="app">
      <router-view/>
      <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import Footer from './components/FooterGui/FooterGui'
  export default {
    components:{
      Footer
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
