<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqAddress} from './api'
  export default {
    name: 'App',

    async mounted () {
      const result = await reqAddress('116.36867', '40.10038')
      console.log('result', result)
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

