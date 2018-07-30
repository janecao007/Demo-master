<template>
  <div>
    <p>标题：<slot name="slotcon"></slot></p>
    <ul>
      <li v-for="(item, index) in content" :key="index">{{ item.one }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    content: Array
  }
}
</script>

<style>

</style>
