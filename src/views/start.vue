<template>
  <div>
    <ul>
      <li v-for="(item, index) in starstwo" :key="index" :class="{active: + item}" @click.stop="selectStart(index, starstwo)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      starstwo: '00000'
    }
  },
  created () {},
  methods: {
    selectStart (index, stars) {
      let yellowstar = index + 1
      let gary = stars.length - yellowstar
      this.starstwo = '1'.repeat(yellowstar) + '0'.repeat(gary)
      console.log(this.starstwo)
    }
  }
}
</script>

<style scoped>
ul{
  width:400px;
  margin:0 auto;
}
ul li {
  float: left;
  list-style: none;
  width:80px;
  height: 80px;
  background: url(../assets/default.png) no-repeat;
  background-size: 80px 80px;
}
.active{
  float: left;
  list-style: none;
  width:80px;
  height: 80px;
  background: url(../assets/active.png) no-repeat;
  background-size: 80px 80px;
}
</style>
