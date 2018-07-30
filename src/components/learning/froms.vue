<template>
  <div>
    <h1>表单</h1>
    <p>
      <textarea name="" id="" cols="30" rows="10" v-model="contents"></textarea>
    </p>
    <p>
      <input type="checkbox" id="checkbox" value="99" v-model="checked">
      <label for="checkbox">苹果</label>
    </p>
    <p>{{ checked }}</p>
    <p>
      <input type="checkbox" id="checkbox1" value="苹果" v-model="checkcon">
      <label for="checkbox1">苹果</label>
      <input type="checkbox" id="checkbox2" value="香蕉" v-model="checkcon">
      <label for="checkbox2">香蕉</label>
    </p>
    <p>{{ checkcon }}</p>
    <p>
      <input type="radio" name="" id="one" value="one" v-model="radiocon">
      <label for="one">one</label>
      <input type="radio" name="" id="two" value="two" v-model="radiocon">
      <label for="two">two</label>
    </p>
    <p>{{ radiocon }}</p>
    <p>
      <select name="" id="" v-model="selectcon">
        <option value="" disabled>请选择</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </p>
    <p>{{ selectcon }}</p>
    <select>
      <option v-for="(item,index) in options" :key="index" :value="item.value">{{ item.text }}</option>
    </select>
    <p>
      <span slot="conslot">我是slot内容</span>
      <input type="text" v-model.lazy="selectcon"><br/>
      <input type="text" v-model.number="selectcon"><br/>
      <input type="text" v-model.trim="messages">
    </p>
    <p v-for="(item, index) in czcon" :key="index">{{ item.title }}</p>
    <div>

      <button  @click="$emit('enlarge-text')" slot="fdwz">点击放大文字</button>
    </div>
    <button @click="$emit('alertbtn')">点击弹出父组件内容</button>
    <p>{{1 | strstatus}}</p>
    <slot name="fdwz"></slot>
    <p>{{ this.$store.state.people.name }}</p>
  </div>
</template>

<script>
// props 值类型
// String
// Number
// Boolean
// Array
// Object
// Date
// Function
// Symbol

// 修饰符
// v-model.lazy
// v-model.number
// v-model.trim
export default {
  data () {
    return {
      contentjane: Number,
      messages: '',
      contents: 'add',
      checked: false,
      checkcon: [],
      radiocon: '',
      selectcon: [],
      options: [
        {
          text: '11',
          value: '11'
        },
        {
          text: '22',
          value: '22'
        },
        {
          text: '33',
          value: '33'
        }
      ]
    }
  },
  methods: {
    onEnlargeText (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  },
  filters: {
    strstatus (status) {
      let temp = {
        0: '否',
        1: '是'
      }
      return temp[status]
    }
  },
  props: {
    czcon: Array
  }
}
</script>

<style>

</style>
