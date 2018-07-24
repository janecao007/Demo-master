<template>
  <div>
    <p>message:{{msg}}</p>
    <p>usinghtml:{{msghtml}}</p>
    <p v-html="msghtml"></p>
    <div v-bind:id="msgid">janeid</div>
    <button v-bind:disabled="isdisabled">janebtn</button>
    <p>{{ number+1 }}</p>
    <p>{{ ok? 'yes':'no'}}</p>
    <p v-if="seen">seen
    <p><a v-bind:href="hreflink">hreflink</a></p>
    <p v-on:click="chanagecolor">{{chanagecolors}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'jane',
      msghtml: '<span style="color:red">jane</span>',
      msgid: 'jane',
      isdisabled: true,
      number: 1,
      ok: true,
      seen: true,
      hreflink: 'https://cn.vuejs.org/v2/guide/syntax.html',
      chanagecolors: 'click button'
    }
  },
  methods: {
    chanagecolor () {
      alert('click')
    }
  }
}
</script>

<style>

</style>
