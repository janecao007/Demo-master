<template>
  <div>
    <h1 slot="addtitle">组件基础</h1>
    <todolist></todolist>
    <input
      type="text" v-model="valcon">
      <p>{{ valcon }}</p>
      <input v-bind:value="searchText" v-on:input="searchText = $event.target.value"><br/>
      <input type="text" v-model="inputValue">
      <button @click="subbutton">提交</button>
      <p>{{ inputValue }}</p>
  </div>
</template>

<script>
import todolist from '@/views/Todo.vue'
import comcon from './computed.vue'
export default {
  data () {
    return {
      valcon: '',
      valcontent: '',
      searchText: '',
      inputValue: ''
    }
  },
  created () {
    this.objfun()
  },
  methods: {
    valcontens ($event) {
      this.valcontent = $event.target.value
    },
    objfun () {
      let objcon = {
        id: 1,
        name: 'jane1',
        arrcon: [
          {
            id: 2,
            name: 'jane2'
          },
          {
            id: 3,
            name: 'jane3'
          }
        ]
      }
      console.log(objcon.name)
      console.log(objcon.arrcon[0].name)
    },
    subbutton () {
      let reg = /^[0-9]*$/
      if (reg.test(this.inputValue)) {
        alert('成功')
      } else {
        alert('不是数字')
      }
    }
  },
  components: {
    todolist,
    comcon
  }
}
</script>

<style>
</style>
