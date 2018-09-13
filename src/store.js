import Vue from 'vue'
import Vuex from 'vuex'
const PexelsAPI = require('pexels-api-wrapper')
const pexelsClient = new PexelsAPI('563492ad6f917000010000012baba8bc028d40629af1505b4ebdf6f7')
// https://www.npmjs.com/package/pexels-api-wrapper
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
    },
    list: {
      page: 1,
      per_page: 16,
      photolist: []
    },
    query: {
      params: {
        q: 'background',
        perPage: 6,
        page: 1
      }
    },
    listimg: [],
    test: 1111
  },
  mutations: {
    picadd (state) {
      if (state.query.params.page === 5) {
        alert('已经是最后一页')
      } else {
        state.query.params.page++
      }
    },
    picreduce (state) {
      if (state.query.params.page === 1) {
        alert('请点击下一页')
      } else {
        state.query.params.page--
      }
    },
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
    add (state) {
      state.list.page++
    },
    reduce (state) {
      state.list.page--
    },
    count (state, payload) {
      state.count += payload.amount
    },
    resultImage (state, rescon) {
      state.list.photolist = rescon
    },
    testcon (state, content) {
      state.test = content
    }
  },
  actions: {
    getImage ({commit, state}) {
      pexelsClient.getCuratedPhotos(state.list.per_page, state.list.page)
        .then(function (res) {
          console.log(res)
          commit('resultImage', res.photos)
        })
    }
    // let xhr = new XMLHttpRequest()
    // // 设置请求的类型及url
    // // post请求一定要添加请求头才行不然会报错
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    // xhr.open('POST', 'http://api.onlypic.cc:2333/images')
    // // 发送请求
    // let formdata = {
    //   'cmd': 'list',
    //   'params': {
    //     'perpage': 2,
    //     'page': 2
    //   }
    // }
    // let getdatas = JSON.stringify(formdata)
    // xhr.send(getdatas)
    // xhr.onreadystatechange = function () {
    //   // 这步为判断服务器是否正确响应
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     console.log(xhr.responseText)
    //   }
    // }
  }
})
