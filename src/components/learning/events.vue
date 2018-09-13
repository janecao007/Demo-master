<template>
  <div>
    <h1>事件方法</h1>
    <button @click="numbers += 1">加1</button>
    <p>{{ numbers }}</p>
    <p>
      <button @click="clicksj">click</button>
    </p>
    <p>
      <button @click="say('hi')">click</button>
    </p>
    <p>
      <button @click.once.prevent="onceclick">once</button>
    </p>
    <p>
      <input type="text" @keyup.enter="clicksj">
    </p>
    <p>
      <button @click.right="clicksj">右键</button>
    </p>
    <h1>自定义方法</h1>
    <p>弹出内容</p>
    <eventchild @parentsevent="alercon"></eventchild>
  </div>
</template>

<script>
import eventchild from './eventchild.vue'
import { test } from '../js/test.js'
// 鼠标点击事件
// .left
// .right
// .middle
// 事件修饰符 @click.stop
// prevent 提交事件不再重载页面  stop 阻止单击事件继续传播 :keyup.13
// .stop
// .prevent
// .capture
// .self
// .once
// .passive

// 全部的按键别名：@keyup.enter
// .enter
// .tab
// .delete (捕获“删除”和“退格”键)
// .esc
// .space
// .up
// .down
// .left
// .right
export default {
  data () {
    return {
      numbers: 1
    }
  },
  created () {
    this.test()
    this.foroffun()
    this.setfun()
  },
  methods: {
    setfun () {
      let arr6 = [ {0: 'a', 1: 'b'} ]
      arr6.forEach(v => {
        console.log(v[0])
      })
    },
    foroffun () {
      let arr5 = [{
        one: '1'
      },
      {
        one: '2'
      }]
      for (let arrcontent of arr5) {
        console.log(arrcontent.one)
      }
    },
    clicksj (event) {
      alert('数字是' + this.numbers)
      if (event) {
        alert(event.target.tagName)
      }
    },
    alercon (a) {
      console.log('父事件内容')
      alert('父组件事件弹出内容')
    },
    say (say) {
      alert(say)
      test()
    },
    onceclick () {
      alert('hello')
    },
    test () {
      let {toSring: s} = 1113333
      console.log(s === Number.prototype.toString)
      const [a, b, c, d, e] = 'hello'
      console.log(a, b, c, d, e)
    }
  },
  components: {
    eventchild
  }
}
</script>

<style>

</style>
