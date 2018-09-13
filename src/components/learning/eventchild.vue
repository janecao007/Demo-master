<template>
  <div>
    <button @click="tccon">事件子组件</button>
  </div>
</template>

<script>
export default {
  methods: {
    tccon () {
      this.$emit('parentsevent')
    }
  }
}
</script>

<style>

</style>
