<template>
  <div>
    <h1>Vue的响应式原理</h1>
    <button @click="update1">更新1</button> &nbsp;
    <button @click="update2">更新2</button>&nbsp;
    <button @click="update3">更新3</button>&nbsp;

    <p>a=== {{a}}</p>
    <p>b==={{b}}</p>
    <p>c.c1==={{c.c1}}</p>
    <p>c.c2==={{c.c2}}</p>
    <hr>
    
    <Reactive1 :a="a"></Reactive1>
  </div>
</template>

<script type="text/ecmascript-6">
  import Reactive1 from './Reactive1'

  export default {
    data () {
      this.b = 'b11'  // b属性不是响应式的
      return { // 对象中所有属性都是响应式的
        a: 'a11',
        c: {
          c1: 'c11'
        }
      }
    },

    methods: {
      update1 () {
        this.a = 'a22'
        this.c.c1 = 'c22'
      },

      update2 () {
        this.b = 'b22' // 不会更新显示
      },

      update3 () {
        // 给有数据绑定的属性对象直接添加新的属性, 默认是没有数据绑定的
        // this.c.c2 = 'c222'
        // 通过Vue.set()/vm.$set()添加才可以
        this.$set(this.c, 'c2', 'c333')
      }
    },

    components: {
      Reactive1
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
