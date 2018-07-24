<template>
  <div>
    <todolist></todolist>
    <input
      type="text" v-model="valcon">
      <p>{{ valcon }}</p>
      <input v-bind:value="searchText" v-on:input="searchText = $event.target.value">
  </div>
</template>

<script>
import todolist from '@/views/Todo.vue'
export default {
  data () {
    return {
      valcon: '',
      valcontent: '',
      searchText: ''
    }
  },
  methods: {
    valcontens ($event) {
      this.valcontent = $event.target.value
    }
  },
  components: {
    todolist
  }
}
</script>

<style>
</style>
