<template>
  <div>
    <h1>插槽</h1>
    <p slot="slotcon">插入内容</p>
    <slotchild :content="childcontent"></slotchild>
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
      ]
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
    }
  },
  components: {
    slotchild
  }
}
</script>

<style>

</style>
