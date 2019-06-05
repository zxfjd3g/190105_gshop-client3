<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',

    mounted () {
      // 异步获取地址
      this.$store.dispatch('getAddress')
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

