<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </Header>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
         
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList/>
  </section>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex";
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from 'components/ShopList/ShopList.vue'

  export default {
    name: 'MSite',

    async mounted () {

      // 异步获取shops数据
      this.$store.dispatch('getShops')
      // dispatch返回的promise对象什么时候才成功?  数据更新且界面更新之后
      const result = await this.$store.dispatch('getCategorys')
      console.log('result', result) // promise的excutor中调用resolve()
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },

    computed: {
      // ...mapState(['address', 'categorys']),
      ...mapState({
        address: state => state.msite.address,  // address的值由回调函数的返回值动态确定
        categorys: state => state.msite.categorys
      }),

      /*
      用于显示分类轮播的二维数组
      */
      categorysArr () {
        const {categorys} = this
        const bigArr = []
        let smallArr = [] // 最大长度为8

        // 遍历每个分类对象
        categorys.forEach(c => {
          // 将小数组添加到大数组中(只能添加一次)
          if (smallArr.length===0) {
            bigArr.push(smallArr)
          }

          // 将分类对象添加到smallArr(最大长度为8)
          smallArr.push(c)
          // 如果小数组满了, 准备一个新的小数组
          if (smallArr.length===8) {
            smallArr = []
          }
        });
        

        return bigArr
      }
    },

    components: {
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
