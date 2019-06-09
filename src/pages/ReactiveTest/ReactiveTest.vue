<template>
  <div>
    <h1>Vue的响应式原理</h1>
    <button @click="update1">更新1</button> &nbsp;
    <button @click="update2">更新2</button>&nbsp;
    <button @click="update3">更新3</button>&nbsp;
    <p>a-- {{a}}</p>
    <p>b--{{b}}</p>
    <p>c.c1-- {{c.c1}}</p>
    <p>c.c3-- {{c.c3}}</p>

    <hr>
    <Reactive1 :a="a"></Reactive1>
  </div>
</template>

<script type="text/ecmascript-6">
  import Reactive1 from './Reactive1'

  export default {
    data () {
      this.b = 'b1111'
      return {
        a: 'a1111',
        c: {
          c1: 1,
          c2: 'c2222'
        }
      }
    },

    methods: {
      update1 () {
        this.a = 'a2222'
        this.c.c1 = 2
      },

      update2 () {
         this.b = 'b2222' // 对应界面不会更新
      },

      update3 () {
        // this.c.c3 = 'c3333' // 直接添加新属性没有数据绑定 ==> 不会更新界面
        this.$set(this.c, 'c3', 'c3333')
       // Vue.set(this.c, 'c3', 'c333333')
      }
    },

    components: {
      Reactive1
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
