import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todo: {
      items: []
    },
    count: 3,
    people: {
      age: 1,
      name: 'jane'
    }
  },
  mutations: {
    appendTodoItem (state, payload) {
      let content = payload.content
      let status = payload.status
      let item = {
        content,
        status
      }
      state.todo.items.push(item)
    },
    removeTodoItem (state, payload) {
      let index = payload.index
      state.todo.items.splice(index, 1)
    },
    editTodoItem (state, payload) {
      let index = payload.index
      let content = payload.content
      let status = payload.status
      if (content && content.trim()) {
        state.todo.items[index].content = content
      }
      if (typeof status === 'number') {
        state.todo.items[index].status = status
      }
    },
    count (state, payload) {
      state.count += payload.amount
    }
  },
  actions: {

  }
})
