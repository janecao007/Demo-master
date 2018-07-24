<template>
  <div>
    <h2>TodoList</h2>
    <input type="text" @keyup.13="addend($event)">
    <todo-item :status="0">正在进行</todo-item>
    <todo-item :status="1">已经完成</todo-item>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TodoItem from '@/components/TodoItem.vue'
export default {
  name: 'todo',
  methods: {
    ...mapMutations({
      add: 'appendTodoItem'
    }),
    addend ($event) {
      let item = {
        content: $event.target.value,
        status: 0
      }
      this.add(item)
      $event.target.value = ''
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>

</style>
