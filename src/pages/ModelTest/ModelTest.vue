<template>
  <div>
    <input type="text" v-model="name"> 
    <span>{{name}}</span>
    <input type="text" :value="name2" @input="name2=$event.target.value">
    <span>{{name2}}</span>
    <hr>
    <MyInput v-model="name3"/><span>{{name3}}</span>
    <MyInput :value="name4" @input="name4 = $event"/><span>{{name4}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyInput from './MyInput.vue'
  export default {
    data () {
      return {
        name: 'tom',
        name2: 'Jack',
        name3: 'Bob',
        name4: 'Cat'
      }
    },

    components: {
      MyInput
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
