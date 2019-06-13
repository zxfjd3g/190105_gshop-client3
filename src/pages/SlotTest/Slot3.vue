<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <slot :todo="todo">{{todo.text}}</slot>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        todos: [
          {text: '吃饭1', isComplete: false},
          {text: '吃饭2', isComplete: true},
          {text: '吃饭3', isComplete: false},
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
