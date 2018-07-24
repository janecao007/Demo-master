<template>
  <div>
    <p :class="{active:isActive, 'backgroundColor': '#000'}">test style</p>
    <p :class="objclass">objclass</p>
    <p :style="objstyle">objstyle</p>
    <!-- 数组语法 -->
    <p :style="[basestyle, objstyle]">arrstyle</p>
    <!-- 多重值 -->
    <p :style="{display: ['-webkit-box','-ms-box','flex']}">morevalue</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      basestyle: {
        fontSize: '20px'
      },
      objstyle: {
        color: 'blue',
        backgroundColor: 'green',
        fontSize: '30px'
      },
      objclass: {
        active: true,
        bg: true
      }
    }
  }
}
</script>

<style scoped>
.active{
  color:red
}
.bg{
  background: green
}
</style>
