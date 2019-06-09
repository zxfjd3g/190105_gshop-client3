<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <slot :todo="todo">xxxxx</slot>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        todos: [
          {title: '吃饭', isComplete: false},
          {title: '吃饭2', isComplete: true},
          {title: '吃饭3', isComplete: false},
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
