<template>
  <div>
    <p v-if="Math.random()>0.5">you see</p>
    <p v-else>you not</p>
    <div v-show="ok">
      <p>
        <label for="">username</label>
        <input type="text">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok: false
    }
  }
}
</script>

<style>

</style>
