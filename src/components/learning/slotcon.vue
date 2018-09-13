<template>
  <div>
    <h1>插槽</h1>
    <p slot="slotcon">插入内容</p>
    <slotchild :content="childcontent"></slotchild>
    <input type="text" v-model="content">
    <button @click="con($event)">查看内容</button>
    <p>{{ 1|fliterStatus }}</p>
  </div>
</template>

<script>
import slotchild from './slotchild.vue'
export default {
  data () {
    return {
      childcontent: [
        {one: '第一'},
        {one: '第二'}
      ],
      content: '',
      constatus: 1
    }
  },
  created () {
    this.returncon()
  },
  methods: {
    returncon () {
      let a = 1
      if (a) {
        console.log('aa')
      }
    },
    con () {
      alert(this.content)
    }
  },
  filters: {
    fliterStatus (status) {
      const statuscon = {
        1: '一',
        2: '二'
      }
      return statuscon[status]
    }
  },
  components: {
    slotchild
  }
}
</script>

<style>

</style>
