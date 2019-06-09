<template>
  <div>
    <h1>1. 普通插槽</h1>
    <Slot1>
      <h2>{{msg}}</h2>
      abcd
    </Slot1>
    <Slot1>
      <a href="http://www.atguigu.com">去学习</a>
    </Slot1>

    <h1>2. 命名插槽(named slot)</h1>
    <Slot2>
      <h1 slot="two">{{msg}}</h1>
      <h2 slot="one">{{msg}}</h2>
    </Slot2>

    <Slot2>
      <a slot="two" href="http://www.atguigu.com">去学习</a>
      <a slot="one" href="http://www.atguigu.com">去百度</a>
    </Slot2>

    <h1>3. 作用域插槽(scoped slots)</h1>
    <Slot3>
      <template slot-scope="slotProps2">
        {{ slotProps2.todo.title }}
        <span v-if="slotProps2.todo.isComplete">✓</span>
      </template>
    </Slot3>
    <Slot3>
      <template slot-scope="{todo}">
        <span v-if="todo.isComplete">✓</span>
        <span style="color: red">{{ todo.title }}</span>
      </template>
    </Slot3>

  </div>
</template>

<script type="text/ecmascript-6">
  import Slot1 from './Slot1.vue'
  import Slot2 from './Slot2.vue'
  import Slot3 from './Slot3.vue'
  export default {
    name: 'SlotTest',
    data () {
      return {
        msg: '向插槽传标签内容'
      }
    },
    components: {
      Slot1,
      Slot2,
      Slot3
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
