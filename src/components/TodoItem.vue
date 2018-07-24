<template>
  <div>
    <slot />
    <ul>
      <li v-for="(item, index) in items" :key="index" v-if="item.status === status">
        <input @click="switchStatus(index)" type="checkbox" :checked="item.status">
        <input @keyup.13="editItem(index, $event)" type="text" :value="item.content">
        <i @click="removeItem(index)">delete</i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'todo-item',
  props: {
    status: Number
  },
  computed: {
    ...mapState({
      items: state => state.todo.items
    })

  },
  methods: {
    ...mapMutations([
      'removeTodoItem',
      'editTodoItem'
    ]),
    removeItem (index) {
      this.removeTodoItem({index})
    },
    switchStatus (index) {
      let status = this.status === 0 ? 1 : 0
      this.editTodoItem({
        index,
        status
      })
    },
    editItem (index, $event) {
      this.editTodoItem({
        index,
        content: $event.target.value
      })
      $event.target.blur()
    }
  }
}
</script>

<style>

</style>
