<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFoot"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqUser} from './api'
  import {RECEIVE_USER} from './vuex/mutation-types'

  export default {
    name: 'App',

    async mounted () {
      // 异步获取地址
      this.$store.dispatch('getAddress')
      // 请求获取用户信息
      const result = await reqUser()
      if(result.code===0) {
        const user = result.data
        this.$store.commit(RECEIVE_USER, user)
      }
    },

    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

